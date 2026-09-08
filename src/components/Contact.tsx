import BookingForm from "./BookingForm";
import { contact, site, telHref, waHref } from "@/lib/site";

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="crow gap-5 border-b border-[var(--divider)] py-5">
      <span className="pt-1 font-display text-xs font-bold uppercase tracking-[0.2em] text-accent-2">
        {label}
      </span>
      {children}
    </div>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="two contact-grid sec gap-x-[clamp(32px,6vw,96px)] gap-y-14 pb-[100px] pt-[120px]"
    >
      <div data-reveal>
        <span className="kicker">Contact</span>
        <h2 className="h2">
          Drop in, call,
          <br />
          or <span className="grad">book online.</span>
        </h2>

        <div className="mt-10 grid border-t border-[var(--divider)]">
          <Row label="Workshop">
            <span className="text-base leading-relaxed">
              {site.address.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < site.address.length - 1 && <br />}
                </span>
              ))}
            </span>
          </Row>

          <Row label="Phone">
            <a
              href={telHref}
              className="contact-link font-display text-[26px] font-bold leading-none [font-feature-settings:'tnum']"
            >
              {contact.phoneDisplay}
            </a>
          </Row>

          <Row label="WhatsApp">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="enquire-link contact-link justify-self-start self-start text-base no-underline"
            >
              Chat with the workshop
            </a>
          </Row>

          <Row label="Hours">
            <span className="text-base leading-relaxed [font-feature-settings:'tnum']">
              {site.hours.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < site.hours.length - 1 && <br />}
                </span>
              ))}
            </span>
          </Row>

          <Row label="Social">
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="enquire-link contact-link justify-self-start text-base no-underline"
            >
              Facebook
            </a>
          </Row>
        </div>
      </div>

      <BookingForm whatsappNumber={contact.whatsappNumber} />
    </section>
  );
}
