# Christian J. Torrealba Portfolio

[![Astro](https://img.shields.io/badge/Astro-5.x-brightpurple?style=flat&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind](https://img.shields.io/badge/Tailwind-4.x-blue?style=flat&logo=tailwind&logoColor=white)](https://tailwindcss.com)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5.x-10B981?style=flat&logo=daisyui&logoColor=white)](https://daisyui.com)

Personal portfolio website showcasing projects, experiments, professional experiences, credentials, and studies. Fully responsive, multilingual (EN/ES/FR), dark mode, TypeScript-powered.

[Live Demo](https://christianjtr.github.io)

## 🚀 Features
- **Content Collections**: TS schemas for data validation.
- **i18n**: Language routing + JSON content.
- **Dark Mode**: Toggle with localStorage + system pref.
- **SEO**: OpenGraph, structured data ready.
- **Performance**: Astro islands, image optimization.

## 📁 Structure
```
/
├── src/
│   ├── components/sections/     # About, Projects, etc.
│   ├── content/[lang]/          # en/es JSON (projects.json, etc.)
│   ├── layouts/                 # Header.astro, Footer.astro
│   └── pages/[lang]/            # Dynamic routes
├── public/                      # Static assets
├── styles/                      # Tailwind + custom CSS vars
└── astro.config.mjs             # i18n + Tailwind Vite
```

## 🛠️ Development
```bash
pnpm install
pnpm dev              # localhost:4321
pnpm build            # dist/ (includes astro check)
pnpm preview          # Preview build
```

## 🚀 Deployment
- GitHub Pages: Push to `main`.
- Custom domain: Via GitHub settings.

## 🔧 Customization
- Edit `src/content/[lang]/` JSONs.
- Add sections: New `src/components/sections/X.astro`, import in `MainWrapper.astro`.
- Themes: `src/styles/global.css` (DaisyUI light/dark).

## 📄 License
[MIT](LICENSE)

Built with ❤️ using Astro ecosystem.
