"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart";
import { SITE } from "@/lib/site";
import QtyStepper from "@/components/QtyStepper";

export default function AddToCart({ slug, name, price }: { slug: string; name: string; price: string }) {
  const { add, openDrawer } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [showBar, setShowBar] = useState(false);
  const addRef = useRef<HTMLButtonElement>(null);

  // Mobile sticky bar appears once the main button scrolls out of view
  useEffect(() => {
    const el = addRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => setShowBar(!entry.isIntersecting && entry.boundingClientRect.top < 0), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  function onAdd() {
    add(slug, qty);
    openDrawer();
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  }

  return (
    <div className="buybox">
      <div className="buybox__row">
        <QtyStepper value={qty} onChange={setQty} label={name} />
        <button ref={addRef} type="button" className={`btn btn--primary btn--lg buybox__add${added ? " is-added" : ""}`} onClick={onAdd}>
          {added ? "✓ Added to cart" : "Add to cart"}
        </button>
      </div>

      <div className="buybox__bulk">
        <p className="buybox__bulk-title">Ordering in bulk or need branding?</p>
        <p className="buybox__bulk-copy">Hotels, offices and events get tiered pricing, laser engraving and custom packaging.</p>
        <div className="buybox__bulk-actions">
          <Link href={`/quote?product=${slug}`} className="btn btn--secondary">Request a bulk quote <span className="btn-arrow" aria-hidden="true">→</span></Link>
          <a href={`${SITE.whatsappHref}?text=${encodeURIComponent(`Hi EcoKit, I'd like to enquire about ${name}.`)}`} className="buybox__link" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
        </div>
      </div>

      <div className={`sticky-buy${showBar ? " is-visible" : ""}`} aria-hidden={!showBar}>
        <div className="sticky-buy__info"><strong>{name}</strong><span>{price}</span></div>
        <button type="button" className="btn btn--primary" tabIndex={showBar ? 0 : -1} onClick={onAdd}>{added ? "✓ Added" : "Add to cart"}</button>
      </div>
    </div>
  );
}
