import Section from '../ui/Section';
import Button from '../ui/Button';
import { SERVICES, SITE } from '../../lib/constants';
import { useTranslation } from 'react-i18next';

const cad = (n) => `$${n} CAD`;

export default function Packages() {
  const { t } = useTranslation();

  return (
    <Section
      id="packages"
      eyebrow={t('packagesEyebrow')}
      title={t('sessionsTrainingsTitle')}
      intro={t('packagesIntro')}
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s) => (
          <article
            key={s.id}
            className="flex flex-col rounded-2xl border border-azul-100 bg-white p-6 shadow-soft
                       transition-all duration-200 hover:-translate-y-1 hover:shadow-lift"
          >
            <h3 className="font-heading text-xl leading-snug text-azul-700">{t(s.name)}</h3>
            <p className="mt-2 text-xs uppercase tracking-wider text-azul-700/55">{s.duration}</p>

            <p className="mt-5 font-heading text-3xl text-azul-500">
              {s.priceAlt ? `${cad(s.price)} – ${cad(s.priceAlt)}` : cad(s.price)}
              {s.unit && <span className="ml-1 text-sm text-azul-700/50">{t(s.unit)}</span>}
            </p>

            <div className="mt-auto pt-6">
              {s.cta === 'book' ? (
                <Button
                  as="a"
                  href={SITE.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  className="w-full"
                >
                  {t('book')}
                </Button>
              ) : (
                <Button as="a" href="#book" variant="outline" className="w-full">
                  {t('enquire')}
                </Button>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 rounded-xl bg-white/70 py-4 text-sm text-azul-700/75">
        <span>
          <strong className="font-medium text-azul-700">{t('rapeAddOn')}</strong> +{cad(SITE.rapeAddOn)}
        </span>
        <span>
          <strong className="font-medium text-azul-700">{t('deposit')}</strong> {cad(SITE.deposit)} {t('nonRefundable')}
        </span>
      </div>

      <Faq />
    </Section>
  );
}

function Faq() {
  const { t } = useTranslation();

  const items = [
    {
      q: t('whatToExpect'),
      a: t('faqSessionDescription'),
    },
    {
      q: t('howDistanceReikiWorks'),
      a: t('faqDistanceDescription'),
    },
    {
      q: t('whatIsRapeAddOn'),
      a: t('faqRapeDescription'),
    },
    {
      q: t('cancellationPolicy'),
      a: t('faqCancellationDescription'),
    },
  ];

  return (
    <div className="mx-auto mt-16 max-w-3xl divide-y divide-azul-100 border-y border-azul-100">
      {items.map(({ q, a }) => (
        <details key={q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-lg text-azul-700 marker:hidden">
            {q}
            <span
              aria-hidden="true"
              className="text-azul-400 transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 pr-8 text-sm leading-relaxed text-azul-700/75">{a}</p>
        </details>
      ))}
    </div>
  );
}
