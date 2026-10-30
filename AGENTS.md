# Sariling Atin project memory

## Client and working agreement
- The user owns GradientV LLC (gradientv.com); Sariling Atin is a client project.
- The user runs `git add`, `git commit`, and `git push` personally. Do not stage, commit, or push unless the user explicitly asks.
- When asked for a commit message, return one concise, copyable line.
- Before suggesting `git add .`, remind the user to check `git status` for unrelated or private files.
- Make requested changes directly, then summarize what changed and what was checked. Explain issues in clear, practical language.
- Ask a short question when a client policy or business fact can't be safely inferred (hours, prices, family details); keep working on independent parts meanwhile.

## Project details
- Client: Sariling Atin, Inc., Filipino grill & grocery at 89-12 Queens Blvd, Elmhurst, Queens (Concepcion family).
- Purpose: marketing site with menu, catering planner (phone orders, no backend), grocery, padala/balikbayan box info, story and visit pages, plus privacy, terms and accessibility.
- Stack: React 19, TypeScript 6, Vite 8, Tailwind CSS 4 (`@tailwindcss/vite`, tokens in `src/index.css`), React Router 8, prerendered to static HTML by `scripts/prerender.ts`. Hosted on Vercel (`vercel.json`).
- Content lives in `src/data/`; sources and open questions for the client are in `RESEARCH.md`. Facts must stay sourced; don't invent prices, hours or claims.
- Anything time-dependent (open/closed, the Christmas-season card, the saved catering list) must render the same thing on the server and the first browser pass, then update after hydration (`useHydrated`, `useStoreStatus`).
- Photos: only the client's own (Facebook) photos. New photos go through `npm run images`.
- Checks before handing work back: `npm run lint`, `npm run build` (includes `tsc -b` and prerender), then look at the pages in the browser at phone and desktop widths.
- Footer credit stays: "Designed & built by GradientV".
