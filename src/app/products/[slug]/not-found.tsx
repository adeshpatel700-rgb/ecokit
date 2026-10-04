import Link from "next/link";

export default function ProductNotFound() {
  return (
    <main>
      <section className="page-hero">
        <div className="container" style={{ textAlign: "center" }}>
          <h1>Product not found</h1>
          <p style={{ margin: "var(--space-3) 0 var(--space-4)", color: "var(--color-charcoal-soft)" }}>
            We couldn&apos;t find that product. It may have been renamed or removed.
          </p>
          <Link href="/products" className="btn btn--primary">Browse all products</Link>
        </div>
      </section>
    </main>
  );
}
