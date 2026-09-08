"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site";

export default function Nav() {
  const [menu, setMenu] = useState(false);

  // Lock the page behind the overlay and let Escape close it.
  useEffect(() => {
    if (!menu) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenu(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [menu]);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-30 flex items-center gap-9 border-b border-[rgba(246,241,234,0.08)] bg-gradient-to-b from-[rgba(13,16,23,0.92)] to-[rgba(13,16,23,0.6)] px-[clamp(20px,5vw,72px)] py-4 backdrop-blur-[14px]">
        <a
          href="#top"
          className="mr-auto flex items-center gap-3.5 text-ink no-underline hover:text-ink"
        >
          <Image
            src="/logo.jpg"
            alt="Motor Master Automotive"
            width={48}
            height={48}
            priority
            className="h-12 w-12 rounded-full object-cover shadow-[0_0_0_1px_rgba(246,241,234,0.15),0_0_24px_rgba(242,106,27,0.35)]"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-2xl font-extrabold uppercase italic tracking-[0.02em]">
              Motor<span className="grad">Master</span>
            </span>
            <span className="brand-sub mt-[3px] font-display text-[10px] font-bold uppercase tracking-[0.34em] text-[rgba(246,241,234,0.6)]">
              Automotive
            </span>
          </span>
        </a>

        <div className="nav-links flex gap-[30px]">
          {navLinks.map((l) => (
            <a key={l.href} className="navl" href={l.href}>
              {l.label}
            </a>
          ))}
        </div>

        <a href="#book" className="btn-fill nav-cta px-[22px] py-3 text-[13px]">
          Book now
        </a>

        <button
          type="button"
          className="burger"
          aria-label="Open menu"
          aria-expanded={menu}
          aria-controls="mobile-menu"
          onClick={() => setMenu(true)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`mnav${menu ? " open" : ""}`}
        aria-hidden={!menu}
        inert={!menu}
      >
        <button
          type="button"
          className="mnav-close"
          aria-label="Close menu"
          onClick={() => setMenu(false)}
        >
          ✕
        </button>

        {navLinks.map((l, i) => (
          <a key={l.href} href={l.href} onClick={() => setMenu(false)}>
            {l.label}
            <span>{String(i + 1).padStart(2, "0")}</span>
          </a>
        ))}

        <a href="#book" className="btn-fill" onClick={() => setMenu(false)}>
          Book a service <span aria-hidden="true">→</span>
        </a>
      </div>
    </>
  );
}
