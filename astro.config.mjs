// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

export const i18nLocalesConfig = {
  locales: ["es", "en", "fr"],
  defaultLocale: "en",
  routing: {
    prefixDefaultLocale: true,
    redirectToDefaultLocale: true
  }
}

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: i18nLocalesConfig, 
});