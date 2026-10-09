"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/products";
import QtyStepper from "@/components/QtyStepper";

export default function CartView() {
  const { items, subtotal, count, setQty, remove, clear } = useCart();

  if (items.length === 0) {
    return (
      <div className="cart-empty cart-empty--page">
        <p className="cart-empty__title">Your cart is empty</p>
        <p>Browse the collection and add a few essentials.</p>
        <Link href="/products" className="btn btn--primary btn--lg">Browse products</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <ul className="cart-lines cart-lines--page">
        {items.map(({ product, qty, unitPrice, lineTotal }) => (
          <li key={product.slug} className="cart-line">
            <Link href={`/products/${product.slug}`} className="cart-line__img"><Image src={product.image} alt="" width={96} height={120} /></Link>
            <div className="cart-line__info">
              <Link href={`/products/${product.slug}`} className="cart-line__name">{product.name}</Link>
              <p className="cart-line__price">{formatPrice(unitPrice)} each</p>
              <div className="cart-line__controls">
                <QtyStepper size="sm" value={qty} label={product.name} onChange={(n) => setQty(product.slug, n)} />
                <button type="button" className="cart-line__remove" onClick={() => remove(product.slug)}>Remove</button>
              </div>
            </div>
            <p className="cart-line__total">{formatPrice(lineTotal)}</p>
          </li>
        ))}
      </ul>

      <aside className="cart-summary" aria-label="Order summary">
        <h2>Order summary</h2>
        <div className="cart-sum"><span>Items ({count})</span><strong>{formatPrice(subtotal)}</strong></div>
        <p className="cart-note">Delivery details are confirmed at checkout.</p>
        <Link href="/checkout" className="btn btn--primary btn--lg" style={{ width: "100%", justifyContent: "center" }}>Proceed to checkout</Link>
        <Link href="/products" className="btn btn--secondary" style={{ width: "100%", justifyContent: "center" }}>Continue shopping</Link>
        <p className="cart-bulk">Ordering 100+ units or need branding? <Link href="/quote">Request a bulk quote</Link></p>
        <button type="button" className="cart-line__remove" onClick={clear}>Clear cart</button>
      </aside>
    </div>
  );
}
