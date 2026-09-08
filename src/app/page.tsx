import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Nav from "@/components/Nav";
import RevealObserver from "@/components/RevealObserver";
import Services from "@/components/Services";
import Vehicles from "@/components/Vehicles";
import WhyUs from "@/components/WhyUs";
import { contact, site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: site.name,
  description: site.description,
  url: site.url,
  image: `${site.url}/logo.jpg`,
  telephone: contact.phoneDisplay,
  sameAs: [site.facebook],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address[0],
    addressLocality: site.address[1],
  },
  openingHours: ["Mo-Fr 07:30-17:30", "Sa 08:00-13:00"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RevealObserver />
      <Nav />
      <Hero />
      <Marquee />

      <main className="mx-auto max-w-[1280px] px-[clamp(20px,5vw,72px)]">
        <Services />
        <About />
      </main>

      <Vehicles />

      <main className="mx-auto max-w-[1280px] px-[clamp(20px,5vw,72px)]">
        <WhyUs />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
