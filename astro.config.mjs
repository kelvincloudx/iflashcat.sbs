import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://iflashcat.sbs',
  integrations: [sitemap()],
  output: 'static',
  build: {
    format: 'directory'
  }
});
