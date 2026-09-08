import Image from "next/image";
import { creds } from "@/lib/site";

export default function About() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 items-center gap-x-[clamp(32px,6vw,96px)] gap-y-14 pb-[120px] lg:grid-cols-2"
    >
      <div data-reveal className="zoomwrap relative">
        <div className="absolute -bottom-[18px] -right-[18px] left-auto top-auto z-0 h-3/5 w-3/5 border border-[rgba(245,166,35,0.4)]" />
        <div className="relative overflow-hidden shadow-[var(--shadow-plate-lg)]">
          <Image
            src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=80"
            alt="Technician at work"
            width={1200}
            height={1500}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="zoom block aspect-[4/5] w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(13,16,23,.85),transparent_55%)]" />
          <div className="absolute inset-x-7 bottom-[26px]">
            <p className="grad m-0 font-display text-[64px] font-extrabold italic leading-none">
              2012
            </p>
            <p className="m-0 mt-1.5 text-xs uppercase tracking-[0.2em] text-[rgba(246,241,234,0.7)]">
              Two bays. One promise: tell the truth.
            </p>
          </div>
        </div>
      </div>

      <div data-reveal data-d="1">
        <span className="kicker">About the garage</span>
        <h2 className="h2">
          Built on honest work
          <br />
          and a <span className="grad">clean floor.</span>
        </h2>
        <p className="mb-0 mt-7 text-[17px] leading-[1.75] text-[rgba(246,241,234,0.78)]">
          Motor Master Automotive started as a two-bay workshop and a reputation
          for telling customers the truth. We still do: a clear diagnosis, a
          written quote, and no work you didn&apos;t agree to.
        </p>
        <p className="mb-0 mt-4 text-[17px] leading-[1.75] text-[rgba(246,241,234,0.78)]">
          Our technicians are trained across petrol, diesel and hybrid platforms
          and work with dealer-level diagnostic equipment — manufacturer
          standards without the dealership bill.
        </p>
        <ul className="m-0 mt-[34px] grid list-none grid-cols-1 gap-x-6 gap-y-3.5 p-0 sm:grid-cols-2">
          {creds.map((c) => (
            <li
              key={c}
              className="flex items-center gap-3 font-display text-base font-bold uppercase tracking-[0.06em]"
            >
              <span className="grid h-[22px] w-[22px] flex-none place-items-center rounded-full bg-[var(--ember)] text-[13px] text-bg">
                ✓
              </span>
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
