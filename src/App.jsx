import { useState } from 'react'
import i18next from './i18n'
import { useTranslation, Trans } from 'react-i18next'

function App() {
  const [lng, setLng] = useState(i18next.language)
  
  const { t, i18n } = useTranslation()
  
  const changeLanguage = (value) => {
    i18n.changeLanguage(value)
    setLng(value)
  }

  return (
    <div className="app">
      <nav>
        <span>{t('menu')}</span>
        <select 
          value={lng} 
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="es">Español</option>
        </select>
      </nav>

      <header>
        <h1>{t('welcome')}</h1>
      </header>

      <main>
        <section className="about">
          <h2>{t('about')}</h2>
          <p>About content here...</p>
        </section>

        <section className="services">
          <h2>{t('services')}</h2>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
        </section>

        <footer className="contact">
          <h2>{t('contact')}</h2>
          <p>Contact information...</p>
        </footer>
      </main>
    </div>
  )
}

export default App