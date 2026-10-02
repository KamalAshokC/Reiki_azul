# Improvements & Recommendations

## 1. Performance
- Drop Squarespace overhead → faster TTFB.
- Image optimization, lazy loading, font subsetting + `font-display: swap`.
- Route code-splitting; target Lighthouse ≥ 90 mobile.

## 2. UX/UI Enhancements
- **Sticky "Book" CTA** on scroll (mobile-first).
- **Pricing comparison table** for 8 packages.
- **FAQ accordion** (deposit, Rapé, distance sessions, what to expect).
- **Embed booking on-site** instead of redirecting away.
- Newsletter/email capture (Formspree/Web3Forms).

## 3. Accessibility
- WCAG 2.1 AA: contrast ≥ 4.5:1, visible focus, keyboard nav.
- Skip-to-content link, semantic landmarks, proper heading hierarchy.
- Alt text, labeled forms with errors.

## 4. SEO
- **Structured data:** `LocalBusiness`/`HealthAndBeautyBusiness`, `Service` (with price), `FAQPage`, `Review`.
- Per-locale metadata + `hreflang`, sitemap, `robots.txt`, canonicals.
- Strengthen Google Business Profile (NAP consistency).
- Add resources/blog section for long-tail content.

## 5. Missing Features (scope notes)
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