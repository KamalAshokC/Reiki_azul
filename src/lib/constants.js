// Update constants to use translation keys

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
  { id: 'reiki',        nameKey: 'reikiHealingSession',       duration: '90 min',          price: 150,  cta: 'book' },
  { id: 'tambour',      nameKey: 'tambourUniteGroundingRhythm', duration: '90 min',     price: 150,  cta: 'book' },
  { id: 'synergy',      nameKey: 'reikiDrumSynergy',        duration: '90 min',          price: 150,  cta: 'book' },
  { id: 'distance',     nameKey: 'distanceReiki',              duration: '90 min',          price: 150,  cta: 'book' },
  { id: 'home',         nameKey: 'homeEnergyCleansing',       duration: '60–75 / 90–120 min', price: 150, priceAlt: 250, cta: 'book' },
  { id: 'gift',         nameKey: 'giftCard',                   duration: '90 min',          price: 150,  cta: 'contact' },
  { id: 'training-1-3', nameKey: 'reikiLevelIiii',           duration: '6–7 hrs per level', price: 300, unitKey: 'perLevel', cta: 'contact' },
  { id: 'training-4',   nameKey: 'reikiLevelIVMasterTeacher', duration: '3 days',      price: 1000, cta: 'contact' },
];

export const BENEFITS = [
  'deepRelaxation',
  'easesAnxiety',
  'supportsSleep',
  'relievesTension',
  'balancesEmotionalEnergy',
  'strengthensHealingResponse',
  'lastingCalmClarity',
];