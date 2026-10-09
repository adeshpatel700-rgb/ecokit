import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

const SOCIAL = [
  { label: "Instagram", href: process.env.NEXT_PUBLIC_INSTAGRAM_URL, path: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></> },
  { label: "LinkedIn", href: process.env.NEXT_PUBLIC_LINKEDIN_URL, path: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></> },
  { label: "Facebook", href: process.env.NEXT_PUBLIC_FACEBOOK_URL, path: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /> },
].filter((s) => Boolean(s.href));

const COLUMNS = [
  { heading: "Shop", links: [
    { href: "/products?category=oral-care", label: "Oral Care" },
    { href: "/products?category=bath-body", label: "Bath & Body" },
    { href: "/products?category=travel-essentials", label: "Travel Essentials" },
    { href: "/custom-kits", label: "Custom Kits" },
  ] },
  { heading: "Company", links: [
    { href: "/about", label: "Our Story" },
    { href: "/blog", label: "Journal" },
    { href: "/hospitality", label: "For Hotels" },
    { href: "/contact", label: "Contact" },
  ] },
  { heading: "Legal", links: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/faq", label: "FAQ" },
  ] },
];

export default function Footer() {
  return (
    <footer className="footer" id="footer-accent-line">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link href="/" aria-label="EcoKit home" className="footer__logo-badge" style={{ marginBottom: "1.5rem" }}>
              <Image src="/images/logo-trim.jpg" alt="EcoKit — Sustainable care, naturally" width={480} height={436} style={{ height: 72, width: "auto" }} />
            </Link>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9375rem", lineHeight: 1.6, marginBottom: "1.5rem", maxWidth: 280 }}>
              Sustainable hospitality solutions crafted for luxury, comfort, and the planet.
            </p>
            {SOCIAL.length > 0 && (
              <div className="footer__social" style={{ display: "flex", gap: "1rem" }}>
                {SOCIAL.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`EcoKit on ${s.label}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{s.path}</svg>
                  </a>
                ))}
              </div>
            )}
            <p style={{ marginTop: "1.5rem", fontSize: "0.875rem" }}>
              <a href={`mailto:${SITE.email}`} className="footer__link">{SITE.email}</a>
              <br />
              <a href={SITE.phoneHref} className="footer__link">{SITE.phone}</a>
            </p>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.heading} className="footer__col" aria-label={col.heading}>
              <h2 className="footer__col-heading">{col.heading}</h2>
              <ul className="footer__list">
                {col.links.map((l) => (
                  <li key={l.label}><Link href={l.href} className="footer__link">{l.label}</Link></li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="footer__bottom" style={{ paddingTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem" }}>&copy; {new Date().getFullYear()} EcoKit India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
