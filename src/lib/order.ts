import { getProduct, type Product } from "@/lib/products";

export const MAX_QTY = 999;

export interface CartLine { slug: string; qty: number }
export interface PricedLine { product: Product; qty: number; lineTotal: number }

/**
 * Prices a cart from the catalogue. Client-supplied prices are never used:
 * only slugs and quantities cross the wire. Returns null for invalid input.
 */
export function priceCart(input: unknown): { lines: PricedLine[]; subtotal: number } | null {
  if (!Array.isArray(input) || input.length === 0 || input.length > 50) return null;
  const merged = new Map<string, number>();
  for (const raw of input) {
    if (!raw || typeof raw !== "object") return null;
    const { slug, qty } = raw as { slug?: unknown; qty?: unknown };
    if (typeof slug !== "string" || typeof qty !== "number" || !Number.isInteger(qty) || qty < 1 || qty > MAX_QTY) return null;
    merged.set(slug, Math.min((merged.get(slug) ?? 0) + qty, MAX_QTY));
  }
  const lines: PricedLine[] = [];
  for (const [slug, qty] of merged) {
    const product = getProduct(slug);
    if (!product) return null;
    lines.push({ product, qty, lineTotal: product.price * qty });
  }
  return { lines, subtotal: lines.reduce((s, l) => s + l.lineTotal, 0) };
}

export function summariseLines(lines: PricedLine[]): string {
  return lines.map((l) => `${l.qty} × ${l.product.name} @ ₹${l.product.price} = ₹${l.lineTotal}`).join("\n");
}
