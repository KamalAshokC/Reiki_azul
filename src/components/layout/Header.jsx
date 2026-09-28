import { useEffect, useState } from 'react';
import Button from '../ui/Button';
import { SITE } from '../../lib/constants';

const NAV = [
  { href: '#about',    label: 'About My Practice' },
  { href: '#reiki',    label: 'What is Reiki?' },
  { href: '#packages', label: 'Reiki Packages' },
  { href: '#stories',  label: 'Client Stories' },
];

export default function Header({ locale, onLocaleChange }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const locales = ['en', 'fr', 'es'];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-soft backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="font-heading text-xl tracking-wide text-azul-700">
          Reiki <span className="text-azul-500">Azul</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-azul-700/80 transition-colors hover:text-azul-500"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div role="group" aria-label="Language" className="flex gap-1 text-xs font-medium">
            {locales.map((l) => (
              <button
                key={l}
                onClick={() => onLocaleChange(l)}
                aria-current={locale === l}
                className={`rounded-full px-2.5 py-1 uppercase transition ${
                  locale === l ? 'bg-azul-500 text-white' : 'text-azul-600 hover:bg-azul-50'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <Button as="a" href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">
            Book Your Session
          </Button>
        </div>

        <button
          className="rounded-lg p-2 text-azul-700 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-azul-100 bg-white px-5 pb-6 lg:hidden">
          <nav aria-label="Mobile" className="flex flex-col py-2">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-azul-50 py-3 text-azul-700"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex items-center gap-3">
            {locales.map((l) => (
              <button
                key={l}
                onClick={() => onLocaleChange(l)}
                className={`rounded-full px-3 py-1.5 text-xs uppercase ${
                  locale === l ? 'bg-azul-500 text-white' : 'bg-azul-50 text-azul-600'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <Button
            as="a"
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 w-full"
          >
            Book Your Session
          </Button>
        </div>
      )}
    </header>
  );
}
