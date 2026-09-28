import Section from '../ui/Section';

const CREDENTIALS = [
  'Holy Fire® World Peace Reiki',
  'Holy Fire® III Karuna Reiki®',
  'Tambour Unité Practitioner',
];

export default function About() {
  return (
    <Section id="about" eyebrow="My Practice" title="A space to slow down and listen">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-sand to-azul-100 shadow-soft">
          {/* Replace with Tania portrait: <img src="/images/about/tania.webp" alt="Tania, Reiki practitioner" ... /> */}
        </div>

        <div>
          <p className="leading-relaxed text-azul-700/85">
            I&rsquo;m Tania, a Reiki practitioner based in Saint-Hubert on Montreal&rsquo;s South
            Shore. My practice is built on presence: creating a quiet, unhurried space where your
            body can release what it no longer needs to carry.
          </p>
          <p className="mt-4 leading-relaxed text-azul-700/85">
            Each session blends traditional Usui Reiki with the grounding rhythm of the Tambour
            Unité, and may include crystals, pendulum work, or sound — always guided by what you
            need in the moment.
          </p>

          <ul className="mt-8 flex flex-wrap gap-2">
            {CREDENTIALS.map((c) => (
              <li
                key={c}
                className="rounded-full bg-sand px-4 py-1.5 text-sm text-azul-700/90"
              >
                {c}
              </li>
            ))}
          </ul>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-azul-100 pt-8 text-center">
            {[
              { k: '90', v: 'min sessions' },
              { k: '7',  v: 'days a week' },
              { k: '3',  v: 'languages' },
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
