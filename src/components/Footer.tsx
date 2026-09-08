import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--divider)] bg-surface">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-5 px-[clamp(20px,5vw,72px)] py-9">
        <span className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt=""
            width={34}
            height={34}
            className="h-[34px] w-[34px] rounded-full object-cover"
          />
          <span className="font-display text-xl font-extrabold uppercase italic">
            Motor<span className="grad">Master</span>
            <span className="ml-2 text-[11px] font-bold not-italic tracking-[0.3em] text-[rgba(246,241,234,0.55)]">
              Automotive Garage
            </span>
          </span>
        </span>
        <span className="text-[13px] tracking-[0.06em] text-[rgba(246,241,234,0.55)]">
          © {new Date().getFullYear()} · Servicing · Repairs · Diagnostics ·
          Pre-owned
        </span>
      </div>
    </footer>
  );
}
