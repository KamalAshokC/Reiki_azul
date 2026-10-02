import Button from '../ui/Button';
import { useTranslation } from 'react-i18next';
import pendulam from '/src/assets/balance_pendulam.png'

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="top" className="relative overflow-hidden bg-azul-50">
      {/* Soft radial wash — replace with <img> hero photo when assets land */}
      <img
        src={pendulam}
        alt="Reiki Azul hero image"
        aria-hidden="true"
        className="absolute bg-gradient-to-br from-azul-200/60 via-sand to-transparent "
      />

      <div className="relative mx-auto max-w-content px-5 py-24 sm:px-8 sm:py-32 lg:py-40">
        <div className="max-w-2xl animate-fadeUp">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-azul-500">
            {t('saintHubertLocation')}
          </p>
          <h1 className="font-heading text-4xl leading-[1.1] text-azul-700 sm:text-5xl lg:text-6xl">
            {t('heroTitle')}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-azul-700/80">
            {t('heroDescription')}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button
              as="a"
              href="https://reikiazul.simplybook.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('bookYourSession')}
            </Button>
            <Button as="a" href="#packages" variant="outline">
              {t('viewPackages')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
