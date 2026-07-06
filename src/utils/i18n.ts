import { i18nLocalesConfig } from '../../i18n.config.mjs';

const { defaultLocale, locales } = i18nLocalesConfig;

const LOCALE_STORAGE_KEY = 'user-locale-preference';
const LOCALE_BANNER_DISMISSED_KEY = 'locale-banner-dismissed';

function extractBaseCode(locale: string): string {
    return locale.split(/[-_]/)[0]?.toLowerCase() ?? '';
}

function isSupportedLocale(code: string): boolean {
    return locales.includes(code);
}

function detectBrowserLocale(): string | null {
    if (typeof navigator === 'undefined') {
        return null;
    }

    const browserLanguages = navigator.languages?.length
        ? navigator.languages
        : [navigator.language];

    for (const lang of browserLanguages) {
        if (!lang) continue;
        const baseCode = extractBaseCode(lang);
        if (baseCode && isSupportedLocale(baseCode)) {
            return baseCode;
        }
    }

    return null;
}

function getStoredLocalePreference(): string | null {
    if (typeof localStorage === 'undefined') {
        return null;
    }

    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    return stored && isSupportedLocale(stored) ? stored : null;
}

function getPreferredLocale(): string {
    return getStoredLocalePreference()
        ?? detectBrowserLocale()
        ?? defaultLocale;
}

function setLocalePreference(locale: string): void {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    }
}

function isBannerDismissed(): boolean {
    if (typeof localStorage === 'undefined') {
        return false;
    }
    return localStorage.getItem(LOCALE_BANNER_DISMISSED_KEY) === 'true';
}

function dismissBanner(): void {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem(LOCALE_BANNER_DISMISSED_KEY, 'true');
    }
}

export {
    defaultLocale,
    locales,
    LOCALE_STORAGE_KEY,
    LOCALE_BANNER_DISMISSED_KEY,
    getPreferredLocale,
    setLocalePreference,
    detectBrowserLocale,
    getStoredLocalePreference,
    isBannerDismissed,
    dismissBanner,
};
