import { i18nLocalesConfig } from '../../i18n.config.mjs';

const { defaultLocale, locales } = i18nLocalesConfig;

export function getCurrentBrowserLocale(opts?: { baseLanguageCode?: boolean }): string {
    if (typeof navigator === 'undefined') {
        return defaultLocale;
    }

    const fullLocale = navigator.language;

    if (opts?.baseLanguageCode) {
        const baseCode = fullLocale.split('-')[0]?.toLowerCase();
        return baseCode && locales.includes(baseCode) ? baseCode : defaultLocale;
    }

    return fullLocale;
}

export {
    defaultLocale,
    locales
};
