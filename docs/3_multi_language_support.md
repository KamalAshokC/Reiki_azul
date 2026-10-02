# Multi-Language Support Implementation

## 1. i18n Library
- **Next.js:** `next-intl` (typed, server-friendly, ICU formatting, locale routing).
- **Vite SPA:** `react-i18next` + `i18next` with `i18next-browser-languagedetector`.

## 2. URL Structure
Subpath locales (best SEO):
- `reikiazul.com/en/…` (default) · `/fr/…` · `/es/…`
- Add `hreflang` tags + `lang` attribute.

## 3. Language Selector
- **Placement:** header (desktop) + mobile menu; globe/dropdown.
- **Behavior:** persists via localStorage/cookie, preserves current page on switch.
- Native names, not flags: English / Français / Español.

## 4. Content Organization
- Messages per locale in `src/messages/{en,fr,es}.json`.
- Prices/currency centralized in a constants file, formatted per locale.
- Confirm ES scope: full Spanish site vs. service-language note only.