/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}'
  ],
  daisyui: {
    themes: ["cmyk","dracula"],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
}
