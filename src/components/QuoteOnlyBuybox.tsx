import Link from "next/link";
import { SITE } from "@/lib/site";

/**
 * Shown in place of Add to Cart for products the client has not priced yet.
 * Deliberately not a disabled cart button — the product is genuinely available,
 * it is just quoted rather than sold at a list price.
 */
export default function QuoteOnlyBuybox({ slug, name }: { slug: string; name: string }) {
  return (
    <div className="buybox">
      <div className="buybox__row">
        <Link href={`/quote?product=${slug}`} className="btn btn--primary btn--lg buybox__add">
          Request pricing <span className="btn-arrow" aria-hidden="true">→</span>
        </Link>
      </div>
      <div className="buybox__bulk">
        <p className="buybox__bulk-title">Available for retail and bulk orders</p>
        <p className="buybox__bulk-copy">
          Share the quantity you need and we&apos;ll come back with per-unit pricing, lead time and
          custom-branding options.
        </p>
        <div className="buybox__bulk-actions">
          <Link href="/contact" className="btn btn--secondary">Ask a question</Link>
          <a
            href={`${SITE.whatsappHref}?text=${encodeURIComponent(`Hi EcoKit, could you send pricing for ${name}?`)}`}
            className="buybox__link" target="_blank" rel="noopener noreferrer"
          >Chat on WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
