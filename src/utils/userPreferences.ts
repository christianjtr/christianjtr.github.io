export function getSystemThemePreference() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
}

export const toSlug = (text: string) => text.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');