import type { Metadata } from "next";
import CheckoutClient from "@/components/CheckoutClient";
import PageHero from "@/components/PageHero";
import { razorpayConfig } from "@/lib/razorpay";

export const metadata: Metadata = { title: "Checkout", robots: { index: false } };
export const dynamic = "force-dynamic";

export default function CheckoutPage() {
  return (
    <main id="main">
      <PageHero label="Checkout" title="Checkout" />
      <section className="section" style={{ paddingTop: "var(--space-6)" }}>
        <div className="container"><CheckoutClient paymentsEnabled={razorpayConfig() !== null} /></div>
      </section>
    </main>
  );
}
