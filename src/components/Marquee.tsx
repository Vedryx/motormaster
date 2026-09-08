import { makes } from "@/lib/site";

export default function Marquee() {
  const loop = [...makes, ...makes];

  return (
    <div
      className="overflow-hidden border-y border-[var(--divider)] bg-surface py-[18px]"
      aria-hidden="true"
    >
      <div className="marquee-track">
        {loop.map((m, i) => (
          <span key={`${m}-${i}`} className="marquee-item">
            {m}
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}
