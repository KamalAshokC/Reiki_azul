import Button from '../ui/Button';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-azul-50">
      {/* Soft radial wash — replace with <img> hero photo when assets land */}
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-32 h-[36rem] w-[36rem] rounded-full
                   bg-gradient-to-br from-azul-200/60 via-sand to-transparent blur-3xl"
      />

      <div className="relative mx-auto max-w-content px-5 py-24 sm:px-8 sm:py-32 lg:py-40">
        <div className="max-w-2xl animate-fadeUp">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-azul-500">
            Saint-Hubert · Montreal &amp; Online
          </p>
          <h1 className="font-heading text-4xl leading-[1.1] text-azul-700 sm:text-5xl lg:text-6xl">
            Come back to yourself.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-azul-700/80">
            Reiki and Tambour Unité sessions in a calm, sacred space — in person on the South Shore
            or at a distance, wherever you are.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button
              as="a"
              href="https://reikiazul.simplybook.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Session
            </Button>
            <Button as="a" href="#packages" variant="outline">
              View Packages
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
