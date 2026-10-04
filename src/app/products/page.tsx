import type { Metadata } from "next";
import Link from "next/link";
import ProductsExplorer from "@/components/ProductsExplorer";
import { CATEGORIES, products, type CategorySlug } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse EcoKit's eco-friendly oral care, hair care, bath & body, grooming and travel essentials — bamboo, wheat straw and natural-fibre products for hotels, businesses and homes.",
  alternates: { canonical: "/products" },
};

export default async function ProductsPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams;
  const initialCategory = CATEGORIES.find((c) => c.slug === category)?.slug as CategorySlug | undefined;

  return (
    <main id="main">
      <section className="page-hero" aria-labelledby="products-heading">
        <div className="container">
          <div style={{ maxWidth: "600px" }} data-reveal>
            <span className="section-label">Our Collection</span>
            <h1 id="products-heading" style={{ marginBottom: "var(--space-4)" }}>Products Worth<br />Holding.</h1>
            <p style={{ fontSize: "var(--text-lg)", color: "var(--color-charcoal-soft)", marginBottom: "var(--space-4)" }}>
              Each product is chosen because it genuinely performs — then crafted to feel premium in the hands of your guests.
            </p>
            <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
              <span className="badge badge--sage">100% Biodegradable</span>
              <span className="badge badge--beige">Responsibly Sourced</span>
              <span className="badge badge--gold">Bulk Orders Available</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "var(--space-6)" }} aria-label="Product catalogue">
        <div className="container">
          <ProductsExplorer products={products} initialCategory={initialCategory} />

          <div
            style={{
              background: "var(--color-forest-mist)",
              border: "1.5px solid var(--color-forest)",
              borderRadius: "var(--radius-xl)",
              padding: "var(--space-6)",
              marginTop: "var(--space-12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "var(--space-4)",
              flexWrap: "wrap",
            }}
          >
            <div>
              <span className="section-label" style={{ marginBottom: "var(--space-2)" }}>For Businesses</span>
              <h2 style={{ fontSize: "var(--text-xl)", marginBottom: "0.5rem" }}>Need 500+ units with custom branding?</h2>
              <p style={{ color: "var(--color-charcoal-soft)", fontSize: "var(--text-sm)" }}>
                We handle design, production and delivery — tailored to your property.
              </p>
            </div>
            <Link href="/quote" className="btn btn--primary btn--lg">
              Request a Quote <span className="btn-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
