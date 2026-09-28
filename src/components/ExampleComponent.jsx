import { useTranslation } from 'react-i18next'

export function ExampleComponent() {
  const { t, i18n } = useTranslation()
  
  return (
    <div className="example-component">
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
      <nav>
        <a href="#home">{t('home')}</a>
        <a href="#about">{t('about')}</a>
        <a href="#services">{t('services')}</a>
        <a href="#contact">{t('contact')}</a>
      </nav>
    </div>
  )
}