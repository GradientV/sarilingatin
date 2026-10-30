// the family's story, press coverage and sister stores.
// every line here is sourced in RESEARCH.md. the client should read this page
// before launch: it's their family, and they get the final word on what's shared.
import type { PhotoKey } from './photos';

export type Milestone = {
    year: string;
    title: string;
    body: string;
};

export const TIMELINE: Milestone[] = [
    {
        year: 'Before 2007',
        title: 'Padala, before there was a store',
        body: 'Rose came to the U.S. to work as a nurse’s aide. For years she sent money home to Nilo and their daughter Rocel, until the family could be together again.'
    },
    {
        year: '2007',
        title: 'The first store, in Toms River',
        body: 'With their savings, Nilo and Rose opened RJ Sariling Atin in Toms River, New Jersey. Food felt right: everybody has to eat. The “RJ” is for their daughters, Rocel and Julia.'
    },
    {
        year: '2014',
        title: 'Queens Boulevard',
        body: 'A relative in Elmhurst told Nilo about an empty furniture showroom on Queens Boulevard, by Queens Center mall. After six months of permits, the store opened on April 5, 2014, the first Filipino grocery on the south side of the boulevard. More than 700 people came through on opening day.'
    },
    {
        year: '2014–15',
        title: 'New York takes notice',
        body: 'Within months, CBS New York named it one of the city’s five best restaurants for Filipino food. The New York Times followed in its Hungry City column, and The Village Voice put breakfast here on its list of the city’s best.'
    },
    {
        year: '2016–19',
        title: 'Growing the family',
        body: 'A grill and pastry shop in Woodside, then stores in Bergenfield (2018) and Jersey City (2019).'
    },
    {
        year: '2023',
        title: 'Balikbayan boxes',
        body: 'Sariling Atin partnered with ATLAS Express Padala for balikbayan box drop-off and pick-up.'
    },
    {
        year: '2024',
        title: 'Ten years on the boulevard',
        body: 'A new Woodside branch opened on Roosevelt Ave in January. On April 5 the Elmhurst store turned ten, and that September the turo-turo counter moved back inside the grocery.'
    }
];

/** the family's own words, from their 10th-anniversary post (April 5, 2024) */
export const ANNIVERSARY_QUOTE = {
    text: 'Sariling Atin, after all, is “our very own” place to celebrate our Filipino culture.',
    source: 'The Sariling Atin family, on ten years in Elmhurst'
};

/** the owner's sign-off on the store's Yelp page */
export const OWNER_THANKS = { text: 'Thank you for your patronage!', name: 'Rosario C.', role: 'Owner' };

export type PressItem = {
    outlet: string;
    year: string;
    note: string;
    href: string;
};

/** what each outlet said, paraphrased. links go to the original pieces */
export const PRESS: PressItem[] = [
    {
        outlet: 'The New York Times',
        year: '2015',
        note: 'Reviewed in the Hungry City column',
        href: 'https://www.nytimes.com/2015/02/04/dining/hungry-city-sariling-atin-in-elmhurst-queens.html'
    },
    {
        outlet: 'CBS New York',
        year: '2014',
        note: 'One of NYC’s 5 best restaurants for Filipino food',
        href: 'https://www.cbsnews.com/newyork/news/nycs-5-best-restaurants-for-filipino-food/'
    },
    {
        outlet: 'The Village Voice',
        year: '2015',
        note: 'On its list of the eleven best breakfasts in NYC',
        href: 'https://www.villagevoice.com/the-eleven-best-breakfasts-in-nyc-2015/'
    },
    {
        outlet: 'The Infatuation',
        year: '2022',
        note: 'Rated 8.3 (“Great”) and listed among NYC’s best Filipino restaurants',
        href: 'https://www.theinfatuation.com/new-york/reviews/sariling-atin'
    },
    {
        outlet: 'DNAinfo',
        year: '2014',
        note: 'Covered the Elmhurst opening',
        href: 'https://www.dnainfo.com/new-york/20140429/elmhurst/popular-new-jersey-filipino-grocery-eatery-expands-elmhurst-location'
    }
];

export type SisterStore = {
    name: string;
    area: string;
    address: string;
    phone?: { display: string; tel: string };
    note: string;
    photo?: PhotoKey;
};

/**
 * the other Sariling Atin stores, as of the family's 2025 balikbayan-box flyer and
 * their Facebook posts. CONFIRM WITH THE CLIENT before launch, then edit or empty this list.
 */
export const SISTER_STORES: SisterStore[] = [
    {
        name: 'Sariling Atin Woodside',
        area: 'Woodside, Queens',
        address: '68-10 Roosevelt Ave, Woodside, NY 11377',
        note: 'Groceries, balikbayan boxes and padala, near Jollibee and Red Ribbon. Opened January 2024.',
        photo: 'woodsideStorefront'
    },
    {
        name: 'Sariling Atin Bergenfield',
        area: 'Bergenfield, NJ',
        address: '54 E Main St, Bergenfield, NJ 07621',
        phone: { display: '(201) 387-0333', tel: '+12013870333' },
        note: 'Grill and Asian market.'
    },
    {
        name: 'RJ Sariling Atin',
        area: 'Toms River, NJ',
        address: '1561 Lakewood Rd, Toms River, NJ 08755',
        phone: { display: '(732) 244-4493', tel: '+17322444493' },
        note: 'Where it all started, in 2007.'
    }
];
