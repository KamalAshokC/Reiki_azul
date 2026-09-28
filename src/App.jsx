import { useEffect, useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import WhatIsReiki from './components/sections/WhatIsReiki';
import Packages from './components/sections/Packages';
import Testimonials from './components/sections/Testimonials';
import Booking from './components/sections/Booking';
import StickyBookCta from './components/booking/StickyBookCta';
import { SITE, SERVICES } from './lib/constants';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['HealthAndBeautyBusiness', 'LocalBusiness'],
  name: SITE.name,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '3955 Rue Lavoie',
    addressLocality: 'Saint-Hubert',
    addressRegion: 'QC',
    addressCountry: 'CA',
  },
  openingHours: 'Mo-Su 10:00-20:00',
  makesOffer: SERVICES.map((s) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name: s.name },
    price: s.price,
    priceCurrency: 'CAD',
  })),
};

export default function App() {
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    const stored = localStorage.getItem('azul-locale');
    if (stored) setLocale(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem('azul-locale', locale);
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60]
                   focus:rounded-full focus:bg-azul-500 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <Header locale={locale} onLocaleChange={setLocale} />

      <main id="main" className="bg-[#FDFCFA] font-body text-azul-700 antialiased">
        <Hero />
        <About />
        <WhatIsReiki />
        <Packages />
        <Testimonials />
        <Booking />
      </main>

      <Footer />
      <StickyBookCta />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
