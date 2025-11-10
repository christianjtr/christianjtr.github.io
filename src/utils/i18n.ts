import { i18nLocalesConfig } from 'astro.config.mjs';

const { defaultLocale, locales } = i18nLocalesConfig;

export function getCurrentBrowserLocale({ baseLanguageCode = false }: { baseLanguageCode?: boolean }): string {
    const fullLocale = navigator.language;

    if (baseLanguageCode) {
        return fullLocale.split('-')[0].toLowerCase() ?? defaultLocale;
    }

    return navigator.language;
}

export {
    defaultLocale,
    locales
};
