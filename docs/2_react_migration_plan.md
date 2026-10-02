# React Migration Plan

## 1. Framework
**Frontend-only React** — choose based on SEO needs:
- **Vite + React (SPA)** — if you accept client-side rendering simplicity. Fast, simple deploy.
- **Next.js (App Router, static export)** — recommended if local SEO matters; provides SSG, `next/image`, and per-locale static routes without a backend.

✅ **Recommendation: Next.js with `output: 'export'` (static-only)** — gives SEO benefits while staying frontend-only.

## 2. Component Architecture
```
src/
├── app/
│   └── [locale]/
│       ├── page.tsx            # landing (anchor sections)
│       ├── about/page.tsx
│       ├── reiki/page.tsx
│       ├── packages/page.tsx
│       ├── stories/page.tsx
│       └── book/page.tsx
├── components/
│   ├── layout/  (Header, Footer, MobileNav, LanguageSwitcher)
│   ├── ui/      (Button, Card, Section, Badge, Accordion)
│   ├── sections/ (Hero, About, WhatIsReiki, Packages, Testimonials, Booking, FAQ)
│   └── booking/ (BookingCTA, PaymentInfo)
├── lib/         (i18n config, constants, form-config)
├── messages/    (en.json, fr.json, es.json)
└── styles/      (tokens, globals)
```
*(For Vite SPA: mirror this under `src/components`, `src/pages`, `src/locales`.)*

## 3. State Management
Keep **minimal** — no global store, no server state:
- **Language:** i18n library context (`react-i18next` for SPA, `next-intl` for Next.js).
- **UI state** (mobile menu, accordions, modals): local `useState`.
- No Redux/Zustand needed for a content site.

## 4. Routing & Navigation
- **Next.js:** locale-prefixed routes `/en`, `/fr`, `/es` with `generateStaticParams`.
- **Vite SPA:** `react-router-dom` v6 with locale path segments.
- Preserve old Squarespace URLs via **301 redirects** (host-level config).

## 5. Third-Party Libraries
| Need | Recommendation |
|---|---|
| i18n | `next-intl` (Next.js) or `react-i18next` + `i18next` (SPA) |
| Styling | Tailwind CSS + design tokens |
| Forms | `react-hook-form` + `zod` (client validation) |
| Form handling (no backend) | Formspree / Web3Forms / Resend |
| Images | `next/image` (Next.js) or `react-lazy-load-image-component` (SPA) |
| Analytics | GA4 via script tag |
| Booking | SimplyBook.me embed/iframe (unchanged) |

## 6. Phased Migration
1. **Audit & inventory** — content, assets, brand tokens, URL map.
2. **Design system** — tokens, UI primitives, theme.
3. **Core build (EN)** — landing + section pages, header/footer, responsive nav.
4. **Booking + forms** — embed SimplyBook.me; wire forms to Formspree/Web3Forms.
5. **i18n (FR, ES)** — message catalogs, locale routing, selector.
6. **SEO + a11y + perf** — structured data, hreflang, alt text, Lighthouse.
7. **Cutover** — DNS switch, redirects, analytics, post-launch.