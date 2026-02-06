export const siteConfig = {
  siteName: 'Treasure Valley Roofing & Siding',
  siteUrl: import.meta.env.SITE_URL || 'https://tvroofandsiding.com',
  phone: '(208) 555-0199',
  email: 'info@tvroofandsiding.com',
  address: {
    street: '123 Main Street',
    city: 'Boise',
    state: 'Idaho',
    zip: '83702',
    full: '123 Main Street, Boise, Idaho 83702',
  },
  primaryCity: 'Boise',
  serviceAreas: [
    { name: 'Boise', slug: 'boise-id', state: 'ID' },
    { name: 'Meridian', slug: 'meridian-id', state: 'ID' },
    { name: 'Eagle', slug: 'eagle-id', state: 'ID' },
    { name: 'Garden City', slug: 'garden-city-id', state: 'ID' },
  ],
  socialLinks: {
    facebook: 'https://facebook.com/tvroofandsiding',
    instagram: 'https://instagram.com/tvroofandsiding',
    google: 'https://g.page/tvroofandsiding',
  },
  businessHours: {
    weekdays: '7:00 AM - 6:00 PM',
    saturday: '8:00 AM - 4:00 PM',
    sunday: 'Closed',
  },
  yearEstablished: 2014,
  licenseNumber: 'RCE-12345',
  defaultOgImage: '/images/og-default.jpg',
} as const;

export type ServiceArea = (typeof siteConfig.serviceAreas)[number];
