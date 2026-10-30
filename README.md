# Sariling Atin

Website for **Sariling Atin**, the family-run Filipino grill and grocery at 89-12 Queens Blvd, Elmhurst, Queens: turo-turo counter, party trays and lechon, Filipino groceries, pera padala and balikbayan boxes.

React 19 · TypeScript 6 · Vite 8 · Tailwind CSS 4 · React Router 8 · prerendered to static HTML

Designed & built by [GradientV](https://gradientv.com).

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:5175.

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Type-check, build, and prerender every page into `dist/` |
| `npm run preview` | Serve the built `dist/` at http://localhost:4175 |
| `npm run lint` | oxlint |
| `npm run typecheck` | `tsc -b` |
| `npm run images` | Convert new photos to WebP (see Photos) |
| `npm run brand` | Regenerate the app icons and the social share image |

Needs Node 22.18 or newer (the scripts in `scripts/` are TypeScript run directly by Node).

## Pages

| Route | What's on it |
| --- | --- |
| `/` | Hero, turo-turo how-to, favorites, catering, grocery, padala, press, story, hours and map |
| `/menu` | How the counter works, favorites, the grill, every dish by category, allergy note |
| `/catering` | Tray basics, the 12-tray party set picker, lechon, full/half tray price list, and a "My list" planner with a running estimate |
| `/grocery` | The aisles, merienda and pasalubong, payment |
| `/padala` | Money remittance and balikbayan box drop-off / pick-up |
| `/our-story` | The family, timeline, other stores, press |
| `/visit` | Hours, contact, directions, map, FAQ, other stores |
| `/privacy`, `/terms`, `/accessibility` | Policies |

`/about`, `/contact`, `/hours`, `/party-trays`, `/balikbayan-box` and a few others redirect to the right page (`vercel.json`, plus `src/data/aliases.ts` for dev).

## Updating content

Everything the store might change lives in `src/data/`. No component edits needed.

- **`site.ts`**: name, address, phone, fax, hours, padala hours, Facebook, nav, and `SITE_URL` (the domain). The open/closed badge, hours table, footer, structured data and llms.txt all read from here.
- **`menu.ts`**: every dish (name, description, category, tags, full/half tray price), the favorites strip, the party-tray set and lechon sizes. To change a price, edit `tray.full` / `tray.half`. Delete a dish's `tray` to keep it on the menu but off the catering price list.
- **`story.ts`**: timeline, press links, the other Sariling Atin stores.
- **`grocery.ts`**: the aisles on the grocery page.
- **`photos.ts`**: every photo's file, alt text and caption.
- **`pages.ts`**: page titles and descriptions for Google and link previews.

### Seasonal card

From September 1 to January 6 (the Filipino Christmas season), the party card on the home and catering pages turns into "Pasko na! Book your Noche Buena trays early" with a swinging parol. The rest of the year it's a general party card. It switches by itself (`src/components/PaskoCallout.tsx`).

## Photos

All photos come from the store's own Facebook page. Press and Yelp/Google user photos are not used.

To add one:

1. Drop the `.jpg` or `.png` into `public/images/food`, `public/images/counter` or `public/images/store`.
2. Run `npm run images`. It writes `<name>.webp` (up to 1600 px) and `<name>-sm.webp` (up to 720 px for phones), moves the original into `images-raw/` (git-ignored, nothing is deleted), and updates `src/data/image-manifest.json` so every image gets the right width and height.
3. Add it to `src/data/photos.ts` with alt text, then use it: `<Photo photo="yourKey" sizes="…" />`, or give a dish `photo: 'yourKey'` in `menu.ts`.

Dishes without a photo show a painted name tile instead. Good next photos to get from the client: sisig, kare-kare, Bicol express, dinuguan, and the Elmhurst storefront.

`npm run images -- --rebuild` re-exports every original in `images-raw/` (after changing sizes or quality in the script).

## How the catering planner works

There's no backend and no form. Visitors add trays, the party set or a lechon to "My list" and see an estimated subtotal; the list is saved in their browser's localStorage and never sent anywhere. They place the order by phone (or fax), and can copy the list first. Logic: `src/lib/planner.ts`; state: `src/components/planner/PlannerContext.tsx`.

## SEO and sharing

- `npm run build` prerenders every page (`scripts/prerender.ts`), so search engines, link previews and AI crawlers get real HTML with the title, description, canonical link and Open Graph tags. The browser then hydrates it.
- Every page has `Restaurant` structured data (address, geo, hours, phone, menu link) from `src/lib/schema.ts`.
- `sitemap.xml`, `robots.txt` and `llms.txt` are generated at build time from the same data, so they always match `SITE_URL`.
- The share image is `public/og-image.jpg` (`npm run brand`).

## Deploying (Vercel)

Import the repo; `vercel.json` sets the build command (`npm run build`), output (`dist`), clean URLs, redirects, security headers (including a Content-Security-Policy that allows the Google Maps embed) and caching. Analytics: turn on Vercel Web Analytics in the project; the script is already in `index.html` (it 404s on localhost, which is expected).

### Before launch

- [ ] Buy the domain and set `SITE_URL` in `src/data/site.ts`, then rebuild.
- [ ] Walk the client through the open questions in `RESEARCH.md` (hours, prices, other stores, padala partners, the family story).
- [ ] Add the website to their Google Business Profile and Facebook page.

## Credits

- Photos: Sariling Atin's Facebook page, used for their own website.
- Fonts: Fraunces, Figtree and Bungee (SIL Open Font License), self-hosted via Fontsource.
- Icons: Lucide (ISC).
- Illustrations (sampaguita mark, banderitas, parol, balikbayan box) and the banig and capiz patterns: drawn for this site.
