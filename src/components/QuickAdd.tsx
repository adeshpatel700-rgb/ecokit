"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart";

export default function QuickAdd({ slug, name }: { slug: string; name: string }) {
  const { add, openDrawer } = useCart();
  const [added, setAdded] = useState(false);
  return (
    <button
      type="button"
      className={`btn btn--primary btn--sm${added ? " is-added" : ""}`}
      aria-label={`Add ${name} to cart`}
      onClick={() => { add(slug, 1); openDrawer(); setAdded(true); window.setTimeout(() => setAdded(false), 1400); }}
    >
      {added ? "Added ✓" : "Add"}
    </button>
  );
}
