import { SITE } from '../../lib/constants';

export default function Footer() {
  return (
    <footer className="border-t border-azul-100 bg-white py-12">
      <div className="mx-auto grid max-w-content gap-8 px-5 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-heading text-xl text-azul-700">
            Reiki <span className="text-azul-500">Azul</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-azul-700/65">
            Energy healing with Tania — Saint-Hubert, Montreal &amp; South Shore, and online.
          </p>
        </div>

        <nav aria-label="Footer" className="text-sm">
          <ul className="space-y-2 text-azul-700/75">
            <li><a className="hover:text-azul-500" href="#about">About My Practice</a></li>
            <li><a className="hover:text-azul-500" href="#reiki">What is Reiki?</a></li>
            <li><a className="hover:text-azul-500" href="#packages">Reiki Packages</a></li>
            <li><a className="hover:text-azul-500" href="#stories">Client Stories</a></li>
          </ul>
        </nav>

        <div className="text-sm text-azul-700/75">
          <p>{SITE.phone}</p>
          <p className="mt-1">
            <a className="hover:text-azul-500" href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>
          <p className="mt-1">{SITE.hours}</p>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-content px-5 text-xs text-azul-700/45 sm:px-8">
        © {new Date().getFullYear()} Reiki Azul. Reiki is a complementary practice and does not replace medical care.
      </p>
    </footer>
  );
}
