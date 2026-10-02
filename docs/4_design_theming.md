# Design & Theming

## 1. Extracting Brand (procedure)
1. DevTools → Computed tab → record key colors, fonts, sizes.
2. Squarespace **Design → Fonts / Colors** panels.
3. Export images from **Settings → Files / Asset Library**.

## 2. Palette & Typography (verify during audit)
- **Primary:** soft blue/teal (`#4A7C8C`–`#5B9BAE` range)
- **Accent:** warm cream/sand (`#F5EFE6`), sage/earth tones
- **Text:** deep slate (`#2F3E46`)
- **Fonts:** elegant serif headings + clean sans body (confirm exact).

## 3. Styling Approach
- **Tailwind CSS + CSS custom properties (design tokens).**
- Define tokens in `:root`; expose as Tailwind theme.
- Support future theming via `[data-theme="…"]` overrides.

## 4. Theme System
```css
:root {
  --color-primary: …; --color-accent: …; --color-bg: …;
  --font-heading: …; --font-body: …;
  --radius-lg: …; --shadow-soft: …;
}
```
Build reusable `Button`, `Card`, `Section`, `Badge` primitives for consistency.