# Motor Master Automotive

Marketing site for Motor Master Automotive — a full-service garage offering
servicing, repairs, diagnostics and certified pre-owned vehicles.

Built from the Claude Design source (`Motor Master Automotive v2.dc.html`) as a
Next.js App Router app.

- **Live:** https://motormaster.vedryxtech.com
- **Stack:** Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS v4
- **Hosting:** Vercel

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## Configuration

Copy `.env.example` to `.env.local` and fill in the real workshop number. Both
values are read in `src/lib/site.ts`; everything else (address, hours, opening
times, Facebook URL, the stock list) lives in that same file.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Digits only. Drives the `wa.me` deep link and the `tel:` link. |
| `NEXT_PUBLIC_PHONE_DISPLAY` | The formatted number shown on the contact panel. |

> The committed defaults are placeholders (`27000000000`). Set the real number
> in the Vercel project's environment variables before the site goes public.

## Content

All copy and data are in `src/lib/site.ts`:

- `services` — the six service cards (title, body, inline SVG icon)
- `makes` — marquee + chip list of serviced makes
- `cars` — pre-owned stock; set `site.showForSale = false` to hide the section
- `reasons`, `creds`, `heroStats`, `navLinks`

## Structure

```
src/
  app/
    layout.tsx      fonts, metadata, Open Graph
    page.tsx        section composition + JSON-LD (schema.org/AutoRepair)
    globals.css     design tokens, component classes, keyframes
  components/       Nav, Hero, Marquee, Services, About, Vehicles,
                    WhyUs, Contact, BookingForm, Footer, RevealObserver
  lib/site.ts       all content and contact configuration
public/logo.jpg     brand mark
```

The booking form has no backend — it composes the enquiry and opens WhatsApp
with the message pre-filled, matching the original design's behaviour.

## Design notes

Tokens are declared once in `@theme` (`src/app/globals.css`): graphite ground
(`#0d1017`), ember-orange → gold gradient accent, Barlow Condensed for display
type and Barlow for body copy. Scroll reveals are driven by a single
`IntersectionObserver` in `RevealObserver`, with a 4s failsafe and a
`prefers-reduced-motion` opt-out.

### Breakpoints

Layout follows the design's own three breakpoints rather than Tailwind's
defaults, so the collapse rules live in plain media queries at the bottom of
`globals.css` and the components carry the matching class hooks (`.two`,
`.three`, `.four`, `.sec`, `.crow`, `.form2`, …).

| Width | What changes |
| --- | --- |
| ≤ 1100px | Rotated tagline and the RPM gauge (`.hero-side`) drop out |
| ≤ 900px | Desktop nav swaps for the burger + fullscreen menu; two- and three-column grids go single, the four-up goes 2×2; hero stats restack under a top rule; booking form goes single-column; section padding tightens to 88px |
| ≤ 560px | The four-up goes single; hero headline and stats shrink; buttons go full width; credentials list goes single-column; the "Automotive" sub-label and tighter card padding kick in |

The mobile menu (`Nav.tsx`) locks body scroll while open, closes on Escape, and
is `inert` when closed so it stays out of the tab order.
