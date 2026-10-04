import { NextResponse } from "next/server";
import { razorpayConfig, razorpayFetch, verifySignature } from "@/lib/razorpay";

export const runtime = "nodejs";

/**
 * Verifies the Razorpay signature server-side. A payment is only treated as successful
 * when this route says so — never on the strength of client-side state.
 * On success the confirmed order is forwarded to ORDER_WEBHOOK_URL (if configured).
 *
 * TODO(persistence): store the order in a database keyed by razorpay_order_id to make this
 * idempotent, and add a Razorpay `payment.captured` webhook as a second confirmation path.
 */
export async function POST(request: Request) {
  const cfg = razorpayConfig();
  if (!cfg) return NextResponse.json({ ok: false, message: "Payments are not enabled." }, { status: 503 });

  let body: { razorpay_order_id?: unknown; razorpay_payment_id?: unknown; razorpay_signature?: unknown };
  try { body = await request.json(); } catch { return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 }); }

  const { razorpay_order_id: orderId, razorpay_payment_id: paymentId, razorpay_signature: signature } = body;
  if (typeof orderId !== "string" || typeof paymentId !== "string" || typeof signature !== "string") {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }
  if (!verifySignature(orderId, paymentId, signature, cfg.keySecret)) {
    return NextResponse.json({ ok: false, message: "Payment could not be verified." }, { status: 400 });
  }

  const webhook = process.env.ORDER_WEBHOOK_URL;
  if (webhook) {
    try {
      const order = await razorpayFetch<{ amount: number; currency: string; notes: Record<string, string> }>(`/orders/${encodeURIComponent(orderId)}`, cfg);
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind: "paid-order", orderId, paymentId, amountPaise: order.amount, currency: order.currency, notes: order.notes, paidAt: new Date().toISOString() }),
        signal: AbortSignal.timeout(10_000),
      });
    } catch (err) {
      // Payment IS verified; do not fail the customer. Surface for ops.
      console.error("[checkout] order webhook failed", orderId, err instanceof Error ? err.message : err);
    }
  }
  return NextResponse.json({ ok: true, orderId, paymentId });
}
