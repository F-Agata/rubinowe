"use client";

import { useEffect } from "react";

/**
 * Fallback for browsers without scroll-driven animations: arm scroll folds
 * (fold them shut) and open each one as it enters the viewport.
 */
export function FoldObserver() {
  useEffect(() => {
    if (CSS.supports("animation-timeline: view()")) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const folds = document.querySelectorAll<HTMLElement>(".fold--scroll");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-open");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.35 },
    );
    folds.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top > innerHeight) {
        el.classList.add("is-armed");
        io.observe(el);
      }
    });
    return () => io.disconnect();
  }, []);

  return null;
}
