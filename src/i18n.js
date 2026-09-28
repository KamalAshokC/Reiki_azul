import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      welcome: "Welcome to Reiki Azul",
      about: "About Us",
      services: "Our Services",
      contact: "Contact",
      home: "Home",
      menu: "Menu"
    }
  },
  fr: {
    translation: {
      welcome: "Bienvenue chez Reiki Azul",
      about: "À Propos",
      services: "Nos Services",
      contact: "Contact",
      home: "Accueil",
      menu: "Menu"
    }
  },
  es: {
    translation: {
      welcome: "Bienvenido a Reiki Azul",
      about: "Sobre Nosotros",
      services: "Nuestros Servicios",
      contact: "Contacto",
      home: "Inicio",
      menu: "Menú"
    }
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