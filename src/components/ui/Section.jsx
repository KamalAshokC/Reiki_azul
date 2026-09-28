export default function Section({ id, eyebrow, title, intro, children, tint = false, className = '' }) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-20 sm:py-28 ${tint ? 'bg-sand/60' : 'bg-transparent'} ${className}`}
    >
      <div className="mx-auto max-w-content px-5 sm:px-8">
        {(eyebrow || title) && (
          <header className="mx-auto mb-14 max-w-2xl text-center">
            {eyebrow && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-azul-500">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-heading text-3xl leading-tight text-azul-700 sm:text-4xl md:text-5xl">
                {title}
              </h2>
            )}
            {intro && <p className="mt-5 text-base leading-relaxed text-azul-700/75">{intro}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
