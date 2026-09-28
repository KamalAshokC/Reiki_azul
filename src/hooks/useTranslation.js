import { useTranslation } from 'react-i18next'

export function useTranslation() {
  const [t, i18n] = useTranslation()
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }
  
  return { t, i18n }
}