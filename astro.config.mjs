import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { i18nLocalesConfig } from './i18n.config.mjs';
import packageJson from './package.json';
import path from 'path';
import { fileURLToPath } from 'url';

const srcDir = fileURLToPath(new URL('./src', import.meta.url));

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@assets': path.resolve(srcDir, 'assets'),
        '@content': path.resolve(srcDir, 'content'),
        '@components': path.resolve(srcDir, 'components'),
        '@layouts': path.resolve(srcDir, 'layouts'),
        '@styles': path.resolve(srcDir, 'styles'),
        '@schemas': path.resolve(srcDir, 'schemas'),
        '@app-types': path.resolve(srcDir, 'types'),
        '@utils': path.resolve(srcDir, 'utils'),
      },
    },
    plugins: [tailwindcss()],
    define: {
      '__APP_VERSION__': JSON.stringify(packageJson.version),
    }
  },
  i18n: i18nLocalesConfig,
  site: 'https://christianjtr.github.io',
});