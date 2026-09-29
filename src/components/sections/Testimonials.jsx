import Section from '../ui/Section';
import { useTranslation } from 'react-i18next';

const STORIES = [
  {
    quoteKey: 'testimonial1',
    nameKey: 'marieClaude',
    detailKey: 'reikiDrumSynergyLabel',
  },
  {
    quoteKey: 'testimonial2',
    nameKey: 'priya',
    detailKey: 'distanceReikiLabel',
  },
  {
    quoteKey: 'testimonial3',
    nameKey: 'jonathan',
    detailKey: 'homeEnergyCleansingLabel',
  },
];

export default function Testimonials() {
  const { t } = useTranslation();

  return (
    <Section id="stories" tint eyebrow={t('clientStoriesEyebrow')} title={t('whatPeopleSayTitle')}>
      <div className="grid gap-6 md:grid-cols-3">
        {STORIES.map((s) => (
          <figure
            key={s.nameKey}
            className="flex flex-col rounded-2xl bg-white p-7 shadow-soft"
            itemScope
            itemType="https://schema.org/Review"
          >
            <div aria-label="5 out of 5 stars" className="mb-4 text-azul-400">
              ★★★★★
            </div>
            <blockquote className="flex-1 font-heading text-lg leading-relaxed text-azul-700/90" itemProp="reviewBody">
              &ldquo;{t(s.quoteKey)}&rdquo;
            </blockquote>
            <figcaption className="mt-6 border-t border-azul-50 pt-4">
              <p className="text-sm font-medium text-azul-700">{t(s.nameKey)}</p>
              <p className="text-xs text-azul-700/55">{t(s.detailKey)}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
