import Image from "next/image";
import { heroStats, site } from "@/lib/site";

export default function Hero() {
  return (
    <header
      id="top"
      className="relative isolate grid min-h-[100svh] items-end overflow-hidden"
    >
      <Image
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=80"
        alt="Performance car in a dark studio"
        fill
        priority
        sizes="100vw"
        className="anim-rise -z-30 object-cover object-[center_40%]"
      />

      {/* tonal wash */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(13,16,23,.96)_0%,rgba(13,16,23,.82)_42%,rgba(13,16,23,.25)_100%),linear-gradient(to_top,#0d1017_0%,rgba(13,16,23,.2)_45%,rgba(13,16,23,.5)_100%)]" />

      {/* ember bloom */}
      <div className="animate-glow pointer-events-none absolute -bottom-[30%] -left-[10%] -z-10 h-[70vw] max-h-[900px] w-[70vw] max-w-[900px] rounded-full bg-[radial-gradient(circle,rgba(242,106,27,.28),transparent_60%)] blur-[30px]" />

      <div className="absolute bottom-[120px] right-[clamp(20px,5vw,72px)] z-10 hidden origin-bottom-right rotate-90 whitespace-nowrap font-display text-xs font-bold uppercase tracking-[0.4em] text-[rgba(246,241,234,0.4)] lg:block">
        {site.tagline}
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] px-[clamp(20px,5vw,72px)] pb-[72px] pt-[120px] md:pt-[160px]">
        <div className="anim-rise [animation-delay:0.2s]">
          <span className="kicker">Full-service automotive garage</span>
          <h1 className="m-0 mt-[26px] font-display text-[clamp(64px,10.5vw,164px)] font-extrabold uppercase italic leading-[0.88] tracking-[-0.015em]">
            <span className="block">Master your</span>
            <span className="grad block pr-[0.08em]">machine.</span>
          </h1>
        </div>

        <div className="anim-rise mt-10 grid grid-cols-1 items-end gap-10 [animation-delay:0.45s] lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div>
            <p className="m-0 max-w-[52ch] text-[18px] leading-[1.65] text-[rgba(246,241,234,0.82)]">
              {site.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <a href="#book" className="btn-fill">
                Book a service <span aria-hidden="true">→</span>
              </a>
              <a href="#services" className="btn-line">
                Our services
              </a>
            </div>
          </div>

          <dl className="m-0 grid grid-cols-2 border-l border-[rgba(246,241,234,0.15)] sm:grid-cols-3">
            {heroStats.map((s, i) => (
              <div
                key={s.label}
                className={`px-[22px] py-1.5 ${i > 0 ? "border-l border-[rgba(246,241,234,0.15)]" : ""}`}
              >
                <dd
                  className={`m-0 font-display text-[52px] font-extrabold leading-none [font-feature-settings:'tnum'] ${s.gradient ? "grad" : ""}`}
                >
                  {s.value}
                  {s.suffix ? (
                    <span className="ml-1 text-[26px]">{s.suffix}</span>
                  ) : null}
                </dd>
                <dt className="mt-2.5 text-[11px] uppercase tracking-[0.18em] text-[rgba(246,241,234,0.6)]">
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* rev-counter */}
      <div className="anim-rise absolute right-[clamp(24px,8vw,140px)] top-[clamp(110px,18vh,200px)] hidden aspect-square w-[clamp(120px,14vw,200px)] place-items-center rounded-full border-2 border-[rgba(246,241,234,0.18)] [animation-delay:0.6s] lg:grid">
        <div className="animate-glow absolute -inset-0.5 rounded-full bg-[conic-gradient(from_200deg,#ff4d12,#f5a623_230deg,transparent_230deg)] [mask:radial-gradient(farthest-side,transparent_calc(100%-4px),#000_calc(100%-3px))] [-webkit-mask:radial-gradient(farthest-side,transparent_calc(100%-4px),#000_calc(100%-3px))]" />
        <div className="anim-needle absolute bottom-1/2 left-1/2 -ml-[1.5px] h-[40%] w-[3px] origin-bottom rounded-sm bg-gradient-to-t from-[#f26a1b] to-white" />
        <div className="h-3.5 w-3.5 rounded-full bg-[#f5a623] shadow-[0_0_18px_rgba(245,166,35,0.8)]" />
        <span className="absolute bottom-[18%] font-display text-[11px] font-bold uppercase tracking-[0.3em] text-[rgba(246,241,234,0.7)]">
          RPM
        </span>
      </div>
    </header>
  );
}
