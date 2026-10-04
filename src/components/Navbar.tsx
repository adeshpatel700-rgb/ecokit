"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/site";
import { useCart } from "@/lib/cart";

export default function Navbar() {
  const pathname = usePathname();
  const { count, openDrawer } = useCart();
  const [isSolid, setIsSolid] = useState(false);
  const [openPath, setOpenPath] = useState<string | null>(null);
  // Menu is open only for the route it was opened on, so navigating closes it without an effect.
  const isMobileOpen = openPath === pathname;

  useEffect(() => {
    const onScroll = () => setIsSolid(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMobileOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpenPath(null); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const navClass = isSolid
    ? "nav nav--solid has-announcement"
    : "nav nav--transparent has-announcement";

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <div className="announcement-bar">
        <div className="container announcement-bar__inner">
          <span className="announcement-bar__item active">🌿 Sustainable Hospitality Solutions for Hotels &amp; Businesses</span>
        </div>
      </div>

      <header className={navClass} id="mainNav">
        <div className="nav__inner">
          <Link href="/" className="nav__logo" aria-label="EcoKit home">
            <Image src="/images/logo-trim.jpg" alt="EcoKit — Sustainable care, naturally" width={480} height={436} priority />
          </Link>

          <nav className="nav__links" aria-label="Main">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="nav__link" aria-current={isActive(l.href) ? "page" : undefined}>{l.label}</Link>
            ))}
          </nav>

          <div className="nav__actions">
            <button type="button" className="nav__cart-btn" onClick={openDrawer} aria-label={count > 0 ? `Open cart, ${count} items` : "Open cart"}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
              {count > 0 && <span key={count} className="cart-count has-items cart-count--pop">{count > 99 ? "99+" : count}</span>}
            </button>
            <Link href="/quote" className="btn btn--primary btn--sm hidden-mobile">Request Quote</Link>
            <button
              type="button"
              className={`nav__mobile-toggle ${isMobileOpen ? "open" : ""}`}
              onClick={() => setOpenPath(isMobileOpen ? null : pathname)}
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-nav"
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      <nav id="mobile-nav" className={`mobile-nav ${isMobileOpen ? "open" : ""}`} aria-label="Mobile" inert={!isMobileOpen}>
        <ul className="mobile-nav__links">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="mobile-nav__link" aria-current={isActive(l.href) ? "page" : undefined}>{l.label}</Link>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: "auto", paddingTop: "2rem" }}>
          <Link href="/quote" className="btn btn--primary" style={{ width: "100%", justifyContent: "center" }}>Request a Quote</Link>
        </div>
      </nav>
    </>
  );
}
