export const SITE = {
  name: 'Reiki Azul',
  practitioner: 'Tania',
  phone: '438-501-1993',
  email: 'rekimoonazul@gmail.com',
  address: '3955 Rue Lavoie, Saint-Hubert, Longueuil, QC',
  hours: '10:00 AM – 8:00 PM, 7 days a week',
  bookingUrl: 'https://reikiazul.simplybook.me',
  deposit: 50,
  rapeAddOn: 25,
};

export const SERVICES = [
  { id: 'reiki',        name: 'Reiki Healing Session',       duration: '90 min',          price: 150,  cta: 'book' },
  { id: 'tambour',      name: 'Tambour Unité — Grounding Rhythm', duration: '90 min',     price: 150,  cta: 'book' },
  { id: 'synergy',      name: 'Reiki + Drum Synergy',        duration: '90 min',          price: 150,  cta: 'book' },
  { id: 'distance',     name: 'Distance Reiki',              duration: '90 min',          price: 150,  cta: 'book' },
  { id: 'home',         name: 'Home Energy Cleansing',       duration: '60–75 / 90–120 min', price: 150, priceAlt: 250, cta: 'book' },
  { id: 'gift',         name: 'Gift Card',                   duration: '90 min',          price: 150,  cta: 'contact' },
  { id: 'training-1-3', name: 'Reiki Level I–III',           duration: '6–7 hrs per level', price: 300, unit: 'per level', cta: 'contact' },
  { id: 'training-4',   name: 'Reiki Level IV — Master Teacher', duration: '3 days',      price: 1000, cta: 'contact' },
];

export const BENEFITS = [
  'Deep relaxation and stress release',
  'Eases anxiety and mental fatigue',
  'Supports restful sleep',
  'Relieves physical tension and discomfort',
  'Balances emotional energy',
  'Strengthens the body’s natural healing response',
  'Creates a lasting sense of calm and clarity',
];
