// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { i18nLocalesConfig } from './i18n.config.mjs';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: i18nLocalesConfig,
  site: 'https://christianjtr.github.io',
  base: '/christianjtr.github.io',
});