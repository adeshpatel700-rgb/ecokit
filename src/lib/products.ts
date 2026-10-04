/**
 * Single source of truth for the product catalogue.
 * Extracted from the hard-coded cards that used to live in app/products/page.tsx.
 *
 * NOTE: prices are the "From" prices supplied by the client site. Product photography is
 * still shared between several products (only 13 images exist in /public/images);
 * replace `image` per product once real photography is supplied.
 * When Firestore is introduced, keep this module's `Product` type and swap the data source.
 */

export type CategorySlug =
  | "oral-care"
  | "hair-care"
  | "bath-body"
  | "grooming"
  | "travel-essentials";

export type MaterialSlug = "bamboo" | "wheat-straw" | "natural-fibre" | "canvas" | "jute";

export interface Product {
  slug: string;
  name: string;
  category: CategorySlug;
  description: string;
  /** "From" price in INR */
  price: number;
  image: string;
  imageAlt: string;
  badge?: string;
  materials: MaterialSlug[];
}

export const CATEGORIES: { slug: CategorySlug; label: string }[] = [
  { slug: "oral-care", label: "Oral Care" },
  { slug: "hair-care", label: "Hair Care" },
  { slug: "bath-body", label: "Bath & Body" },
  { slug: "grooming", label: "Grooming" },
  { slug: "travel-essentials", label: "Travel Essentials" },
];

export const MATERIALS: { slug: MaterialSlug; label: string }[] = [
  { slug: "bamboo", label: "Bamboo" },
  { slug: "wheat-straw", label: "Wheat Straw" },
  { slug: "natural-fibre", label: "Natural Fibre" },
  { slug: "canvas", label: "Canvas" },
  { slug: "jute", label: "Jute" },
];

export const products: Product[] = [
  {slug: "bamboo-toothbrush", name: "Bamboo Toothbrush", category: "oral-care", description: "Charcoal-infused bristles. Naturally antimicrobial handle.", price: 149, image: "/images/product-tongue-cleaner.jpg", imageAlt: "EcoKit Bamboo Toothbrush with charcoal bristles on stone surface", badge: "Bestseller", materials: ["bamboo"]},
  {slug: "wheat-straw-toothbrush", name: "Wheat Straw Toothbrush", category: "oral-care", description: "Made from agricultural residue. Fully compostable.", price: 119, image: "/images/product-tongue-cleaner.jpg", imageAlt: "EcoKit Wheat Straw Toothbrush", materials: ["wheat-straw"]},
  {slug: "bamboo-comb", name: "Bamboo Comb", category: "oral-care", description: "Wide-tooth. Anti-static. Engraveable with your brand.", price: 129, image: "/images/engraving-closeup.png", imageAlt: "EcoKit Bamboo Comb with natural grain texture", materials: ["bamboo"]},
  {slug: "bamboo-tongue-cleaner", name: "Bamboo Tongue Cleaner", category: "oral-care", description: "Traditional design. Modern material. Naturally hygienic.", price: 99, image: "/images/product-tongue-cleaner.jpg", imageAlt: "EcoKit Bamboo Tongue Cleaner", materials: ["bamboo"]},
  {slug: "natural-loofah", name: "Natural Loofah", category: "bath-body", description: "Naturally exfoliates. Completely biodegradable.", price: 119, image: "/images/loofah-lifestyle.png", imageAlt: "EcoKit Natural Loofah beside stone bathtub", badge: "New", materials: ["natural-fibre"]},
  {slug: "handcrafted-soap", name: "Handcrafted Soap", category: "bath-body", description: "Cold-pressed. No parabens. Kraft-wrapped.", price: 149, image: "/images/product-soap.jpg", imageAlt: "EcoKit Soap bar in hotel bathroom", materials: []},
  {slug: "body-lotion", name: "Body Lotion", category: "bath-body", description: "Aloe vera base. Lightweight. Recyclable bottle.", price: 199, image: "/images/hospitality-scene.png", imageAlt: "EcoKit Body Lotion in hotel setting", materials: []},
  {slug: "shower-gel", name: "Shower Gel", category: "bath-body", description: "Gentle, plant-based formula. Paraben-free.", price: 179, image: "/images/hotel-kit-flatlay.png", imageAlt: "EcoKit Shower Gel in amber glass bottle", materials: []},
  {slug: "jute-travel-bag", name: "Jute Travel Bag", category: "travel-essentials", description: "Hand-stitched jute. Drawstring closure. Reusable.", price: 249, image: "/images/hotel-kit-flatlay.png", imageAlt: "EcoKit Jute Travel Bag on oak table", materials: ["jute"]},
  {slug: "canvas-slippers", name: "Canvas Slippers", category: "travel-essentials", description: "100% cotton canvas. Soft foam sole. Hotel-grade.", price: 299, image: "/images/hospitality-scene.png", imageAlt: "EcoKit Canvas Slippers in hotel room", badge: "Popular", materials: ["canvas"]},
  {slug: "biodegradable-shower-cap", name: "Biodegradable Shower Cap", category: "travel-essentials", description: "Plant-based PBAT material. Compostable within 6 months.", price: 89, image: "/images/product-tongue-cleaner.jpg", imageAlt: "EcoKit Biodegradable Shower Cap", materials: []},
  {slug: "bamboo-shaving-kit", name: "Bamboo Shaving Kit", category: "grooming", description: "Bamboo handle razor. Natural shave brush. Complete kit.", price: 349, image: "/images/product-shaving-kit.jpg", imageAlt: "EcoKit Bamboo Shaving Kit", materials: ["bamboo"]},
  {slug: "shampoo", name: "Shampoo", category: "hair-care", description: "Sulphate-free formula. Recyclable packaging.", price: 229, image: "/images/hero-bathroom.png", imageAlt: "EcoKit Shampoo in hotel bathroom setting", materials: []},
  {slug: "conditioner", name: "Conditioner", category: "hair-care", description: "Argan oil infused. No silicones. Natural scent.", price: 249, image: "/images/hospitality-scene.png", imageAlt: "EcoKit Conditioner bottle", materials: []}
];

export function getCategoryLabel(slug: CategorySlug): string {
  return CATEGORIES.find((c) => c.slug === slug)?.label ?? slug;
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  const same = products.filter((p) => p.slug !== product.slug && p.category === product.category);
  const others = products.filter((p) => p.slug !== product.slug && p.category !== product.category);
  return [...same, ...others].slice(0, limit);
}

export function formatPrice(value: number): string {
  return `₹${value.toLocaleString("en-IN")}`;
}
