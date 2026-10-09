import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCart from "@/components/AddToCart";
import QuoteOnlyBuybox from "@/components/QuoteOnlyBuybox";
import ProductCard from "@/components/ProductCard";
import { SITE } from "@/lib/site";
import { MATERIALS, getCategoryLabel, getProduct, getRelatedProducts, isPurchasable, priceLabel, products } from "@/lib/products";

interface Params { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found" };
  return {
    title: product.name,
    description: `${product.description} ${getCategoryLabel(product.category)} from EcoKit — available for bulk, hospitality and custom-branded orders.`,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: { title: `${product.name} | EcoKit`, description: product.description, images: [{ url: product.image, alt: product.imageAlt }] },
  };
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${SITE.url}${product.image}`,
    category: getCategoryLabel(product.category),
    brand: { "@type": "Brand", name: SITE.name },
    ...(isPurchasable(product)
      ? { offers: { "@type": "Offer", priceCurrency: "INR", price: product.price, url: `${SITE.url}/products/${product.slug}` } }
      : {}),
  };

  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <section className="page-hero" style={{ paddingBottom: "var(--space-6)" }}>
        <div className="container">
          <nav aria-label="Breadcrumb" style={{ fontSize: "var(--text-sm)", color: "var(--color-charcoal-mute)", marginBottom: "var(--space-4)" }}>
            <Link href="/products">Products</Link>
            <span aria-hidden="true"> / </span>
            <Link href={`/products?category=${product.category}`}>{getCategoryLabel(product.category)}</Link>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">{product.name}</span>
          </nav>
          <div className="product-detail">
            <div className="product-detail__image">
              <Image src={product.image} alt={product.imageAlt} width={800} height={1000} priority sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
            <div>
              {product.badge && <span className="badge badge--sage" style={{ marginBottom: "var(--space-2)" }}>{product.badge}</span>}
              <p className="product-card__category">{getCategoryLabel(product.category)}</p>
              <h1 style={{ margin: "0.5rem 0 var(--space-3)" }}>{product.name}</h1>
              <p style={{ fontSize: "var(--text-lg)", color: "var(--color-charcoal-soft)", marginBottom: "var(--space-4)" }}>{product.description}</p>
              <p className={`product-detail__price${isPurchasable(product) ? "" : " product-detail__price--quote"}`}>{priceLabel(product)}</p>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-charcoal-mute)", margin: "0.25rem 0 var(--space-4)" }}>
                {isPurchasable(product) ? "Price per unit" : "Tell us your quantity and we'll send pricing within 24 hours."}
              </p>
              {isPurchasable(product)
                ? <AddToCart slug={product.slug} name={product.name} price={priceLabel(product)} />
                : <QuoteOnlyBuybox slug={product.slug} name={product.name} />}
              <dl className="product-facts">
                <div><dt>Category</dt><dd>{getCategoryLabel(product.category)}</dd></div>
                {product.materials.length > 0 && <div><dt>Material</dt><dd>{product.materials.map((m) => MATERIALS.find((x) => x.slug === m)?.label ?? m).join(", ")}</dd></div>}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-beige" aria-labelledby="related-heading">
        <div className="container">
          <h2 id="related-heading" style={{ marginBottom: "var(--space-6)" }}>You may also like</h2>
          <div className="grid-4 products-grid" role="list">
            {related.map((p) => (
              <div key={p.slug} role="listitem"><ProductCard product={p} /></div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
