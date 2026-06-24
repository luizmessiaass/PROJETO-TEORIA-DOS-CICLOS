# Stride — SaaS Landing Page

A dark-premium landing page for **Stride**, a fictional project management SaaS.
Built with **Next.js 15 (App Router) · React 19 · Tailwind CSS · shadcn/ui patterns · lucide-react**.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## What's inside

| Section | File |
|---|---|
| Floating glass navbar | `components/sections/site-header.tsx` |
| Hero + animated product mockup | `components/sections/hero.tsx`, `app-mockup.tsx` |
| Logo cloud | `components/sections/logo-cloud.tsx` |
| Features bento (6 cells) | `components/sections/features-bento.tsx` |
| 3-step workflow | `components/sections/workflow.tsx` |
| Integrations grid | `components/sections/integrations.tsx` |
| Testimonials | `components/sections/testimonials.tsx` |
| 3-tier pricing | `components/sections/pricing.tsx` |
| Final CTA banner | `components/sections/cta.tsx` |
| Footer | `components/sections/site-footer.tsx` |

## Design system

- **Palette**: zinc-950 base, chrome blue gradient accents (#0a3aa8 → #1e5fff → #66b3ff), subtle white/5 borders
- **Type**: Inter (display + body), JetBrains Mono (UI numerals)
- **Effects**: gradient orbs, dot/grid backgrounds with radial mask, glass cards
- **A11y**: focus rings, `aria-label` on icon buttons, decorative svgs marked `aria-hidden`, `prefers-reduced-motion` respected
- **No emoji icons** — Lucide SVG everywhere

## Customizing

- **Brand colors**: edit CSS variables in `app/globals.css` and `tailwind.config.ts`
- **Product copy**: every section is plain TSX, swap inline
- **Add real logos**: replace `LogoCloud` and `Integrations` tiles with `<svg>` from [simpleicons.org](https://simpleicons.org)

## Stack notes

- Tailwind 3.4 + `tailwindcss-animate`
- `class-variance-authority` for button variants (shadcn pattern)
- All sections are server components — no client JS shipped
