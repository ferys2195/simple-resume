# Simple Resume

A modern personal resume website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

This project is designed as a public reference for anyone who wants a polished portfolio or CV website with a clean layout, light/dark theme support, and reusable UI components.

## Features

- Next.js 16 application with TypeScript support
- Responsive resume layout with experience, skills, and profile sections
- Theme toggle using `next-themes`
- Custom UI components built with `shadcn/ui`
- Data-driven sections using local TypeScript data files
- Utility-first styling with Tailwind CSS

## Project structure

- `app/` – main application routes and global styles
- `components/` – shared UI components and layout pieces
- `data/` – structured content for experience, profile, and skills
- `lib/` – utility functions
- `types/` – TypeScript type definitions
- `public/` – static assets

## Getting started

### Install dependencies

```bash
npm install
```

### Run in development

```bash
npm run dev
```

Open http://localhost:3000 to view the site.

### Build for production

```bash
npm run build
```

### Start the production server

```bash
npm run start
```

## Customization

- Update `data/profile.ts` for personal details and profile information
- Update `data/experience.ts` to change work history
- Update `data/skills.ts` for skills and proficiency
- Adjust component structure in `components/` and `components/resume/sections/`

## Useful scripts

- `npm run dev` — start development server
- `npm run build` — create production build
- `npm run start` — run production server
- `npm run lint` — run ESLint
- `npm run format` — format code with Prettier
- `npm run typecheck` — run TypeScript type check

## Notes

This repository is ideal as a starting point for building a personal CV or portfolio website. The structure allows easy extension and adaptation for additional sections such as projects, education, or contact details.

## License

Feel free to use and modify this project as a public reference.
