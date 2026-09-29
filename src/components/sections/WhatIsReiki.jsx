import Section from '../ui/Section';
import { BENEFITS } from '../../lib/constants';
import { useTranslation } from 'react-i18next';

export default function WhatIsReiki() {
  const { t } = useTranslation();

  return (
    <Section
      id="reiki"
      tint
      eyebrow={t('whatIsReikiEyebrow')}
      title={t('reikiTitle')}
      intro={t('reikiDescription')}
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {BENEFITS.map((b) => (
          <li
            key={b}
            className="flex items-start gap-3 rounded-xl bg-white p-5 shadow-soft transition-shadow hover:shadow-lift"
          >
            <span aria-hidden="true" className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sage" />
            <span className="text-sm leading-relaxed text-azul-700/85">{t(b)}</span>
          </li>
        ))}
      </ul>

      <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-azul-700/60">
        {t('reikiDisclaimer')}
      </p>
    </Section>
  );
}
