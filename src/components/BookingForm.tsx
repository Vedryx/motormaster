"use client";

import { useState } from "react";
import { services, waHref } from "@/lib/site";

const slots = ["Morning", "Midday", "Afternoon"];

const selectArrow =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%23f5a623' stroke-width='1.5'/%3E%3C/svg%3E\")";

export default function BookingForm({
  whatsappNumber,
}: {
  whatsappNumber: string;
}) {
  const [slot, setSlot] = useState(slots[0]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const lines = [
      "Hi Motor Master, I’d like to book a service.",
      `Name: ${f.get("name")}`,
      `Phone: ${f.get("phone")}`,
      `Vehicle: ${f.get("vehicle")}`,
      `Service: ${f.get("service")}`,
      `Preferred: ${f.get("date") || "any day"} · ${f.get("slot")}`,
    ];
    const notes = f.get("notes");
    if (notes) lines.push(`Notes: ${notes}`);

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener",
    );
  }

  return (
    <form
      id="book"
      onSubmit={handleSubmit}
      data-reveal
      data-d="1"
      className="form2 relative gap-5 overflow-hidden border border-[var(--divider)] bg-surface px-9 py-10 shadow-[var(--shadow-plate-lg)]"
    >
      <div className="absolute inset-x-0 top-0 h-[3px] bg-[var(--ember)]" />

      <div className="mb-1.5 [grid-column:1/-1]">
        <h3 className="m-0 font-display text-[40px] font-extrabold uppercase italic leading-none">
          Book a <span className="grad">service</span>
        </h3>
        <p className="m-0 mt-2.5 text-[15px] text-[rgba(246,241,234,0.65)]">
          Send the details — we confirm on WhatsApp within the hour.
        </p>
      </div>

      <div className="field">
        <label htmlFor="bf-name">Full name</label>
        <input
          id="bf-name"
          className="input"
          name="name"
          placeholder="Your name"
          autoComplete="name"
          required
        />
      </div>

      <div className="field">
        <label htmlFor="bf-phone">Phone</label>
        <input
          id="bf-phone"
          className="input"
          name="phone"
          type="tel"
          placeholder="+27 …"
          autoComplete="tel"
          required
        />
      </div>

      <div className="field">
        <label htmlFor="bf-vehicle">Vehicle</label>
        <input
          id="bf-vehicle"
          className="input"
          name="vehicle"
          placeholder="e.g. 2018 VW Polo 1.0 TSI"
          required
        />
      </div>

      <div className="field">
        <label htmlFor="bf-service">Service needed</label>
        <select
          id="bf-service"
          className="input appearance-none bg-no-repeat"
          name="service"
          style={{
            backgroundImage: selectArrow,
            backgroundPosition: "right 14px center",
          }}
        >
          {services.map((s) => (
            <option key={s.title}>{s.title}</option>
          ))}
          <option>Pre-owned vehicle enquiry</option>
          <option>Something else</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="bf-date">Preferred date</label>
        <input
          id="bf-date"
          className="input [color-scheme:dark]"
          name="date"
          type="date"
        />
      </div>

      <div className="field">
        <label id="bf-slot-label">Preferred time</label>
        <div className="seg" role="radiogroup" aria-labelledby="bf-slot-label">
          {slots.map((s) => (
            <label key={s} className="seg-opt">
              <input
                type="radio"
                name="slot"
                value={s}
                checked={slot === s}
                onChange={() => setSlot(s)}
              />
              {s}
            </label>
          ))}
        </div>
      </div>

      <div className="field [grid-column:1/-1]">
        <label htmlFor="bf-notes">Tell us what&apos;s happening</label>
        <textarea
          id="bf-notes"
          className="input"
          name="notes"
          placeholder="Noises, warning lights, mileage, anything useful…"
        />
      </div>

      <div className="mt-1.5 flex flex-wrap items-center justify-between gap-4 [grid-column:1/-1]">
        <span className="text-[13px] text-[rgba(246,241,234,0.55)]">
          Opens{" "}
          <a href={waHref} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>{" "}
          with your request pre-filled.
        </span>
        <button type="submit" className="btn-fill">
          Send enquiry <span aria-hidden="true">→</span>
        </button>
      </div>
    </form>
  );
}
