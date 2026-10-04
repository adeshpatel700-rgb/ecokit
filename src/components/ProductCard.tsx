import Image from "next/image";
import Link from "next/link";
import QuickAdd from "@/components/QuickAdd";
import { formatPrice, getCategoryLabel, type Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link href={`/products/${product.slug}`} className="product-card__image-wrap" aria-label={`View ${product.name}`}>
        <Image
          className="product-card__image"
          src={product.image}
          alt={product.imageAlt}
          width={400}
          height={533}
          sizes="(max-width: 640px) 72vw, (max-width: 1024px) 50vw, 25vw"
        />
        {product.badge && (
          <span className="product-card__badge"><span className="badge badge--sage">{product.badge}</span></span>
        )}
      </Link>
      <div className="product-card__body">
        <p className="product-card__category">{getCategoryLabel(product.category)}</p>
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__desc">{product.description}</p>
        <div className="product-card__footer">
          <div>
            <p className="product-card__price">{formatPrice(product.price)}</p>
          </div>
          <div>
            <QuickAdd slug={product.slug} name={product.name} />
            <Link href={`/products/${product.slug}`} className="btn btn--secondary btn--sm">View</Link>
          </div>
        </div>
      </div>
    </article>
  );
}
