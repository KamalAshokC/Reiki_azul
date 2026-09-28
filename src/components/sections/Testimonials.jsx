import Section from '../ui/Section';

const STORIES = [
  {
    quote:
      'I arrived carrying months of tension and left feeling like I could finally breathe. The drum work was unlike anything I had experienced.',
    name: 'Marie-Claude',
    detail: 'Reiki + Drum Synergy',
  },
  {
    quote:
      'Even at a distance I felt warmth in my chest within minutes. I slept better that night than I had in weeks.',
    name: 'Priya',
    detail: 'Distance Reiki',
  },
  {
    quote:
      'Tania creates such a safe, quiet space. The home cleansing left our whole apartment feeling lighter.',
    name: 'Jonathan',
    detail: 'Home Energy Cleansing',
  },
];

export default function Testimonials() {
  return (
    <Section id="stories" tint eyebrow="Client Stories" title="What people say afterwards">
      <div className="grid gap-6 md:grid-cols-3">
        {STORIES.map((s) => (
          <figure
            key={s.name}
            className="flex flex-col rounded-2xl bg-white p-7 shadow-soft"
            itemScope
            itemType="https://schema.org/Review"
          >
            <div aria-label="5 out of 5 stars" className="mb-4 text-azul-400">
              ★★★★★
            </div>
            <blockquote className="flex-1 font-heading text-lg leading-relaxed text-azul-700/90" itemProp="reviewBody">
              &ldquo;{s.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 border-t border-azul-50 pt-4">
              <p className="text-sm font-medium text-azul-700">{s.name}</p>
              <p className="text-xs text-azul-700/55">{s.detail}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
