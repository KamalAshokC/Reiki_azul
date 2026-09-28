import Section from '../ui/Section';
import { BENEFITS } from '../../lib/constants';

export default function WhatIsReiki() {
  return (
    <Section
      id="reiki"
      tint
      eyebrow="What is Reiki?"
      title="Universal life energy, guided by intention"
      intro="Reiki is a gentle Japanese energy practice developed by Dr. Mikao Usui in the early 20th century. The practitioner channels universal life energy through light touch or at a distance, supporting the body’s own capacity to restore balance."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {BENEFITS.map((b) => (
          <li
            key={b}
            className="flex items-start gap-3 rounded-xl bg-white p-5 shadow-soft transition-shadow hover:shadow-lift"
          >
            <span aria-hidden="true" className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sage" />
            <span className="text-sm leading-relaxed text-azul-700/85">{b}</span>
          </li>
        ))}
      </ul>

      <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-azul-700/60">
        Reiki is a complementary practice. It supports — and never replaces — medical or
        psychological care.
      </p>
    </Section>
  );
}
