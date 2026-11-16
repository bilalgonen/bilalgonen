# bilalgonen.com

Personal portfolio built with React 19, TypeScript (strict), Vite, Tailwind CSS 4, React Router 7 and Vitest. Deployed to Cloudflare Workers (static assets, SPA fallback).

## Scripts
- `npm run dev`: local dev server
- `npm run build`: type-check and production build
- `npm run lint` / `npm test`
- `npm run deploy`: build and `wrangler deploy`

## Content
Typed content lives in `src/data/`. To add a project, append an object to `src/data/projects.ts`. Section order on the home page is set in `src/pages/Home.tsx` (Projects sits right before Skills) and `src/data/navigation.ts`.
