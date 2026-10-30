// every photo on the site, with its alt text and caption in one place.
// all of them come from the store's own Facebook page (facebook.com/SarilingAtinInc).
// files live in public/images; run `npm run images` after adding new ones.

export type PhotoInfo = {
    src: string;
    alt: string;
    caption?: string;
    /** focal point for object-position when the photo is cropped, e.g. '50% 30%' */
    focus?: string;
};

export const PHOTOS = {
    porkBbq: {
        src: '/images/food/pork-bbq-grill.webp',
        alt: 'Rows of glazed pork barbecue skewers cooking on a flat grill',
        caption: 'Pork BBQ on the grill',
        focus: '40% 55%'
    },
    lechonBellyRolls: {
        src: '/images/food/lechon-belly-rolls.webp',
        alt: 'Two rolled lechon pork bellies with golden, crackling skin, stuffed with lemongrass',
        caption: 'Lechon belly, rolled with lemongrass',
        focus: '50% 40%'
    },
    lechonBellySlice: {
        src: '/images/food/lechon-belly-slice.webp',
        alt: 'A cut lechon belly roll showing crisp skin and juicy layers of pork',
        caption: 'Lechon belly, sliced'
    },
    lechonWhole: {
        src: '/images/food/lechon-whole.webp',
        alt: 'A whole roasted lechon pig with lacquered red-brown skin, packed in a foil-lined box for pickup',
        caption: 'Whole lechon, boxed for a party',
        focus: '50% 40%'
    },
    grilledSquid: {
        src: '/images/food/grilled-squid.webp',
        alt: 'A foil tray of grilled squid glazed with sauce and topped with scallions and toasted garlic',
        caption: 'Grilled squid, catering tray',
        focus: '50% 50%'
    },
    handaanSpread: {
        src: '/images/food/handaan-spread.webp',
        alt: 'A party spread with a whole roast pig, fried milkfish, kinilaw and shrimp noodles on banana leaves',
        caption: 'A handaan spread',
        focus: '45% 50%'
    },
    crispyPancit: {
        src: '/images/food/crispy-pancit.webp',
        alt: 'Crispy noodles topped with a glossy sauce of vegetables and seafood on a white plate',
        caption: 'Crispy pancit with vegetables and seafood',
        focus: '50% 55%'
    },
    noodleSoup: {
        src: '/images/food/noodle-soup.webp',
        alt: 'A bowl of noodle soup with egg noodles, boiled eggs and vegetables',
        caption: 'Mainit na sabaw: noodle soup with egg'
    },
    taho: {
        src: '/images/food/taho.webp',
        alt: 'A bowl of taho: silken tofu topped with dark brown-sugar syrup and sago pearls',
        caption: 'Taho',
        focus: '50% 45%'
    },
    steamTable: {
        src: '/images/counter/steam-table.webp',
        alt: 'The turo-turo steam table filled with about twenty trays of Filipino dishes',
        caption: 'The turo-turo counter',
        focus: '50% 55%'
    },
    steamTableBbq: {
        src: '/images/counter/steam-table-bbq.webp',
        alt: 'Steam-table trays of stews, vegetables and fried pork beside a stack of barbecue skewers, against a red wall',
        caption: 'Point at what looks good',
        focus: '45% 50%'
    },
    steamTableCloseup: {
        src: '/images/counter/steam-table-closeup.webp',
        alt: 'Close view of steam-table trays of adobo, vegetables in coconut milk and stews',
        caption: 'Today’s ulam'
    },
    mustTry: {
        src: '/images/counter/must-try.webp',
        alt: 'The steam table with a handwritten “Must try” sign above the trays',
        caption: 'Ask what’s new on the counter'
    },
    elmhurstCounter: {
        src: '/images/store/elmhurst-counter.webp',
        alt: 'Inside the Elmhurst store: red walls, a chalkboard menu reading Sariling Atin, “our own,” pendant lights over the food counter',
        caption: 'The counter at 89-12 Queens Blvd',
        focus: '45% 50%'
    },
    grocerySauces: {
        src: '/images/store/grocery-sauces.webp',
        alt: 'A grocery aisle packed floor to ceiling with Filipino sauces, vinegars and condiments',
        caption: 'Sauces, vinegars and condiments',
        focus: '50% 40%'
    },
    grocerySnacks: {
        src: '/images/store/grocery-snacks.webp',
        alt: 'A grocery aisle of colorful Filipino snack bags and boxes',
        caption: 'The chichirya aisle',
        focus: '50% 40%'
    },
    groceryFridge: {
        src: '/images/store/grocery-fridge.webp',
        alt: 'A refrigerated case stacked with containers of kakanin and desserts, with eggs below',
        caption: 'Kakanin and sweets in the cooler',
        focus: '50% 35%'
    },
    driedFish: {
        src: '/images/store/dried-fish.webp',
        alt: 'A close-up pile of small dried fish',
        caption: 'Dried fish for frying at home'
    },
    holidayDining: {
        src: '/images/store/holiday-dining.webp',
        alt: 'A dining room decorated for Christmas with garlands, lanterns and a tree by the window',
        caption: 'Pasko at Sariling Atin',
        focus: '50% 40%'
    },
    tenthAnniversary: {
        src: '/images/store/tenth-anniversary.webp',
        alt: 'A chocolate cake with a candle shaped like the number 10, for the store’s tenth anniversary',
        caption: 'Ten years in Elmhurst, April 2024',
        focus: '50% 45%'
    },
    woodsideStorefront: {
        src: '/images/store/woodside-storefront.webp',
        alt: 'The red Sariling Atin storefront on Roosevelt Avenue in Woodside, with balikbayan box and pera padala signs',
        caption: 'Our Woodside branch on Roosevelt Ave',
        focus: '50% 40%'
    }
} satisfies Record<string, PhotoInfo>;

export type PhotoKey = keyof typeof PHOTOS;

/** the image the site uses when a link is shared (made by scripts/brand-assets.ts) */
export const SHARE_IMAGE = { path: '/og-image.jpg', width: 1200, height: 630, alt: 'Sariling Atin, Filipino grill and grocery in Elmhurst, Queens' };
