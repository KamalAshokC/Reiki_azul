import Section from '../ui/Section';
import Button from '../ui/Button';
import { SERVICES, SITE } from '../../lib/constants';

const cad = (n) => `$${n} CAD`;

export default function Packages() {
  return (
    <Section
      id="packages"
      eyebrow="Reiki Packages"
      title="Sessions & trainings"
      intro="All sessions are 90 minutes unless noted. A $50 non-refundable deposit reserves your time."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s) => (
          <article
            key={s.id}
            className="flex flex-col rounded-2xl border border-azul-100 bg-white p-6 shadow-soft
                       transition-all duration-200 hover:-translate-y-1 hover:shadow-lift"
          >
            <h3 className="font-heading text-xl leading-snug text-azul-700">{s.name}</h3>
            <p className="mt-2 text-xs uppercase tracking-wider text-azul-700/55">{s.duration}</p>

            <p className="mt-5 font-heading text-3xl text-azul-500">
              {s.priceAlt ? `${cad(s.price)} – ${cad(s.priceAlt)}` : cad(s.price)}
              {s.unit && <span className="ml-1 text-sm text-azul-700/50">{s.unit}</span>}
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
                  Book
                </Button>
              ) : (
                <Button as="a" href="#book" variant="outline" className="w-full">
                  Enquire
                </Button>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 rounded-xl bg-white/70 py-4 text-sm text-azul-700/75">
        <span>
          <strong className="font-medium text-azul-700">Rapé add-on</strong> +{cad(SITE.rapeAddOn)}
        </span>
        <span>
          <strong className="font-medium text-azul-700">Deposit</strong> {cad(SITE.deposit)} non-refundable
        </span>
      </div>

      <Faq />
    </Section>
  );
}

function Faq() {
  const items = [
    {
      q: 'What should I expect in a session?',
      a: 'You remain fully clothed and rest on a massage table or chair while I work with light touch or hands hovering above the body. Most people feel deep warmth, heaviness, or a sense of drifting.',
    },
    {
      q: 'How does Distance Reiki work?',
      a: 'Energy is not limited by space. We agree on a time, and you rest comfortably at home while I hold the session remotely. Afterwards we talk through what came up.',
    },
    {
      q: 'What is the Rapé add-on?',
      a: 'Rapé is a traditional Amazonian snuff offered as an optional grounding element before or after your session. It adds $25 and is always by choice.',
    },
    {
      q: 'What is your cancellation policy?',
      a: 'The $50 deposit is non-refundable. Please give at least 24 hours’ notice to reschedule and the deposit will carry over to your new appointment.',
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
