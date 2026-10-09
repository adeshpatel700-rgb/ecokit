"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/products";
import QtyStepper from "@/components/QtyStepper";

export default function CartDrawer() {
  const { items, count, subtotal, setQty, remove, drawerOpen, closeDrawer } = useCart();
  const ref = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (drawerOpen && !d.open) d.showModal();
    if (!drawerOpen && d.open) d.close();
  }, [drawerOpen]);

  // Close when navigating (e.g. to /cart or /checkout)
  useEffect(() => { closeDrawer(); }, [pathname, closeDrawer]);

  return (
    <dialog
      ref={ref}
      className="cart-drawer"
      aria-labelledby="cart-drawer-title"
      onClose={closeDrawer}
      onClick={(e) => { if (e.target === ref.current) closeDrawer(); }}
    >
      <div className="cart-drawer__panel">
        <header className="cart-drawer__head">
          <h2 id="cart-drawer-title">Your cart{count > 0 && <span> ({count})</span>}</h2>
          <button type="button" className="cart-drawer__close" onClick={closeDrawer} aria-label="Close cart">×</button>
        </header>

        {items.length === 0 ? (
          <div className="cart-empty">
            <p className="cart-empty__title">Your cart is empty</p>
            <p>Add a few essentials to get started.</p>
            <Link href="/products" className="btn btn--primary">Browse products</Link>
          </div>
        ) : (
          <>
            <ul className="cart-lines">
              {items.map(({ product, qty, unitPrice, lineTotal }) => (
                <li key={product.slug} className="cart-line">
                  <Link href={`/products/${product.slug}`} className="cart-line__img">
                    <Image src={product.image} alt="" width={80} height={100} />
                  </Link>
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
            <footer className="cart-drawer__foot">
              <div className="cart-sum"><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div>
              <p className="cart-note">Delivery details are confirmed at checkout.</p>
              <Link href="/checkout" className="btn btn--primary btn--lg" style={{ width: "100%", justifyContent: "center" }}>Checkout</Link>
              <Link href="/cart" className="btn btn--secondary" style={{ width: "100%", justifyContent: "center" }}>View cart</Link>
              <p className="cart-bulk">Ordering 100+ units? <Link href="/quote">Request a bulk quote</Link></p>
            </footer>
          </>
        )}
      </div>
    </dialog>
  );
}
