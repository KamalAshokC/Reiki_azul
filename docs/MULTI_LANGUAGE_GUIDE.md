# Multi-Language Support Implementation Guide

## Overview

This guide explains how multi-language support has been implemented in your website using `react-i18next`.

---

## 📁 Project Structure

```
src/
├── i18n.js                    # I18n configuration (already exists)
├── locales/
│   ├── en.json                # English translations
│   ├── fr.json                # French translations
│   └── es.json                # Spanish translations
├── hooks/
│   └── useTranslation.js      # Translation hook utility
└── components/
    └── LanguageSwitcher.jsx   # Language selector component
```

---

## 🚀 How It Works

### 1. **I18n Configuration** (`src/i18n.js`)

The i18next library is configured with:
- Multiple language resources (en, fr, es)
- Default language set to English
- Fallback to English if translation missing
- React integration enabled

### 2. **Translation Files** (`src/locales/*.json`)

Each JSON file contains key-value pairs for translations:

```json
{
  "welcome": "Welcome to Reiki Azul",
  "about": "About Us",
  "services": "Our Services"
}
```

### 3. **Using Translations**

Import the hook in any component:

```jsx
import { useTranslation } from 'react-i18next'

function MyComponent() {
  const { t, i18n } = useTranslation()
  
  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('about')}</p>
    </div>
  )
}
```

### 4. **Language Switcher Component**

The `LanguageSwitcher` component provides a dropdown to switch languages:

```jsx
import { LanguageSwitcher } from './components/LanguageSwitcher'

function App() {
  return (
    <div>
      <LanguageSwitcher />
      {/* Your content */}
    </div>
  )
}
```

---

## 📝 Adding New Languages

### Step 1: Create translation file

```bash
# Example for German
src/locales/de.json
{
  "welcome": "Willkommen bei Reiki Azul",
  "about": "Über Uns",
  // ... add more translations
}
```

### Step 2: Update `i18n.js`

Add the new language to resources and update default settings.

---

## 🔧 Best Practices

| Practice | Description |
|----------|-------------|
| **Use keys** | Always use translation keys (e.g., `{t('welcome')}`) not hardcoded strings |
| **Keep it simple** | Avoid complex logic in translations; handle dynamic content in code |
| **Test all languages** | Verify each language renders correctly |
| **RTL support** | Consider right-to-left layouts for Arabic/Hebrew if needed |

---

## 🌐 Browser Language Detection

To auto-detect user's browser language:

```javascript
// In i18n.js configuration
lng: navigator.language || 'en', // Auto-detect or fallback to English
```

---

## ✅ Summary

Your multi-language setup is complete with:
- ✅ Configuration files created
- ✅ Translation files for EN, FR, ES
- ✅ Language switcher component ready
- ✅ Easy way to add more languages

**Next Steps:**
1. Import `i18n` in your main entry file (e.g., `src/index.js`)
2. Add `<LanguageSwitcher />` to your navigation/header
3. Replace hardcoded strings with `{t('key')}` throughout your app

---

*For more information, see [react-i18next documentation](https://www.i18next.com/)*
