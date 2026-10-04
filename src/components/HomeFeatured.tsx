"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { CATEGORIES, products, type CategorySlug } from "@/lib/products";

const FEATURED_SLUGS = ["bamboo-toothbrush", "natural-loofah", "bamboo-comb", "canvas-slippers"];
const TABS: { value: "all" | CategorySlug; label: string }[] = [
  { value: "all", label: "All" },
  ...(["oral-care", "bath-body", "travel-essentials"] as CategorySlug[]).map((slug) => ({ value: slug, label: CATEGORIES.find((c) => c.slug === slug)!.label })),
];

export default function HomeFeatured() {
  const [tab, setTab] = useState<"all" | CategorySlug>("all");
  const shown = tab === "all"
    ? FEATURED_SLUGS.map((s) => products.find((p) => p.slug === s)!).filter(Boolean)
    : products.filter((p) => p.category === tab).slice(0, 4);

  return (
    <>
      <div className="tag-row" role="group" aria-label="Filter featured products">
        {TABS.map((t) => (
          <button key={t.value} type="button" className={`tag${tab === t.value ? " active" : ""}`} aria-pressed={tab === t.value} onClick={() => setTab(t.value)}>{t.label}</button>
        ))}
      </div>
      <div className="grid-4 products-grid product-scroll-mobile" role="list">
        {shown.map((p) => (
          <div key={p.slug} role="listitem" className="fade-up"><ProductCard product={p} /></div>
        ))}
      </div>
    </>
  );
}
