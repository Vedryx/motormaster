import Image from "next/image";
import { reasons } from "@/lib/site";

export default function WhyUs() {
  return (
    <section id="why" className="sec pt-[120px]">
      <div data-reveal className="mb-14 max-w-[60ch]">
        <span className="kicker">Why choose us</span>
        <h2 className="h2">
          The difference is in the details{" "}
          <span className="grad">you never see.</span>
        </h2>
      </div>

      <div className="four border-y border-r border-[var(--divider)]">
        {reasons.map((r) => (
          <div key={r.title} className="why" data-reveal data-d={r.d}>
            <p className="n m-0 font-display text-[58px] font-extrabold italic leading-none opacity-85 [font-feature-settings:'tnum']">
              <span className="grad">{r.num}</span>
            </p>
            <h3 className="mb-3 mt-[26px] font-display text-[28px] font-bold uppercase leading-none">
              {r.title}
            </h3>
            <p className="m-0 text-[15px] leading-[1.7] text-[rgba(246,241,234,0.7)]">
              {r.body}
            </p>
          </div>
        ))}
      </div>

      <figure
        data-reveal
        className="zoomwrap quote-fig relative m-0 mt-6 overflow-hidden shadow-[var(--shadow-plate-lg)]"
      >
        <Image
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1800&q=80"
          alt="Car on the open road at dusk"
          width={1800}
          height={686}
          sizes="100vw"
          className="zoom block aspect-[21/8] w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,16,23,.9),rgba(13,16,23,.3)_60%,transparent)]" />
        <blockquote className="absolute left-[clamp(20px,5vw,64px)] top-1/2 m-0 max-w-[34ch] -translate-y-1/2">
          <p className="m-0 font-display text-[clamp(24px,3vw,42px)] font-bold uppercase italic leading-[1.05]">
            “They found the fault two other garages missed — and fixed it for
            less than the first quote.”
          </p>
          <footer className="mt-[18px] text-xs uppercase tracking-[0.22em] text-accent-2">
            — Sipho M. · Regular customer
          </footer>
        </blockquote>
      </figure>
    </section>
  );
}
