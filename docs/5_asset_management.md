# Asset Management

## 1. Asset Catalog
Create a spreadsheet: filename · usage/location · dimensions · size · alt text · license.
Categories: hero, Tania portrait, session photos (drum, crystals, hands, tea), training, gift card.

## 2. Optimization & Delivery
- `next/image` (or lazy load in SPA) for responsive `srcset` + lazy loading.
- CDN with long cache headers; preload hero (LCP); lazy-load below-fold.

## 3. Formats & Compression
- Photos: **WebP** (AVIF fallback) · ≤ 200 KB, quality 70–80.
- Hero: 1600–2400px, ~150–200 KB.
- SVG for logos/icons; meaningful **alt text** everywhere.

## 4. Organization
```
public/images/
├── hero/ · about/ · services/ · training/ · testimonials/ · icons/
```