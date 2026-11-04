# Christian J. Torrealba Portfolio

[![Astro](https://img.shields.io/badge/Astro-5.x-brightpurple?style=flat&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind](https://img.shields.io/badge/Tailwind-4.x-blue?style=flat&logo=tailwind&logoColor=white)](https://tailwindcss.com)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5.x-10B981?style=flat&logo=daisyui&logoColor=white)](https://daisyui.com)

Personal portfolio website showcasing projects, experiments, professional experience, credentials, and studies. It is responsive, multilingual (EN/ES/FR), and uses a dark mode with a TypeScript-first Astro setup.

[Live Demo](https://christianjtr.github.io)

## 🚀 Features
- Content collections with TypeScript validation.
- Multilingual routing and localized content.
- Dark mode support with local preference and system fallback.
- SEO-friendly metadata and structured content.
- High-performance static site generation with Astro.

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
- Update the content files in `src/content/<lang>/`.
- Add new sections under `src/components/sections/` and include them in the main layout.
- Adjust visuals in `src/styles/global.css`.

## 📄 License
[MIT](LICENSE)

Built with ❤️ using the Astro ecosystem.
