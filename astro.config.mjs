// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { i18nLocalesConfig } from './i18n.config.mjs';
import packageJson from './package.json';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    define: {
      '__APP_VERSION__': JSON.stringify(packageJson.version),
    }
  },
  i18n: i18nLocalesConfig,
  site: 'https://christianjtr.github.io',
  output: "server"
});