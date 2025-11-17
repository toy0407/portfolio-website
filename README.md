# Suvro Bose — Portfolio Website

A modern, glassmorphism-inspired developer portfolio built with Next.js (App Router), TypeScript, Tailwind CSS and Framer Motion. The site focuses on clean glassmorphic UIs, subtle gradients, and performant animations while keeping content driven from a single source of truth.

## Quick Links

- Live demo: [Link](www.suvrobose.in)
- Source: [This Repository](https://github.com/toy0407/portfolio-website/)

## Tech Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS (with custom CSS variables)
- Framer Motion (animations)
- React Icons (lucide, simple-icons, etc.)

## Features

- Data-driven content via `src/data/portfolio.data.ts` (single source of truth)
- Sections: `Hero`, `About`, `Skills`, `Projects`, `Experience/Timeline`, `Contact`
- Apple-like glassmorphism, subtle gradients and spring animations
- Responsive, accessible components and progressive enhancement

## Getting Started (local development)

Prerequisites: Node.js 20+ and a modern package manager (npm/yarn/pnpm).

1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
npm run start
```

Notes:

- The repo uses the Next.js App Router and expects environment variables only if you add server integrations (e.g., analytics, DB). None are required for the static portfolio.

## Project Structure (high level)

- `src/app/` — Next.js app entry (global layout, top-level routing)
- `src/components/sections/` — Page sections (Hero, AboutSection, SkillSection, ProjectSection, ExperienceSection, ContactSection)
- `src/components/layout/` — `Navbar`, `Footer`, and other layout pieces
- `src/components/ui/` — Shared UI primitives (buttons, dialog, timeline, wavy background)
- `src/data/portfolio.data.ts` — Content: skills, projects, about, timeline, etc.
- `src/utils/` — helpers (analytics, tailwind utils, mongodb helper)
- `public/assets/` — images and static assets

## Design Notes & Customization

- Colors and theme variables are defined in `src/app/globals.css` using CSS custom properties (HSL values). Adjust `--primary` and `--accent` to change the main color system.
- Content is data-driven from `src/data/portfolio.data.ts`. Add/modify projects, skills, or quick facts there.
- Section alternation: sections use subtle alternating backgrounds and gradients for visual rhythm. If you prefer a single background, remove or change the `bg-*` utilities on the section components.

## How to Update Content

1. Open `src/data/portfolio.data.ts`
2. Update the titles, sections, or arrays (skills, projects, timeline)
3. Run `npm run dev` and verify changes

## Common Commands

- `npm run dev` — run local dev server (Next.js)
- `npm run build` — build production app
- `npm run start` — start built app
- `npm run lint` — run linter (if configured)

## Contributing

Contributions and suggestions are welcome. Open an issue or submit a pull request.

## License

Add your license here (e.g., MIT). If none, please add a license file to the repository.

---
