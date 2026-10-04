"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Reveals every `[data-reveal]` element (adds `.revealed`) as it scrolls into view.
 * Restores the behaviour of the original static site's main.js, which was lost in
 * the Next.js migration and left ~50 sections permanently at opacity:0.
 *
 * Two mechanisms, deliberately:
 *   1. IntersectionObserver — drives the staggered entrance animation.
 *   2. A scroll/resize sweep — a safety net that force-reveals anything the
 *      viewport has already passed. Without it, jumping down the page (dragging
 *      the scrollbar, an in-page #anchor, restoring scroll position on reload)
 *      skips elements entirely and they stay invisible: a "dissolved" section.
 *
 * Falls back to revealing everything when IntersectionObserver is unavailable
 * or the visitor prefers reduced motion.
 */
export default function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const nodes = () =>
      Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.revealed)"));

    const targets = nodes();
    if (targets.length === 0) return;

    const revealAll = (list: HTMLElement[]) => list.forEach((el) => el.classList.add("revealed"));

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || typeof IntersectionObserver === "undefined") {
      revealAll(targets);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );
    targets.forEach((el) => observer.observe(el));

    // Safety net: anything at or above the bottom of the viewport is revealed
    // outright, so content can never be skipped past and left invisible.
    let frame = 0;
    const sweep = () => {
      frame = 0;
      const limit = window.innerHeight;
      for (const el of nodes()) {
        if (el.getBoundingClientRect().top < limit) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      }
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(sweep);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    // Covers deep links and browser-restored scroll positions on first paint.
    const initial = window.setTimeout(sweep, 250);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.clearTimeout(initial);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return null;
}
