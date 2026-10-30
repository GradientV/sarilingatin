// everything about the store that shows up in more than one place:
// name, address, phone, hours, links. change it here and every page follows.
//
// sources for each fact are in RESEARCH.md at the project root.

/**
 * the address the site will live at. used for canonical links, the sitemap,
 * social previews and structured data.
 * PLACEHOLDER: the store's old domain (sarilingatinelmhurst.com) no longer resolves.
 * swap in the real domain once it's bought, then rebuild.
 */
export const SITE_URL = 'https://www.sarilingatinelmhurst.com';

export const site = {
    name: 'Sariling Atin',
    legalName: 'Sariling Atin, Inc.',
    kind: 'Filipino Grill & Grocery',
    /** what the name means, in the family's own words */
    meaning: 'our very own',
    /** the Elmhurst store opened April 5, 2014 */
    openedOn: '2014-04-05',
    openedYear: 2014,
    /** the family's first store, in Toms River, NJ */
    familySince: 2007,

    address: {
        street: '89-12 Queens Blvd',
        city: 'Elmhurst',
        borough: 'Queens',
        region: 'NY',
        postalCode: '11373',
        country: 'US'
    },
    geo: { lat: 40.7343164, lng: -73.8745315 },

    phone: { display: '(718) 397-1200', tel: '+17183971200' },
    fax: { display: '(718) 397-1201', tel: '+17183971201' },

    facebook: 'https://www.facebook.com/SarilingAtinInc/',
    facebookHandle: '@SarilingAtinInc',

    links: {
        directions:
            'https://www.google.com/maps/dir/?api=1&destination=Sariling+Atin%2C+89-12+Queens+Blvd%2C+Elmhurst%2C+NY+11373',
        googleMaps: 'https://www.google.com/maps/search/?api=1&query=Sariling+Atin%2C+89-12+Queens+Blvd%2C+Elmhurst%2C+NY+11373',
        appleMaps: 'https://maps.apple.com/?q=Sariling+Atin&address=89-12+Queens+Blvd,+Elmhurst,+NY+11373',
        mapEmbed: 'https://www.google.com/maps?q=Sariling+Atin,+89-12+Queens+Blvd,+Elmhurst,+NY+11373&z=16&output=embed',
        googleReviews: 'https://www.google.com/maps/search/?api=1&query=Sariling+Atin%2C+89-12+Queens+Blvd%2C+Elmhurst%2C+NY+11373',
        yelp: 'https://www.yelp.com/biz/sariling-atin-elmhurst'
    },

    /** how people get here. Woodhaven Blvd (M, R) is about a five-minute walk */
    transit: [
        { mode: 'Subway', detail: 'M or R train to Woodhaven Blvd, then a short walk west along Queens Blvd.' },
        { mode: 'Landmark', detail: 'On the south side of Queens Blvd, across from Queens Center mall and Macy’s.' }
    ],

    /** cards seen at the register: Visa, Mastercard, Discover, American Express */
    payment: 'Cash and major cards (Visa, Mastercard, Discover, American Express)',
    services: ['Dine-in', 'Take-out', 'Catering', 'Pera padala', 'Balikbayan box']
} as const;

export type DayHours = {
    day: 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';
    short: string;
    /** 24-hour 'HH:MM', or null when closed all day */
    open: string | null;
    close: string | null;
};

/**
 * store hours, Sunday first (the same order JavaScript counts days in).
 * Google and Yelp both list 9 AM – 8 PM every day as of October 2026.
 */
export const hours: DayHours[] = [
    { day: 'Sunday', short: 'Sun', open: '09:00', close: '20:00' },
    { day: 'Monday', short: 'Mon', open: '09:00', close: '20:00' },
    { day: 'Tuesday', short: 'Tue', open: '09:00', close: '20:00' },
    { day: 'Wednesday', short: 'Wed', open: '09:00', close: '20:00' },
    { day: 'Thursday', short: 'Thu', open: '09:00', close: '20:00' },
    { day: 'Friday', short: 'Fri', open: '09:00', close: '20:00' },
    { day: 'Saturday', short: 'Sat', open: '09:00', close: '20:00' }
];

/** the remittance (pera padala) counter keeps shorter hours, per the owner's Yelp page */
export const remittanceHours = { label: 'Daily', open: '09:00', close: '19:00' } as const;

export type NavItem = { to: string; label: string; tagalog: string };

export const nav: NavItem[] = [
    { to: '/menu', label: 'Menu', tagalog: 'Ulam at merienda' },
    { to: '/catering', label: 'Catering', tagalog: 'Handaan' },
    { to: '/grocery', label: 'Grocery', tagalog: 'Sari-sari' },
    { to: '/padala', label: 'Padala', tagalog: 'Balikbayan box' },
    { to: '/our-story', label: 'Our Story', tagalog: 'Kwento' },
    { to: '/visit', label: 'Visit', tagalog: 'Bisitahin kami' }
];

/** one line used in the footer, llms.txt and the default description */
export const ONE_LINER =
    'Family-run Filipino grill and grocery on Queens Blvd in Elmhurst since 2014: home-style food served turo-turo style, party trays and lechon, Filipino groceries, pera padala and balikbayan boxes.';
