import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { SITE } from "@/lib/site";

const STATIC_ROUTES = ["", "/products", "/hospitality", "/custom-kits", "/about", "/contact", "/quote", "/faq", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...STATIC_ROUTES.map((path) => ({ url: `${SITE.url}${path}`, lastModified: now, priority: path === "" ? 1 : 0.7 })),
    ...products.map((p) => ({ url: `${SITE.url}/products/${p.slug}`, lastModified: now, priority: 0.6 })),
  ];
}
