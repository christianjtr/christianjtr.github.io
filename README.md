# Christian J. Torrealba Portfolio

[![Astro](https://img.shields.io/badge/Astro-7.x-brightpurple?style=flat&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind](https://img.shields.io/badge/Tailwind-4.x-blue?style=flat&logo=tailwind&logoColor=white)](https://tailwindcss.com)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5.x-10B981?style=flat&logo=daisyui&logoColor=white)](https://daisyui.com)

Personal portfolio for presenting selected projects, experiments, skills, credentials, and academic background. Built with Astro, TypeScript, Tailwind CSS, and DaisyUI, it is statically generated, responsive, and available in English, Spanish, and French. It also includes a persistent light/dark theme, localized content with schema validation, and Open Graph metadata.

[Live Demo](https://christianjtr.github.io)

## 🚀 Features
- Static generation with Astro for a lightweight, content-focused portfolio.
- English, Spanish, and French routes backed by localized content collections.
- TypeScript schemas for validating portfolio content.
- Responsive layouts, persistent light/dark theme, and reduced-motion support.
- Localized SEO metadata, canonical URLs, language alternates, and structured data.
- Project and experiment cards with topic filters and detailed abstracts.

## 📁 Project Structure
```text
/
├── src/
│   ├── components/
│   ├── content/
│   │   ├── en/
│   │   ├── es/
│   │   └── fr/
│   ├── layouts/
│   ├── pages/
│   ├── schemas/
│   ├── scripts/
│   ├── styles/
│   └── utils/
├── public/
├── astro.config.mjs
├── i18n.config.mjs
├── package.json
├── pnpm-lock.yaml
├── LICENSE
└── README.md
```

## 🛠️ Development
```bash
pnpm install
pnpm dev       # http://localhost:4321
pnpm build     # generates the production build
pnpm preview   # previews the built site locally
```

## 🚀 Deployment
- Deployment runs automatically from the `main` branch via GitHub Pages.
- README-only changes are intentionally ignored by the deployment workflow to avoid unnecessary rebuilds and redeployments.
- Manual deployment can still be triggered from the GitHub Actions UI if needed.

## 🔧 Customization
- Edit localized content in `src/content/<lang>/`; schemas live in `src/schemas/`.
- Add or update page sections in `src/components/sections/`.
- Update global design tokens and styles in `src/styles/`.

## 📄 License
[MIT](LICENSE)

Built with ❤️ using the Astro ecosystem.
