import { NextResponse } from "next/server";
import { isFirebaseConfigured } from "@/lib/firebase/admin";
import { FIELDS, validateEnquiry, type EnquiryKind, type EnquiryValues } from "@/lib/enquiry";
import { priceCart, summariseLines } from "@/lib/order";
import { saveEnquiry } from "@/lib/content";

export const runtime = "nodejs";

/**
 * Receives contact / quote enquiries. Validates on the server (never trust the client),
 * then forwards the sanitised payload to ENQUIRY_WEBHOOK_URL (Firebase Function, Zapier,
 * Formspree, Make, etc.). No credentials are stored in code.
 *
 * If no webhook is configured, production returns 503 rather than pretending the
 * enquiry was received. In development the payload is logged so the flow can be tested.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  const { kind, values, website, items } = (body ?? {}) as { kind?: string; values?: EnquiryValues; website?: string; items?: unknown };

  // Honeypot: real users never fill this hidden field.
  if (website) return NextResponse.json({ ok: true });

  if (kind !== "contact" && kind !== "quote" && kind !== "order") {
    return NextResponse.json({ ok: false, message: "Unknown enquiry type." }, { status: 400 });
  }
  if (!values || typeof values !== "object") {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  const clean: EnquiryValues = {};
  for (const field of FIELDS[kind as EnquiryKind]) {
    const v = values[field.name];
    clean[field.name] = typeof v === "string" ? v.trim() : "";
  }

  // Order requests: the cart is re-priced from the catalogue on the server; client prices are ignored.
  let orderSummary: { lines: string; total: number } | undefined;
  if (kind === "order") {
    const priced = priceCart(items);
    if (!priced) return NextResponse.json({ ok: false, message: "Your cart is empty or invalid." }, { status: 422 });
    orderSummary = { lines: summariseLines(priced.lines), total: priced.subtotal };
  }

  const errors = validateEnquiry(kind as EnquiryKind, clean);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, message: "Please correct the highlighted fields.", errors }, { status: 422 });
  }

  // Store it first: Firestore is the durable record, the webhook is the notification.
  await saveEnquiry({
    kind,
    values: clean,
    createdAt: new Date().toISOString(),
    ...(orderSummary ? { orderLines: orderSummary.lines, orderTotal: orderSummary.total } : {}),
  });

  const webhook = process.env.ENQUIRY_WEBHOOK_URL;
  if (!webhook) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[enquiry:dev]", kind, clean, orderSummary);
      return NextResponse.json({ ok: true });
    }
    // Firestore has it, so the enquiry is safe even with no webhook configured.
    if (isFirebaseConfigured()) return NextResponse.json({ ok: true });
    console.error("[enquiry] no ENQUIRY_WEBHOOK_URL and no Firestore — enquiry cannot be stored");
    return NextResponse.json(
      { ok: false, message: "We can't take enquiries online right now. Please email hello@ecokit.in or message us on WhatsApp." },
      { status: 503 }
    );
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ kind, submittedAt: new Date().toISOString(), ...clean, ...(orderSummary ? { orderLines: orderSummary.lines, orderTotal: orderSummary.total } : {}) }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[enquiry] delivery failed", err instanceof Error ? err.message : err);
    return NextResponse.json(
      { ok: false, message: "We couldn't send your message. Please try again, or email hello@ecokit.in." },
      { status: 502 }
    );
  }
}
