"use client";

import { createContext, useCallback, useContext, useMemo, useState, useSyncExternalStore, type ReactNode } from "react";
import { getProduct, type Product } from "@/lib/products";
import { MAX_QTY, type CartLine } from "@/lib/order";

const KEY = "ecokit-cart-v1";
const EMPTY = "[]";

/* ── tiny external store backed by localStorage (SSR-safe, cross-tab) ── */
const listeners = new Set<() => void>();
let memory = EMPTY; // fallback when storage is blocked

function read(): string {
  try { return window.localStorage.getItem(KEY) ?? EMPTY; } catch { return memory; }
}
function write(value: string) {
  memory = value;
  try { window.localStorage.setItem(KEY, value); } catch { /* storage blocked: memory only */ }
  listeners.forEach((l) => l());
}
function subscribe(cb: () => void) {
  listeners.add(cb);
  const onStorage = (e: StorageEvent) => { if (e.key === KEY) cb(); };
  window.addEventListener("storage", onStorage);
  return () => { listeners.delete(cb); window.removeEventListener("storage", onStorage); };
}

function parse(raw: string): CartLine[] {
  try {
    const data: unknown = JSON.parse(raw);
    if (!Array.isArray(data)) return [];
    const out: CartLine[] = [];
    for (const item of data) {
      const { slug, qty } = (item ?? {}) as { slug?: unknown; qty?: unknown };
      if (typeof slug === "string" && typeof qty === "number" && Number.isInteger(qty) && qty > 0 && getProduct(slug)) {
        out.push({ slug, qty: Math.min(qty, MAX_QTY) });
      }
    }
    return out;
  } catch { return []; }
}

export interface CartItem { product: Product; qty: number; lineTotal: number }

interface CartContextValue {
  items: CartItem[];
  lines: CartLine[];
  count: number;
  subtotal: number;
  add: (slug: string, qty?: number) => void;
  setQty: (slug: string, qty: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
  drawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const raw = useSyncExternalStore(subscribe, read, () => EMPTY);
  const lines = useMemo(() => parse(raw), [raw]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const items = useMemo<CartItem[]>(
    () => lines.map((l) => { const product = getProduct(l.slug)!; return { product, qty: l.qty, lineTotal: product.price * l.qty }; }),
    [lines]
  );
  const count = items.reduce((n, i) => n + i.qty, 0);
  const subtotal = items.reduce((s, i) => s + i.lineTotal, 0);

  const save = (next: CartLine[]) => write(JSON.stringify(next));
  const add = useCallback((slug: string, qty = 1) => {
    if (!getProduct(slug)) return;
    const current = parse(read());
    const found = current.find((l) => l.slug === slug);
    write(JSON.stringify(found
      ? current.map((l) => (l.slug === slug ? { ...l, qty: Math.min(l.qty + qty, MAX_QTY) } : l))
      : [...current, { slug, qty: Math.min(qty, MAX_QTY) }]));
  }, []);
  const setQty = useCallback((slug: string, qty: number) => {
    const current = parse(read());
    const q = Math.min(Math.max(Math.floor(qty) || 0, 0), MAX_QTY);
    write(JSON.stringify(q === 0 ? current.filter((l) => l.slug !== slug) : current.map((l) => (l.slug === slug ? { ...l, qty: q } : l))));
  }, []);
  const remove = useCallback((slug: string) => write(JSON.stringify(parse(read()).filter((l) => l.slug !== slug))), []);
  const clear = useCallback(() => save([]), []);

  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);
  const value: CartContextValue = { items, lines, count, subtotal, add, setQty, remove, clear, drawerOpen, openDrawer, closeDrawer };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
