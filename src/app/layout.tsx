import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Servicing, Repairs & Diagnostics`,
    template: `%s · ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "car service",
    "auto repairs",
    "vehicle diagnostics",
    "brakes",
    "wheel alignment",
    "pre-owned cars",
    "Motor Master Automotive",
  ],
  openGraph: {
    title: `${site.name} — Master your machine.`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    images: [{ url: "/logo.jpg", width: 200, height: 200, alt: site.name }],
  },
  twitter: {
    card: "summary",
    title: `${site.name} — Master your machine.`,
    description: site.description,
  },
  icons: { icon: "/logo.jpg", apple: "/logo.jpg" },
};

export const viewport = {
  themeColor: "#0d1017",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${barlowCondensed.variable}`}>
        {children}
      </body>
    </html>
  );
}
