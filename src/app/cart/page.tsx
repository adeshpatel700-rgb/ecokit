import type { Metadata } from "next";
import CartView from "@/components/CartView";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Your Cart", robots: { index: false } };

export default function CartPage() {
  return (
    <main id="main">
      <PageHero label="Cart" title="Your Cart" />
      <section className="section" style={{ paddingTop: "var(--space-6)" }}>
        <div className="container"><CartView /></div>
      </section>
    </main>
  );
}
