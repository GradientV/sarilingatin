// what's on the grocery shelves, by aisle. kept general on purpose:
// stock changes, so the copy names the kinds of things you'll find,
// plus a few items press and reviewers have called out by name.
import type { PhotoKey } from './photos';

export type Aisle = {
    id: string;
    tagalog: string;
    english: string;
    body: string;
    examples: string[];
    photo?: PhotoKey;
};

export const AISLES: Aisle[] = [
    {
        id: 'pantry',
        tagalog: 'Pampalasa',
        english: 'Sauces & pantry',
        body: 'Everything you need to cook from home: the vinegar, soy sauce and patis behind every adobo, plus the mixes and sauces that taste like Sunday lunch.',
        examples: ['Cane vinegar', 'Soy sauce & patis', 'Lechon sauce', 'Banana ketchup', 'Sinigang mixes', 'Bagoong'],
        photo: 'grocerySauces'
    },
    {
        id: 'chichirya',
        tagalog: 'Chichirya',
        english: 'Snacks',
        body: 'The chips, crackers, nuts and candies from back home: pasalubong for the office, or for the drive home.',
        examples: ['Corn nuts', 'Mixed nuts', 'Squid snacks', 'Shrimp chips', 'Polvoron', 'Wafers & biscuits'],
        photo: 'grocerySnacks'
    },
    {
        id: 'kakanin',
        tagalog: 'Kakanin at matamis',
        english: 'Rice cakes & sweets',
        body: 'Rice cakes and desserts in the cooler, ready for merienda or the potluck table.',
        examples: ['Puto', 'Kutsinta', 'Sapin-sapin', 'Biko', 'Ube', 'Leche flan'],
        photo: 'groceryFridge'
    },
    {
        id: 'frozen',
        tagalog: 'Frozen',
        english: 'Freezer favorites',
        body: 'Breakfast meats and seafood to stock up on, so silog is always one pan away.',
        examples: ['Longganisa', 'Tocino', 'Bangus (milkfish)', 'Tinapa', 'Lumpia', 'Ube']
    },
    {
        id: 'tuyo',
        tagalog: 'Tuyo at daing',
        english: 'Dried fish',
        body: 'Dried and salted fish for frying at home, with garlic rice and a dish of spiced vinegar.',
        examples: ['Tuyo', 'Dilis', 'Daing'],
        photo: 'driedFish'
    },
    {
        id: 'inumin',
        tagalog: 'Inumin',
        english: 'Drinks & coffee',
        body: 'Coffee, juices, sodas and the powdered drinks every Filipino kid grew up on.',
        examples: ['3-in-1 coffee', 'Juice drinks', 'Chocolate drinks', 'Sodas']
    }
];
