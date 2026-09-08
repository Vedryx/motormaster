import Image from "next/image";
import { cars, makes, site } from "@/lib/site";

export default function Vehicles() {
  return (
    <section
      id="vehicles"
      className="relative overflow-hidden border-y border-[var(--divider)] bg-surface"
    >
      <div className="pointer-events-none absolute -right-[12%] -top-[30%] h-[60vw] max-h-[800px] w-[60vw] max-w-[800px] rounded-full bg-[radial-gradient(circle,rgba(245,166,35,.14),transparent_60%)] blur-[40px]" />

      <div className="relative mx-auto max-w-[1280px] px-[clamp(20px,5vw,72px)] py-[110px]">
        <div
          data-reveal
          className="mb-[52px] grid grid-cols-1 items-end gap-x-[60px] gap-y-6 lg:grid-cols-2"
        >
          <div>
            <span className="kicker">Vehicles</span>
            <h2 className="h2">
              Makes we service.
              <br />
              <span className="grad">Cars we sell.</span>
            </h2>
          </div>
          <p className="m-0 max-w-[46ch] text-[17px] leading-[1.7] text-[rgba(246,241,234,0.72)]">
            We work on all major makes — and every pre-owned vehicle we sell has
            passed through our own workshop first, inspected and serviced.
          </p>
        </div>

        <ul
          data-reveal
          className="m-0 mb-14 flex list-none flex-wrap gap-2.5 p-0"
        >
          {makes.map((m) => (
            <li key={m} className="make-chip">
              {m}
            </li>
          ))}
        </ul>

        {site.showForSale && (
          <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3">
            {cars.map((c) => (
              <article key={c.name} className="car" data-reveal data-d={c.d}>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={c.img}
                    alt={c.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <span className="absolute left-3.5 top-3.5 rounded-sm bg-[var(--ember)] px-3 py-1.5 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-bg">
                    {c.badge}
                  </span>
                </div>
                <div className="px-6 pb-[26px] pt-6">
                  <h3 className="m-0 font-display text-[28px] font-bold uppercase leading-none">
                    {c.name}
                  </h3>
                  <p className="m-0 mt-2.5 text-[13px] tracking-[0.04em] text-[rgba(246,241,234,0.6)] [font-feature-settings:'tnum']">
                    {c.meta}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-[var(--divider)] pt-[18px]">
                    <span className="grad font-display text-[30px] font-extrabold leading-none [font-feature-settings:'tnum']">
                      {c.price}
                    </span>
                    <a
                      href="#book"
                      className="enquire-link font-display text-[13px] font-bold uppercase tracking-[0.18em] no-underline"
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
