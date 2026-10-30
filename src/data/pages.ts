// every page the site has, in one list.
// App.tsx builds the routes from it, <Seo /> builds canonical links from it,
// and scripts/prerender.ts writes one HTML file per page plus sitemap.xml from it.
//
// adding a page: one entry here, one component in src/pages, and one line in
// PAGE_COMPONENTS (App.tsx).
import { SITE_URL } from './site';

export type PageId =
    | 'home'
    | 'menu'
    | 'catering'
    | 'grocery'
    | 'padala'
    | 'story'
    | 'visit'
    | 'privacy'
    | 'terms'
    | 'accessibility';

export type Page = {
    id: PageId;
    path: string;
    title: string;
    description: string;
    /** sitemap hints */
    priority: number;
    changefreq: 'weekly' | 'monthly' | 'yearly';
    lastmod: string;
};

const UPDATED = '2026-10-29';

export const PAGES: Page[] = [
    {
        id: 'home',
        path: '/',
        title: 'Sariling Atin | Filipino Grill & Grocery in Elmhurst, Queens',
        description:
            'Home-style Filipino food served turo-turo style, party trays and lechon, Filipino groceries, pera padala and balikbayan boxes. Family-run on Queens Blvd in Elmhurst since 2014. Open daily 9 AM – 8 PM.',
        priority: 1,
        changefreq: 'weekly',
        lastmod: UPDATED
    },
    {
        id: 'menu',
        path: '/menu',
        title: 'Menu: Turo-Turo, Grill & Merienda | Sariling Atin, Elmhurst',
        description:
            'Point, pick and eat: adobo, sisig, kare-kare, Bicol express, dinuguan, pork BBQ, lechon kawali, pancit, turon and more from the turo-turo counter at 89-12 Queens Blvd, Elmhurst.',
        priority: 0.9,
        changefreq: 'monthly',
        lastmod: UPDATED
    },
    {
        id: 'catering',
        path: '/catering',
        title: 'Filipino Catering, Party Trays & Lechon in Queens | Sariling Atin',
        description:
            'Filipino party trays for every handaan: full and half trays, the 12-tray party set for $449 + tax, and whole lechon. Plan your order online, then call (718) 397-1200.',
        priority: 0.9,
        changefreq: 'monthly',
        lastmod: UPDATED
    },
    {
        id: 'grocery',
        path: '/grocery',
        title: 'Filipino Grocery in Elmhurst, Queens | Sariling Atin',
        description:
            'Filipino pantry staples, snacks, frozen favorites, kakanin and merienda on Queens Blvd in Elmhurst, the first Filipino grocery on the south side of the boulevard.',
        priority: 0.8,
        changefreq: 'monthly',
        lastmod: UPDATED
    },
    {
        id: 'padala',
        path: '/padala',
        title: 'Pera Padala & Balikbayan Boxes in Queens | Sariling Atin',
        description:
            'Send money and balikbayan boxes home to the Philippines from Elmhurst. Remittance counter open daily 9 AM – 7 PM; balikbayan box drop-off and pick-up with ATLAS Express Padala.',
        priority: 0.8,
        changefreq: 'monthly',
        lastmod: UPDATED
    },
    {
        id: 'story',
        path: '/our-story',
        title: 'Our Story | Sariling Atin, Family-Run Since 2007',
        description:
            'How the Concepcion family went from a small store in Toms River, NJ to a Queens Blvd landmark: the story of Sariling Atin, “our very own.”',
        priority: 0.7,
        changefreq: 'yearly',
        lastmod: UPDATED
    },
    {
        id: 'visit',
        path: '/visit',
        title: 'Hours & Directions | Sariling Atin, 89-12 Queens Blvd, Elmhurst',
        description:
            'Open daily 9 AM – 8 PM at 89-12 Queens Blvd, Elmhurst, NY 11373, across from Queens Center. M or R to Woodhaven Blvd. Call (718) 397-1200.',
        priority: 0.8,
        changefreq: 'monthly',
        lastmod: UPDATED
    },
    {
        id: 'privacy',
        path: '/privacy',
        title: 'Privacy Policy | Sariling Atin',
        description: 'How the Sariling Atin website handles your information, in plain English.',
        priority: 0.2,
        changefreq: 'yearly',
        lastmod: UPDATED
    },
    {
        id: 'terms',
        path: '/terms',
        title: 'Terms of Use | Sariling Atin',
        description: 'The basics of using the Sariling Atin website and its catering planner.',
        priority: 0.2,
        changefreq: 'yearly',
        lastmod: UPDATED
    },
    {
        id: 'accessibility',
        path: '/accessibility',
        title: 'Accessibility | Sariling Atin',
        description: 'Our commitment to an accessible website and store, and how to reach us if something gets in your way.',
        priority: 0.2,
        changefreq: 'yearly',
        lastmod: UPDATED
    }
];

export function getPage(id: PageId): Page {
    const page = PAGES.find((candidate) => candidate.id === id);
    if (!page) throw new Error(`unknown page: ${id}`);
    return page;
}

/** the full address of a page, for canonical links and the sitemap */
export function pageUrl(id: PageId): string {
    const { path } = getPage(id);
    return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}
