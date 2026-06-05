// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://critcoffeeshop.com',

  image: {
    domains: [],
  },

  build: {
    assets: '_assets',
  },

  adapter: cloudflare(),
});