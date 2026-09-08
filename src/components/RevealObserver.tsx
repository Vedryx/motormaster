"use client";

import { useEffect } from "react";

/**
 * Adds `.in` to every `[data-reveal]` element as it scrolls into view.
 * A MutationObserver picks up nodes added later; a timeout failsafe reveals
 * everything if the IntersectionObserver never fires (unusual scroll roots).
 */
export default function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    const scan = () =>
      document
        .querySelectorAll("[data-reveal]:not(.in)")
        .forEach((el) => io.observe(el));

    scan();

    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    const failsafe = window.setTimeout(() => {
      document
        .querySelectorAll("[data-reveal]")
        .forEach((el) => el.classList.add("in"));
    }, 4000);

    return () => {
      io.disconnect();
      mo.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return null;
}
