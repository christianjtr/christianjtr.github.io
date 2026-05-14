import { i18nLocalesConfig } from '../../i18n.config.mjs';

const { defaultLocale, locales } = i18nLocalesConfig;

const LOCALE_STORAGE_KEY = 'user-locale-preference';
const LOCALE_BANNER_DISMISSED_KEY = 'locale-banner-dismissed';

/**
 * Extracts the base language code from a full locale string.
 * Handles both dash and underscore separators (e.g., "en-US", "en_US" → "en").
 */
function extractBaseCode(locale: string): string {
    return locale.split(/[-_]/)[0]?.toLowerCase() ?? '';
}

/**
 * Checks if a given locale code is in the supported locales list.
 */
function isSupportedLocale(code: string): boolean {
    return locales.includes(code);
}

/**
 * Detects the best matching locale from the browser's language preferences.
 * Uses navigator.languages (plural) for comprehensive matching,
 * falling back to navigator.language (singular).
 * 
 * @returns The matched locale code, or null if no match is found.
 */
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

/**
 * Returns the stored locale preference from localStorage.
 * 
 * @returns The stored locale if valid, or null.
 */
function getStoredLocalePreference(): string | null {
    if (typeof localStorage === 'undefined') {
        return null;
    }

    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    return stored && isSupportedLocale(stored) ? stored : null;
}

/**
 * Resolves the preferred locale for the user.
 * Priority order:
 *   1. Manually saved preference in localStorage (user explicitly chose a language)
 *   2. Browser language detection via navigator.languages / navigator.language
 *   3. Default locale fallback
 */
function getPreferredLocale(): string {
    return getStoredLocalePreference()
        ?? detectBrowserLocale()
        ?? defaultLocale;
}

/**
 * Saves the user's locale preference to localStorage.
 */
function setLocalePreference(locale: string): void {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    }
}

/**
 * Checks whether the locale suggestion banner has been dismissed.
 */
function isBannerDismissed(): boolean {
    if (typeof localStorage === 'undefined') {
        return false;
    }
    return localStorage.getItem(LOCALE_BANNER_DISMISSED_KEY) === 'true';
}

/**
 * Marks the locale suggestion banner as dismissed.
 */
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
