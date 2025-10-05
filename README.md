# Vite React + TypeScript Starter

Opinionated starter template combining Vite, React, TypeScript, Tailwind, and several TanStack libraries to bootstrap a modern frontend app quickly.

Key libraries

- @tanstack/react-router (routing)
- @tanstack/react-query (data fetching / caching)
- @tanstack/react-form (forms)
- Tailwind CSS (utility-first styles)
- Axios (http client)
- Biome (linting)
- pnpm (package manager)

Why this repo

This template wires up a fast development environment with sensible defaults so you can focus on building features. It includes TypeScript, Vite, Tailwind, and example routes to get started.

Requirements

- Node.js 18+ (recommended)
- pnpm (or adjust commands to npm/yarn)

Quick start

1. Install dependencies

```powershell
pnpm install
```

2. Start dev server

```powershell
pnpm dev
```

3. Build for production

```powershell
pnpm build
```

4. Preview the production build

```powershell
pnpm preview
```

Available scripts

- pnpm dev — start Vite dev server
- pnpm build — compile TypeScript and build with Vite
- pnpm preview — preview the production build
- pnpm lint — run Biome linter

Project structure (high level)

- public/ — static assets
- src/main.tsx — app entry
- src/routes/ — route components (TanStack Router)
- src/routeTree.gen.ts — generated route tree (auto-generated)

Tips & notes

- Tailwind: Tailwind is already installed — see `tailwind.config` or `postcss` config if you customize it.
- Linting: Run `pnpm lint` (Biome). You can configure Biome in `biome.json` or `package.json`.
- Routes: The starter includes example `index.tsx`, `about.tsx`, and a root layout at `src/routes/__root.tsx`.

Contributing

Feel free to open issues or pull requests. If you add new generated files, add them to `.gitignore` and Biome's ignore list as shown above.

License

This starter is provided as-is (no license specified). Add a license file if you plan to publish.

Enjoy building!