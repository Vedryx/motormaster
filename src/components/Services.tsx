import { services } from "@/lib/site";

export default function Services() {
  return (
    <section id="services" className="sec pb-[110px] pt-[120px]">
      <div data-reveal className="two mb-14 items-end gap-x-[60px] gap-y-6">
        <div>
          <span className="kicker">What we do</span>
          <h2 className="h2">
            Every system.
            <br />
            <span className="grad">Every detail.</span>
          </h2>
        </div>
        <p className="m-0 max-w-[46ch] text-[17px] leading-[1.7] text-[rgba(246,241,234,0.72)]">
          From routine oil changes to full engine rebuilds. Every job is quoted
          before we start, and signed off with a road test before you collect.
        </p>
      </div>

      <div className="three gap-4">
        {services.map((s) => (
          <article key={s.title} className="svc" data-reveal data-d={s.d}>
            <div className="relative flex items-start justify-between">
              <span
                className="ico flex text-accent-2"
                dangerouslySetInnerHTML={{
                  __html: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${s.icon}</svg>`,
                }}
              />
              <span className="font-display text-[44px] font-extrabold italic leading-none text-[rgba(246,241,234,0.1)] [font-feature-settings:'tnum']">
                {s.num}
              </span>
            </div>
            <h3 className="relative mb-3 mt-[34px] font-display text-[30px] font-bold uppercase leading-none tracking-[0.01em]">
              {s.title}
            </h3>
            <p className="relative m-0 text-[15px] leading-[1.7] text-[rgba(246,241,234,0.7)]">
              {s.body}
            </p>
            <a
              href="#book"
              className="svc-link relative mt-6 inline-flex items-center gap-2 font-display text-[13px] font-bold uppercase tracking-[0.18em] no-underline"
            >
              Enquire <span aria-hidden="true">→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
