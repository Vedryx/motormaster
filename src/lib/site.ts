export const site = {
  name: "Motor Master Automotive",
  shortName: "MotorMaster",
  tagline: "Precision · Performance · Trust",
  description:
    "Diagnostics, servicing, repairs and certified pre-owned vehicles — delivered by qualified technicians with dealer-level equipment and workshop-floor honesty.",
  url: "https://motormaster.vedryxtech.com",
  facebook: "https://www.facebook.com/p/Motor-master-61572661521261/",
  address: ["Unit 4, Industrial Park", "Your City"],
  hours: ["Mon – Fri 07:30 – 17:30", "Sat 08:00 – 13:00"],
  showForSale: true,
};

/**
 * Contact details. Override at build time without touching code:
 *   NEXT_PUBLIC_WHATSAPP_NUMBER=27821234567
 *   NEXT_PUBLIC_PHONE_DISPLAY="+27 82 123 4567"
 */
const rawWhatsapp =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "27000000000";

export const contact = {
  whatsappNumber: rawWhatsapp.replace(/\D/g, ""),
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "+27 00 000 0000",
};

export const telHref = `tel:+${contact.whatsappNumber}`;
export const waHref = `https://wa.me/${contact.whatsappNumber}`;

export type Service = {
  num: string;
  title: string;
  body: string;
  icon: string; // svg inner markup
  d: string; // reveal delay bucket
};

const serviceSeed: Omit<Service, "num" | "d">[] = [
  {
    title: "Servicing & maintenance",
    body: "Minor and major services to manufacturer schedules, with genuine or OEM-grade parts and a stamped service book.",
    icon: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  },
  {
    title: "Diagnostics & electrical",
    body: "Dealer-level scan tools trace warning lights, misfires and electrical faults to the root cause — not just the code.",
    icon: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  },
  {
    title: "Brakes & suspension",
    body: "Pads, discs, callipers, shocks, bushes and control arms — restored so the car stops straight and rides quiet.",
    icon: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="M12 2v6M12 16v6M2 12h6M16 12h6"/>',
  },
  {
    title: "Engine & gearbox",
    body: "Timing, head gaskets, clutches and full rebuilds, machined and torqued to spec, then road-tested before hand-over.",
    icon: '<rect x="3" y="7" width="18" height="12" rx="2"/><path d="M7 7V4h4v3M15 7V4h2v3M3 12h3M18 12h3"/>',
  },
  {
    title: "Air-conditioning",
    body: "Leak testing, regas, compressor and condenser replacement so the cabin is cold when it matters most.",
    icon: '<path d="M12 2v20M4.93 4.93l14.14 14.14M2 12h20M4.93 19.07 19.07 4.93"/>',
  },
  {
    title: "Tyres & alignment",
    body: "Supply and fit, balancing and precision wheel alignment for even wear and a car that tracks true.",
    icon: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><path d="m12 5 1.5 4M19 12l-4 1.5M12 19l-1.5-4M5 12l4-1.5"/>',
  },
];

export const services: Service[] = serviceSeed.map((s, i) => ({
  ...s,
  num: String(i + 1).padStart(2, "0"),
  d: String(i % 3),
}));

export const makes = [
  "Toyota",
  "Volkswagen",
  "BMW",
  "Mercedes-Benz",
  "Ford",
  "Hyundai",
  "Audi",
  "Nissan",
  "Kia",
  "Honda",
  "Isuzu",
  "Suzuki",
];

export type Car = {
  name: string;
  meta: string;
  price: string;
  badge: string;
  img: string;
  d: string;
};

export const cars: Car[] = [
  {
    name: "2019 VW Golf GTI",
    meta: "68,400 km · Auto · Petrol · Full history",
    price: "R 429 900",
    badge: "Certified",
    img: "https://images.unsplash.com/photo-1471479917193-f00955256257?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "2020 Toyota Hilux 2.8 GD-6",
    meta: "92,100 km · Auto · Diesel · One owner",
    price: "R 519 900",
    badge: "Certified",
    img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "2018 BMW 320i M Sport",
    meta: "74,800 km · Auto · Petrol · Serviced here",
    price: "R 379 900",
    badge: "Just in",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=80",
  },
].map((c, i) => ({ ...c, d: String(i) }));

export type Reason = { num: string; title: string; body: string; d: string };

export const reasons: Reason[] = [
  {
    title: "Transparent quotes",
    body: "You approve every line before we lift a spanner. No surprises on the invoice.",
  },
  {
    title: "Qualified technicians",
    body: "Trade-tested, factory-trained and continually updated on new platforms.",
  },
  {
    title: "Guaranteed work",
    body: "Six months on labour and parts we supply. If it isn’t right, bring it back.",
  },
  {
    title: "Fast turnaround",
    body: "Most services done the same day, with updates sent straight to your phone.",
  },
].map((r, i) => ({ ...r, num: String(i + 1).padStart(2, "0"), d: String(i) }));

export const creds = [
  "Qualified technicians",
  "Dealer-level diagnostics",
  "Genuine & OEM parts",
  "Written quotes",
];

export const heroStats = [
  { value: "12+", label: "Years", gradient: true },
  { value: "4.8k", label: "Cars serviced" },
  { value: "6", suffix: "mo", label: "Guarantee" },
];

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#vehicles", label: "Vehicles" },
  { href: "#why", label: "Why us" },
  { href: "#contact", label: "Contact" },
];
