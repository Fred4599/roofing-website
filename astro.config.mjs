import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tvroofandsiding.com',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => page !== undefined,
      serialize: (item) => item,
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
