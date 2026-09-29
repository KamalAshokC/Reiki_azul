import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
// Import translations
import enTranslations from './locales/en.json';
import esTranslations from './locales/es.json';
import frTranslations from './locales/fr.json';

// Update the i18n.js file with comprehensive translations
const resources = {
  en: {
    translation: enTranslations
  },
  fr: {
      translation: frTranslations
    },
  es: {
    translation: esTranslations
  }
}
i18next.use(initReactI18next).init({
  resources,
  lng: 'en', // Default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  },
  compatibilityJSON: 'v4'
})

export default i18next