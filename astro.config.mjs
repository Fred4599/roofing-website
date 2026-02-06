import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: process.env.SITE_URL || 'https://tvroofandsiding.com',
  integrations: [
    sitemap(),
    tailwind(),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
