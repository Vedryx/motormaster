import Image from "next/image";
import { navLinks } from "@/lib/site";

export default function Nav() {
  return (
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
          <span className="mt-[3px] font-display text-[10px] font-bold uppercase tracking-[0.34em] text-[rgba(246,241,234,0.6)]">
            Automotive
          </span>
        </span>
      </a>

      <div className="hidden gap-[30px] lg:flex">
        {navLinks.map((l) => (
          <a key={l.href} className="navl" href={l.href}>
            {l.label}
          </a>
        ))}
      </div>

      <a href="#book" className="btn-fill px-[22px] py-3 text-[13px]">
        Book now
      </a>
    </nav>
  );
}
