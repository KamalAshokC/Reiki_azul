import Section from '../ui/Section';
import { useTranslation } from 'react-i18next';

const CREDENTIALS = [
  'Holy Fire® World Peace Reiki',
  'Holy Fire® III Karuna Reiki®',
  'Tambour Unité Practitioner',
];

export default function About() {
  const { t } = useTranslation();

  return (
    <Section id="about" eyebrow={t('myPracticeEyebrow')} title={t('aboutTitle')}>
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-sand to-azul-100 shadow-soft">
          {/* Replace with Tania portrait: <img src="/images/about/tania.webp" alt="Tania, Reiki practitioner" ... /> */}
        </div>

        <div>
          <p className="leading-relaxed text-azul-700/85">
            {t('aboutDescription1')}
          </p>
          <p className="mt-4 leading-relaxed text-azul-700/85">
            {t('aboutDescription2')}
          </p>

          <ul className="mt-8 flex flex-wrap gap-2">
            {CREDENTIALS.map((c) => (
              <li
                key={c}
                className="rounded-full bg-sand px-4 py-1.5 text-sm text-azul-700/90"
              >
                {t(c)}
              </li>
            ))}
          </ul>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-azul-100 pt-8 text-center">
            {[
              { k: '90', v: t('minSessions') },
              { k: '7',  v: t('daysAWeek') },
              { k: '3',  v: t('languages') },
            ].map((s) => (
              <div key={s.v}>
                <p className="font-heading text-3xl text-azul-500">{s.k}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-azul-700/60">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
