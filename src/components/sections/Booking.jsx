import Section from '../ui/Section';
import Button from '../ui/Button';
import { SITE } from '../../lib/constants';
import { useTranslation } from 'react-i18next';

export default function Booking() {
  const { t } = useTranslation();

  return (
    <Section id="book" eyebrow={t('bookingEyebrow')} title={t('reserveSessionTitle')}>
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="rounded-2xl bg-white p-8 shadow-soft">
          <h3 className="font-heading text-2xl text-azul-700">{t('howToBook')}</h3>
          <ol className="mt-6 space-y-4 text-sm leading-relaxed text-azul-700/80">
            <li>
              <strong className="font-medium text-azul-700">1. {t('step1')}</strong>
            </li>
            <li>
              <strong className="font-medium text-azul-700">2. {t('step2')}</strong>
            </li>
            <li>
              <strong className="font-medium text-azul-700">3. {t('step3')}</strong>
            </li>
          </ol>

          <Button
            as="a"
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 w-full sm:w-auto"
          >
            {t('openBookingCalendar')}
          </Button>

          <div className="mt-6 text-sm text-azul-700/70">
            <p>{t('trainingsGiftCardsNote')}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl bg-sand/70 p-8">
            <h3 className="font-heading text-2xl text-azul-700">{t('payment')}</h3>
            <ul className="mt-5 space-y-3 text-sm text-azul-700/80">
              <li>
                {t('interacEmail', { email: SITE.email })}
              </li>
              <li>{t('paypalAvailable')}</li>
              <li>{t('deposit')} ${SITE.deposit} CAD, {t('nonRefundable')}</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-azul-500 p-8 text-white">
            <h3 className="font-heading text-2xl">{t('visitStudio')}</h3>
            <address className="mt-5 space-y-2 text-sm not-italic text-white/90">
              <p>{SITE.address}</p>
              <p>
                <a href={`tel:+1${SITE.phone.replace(/-/g, '')}`} className="hover:underline">
                  {SITE.phone}
                </a>
              </p>
              <p>{SITE.hours}</p>
            </address>
          </div>
        </div>
      </div>
    </Section>
  );
}
