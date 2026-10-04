"use client";

import { useId, useState, type FormEvent } from "react";
import Link from "next/link";
import Script from "next/script";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/products";
import { ORDER_FIELDS, validateEnquiry, type EnquiryErrors, type EnquiryValues } from "@/lib/enquiry";

interface RazorpaySuccess { razorpay_order_id: string; razorpay_payment_id: string; razorpay_signature: string }
interface RazorpayOptions {
  key: string; amount: number; currency: string; order_id: string; name: string; description: string;
  prefill: { name: string; email: string; contact: string };
  theme: { color: string };
  handler: (r: RazorpaySuccess) => void;
  modal: { ondismiss: () => void };
}
declare global { interface Window { Razorpay?: new (o: RazorpayOptions) => { open: () => void; on: (e: string, cb: () => void) => void } } }

type Phase = "form" | "processing" | "paid" | "requested";

export default function CheckoutClient({ paymentsEnabled }: { paymentsEnabled: boolean }) {
  const uid = useId();
  const { items, lines, subtotal, clear } = useCart();
  const [values, setValues] = useState<EnquiryValues>({});
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [phase, setPhase] = useState<Phase>("form");
  const [message, setMessage] = useState("");
  const [reference, setReference] = useState("");

  if (phase === "paid" || phase === "requested") {
    return (
      <div className="form-status form-status--success" role="status" style={{ maxWidth: 640 }}>
        <strong>{phase === "paid" ? "Payment received — thank you!" : "Order request received — thank you!"}</strong>
        <p style={{ marginTop: "0.35rem" }}>
          {phase === "paid"
            ? `Your payment${reference ? ` (ref ${reference})` : ""} was verified. We'll email your confirmation and delivery details shortly.`
            : "We'll confirm availability, delivery and payment details by email or WhatsApp within 24 hours."}
        </p>
        <p style={{ marginTop: "var(--space-2)" }}><Link href="/products" className="btn btn--primary">Continue shopping</Link></p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="cart-empty cart-empty--page">
        <p className="cart-empty__title">Your cart is empty</p>
        <Link href="/products" className="btn btn--primary btn--lg">Browse products</Link>
      </div>
    );
  }

  const set = (name: string, v: string) => { setValues((s) => ({ ...s, [name]: v })); if (errors[name]) setErrors((e) => ({ ...e, [name]: "" })); };

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (phase === "processing") return;
    const found = validateEnquiry("order", values);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = ORDER_FIELDS.find((f) => found[f.name]);
      if (first) document.getElementById(`${uid}-${first.name}`)?.focus();
      return;
    }
    setPhase("processing");
    setMessage("");
    try {
      if (!paymentsEnabled) {
        const res = await fetch("/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ kind: "order", values, items: lines }) });
        const data = (await res.json().catch(() => ({}))) as { ok?: boolean; message?: string; errors?: EnquiryErrors };
        if (res.ok && data.ok) { clear(); setPhase("requested"); return; }
        if (data.errors) setErrors(data.errors);
        throw new Error(data.message ?? "We couldn't send your order request. Please try again.");
      }

      const res = await fetch("/api/checkout/create-order", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ items: lines, customer: values }) });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; message?: string; errors?: EnquiryErrors; orderId?: string; amount?: number; currency?: string; keyId?: string };
      if (!res.ok || !data.ok || !data.orderId || !data.keyId || !data.amount || !data.currency) {
        if (data.errors) setErrors(data.errors);
        throw new Error(data.message ?? "We couldn't start the payment. Please try again.");
      }
      if (!window.Razorpay) throw new Error("The payment window failed to load. Check your connection and try again.");

      const rzp = new window.Razorpay({
        key: data.keyId, amount: data.amount, currency: data.currency, order_id: data.orderId,
        name: "EcoKit", description: `${items.length} item${items.length > 1 ? "s" : ""}`,
        prefill: { name: values.name ?? "", email: values.email ?? "", contact: values.phone ?? "" },
        theme: { color: "#0B7C55" },
        modal: { ondismiss: () => setPhase("form") },
        handler: async (r) => {
          try {
            const v = await fetch("/api/checkout/verify", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(r) });
            const vd = (await v.json().catch(() => ({}))) as { ok?: boolean };
            if (v.ok && vd.ok) { setReference(r.razorpay_payment_id); clear(); setPhase("paid"); }
            else { setMessage("We couldn't verify your payment. If money was deducted, contact us with your payment ID: " + r.razorpay_payment_id); setPhase("form"); }
          } catch {
            setMessage("We couldn't confirm your payment. If money was deducted, contact us with your payment ID: " + r.razorpay_payment_id);
            setPhase("form");
          }
        },
      });
      rzp.on("payment.failed", () => { setMessage("The payment didn't go through. You have not been charged — please try again."); setPhase("form"); });
      rzp.open();
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setPhase("form");
    }
  }

  return (
    <div className="cart-page">
      {paymentsEnabled && <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />}
      <form onSubmit={submit} noValidate aria-label="Checkout form" className="checkout-form">
        <h2 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)" }}>Delivery details</h2>
        {!paymentsEnabled && (
          <div className="form-status form-status--info">
            Online payment isn&apos;t switched on yet. Send your order as a request and we&apos;ll confirm delivery and payment with you directly.
          </div>
        )}
        {message && <div role="alert" className="form-status form-status--error">{message}</div>}
        <div className="form-grid-2" style={{ marginBottom: "var(--space-4)" }}>
          {ORDER_FIELDS.map((f) => {
            const id = `${uid}-${f.name}`; const err = errors[f.name];
            const common = { id, name: f.name, value: values[f.name] ?? "", required: f.required, "aria-invalid": err ? true : undefined, "aria-describedby": err ? `${id}-err` : undefined,
              onChange: (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => set(f.name, ev.target.value) } as const;
            return (
              <div key={f.name} className="form-group" style={f.wide ? { gridColumn: "1 / -1" } : undefined}>
                <label className="form-label" htmlFor={id}>{f.label}{f.required ? " *" : ""}</label>
                {f.type === "textarea"
                  ? <textarea className="form-textarea" placeholder={f.placeholder} {...common} />
                  : <input className="form-input" type={f.type} placeholder={f.placeholder} autoComplete={f.autoComplete} {...common} />}
                {err && <p id={`${id}-err`} className="form-error">{err}</p>}
              </div>
            );
          })}
        </div>
        <button type="submit" className="btn btn--primary btn--lg" style={{ width: "100%", justifyContent: "center" }} disabled={phase === "processing"}>
          {phase === "processing" ? "Please wait…" : paymentsEnabled ? `Pay ${formatPrice(subtotal)} securely` : "Send order request"}
        </button>
        {paymentsEnabled && <p className="cart-note" style={{ textAlign: "center", marginTop: "var(--space-2)" }}>Payments are processed by Razorpay. Card details never touch our servers.</p>}
      </form>

      <aside className="cart-summary" aria-label="Order summary">
        <h2>Order summary</h2>
        <ul className="summary-lines">
          {items.map(({ product, qty, lineTotal }) => (
            <li key={product.slug}><span>{qty} × {product.name}</span><span>{formatPrice(lineTotal)}</span></li>
          ))}
        </ul>
        <div className="cart-sum"><span>Total</span><strong>{formatPrice(subtotal)}</strong></div>
        <Link href="/cart" className="cart-line__remove">Edit cart</Link>
      </aside>
    </div>
  );
}
