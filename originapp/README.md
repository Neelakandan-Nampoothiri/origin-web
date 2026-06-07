# OriginApp

OriginApp is a modern React landing page built with Vite, Tailwind CSS, and interactive UI components. It includes a responsive hero section, service cards, client logos, team profiles, contact form, and animated cursor interactions.

## Features

- React 19 with Vite for fast development and optimized builds
- Tailwind CSS via `@tailwindcss/vite` for utility-first styling
- Light/dark theme toggle with localStorage persistence
- Custom animated cursor effect
- Modular component structure for maintainability
- Toast notifications powered by `react-hot-toast`

## Project structure

- `src/App.jsx` - page layout and theme/cursor logic
- `src/components/` - reusable UI components:
  - `Navbar.jsx`
  - `Hero.jsx`
  - `TrustedBy.jsx`
  - `Services.jsx`
  - `OurWork.jsx`
  - `Teams.jsx`
  - `ContactUs.jsx`
  - `Footer.jsx`
  - `ThemeToggleBtn.jsx`
  - `ServiceCard.jsx`
  - `Title.jsx`
- `src/assets/` - asset helper modules
- `public/` - static assets

## Getting started

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal to view the app in your browser.

## Build

```bash
npm run build
```

## Preview production build

```bash
npm run preview
```

## Scripts

- `npm run dev` - start the development server
- `npm run build` - build production assets
- `npm run preview` - preview the production build locally
- `npm run start` - serve the preview build on a configurable port

## Dependencies

- `react`
- `react-dom`
- `react-hot-toast`
- `tailwindcss`
- `@tailwindcss/vite`
- `@vitejs/plugin-react`

## Notes

This project is configured for a browser-first React experience using modern Vite tooling. If you want to add TypeScript or custom ESLint rules, update the Vite config and install the appropriate packages.
