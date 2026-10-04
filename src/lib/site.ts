/** Central site configuration. Contact details are placeholders supplied in the original pages. */
export const SITE = {
  name: "EcoKit",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ecokit.in",
  description:
    "Premium eco-friendly hospitality amenities and personal care essentials for hotels, businesses and conscious homes.",
  email: "hello@ecokit.in",
  // TODO(client): confirm real phone / WhatsApp number — the site currently uses a placeholder.
  phone: "+91 99999 99999",
  phoneHref: "tel:+919999999999",
  whatsappHref: "https://wa.me/919999999999",
  hours: "Mon – Sat, 9am – 6pm IST",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/hospitality", label: "Hospitality" },
  { href: "/custom-kits", label: "Custom Kits" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
