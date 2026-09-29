import { useEffect, useState } from 'react';
import { SITE } from '../../lib/constants';
import { useTranslation } from 'react-i18next';

export default function StickyBookCta() {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-azul-100 bg-white/95 p-3 backdrop-blur lg:hidden">
      <a
        href={SITE.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-full bg-azul-500 py-3 text-center text-sm font-medium text-white shadow-lift"
      >
        {t('bookYourSession')}
      </a>
    </div>
  );
}
