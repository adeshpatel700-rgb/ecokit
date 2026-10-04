import { NextResponse } from "next/server";
import { validateEnquiry, ORDER_FIELDS, type EnquiryValues } from "@/lib/enquiry";
import { priceCart } from "@/lib/order";
import { razorpayConfig, razorpayFetch } from "@/lib/razorpay";

export const runtime = "nodejs";

/**
 * Creates a Razorpay order. The amount is ALWAYS computed here from the catalogue —
 * the browser only sends product slugs + quantities and the customer's details.
 */
export async function POST(request: Request) {
  const cfg = razorpayConfig();
  if (!cfg) {
    return NextResponse.json({ ok: false, code: "payments_disabled", message: "Online payment is not enabled yet." }, { status: 503 });
  }

  let body: { items?: unknown; customer?: EnquiryValues };
  try { body = await request.json(); } catch { return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 }); }

  const priced = priceCart(body.items);
  if (!priced) return NextResponse.json({ ok: false, message: "Your cart is empty or invalid." }, { status: 422 });

  const customer: EnquiryValues = {};
  for (const f of ORDER_FIELDS) customer[f.name] = typeof body.customer?.[f.name] === "string" ? body.customer[f.name].trim() : "";
  const errors = validateEnquiry("order", customer);
  if (Object.keys(errors).length) return NextResponse.json({ ok: false, message: "Please correct the highlighted fields.", errors }, { status: 422 });

  try {
    const order = await razorpayFetch<{ id: string; amount: number; currency: string }>("/orders", cfg, {
      method: "POST",
      body: JSON.stringify({
        amount: priced.subtotal * 100, // paise
        currency: "INR",
        receipt: `ek_${Date.now().toString(36)}`,
        notes: {
          items: priced.lines.map((l) => `${l.product.slug}:${l.qty}`).join(",").slice(0, 250),
          name: customer.name, email: customer.email, phone: customer.phone,
          city: customer.city, pincode: customer.pincode,
        },
      }),
    });
    return NextResponse.json({ ok: true, orderId: order.id, amount: order.amount, currency: order.currency, keyId: cfg.keyId });
  } catch (err) {
    console.error("[checkout] create-order failed", err instanceof Error ? err.message : err);
    return NextResponse.json({ ok: false, message: "We couldn't start the payment. Please try again." }, { status: 502 });
  }
}
