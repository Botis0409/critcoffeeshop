// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://critcoffeeshop.com',
  image: {
    domains: [],
  },
  build: {
    assets: '_assets',
  },
});
