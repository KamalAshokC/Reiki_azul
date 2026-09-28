Here is the complete, updated conversion plan — **frontend-only React app**, reusing the existing backend (Squarespace content source and SimplyBook.me booking), no separate backend required.

---

# Reiki Azul — Website Conversion & Migration Plan

**Direction:** Migrate from Squarespace to a **frontend-only React app** (static/JAMstack). Keep the existing booking system (SimplyBook.me) and current content/manual payment flow. No custom backend; forms handled via third-party services.

---

## 1. Website Analysis

### 1.1 Platform & Stack
| Item | Detail |
|---|---|
| Current platform | Squarespace (7.1) |
| Page model | Single-page homepage with in-page anchor sections |
| Booking | SimplyBook.me (`reikiazul.simplybook.me`) |
| Payments | Manual e-transfer (`rekimoonazul@gmail.com`), PayPal on request |
| Languages | EN / FR toggle (services offered in EN, FR, ES) |
| SEO title | "Reiki Montreal & South Shore | Reiki Saint-Hubert Energy Healing | Reiki Azul by Tania" |

### 1.2 Structure & Sections
1. **Header** — logo, nav (About My Practice · What is Reiki? · Reiki Packages · Client Stories), EN/FR toggle, "Book Your Session" CTA, mobile hamburger.
2. **Hero** — "Come back to yourself," Reiki & Tambour Unité sessions, Saint-Hubert / Montreal & online, primary CTA.
3. **About / My Practice** — Tania's bio, credentials (Holy Fire® World Peace Reiki, Holy Fire® III Karuna Reiki®, Tambour Unité), modalities (crystals, pendulum, drum).
4. **What is Reiki?** — explanation, Dr. Usui history, 7 benefit bullets.
5. **Reiki Packages** — 8 offerings, fees, Rapé add-on, reservation policy.
6. **Client Stories** — testimonials.
7. **Booking / Contact** — payment options, phone, booking link, footer.

### 1.3 Services Catalog (content inventory)
| Offering | Duration | Price |
|---|---|---|
| Reiki Healing Session | 90 min | $150 CAD |
| Tambour Unité – Grounding Rhythm | 90 min | $150 CAD |
| Reiki + Drum Synergy | 90 min | $150 CAD |
| Distance Reiki | 90 min | $150 CAD |
| Home Energy Cleansing | 60–75 / 90–120 min | $150 / $250 CAD |
| Gift Card | 90 min | $150 CAD |
| Reiki Level I–III | 6–7 hrs/level | $300 CAD/level |
| Reiki Level IV – Master Teacher | 3 days | $1,000 CAD |

- Rapé add-on: **+$25 CAD** · Deposit: **$50 CAD non-refundable**
- Contact: `438-501-1993` · `rekimoonazul@gmail.com` · 3955 Rue Lavoie, Saint-Hubert, Longueuil
- Hours: 10:00 AM–8:00 PM, 7 days/week

### 1.4 User Flows
- **Booking:** Visitor → package → "Book Your Session" → SimplyBook.me (external).
- **Training:** Visitor → training package → email/phone contact (manual).
- **Gift card:** Visitor → manual e-transfer with recipient name (manual).
- **Language:** EN ↔ FR toggle (client-side).

### 1.5 Design & Media (extraction required)
- **Color scheme:** calm/spiritual palette; "Azul" suggests soft blue/teal primary + warm neutrals. *Extract via DevTools → Computed Styles on `body`, `header`, buttons.*
- **Typography:** likely elegant serif headings + clean sans body (Squarespace wellness templates).
- **Photography:** hero, Tania portrait, session visuals (drum, crystals, hands, tea ritual, sacred space). *Pull from Squarespace Asset Library or DevTools Network tab.*

---

## 2. React Migration Plan

### 2.1 Framework
**Frontend-only React** — choose based on SEO needs:
- **Vite + React (SPA)** — if you accept client-side rendering simplicity. Fast, simple deploy.
- **Next.js (App Router, static export)** — recommended if local SEO matters; provides SSG, `next/image`, and per-locale static routes without a backend.

✅ **Recommendation: Next.js with `output: 'export'` (static-only)** — gives SEO benefits while staying frontend-only.

### 2.2 Component Architecture
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

### 2.3 State Management
Keep **minimal** — no global store, no server state:
- **Language:** i18n library context (`react-i18next` for SPA, `next-intl` for Next.js).
- **UI state** (mobile menu, accordions, modals): local `useState`.
- No Redux/Zustand needed for a content site.

### 2.4 Routing & Navigation
- **Next.js:** locale-prefixed routes `/en`, `/fr`, `/es` with `generateStaticParams`.
- **Vite SPA:** `react-router-dom` v6 with locale path segments.
- Preserve old Squarespace URLs via **301 redirects** (host-level config).

### 2.5 Third-Party Libraries
| Need | Recommendation |
|---|---|
| i18n | `next-intl` (Next.js) or `react-i18next` + `i18next` (SPA) |
| Styling | Tailwind CSS + design tokens |
| Forms | `react-hook-form` + `zod` (client validation) |
| Form handling (no backend) | Formspree / Web3Forms / Resend |
| Images | `next/image` (Next.js) or `react-lazy-load-image-component` (SPA) |
| Analytics | GA4 via script tag |
| Booking | SimplyBook.me embed/iframe (unchanged) |

### 2.6 Phased Migration
1. **Audit & inventory** — content, assets, brand tokens, URL map.
2. **Design system** — tokens, UI primitives, theme.
3. **Core build (EN)** — landing + section pages, header/footer, responsive nav.
4. **Booking + forms** — embed SimplyBook.me; wire forms to Formspree/Web3Forms.
5. **i18n (FR, ES)** — message catalogs, locale routing, selector.
6. **SEO + a11y + perf** — structured data, hreflang, alt text, Lighthouse.
7. **Cutover** — DNS switch, redirects, analytics, post-launch.

---

## 3. Multi-Language Support Implementation

### 3.1 i18n Library
- **Next.js:** `next-intl` (typed, server-friendly, ICU formatting, locale routing).
- **Vite SPA:** `react-i18next` + `i18next` with `i18next-browser-languagedetector`.

### 3.2 URL Structure
Subpath locales (best SEO):
- `reikiazul.com/en/…` (default) · `/fr/…` · `/es/…`
- Add `hreflang` tags + `lang` attribute.

### 3.3 Language Selector
- **Placement:** header (desktop) + mobile menu; globe/dropdown.
- **Behavior:** persists via localStorage/cookie, preserves current page on switch.
- Native names, not flags: English / Français / Español.

### 3.4 Content Organization
- Messages per locale in `src/messages/{en,fr,es}.json`.
- Prices/currency centralized in a constants file, formatted per locale.
- Confirm ES scope: full Spanish site vs. service-language note only.

---

## 4. Design & Theming

### 4.1 Extracting Brand (procedure)
1. DevTools → Computed tab → record key colors, fonts, sizes.
2. Squarespace **Design → Fonts / Colors** panels.
3. Export images from **Settings → Files / Asset Library**.

### 4.2 Palette & Typography (verify during audit)
- **Primary:** soft blue/teal (`#4A7C8C`–`#5B9BAE` range)
- **Accent:** warm cream/sand (`#F5EFE6`), sage/earth tones
- **Text:** deep slate (`#2F3E46`)
- **Fonts:** elegant serif headings + clean sans body (confirm exact).

### 4.3 Styling Approach
- **Tailwind CSS + CSS custom properties (design tokens).**
- Define tokens in `:root`; expose as Tailwind theme.
- Support future theming via `[data-theme="…"]` overrides.

### 4.4 Theme System
```css
:root {
  --color-primary: …; --color-accent: …; --color-bg: …;
  --font-heading: …; --font-body: …;
  --radius-lg: …; --shadow-soft: …;
}
```
Build reusable `Button`, `Card`, `Section`, `Badge` primitives for consistency.

---

## 5. Asset Management

### 5.1 Asset Catalog
Create a spreadsheet: filename · usage/location · dimensions · size · alt text · license.
Categories: hero, Tania portrait, session photos (drum, crystals, hands, tea), training, gift card.

### 5.2 Optimization & Delivery
- `next/image` (or lazy load in SPA) for responsive `srcset` + lazy loading.
- CDN with long cache headers; preload hero (LCP); lazy-load below-fold.

### 5.3 Formats & Compression
- Photos: **WebP** (AVIF fallback) · ≤ 200 KB, quality 70–80.
- Hero: 1600–2400px, ~150–200 KB.
- SVG for logos/icons; meaningful **alt text** everywhere.

### 5.4 Organization
```
public/images/
├── hero/ · about/ · services/ · training/ · testimonials/ · icons/
```

---

## 6. Improvements & Recommendations

### 6.1 Performance
- Drop Squarespace overhead → faster TTFB.
- Image optimization, lazy loading, font subsetting + `font-display: swap`.
- Route code-splitting; target Lighthouse ≥ 90 mobile.

### 6.2 UX/UI Enhancements
- **Sticky "Book" CTA** on scroll (mobile-first).
- **Pricing comparison table** for 8 packages.
- **FAQ accordion** (deposit, Rapé, distance sessions, what to expect).
- **Embed booking on-site** instead of redirecting away.
- Newsletter/email capture (Formspree/Web3Forms).

### 6.3 Accessibility
- WCAG 2.1 AA: contrast ≥ 4.5:1, visible focus, keyboard nav.
- Skip-to-content link, semantic landmarks, proper heading hierarchy.
- Alt text, labeled forms with errors.

### 6.4 SEO
- **Structured data:** `LocalBusiness`/`HealthAndBeautyBusiness`, `Service` (with price), `FAQPage`, `Review`.
- Per-locale metadata + `hreflang`, sitemap, `robots.txt`, canonicals.
- Strengthen Google Business Profile (NAP consistency).
- Add resources/blog section for long-tail content.

### 6.5 Missing Features (scope notes)
| Gap | Status / Recommendation |
|---|---|
| Online payment | **Out of scope** (keep manual e-transfer) |
| Gift card automation | **Out of scope** (keep manual flow) |
| Training application form | Add client-side form → Formspree/Web3Forms |
| FAQ | Add FAQ accordion |
| Analytics/conversion tracking | Add GA4 + booking events |
| Spanish full site | Decide scope: full ES vs. service note |
| Cookie/consent notice | Add privacy-friendly banner |
| Blog/content | Optional resources section |

---

## 7. Implementation Timeline

| Phase | Deliverables | Effort |
|---|---|---|
| **1. Discovery & Audit** (Wk 1) | Content/asset inventory, brand tokens, URL map, requirements | 2–3 days |
| **2. Design System & Setup** (Wk 1–2) | React/Next.js scaffold, tokens, UI primitives | 4–5 days |
| **3. Core Build (EN)** (Wk 2–4) | Landing + section pages, header/footer, nav | 10–12 days |
| **4. Booking + Forms** (Wk 4–5) | SimplyBook embed, Formspree/Web3Forms wiring | 3–4 days |
| **5. i18n (FR, ES)** (Wk 5–6) | Message catalogs, locale routes, selector | 5–7 days |
| **6. SEO / A11y / Perf** (Wk 6–7) | Structured data, hreflang, alt text, Lighthouse QA | 4–5 days |
| **7. Launch & Handoff** (Wk 7–8) | Redirects, DNS cutover, analytics, handoff docs | 3–4 days |

**Total: ~6–7 weeks** solo; **~4 weeks** with a small team. Milestones: staging demo (Wk 4) → i18n complete (Wk 6) → launch (Wk 8).

---

**Immediate next actions:** (1) run brand/asset extraction (§4.1), (2) confirm Spanish scope, (3) finalize Next.js (static export) vs. Vite SPA choice. These unblock phases 1–4.
