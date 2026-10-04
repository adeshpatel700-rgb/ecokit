"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { CATEGORIES, MATERIALS, type CategorySlug, type MaterialSlug, type Product } from "@/lib/products";

type Sort = "featured" | "price-asc" | "price-desc" | "name";

interface Props {
  products: Product[];
  initialCategory?: CategorySlug;
}

function toggle<T>(list: T[], value: T): T[] {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

export default function ProductsExplorer({ products, initialCategory }: Props) {
  const [query, setQuery] = useState("");
  const [categories, setCategories] = useState<CategorySlug[]>(initialCategory ? [initialCategory] : []);
  const [materials, setMaterials] = useState<MaterialSlug[]>([]);
  const [sort, setSort] = useState<Sort>("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = products.filter((p) => {
      if (categories.length && !categories.includes(p.category)) return false;
      if (materials.length && !p.materials.some((m) => materials.includes(m))) return false;
      if (q && !`${p.name} ${p.description}`.toLowerCase().includes(q)) return false;
      return true;
    });
    if (sort === "price-asc") return [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") return [...list].sort((a, b) => b.price - a.price);
    if (sort === "name") return [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [products, query, categories, materials, sort]);

  const hasFilters = categories.length > 0 || materials.length > 0 || query.trim() !== "";
  const clear = () => { setCategories([]); setMaterials([]); setQuery(""); };

  return (
    <div className="products-layout">
      <div>
        <button type="button" className="btn btn--secondary btn--sm filter-toggle" aria-expanded={filtersOpen} aria-controls="product-filters" onClick={() => setFiltersOpen((o) => !o)}>
          {filtersOpen ? "Hide filters" : "Filters"}
          {categories.length + materials.length > 0 && ` (${categories.length + materials.length})`}
        </button>
        <aside id="product-filters" className={`filter-sidebar${filtersOpen ? " open" : ""}`} aria-label="Product filters">
          <div className="filter-group">
            <label className="filter-group__title" htmlFor="product-search">Search</label>
            <input id="product-search" type="search" className="products-search" placeholder="Search products" value={query} onChange={(e) => setQuery(e.target.value)} />
          </div>
          <fieldset className="filter-group" style={{ border: 0, borderBottom: "1px solid var(--color-beige-dark)" }}>
            <legend className="filter-group__title">Category</legend>
            {CATEGORIES.map((c) => (
              <label key={c.slug} className="filter-option">
                <input type="checkbox" checked={categories.includes(c.slug)} onChange={() => setCategories((l) => toggle(l, c.slug))} />
                {c.label}
              </label>
            ))}
          </fieldset>
          <fieldset className="filter-group" style={{ border: 0, borderBottom: "1px solid var(--color-beige-dark)" }}>
            <legend className="filter-group__title">Material</legend>
            {MATERIALS.map((m) => (
              <label key={m.slug} className="filter-option">
                <input type="checkbox" checked={materials.includes(m.slug)} onChange={() => setMaterials((l) => toggle(l, m.slug))} />
                {m.label}
              </label>
            ))}
          </fieldset>
          {hasFilters && <button type="button" className="filter-clear" onClick={clear}>Clear all filters</button>}
        </aside>
      </div>

      <div>
        <div className="products-header">
          <p style={{ color: "var(--color-charcoal-soft)", fontSize: "var(--text-sm)" }} aria-live="polite">
            Showing <strong>{visible.length}</strong> {visible.length === 1 ? "product" : "products"}
          </p>
          <select className="sort-select" aria-label="Sort products" value={sort} onChange={(e) => setSort(e.target.value as Sort)}>
            <option value="featured">Sort: Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Name: A–Z</option>
          </select>
        </div>

        {visible.length === 0 ? (
          <div className="products-empty" role="status">
            <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>No products found</p>
            <p style={{ marginBottom: "1rem" }}>Try a different search or remove some filters.</p>
            <button type="button" className="filter-clear" onClick={clear}>Clear all filters</button>
          </div>
        ) : (
          <div className="grid-3 products-grid" role="list">
            {visible.map((p) => (
              <div key={p.slug} role="listitem"><ProductCard product={p} /></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
