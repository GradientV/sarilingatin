// the kitchen's dishes, grouped the way Filipinos order: by what's in the pot.
//
// tray prices come from the store's own catering menu (posted on their Facebook
// page in 2025): full tray / half tray, in dollars, before tax. the menu itself says
// "prices are subject to change without prior notice", and so does the site.
//
// the turo-turo counter changes every day, so the menu page shows these as
// "what our kitchen makes", not "what's out right now".
//
// editing:
//   - change a price: edit tray.full / tray.half
//   - hide a dish from the catering price list: delete its `tray`
//   - market price: tray: { full: 'MP', half: null }

export type CategoryId = 'baboy' | 'manok' | 'baka' | 'kambing' | 'dagat' | 'gulay' | 'pancit' | 'kanin' | 'merienda';

export type Category = {
    id: CategoryId;
    tagalog: string;
    english: string;
    blurb: string;
};

export const CATEGORIES: Category[] = [
    { id: 'baboy', tagalog: 'Baboy', english: 'Pork', blurb: 'Adobo, sisig, crackling lechon kawali and the barbecue people line up for.' },
    { id: 'manok', tagalog: 'Manok', english: 'Chicken', blurb: 'Braised, stewed and fried, from adobo to afritada.' },
    { id: 'baka', tagalog: 'Baka', english: 'Beef', blurb: 'Slow-cooked stews: kaldereta, mechado, and oxtail kare-kare.' },
    { id: 'kambing', tagalog: 'Kambing', english: 'Goat', blurb: 'Goat the way it’s cooked for fiestas back home.' },
    { id: 'dagat', tagalog: 'Pagkaing-dagat', english: 'Seafood', blurb: 'Bangus (milkfish), tilapia, squid and shrimp, grilled, fried or simmered.' },
    { id: 'gulay', tagalog: 'Gulay', english: 'Vegetables', blurb: 'Pinakbet, laing, chopsuey and vegetables in coconut milk.' },
    { id: 'pancit', tagalog: 'Pancit', english: 'Noodles', blurb: 'Noodles for long life, at every birthday and every party.' },
    { id: 'kanin', tagalog: 'Kanin', english: 'Rice', blurb: 'Nothing is ulam without rice.' },
    { id: 'merienda', tagalog: 'Merienda', english: 'Snacks & desserts', blurb: 'Kakanin, turon and something sweet for later.' }
];

export type Tag = 'favorite' | 'spicy' | 'gata' | 'grilled' | 'fried' | 'soup';

export const TAG_LABELS: Record<Tag, string> = {
    favorite: 'Paborito',
    spicy: 'Maanghang (spicy)',
    gata: 'With coconut milk',
    grilled: 'Inihaw (grilled)',
    fried: 'Prito (fried)',
    soup: 'Sabaw (soup)'
};

/** full and half tray prices in dollars. 'MP' = market price. unit = sold by the piece */
export type TrayPrice = {
    full: number | 'MP' | 'ask';
    half: number | null;
    unit?: string;
};

export type Dish = {
    id: string;
    name: string;
    /** another name people know it by */
    also?: string;
    description: string;
    category: CategoryId;
    tags?: Tag[];
    /** catering tray price. dishes without one only appear on the menu page */
    tray?: TrayPrice;
    /** a photo of this dish from the store, from src/data/photos.ts */
    photo?: string;
};

export const DISHES: Dish[] = [
    // BABOY / PORK
    {
        id: 'pork-bbq',
        name: 'Pork BBQ',
        also: 'Barbecue sticks',
        description: 'Sweet, smoky pork skewers basted and grilled to a sticky char. A best-seller since the store opened.',
        category: 'baboy',
        tags: ['favorite', 'grilled'],
        tray: { full: 2.75, half: null, unit: 'per stick' },
        photo: 'porkBbq'
    },
    {
        id: 'sisig',
        name: 'Sisig',
        description: 'Chopped grilled pork with onions, chilies and calamansi, crisp at the edges. The most-talked-about dish in our reviews.',
        category: 'baboy',
        tags: ['favorite', 'spicy'],
        tray: { full: 65, half: 37.5 }
    },
    {
        id: 'pork-adobo',
        name: 'Pork Adobo',
        description: 'Pork braised in vinegar, soy sauce, garlic, bay leaf and peppercorns until tender and glossy.',
        category: 'baboy',
        tags: ['favorite'],
        tray: { full: 50, half: 30 }
    },
    {
        id: 'lechon-kawali',
        name: 'Lechon Kawali',
        description: 'Pork belly boiled, then deep-fried until the skin shatters. Served with lechon sauce.',
        category: 'baboy',
        tags: ['favorite', 'fried'],
        tray: { full: 65, half: 37.5 }
    },
    {
        id: 'lechon-belly',
        name: 'Lechon Belly',
        also: 'Rolled lechon',
        description: 'Pork belly rolled around lemongrass and aromatics, then roasted until the skin crackles.',
        category: 'baboy',
        tags: ['favorite'],
        photo: 'lechonBellyRolls'
    },
    {
        id: 'crispy-pata',
        name: 'Crispy Pata',
        description: 'A whole pork knuckle, simmered then deep-fried golden. Comes with soy-vinegar dip.',
        category: 'baboy',
        tags: ['favorite', 'fried'],
        tray: { full: 11.95, half: null, unit: 'per piece' }
    },
    {
        id: 'bicol-express',
        name: 'Bicol Express',
        description: 'Pork simmered in coconut milk with chilies and shrimp paste. Rich, creamy and spicy.',
        category: 'baboy',
        tags: ['favorite', 'spicy', 'gata'],
        tray: { full: 50, half: 30 }
    },
    {
        id: 'pork-dinuguan',
        name: 'Dinuguan',
        also: 'Pork Dinuguan',
        description: 'Pork stewed in a dark, savory sauce of pork blood, vinegar and garlic. Best with puto.',
        category: 'baboy',
        tags: ['favorite'],
        tray: { full: 50, half: 30 }
    },
    {
        id: 'inihaw-na-liempo',
        name: 'Inihaw na Liempo',
        description: 'Marinated pork belly grilled over high heat. Dip it in soy sauce, vinegar and chili.',
        category: 'baboy',
        tags: ['grilled'],
        tray: { full: 65, half: 37.5 }
    },
    {
        id: 'sinugba',
        name: 'Sinugba',
        description: 'Visayan-style grilled pork (sugba means “to grill”), smoky and lightly charred.',
        category: 'baboy',
        tags: ['grilled'],
        tray: { full: 55, half: 32.5 }
    },
    {
        id: 'lumpia-shanghai',
        name: 'Lumpia Shanghai',
        also: 'Egg rolls',
        description: 'Thin, crisp egg rolls packed with seasoned ground pork. The first tray to empty at every party.',
        category: 'baboy',
        tags: ['fried'],
        tray: { full: 50, half: 27.5 }
    },
    {
        id: 'pata-tim',
        name: 'Pata Tim',
        description: 'Pork leg braised slowly in soy sauce, sugar and star anise until it falls off the bone.',
        category: 'baboy',
        tray: { full: 55, half: 32.5 }
    },
    {
        id: 'pork-menudo',
        name: 'Pork Menudo',
        description: 'Diced pork and liver in tomato sauce with potatoes and carrots.',
        category: 'baboy',
        tray: { full: 50, half: 30 }
    },
    {
        id: 'giniling-na-baboy',
        name: 'Giniling na Baboy',
        description: 'Ground pork sautéed with tomatoes, potatoes and carrots. A home-cooking classic.',
        category: 'baboy',
        tray: { full: 50, half: 30 }
    },
    {
        id: 'pork-igado',
        name: 'Pork Igado',
        description: 'Ilocano-style pork and liver sautéed with vinegar, soy sauce, peas and bell peppers.',
        category: 'baboy',
        tray: { full: 50, half: 30 }
    },
    {
        id: 'pork-asado',
        name: 'Pork Asado',
        description: 'Pork braised in a sweet-savory soy and tomato sauce.',
        category: 'baboy',
        tray: { full: 50, half: 30 }
    },
    {
        id: 'pork-estofado',
        name: 'Pork Estofado',
        description: 'Pork braised in sweetened soy and vinegar with saba bananas and carrots.',
        category: 'baboy',
        tray: { full: 50, half: 30 }
    },
    {
        id: 'pork-hamonado',
        name: 'Pork Hamonado',
        description: 'Pork simmered in pineapple juice and soy sauce until sweet and sticky.',
        category: 'baboy',
        tray: { full: 50, half: 30 }
    },
    {
        id: 'pork-embutido',
        name: 'Pork Embutido',
        description: 'Filipino meatloaf: ground pork rolled around egg and sausage, then steamed and sliced.',
        category: 'baboy',
        tray: { full: 50, half: 30 }
    },
    {
        id: 'lechon-paksiw',
        name: 'Lechon Paksiw',
        description: 'Roast pork simmered in vinegar, garlic and lechon sauce. Sweet, tangy and comforting.',
        category: 'baboy',
        tray: { full: 50, half: 30 }
    },
    {
        id: 'tokwat-baboy',
        name: 'Tokwa’t Baboy',
        description: 'Fried tofu and tender pork tossed in a soy-vinegar dressing with onions.',
        category: 'baboy',
        tags: ['fried'],
        tray: { full: 50, half: 30 }
    },
    {
        id: 'pork-tocino',
        name: 'Pork Tocino',
        description: 'Sweet cured pork, caramelized in the pan. Breakfast with garlic rice and egg.',
        category: 'baboy',
        tray: { full: 50, half: 30 }
    },
    {
        id: 'pork-longanisa',
        name: 'Pork Longanisa',
        description: 'Garlicky, slightly sweet Filipino pork sausage.',
        category: 'baboy',
        tray: { full: 50, half: 30 }
    },
    {
        id: 'chicharon-bulaklak',
        name: 'Chicharon Bulaklak',
        description: 'Crunchy fried pork ruffle fat, shaped like a flower (bulaklak). Dip it in spiced vinegar.',
        category: 'baboy',
        tags: ['fried']
    },

    // MANOK / CHICKEN
    {
        id: 'chicken-adobo',
        name: 'Chicken Adobo',
        description: 'Chicken braised in vinegar, soy sauce, garlic and bay leaves. The national comfort food.',
        category: 'manok',
        tags: ['favorite'],
        tray: { full: 45, half: 27.5 }
    },
    {
        id: 'chicken-afritada',
        name: 'Chicken Afritada',
        description: 'Chicken stewed in tomato sauce with potatoes, carrots and bell peppers.',
        category: 'manok',
        tray: { full: 45, half: 27.5 }
    },
    {
        id: 'chicken-curry',
        name: 'Chicken Curry',
        description: 'Filipino-style curry with coconut milk, potatoes and carrots. Mild and creamy.',
        category: 'manok',
        tags: ['gata'],
        tray: { full: 45, half: 27.5 }
    },
    {
        id: 'chicken-pastel',
        name: 'Chicken Pastel',
        description: 'Creamy chicken stew with sausage, mushrooms and vegetables.',
        category: 'manok',
        tray: { full: 45, half: 27.5 }
    },
    {
        id: 'chicken-empanada',
        name: 'Chicken Empanada',
        description: 'Golden turnovers filled with seasoned chicken and vegetables.',
        category: 'manok',
        tray: { full: 45, half: 27.5 }
    },
    {
        id: 'chicken-teriyaki',
        name: 'Chicken Teriyaki',
        description: 'Chicken glazed in a sweet soy sauce. A safe bet for the kids’ table.',
        category: 'manok',
        tray: { full: 45, half: 27.5 }
    },
    {
        id: 'chicken-wings',
        name: 'Chicken Wings',
        description: 'Crispy fried chicken wings.',
        category: 'manok',
        tags: ['fried'],
        tray: { full: 45, half: 27.5 }
    },

    // BAKA / BEEF
    {
        id: 'kare-kare-oxtail',
        name: 'Kare-Kare',
        also: 'Oxtail',
        description: 'Oxtail in a thick, golden peanut sauce with eggplant, string beans and bok choy. Served with bagoong.',
        category: 'baka',
        tags: ['favorite'],
        tray: { full: 70, half: 40 }
    },
    {
        id: 'beef-kaldereta',
        name: 'Beef Kaldereta',
        description: 'Beef stewed in a rich tomato sauce with liver spread, potatoes, carrots and bell peppers.',
        category: 'baka',
        tray: { full: 70, half: 40 }
    },
    {
        id: 'beef-mechado',
        name: 'Beef Mechado',
        description: 'Beef braised in tomato sauce and soy with potatoes. Sunday-lunch food.',
        category: 'baka',
        tray: { full: 70, half: 40 }
    },
    {
        id: 'beef-steak',
        name: 'Beef Steak',
        also: 'Bistek Tagalog',
        description: 'Thin-sliced beef in soy sauce and calamansi, topped with soft onion rings.',
        category: 'baka',
        tray: { full: 70, half: 40 }
    },
    {
        id: 'beef-afritada',
        name: 'Beef Afritada',
        description: 'Beef stewed in tomato sauce with potatoes, carrots and bell peppers.',
        category: 'baka',
        tray: { full: 70, half: 40 }
    },
    {
        id: 'beef-asado',
        name: 'Beef Asado',
        description: 'Beef braised in a sweet-savory soy and tomato sauce.',
        category: 'baka',
        tray: { full: 70, half: 40 }
    },
    {
        id: 'beef-pochero',
        name: 'Beef Pochero',
        description: 'Beef stew with saba bananas, potatoes, cabbage and chickpeas in a tomato broth.',
        category: 'baka',
        tags: ['soup'],
        tray: { full: 70, half: 40 }
    },
    {
        id: 'beef-papaitan',
        name: 'Beef Papaitan',
        description: 'A bold Ilocano soup of beef and tripe with a signature bitter (pait) edge.',
        category: 'baka',
        tags: ['soup'],
        tray: { full: 70, half: 40 }
    },
    {
        id: 'beef-broccoli',
        name: 'Beef Broccoli',
        description: 'Tender beef and broccoli in a savory oyster sauce.',
        category: 'baka',
        tray: { full: 70, half: 40 }
    },

    // KAMBING / GOAT
    {
        id: 'kalderetang-kambing',
        name: 'Kalderetang Kambing',
        description: 'Goat stewed low and slow in a rich tomato gravy with potatoes and peppers.',
        category: 'kambing',
        tags: ['favorite'],
        tray: { full: 70, half: 40 }
    },
    {
        id: 'adobong-kambing',
        name: 'Adobong Kambing',
        description: 'Goat braised adobo-style in vinegar, soy sauce and plenty of garlic.',
        category: 'kambing',
        tray: { full: 70, half: 40 }
    },

    // PAGKAING-DAGAT / SEAFOOD
    {
        id: 'grilled-squid',
        name: 'Grilled Squid',
        also: 'Inihaw na pusit',
        description: 'Whole squid grilled and glazed, finished with scallions and toasted garlic.',
        category: 'dagat',
        tags: ['grilled'],
        tray: { full: 65, half: 37.5 },
        photo: 'grilledSquid'
    },
    {
        id: 'daing-na-bangus',
        name: 'Daing na Bangus',
        description: 'Milkfish marinated in vinegar and garlic, then fried crisp.',
        category: 'dagat',
        tags: ['fried'],
        tray: { full: 50, half: 30 }
    },
    {
        id: 'rellenong-bangus',
        name: 'Rellenong Bangus',
        description: 'Milkfish deboned, stuffed with its own flesh sautéed with vegetables, then fried. A party showpiece.',
        category: 'dagat',
        tray: { full: 65, half: 37.5 }
    },
    {
        id: 'broiled-milkfish',
        name: 'Broiled Milkfish',
        also: 'Inihaw na bangus',
        description: 'Whole bangus broiled until smoky and flaky.',
        category: 'dagat',
        tags: ['grilled'],
        tray: { full: 50, half: 30 }
    },
    {
        id: 'sinigang-na-hipon',
        name: 'Sinigang na Hipon',
        description: 'Shrimp in a sour tamarind broth with radish, string beans and greens.',
        category: 'dagat',
        tags: ['soup'],
        tray: { full: 65, half: 37.5 }
    },
    {
        id: 'ginataang-hipon',
        name: 'Ginataang Hipon',
        description: 'Shrimp simmered in coconut milk with garlic and ginger.',
        category: 'dagat',
        tags: ['gata'],
        tray: { full: 65, half: 37.5 }
    },
    {
        id: 'adobong-pusit',
        name: 'Adobong Pusit',
        description: 'Squid cooked adobo-style in its own ink with vinegar and garlic.',
        category: 'dagat',
        tray: { full: 50, half: 30 }
    },
    {
        id: 'fish-escabeche',
        name: 'Fish Escabeche',
        also: 'Tilapia',
        description: 'Fried tilapia in a sweet-and-sour sauce with peppers and ginger.',
        category: 'dagat',
        tray: { full: 50, half: 30 }
    },
    {
        id: 'fish-adobo-sa-gata',
        name: 'Fish Adobo sa Gata',
        description: 'Fish braised adobo-style and finished with coconut milk.',
        category: 'dagat',
        tags: ['gata'],
        tray: { full: 50, half: 30 }
    },
    {
        id: 'black-bean-fish-fillet',
        name: 'Black Bean Fish Fillet',
        description: 'Fish fillet in a savory fermented black bean (tausi) sauce.',
        category: 'dagat',
        tray: { full: 50, half: 30 }
    },
    {
        id: 'sweet-sour-fish-fillet',
        name: 'Sweet & Sour Fish Fillet',
        description: 'Crispy fish fillet with sweet-and-sour sauce and vegetables.',
        category: 'dagat',
        tags: ['fried'],
        tray: { full: 50, half: 30 }
    },
    {
        id: 'tilapia',
        name: 'Grilled or Fried Tilapia',
        description: 'Whole tilapia, grilled or fried, however you like it.',
        category: 'dagat',
        tray: { full: 50, half: 30 }
    },
    {
        id: 'grilled-tuna',
        name: 'Grilled Tuna',
        description: 'Tuna grilled over high heat and basted until smoky.',
        category: 'dagat',
        tags: ['grilled'],
        tray: { full: 65, half: 37.5 }
    },
    {
        id: 'baked-tuna',
        name: 'Baked Tuna',
        description: 'Oven-baked tuna, seasoned and tender.',
        category: 'dagat',
        tray: { full: 65, half: 37.5 }
    },
    {
        id: 'grilled-salmon',
        name: 'Grilled Salmon',
        description: 'Salmon grilled and glazed.',
        category: 'dagat',
        tags: ['grilled'],
        tray: { full: 65, half: 37.5 }
    },

    // GULAY / VEGETABLES
    {
        id: 'fried-veg-lumpia',
        name: 'Vegetable Lumpia',
        also: 'Lumpiang gulay',
        description: 'Crisp spring rolls stuffed with sautéed vegetables. Dip in spiced vinegar.',
        category: 'gulay',
        tags: ['favorite', 'fried'],
        tray: { full: 40, half: 25 }
    },
    {
        id: 'pinakbet',
        name: 'Pinakbet',
        description: 'Ilocano mixed vegetables (squash, eggplant, okra, bitter melon, string beans) with shrimp paste.',
        category: 'gulay',
        tray: { full: 40, half: 25 }
    },
    {
        id: 'laing',
        name: 'Laing',
        description: 'Taro leaves slow-cooked in coconut milk with chilies, from Bicol.',
        category: 'gulay',
        tags: ['gata', 'spicy'],
        tray: { full: 50, half: 30 }
    },
    {
        id: 'ginataang-langka',
        name: 'Ginataang Langka',
        description: 'Young jackfruit simmered in coconut milk.',
        category: 'gulay',
        tags: ['gata'],
        tray: { full: 45, half: 27.5 }
    },
    {
        id: 'ginataang-sitaw-kalabasa',
        name: 'Ginataang Sitaw at Kalabasa',
        description: 'String beans and squash in coconut milk.',
        category: 'gulay',
        tags: ['gata'],
        tray: { full: 40, half: 25 }
    },
    {
        id: 'chopsuey',
        name: 'Chopsuey',
        description: 'Stir-fried mixed vegetables in a light, savory sauce.',
        category: 'gulay',
        tray: { full: 40, half: 25 }
    },
    {
        id: 'ampalaya-con-carne',
        name: 'Ampalaya con Carne',
        description: 'Bitter melon stir-fried with beef. An acquired taste you’ll come to love.',
        category: 'gulay',
        tray: { full: 40, half: 25 }
    },
    {
        id: 'steamed-green-beans',
        name: 'Steamed Green Beans',
        description: 'Simple steamed green beans.',
        category: 'gulay',
        tray: { full: 40, half: 25 }
    },
    {
        id: 'steamed-okra',
        name: 'Steamed Okra',
        description: 'Steamed okra, best with bagoong on the side.',
        category: 'gulay',
        tray: { full: 40, half: 25 }
    },

    // PANCIT / NOODLES
    {
        id: 'pancit-malabon',
        name: 'Pancit Malabon',
        description: 'Thick rice noodles in a seafood-rich annatto sauce, topped with shrimp, egg and chicharon.',
        category: 'pancit',
        tags: ['favorite'],
        tray: { full: 50, half: 30 }
    },
    {
        id: 'pancit-canton',
        name: 'Pancit Canton',
        description: 'Stir-fried egg noodles with vegetables, meat and a squeeze of calamansi.',
        category: 'pancit',
        tray: { full: 40, half: 25 }
    },
    {
        id: 'pancit-bihon',
        name: 'Pancit Bihon',
        description: 'Thin rice noodles stir-fried with vegetables and meat.',
        category: 'pancit',
        tray: { full: 40, half: 25 }
    },
    {
        id: 'palabok',
        name: 'Palabok',
        description: 'Rice noodles under a shrimp-and-annatto gravy, with chicharon, egg and scallions.',
        category: 'pancit',
        tray: { full: 40, half: 25 }
    },
    {
        id: 'miki-bihon',
        name: 'Miki Bihon',
        description: 'Egg noodles and rice noodles stir-fried together.',
        category: 'pancit',
        tray: { full: 40, half: 25 }
    },
    {
        id: 'bam-i',
        name: 'Bam-i',
        description: 'A Cebuano favorite: canton and sotanghon noodles tossed with meat and vegetables.',
        category: 'pancit',
        tray: { full: 40, half: 25 }
    },
    {
        id: 'sotanghon-canton',
        name: 'Sotanghon at Canton',
        description: 'Glass noodles and egg noodles stir-fried together.',
        category: 'pancit',
        tray: { full: 40, half: 25 }
    },
    {
        id: 'sotanghon-guisado',
        name: 'Sotanghon Guisado',
        description: 'Sautéed glass noodles with vegetables and meat.',
        category: 'pancit',
        tray: { full: 40, half: 25 }
    },
    {
        id: 'spaghetti',
        name: 'Filipino Spaghetti',
        description: 'Sweet-style spaghetti with sliced hot dogs and cheese. Every kid’s favorite party tray.',
        category: 'pancit',
        tray: { full: 40, half: 25 }
    },

    // KANIN / RICE
    {
        id: 'garlic-fried-rice',
        name: 'Garlic Fried Rice',
        also: 'Sinangag',
        description: 'Rice fried with plenty of toasted garlic.',
        category: 'kanin',
        tray: { full: 25, half: 17.5 }
    },
    {
        id: 'shanghai-fried-rice',
        name: 'Shanghai Fried Rice',
        description: 'Chinese-Filipino fried rice with egg and vegetables.',
        category: 'kanin',
        tray: { full: 25, half: 17.5 }
    },
    {
        id: 'chicken-fried-rice',
        name: 'Chicken Fried Rice',
        description: 'Fried rice with chicken, egg and vegetables.',
        category: 'kanin',
        tray: { full: 25, half: 17.5 }
    },
    {
        id: 'shrimp-fried-rice',
        name: 'Shrimp Fried Rice',
        description: 'Fried rice with shrimp, egg and vegetables.',
        category: 'kanin',
        tray: { full: 25, half: 17.5 }
    },
    {
        id: 'vegetable-fried-rice',
        name: 'Vegetable Fried Rice',
        description: 'Fried rice with egg and mixed vegetables.',
        category: 'kanin',
        tray: { full: 20, half: 15 }
    },
    {
        id: 'jasmine-rice',
        name: 'Jasmine White Rice',
        description: 'Steamed jasmine rice.',
        category: 'kanin',
        tray: { full: 20, half: 15 }
    },

    // MERIENDA / SNACKS & DESSERTS
    {
        id: 'turon',
        name: 'Turon',
        description: 'Saba banana and jackfruit wrapped in a spring-roll wrapper and fried in caramelized sugar.',
        category: 'merienda',
        tags: ['favorite', 'fried'],
        tray: { full: 'ask', half: null }
    },
    {
        id: 'taho',
        name: 'Taho',
        description: 'Warm silken tofu with brown-sugar syrup (arnibal) and sago pearls. The morning street-vendor classic.',
        category: 'merienda',
        photo: 'taho'
    },
    {
        id: 'halo-halo',
        name: 'Halo-halo',
        description: 'Shaved ice “mix-mix” with sweet beans, fruit, leche flan and ube. Ask if it’s on today.',
        category: 'merienda'
    },
    {
        id: 'leche-flan',
        name: 'Leche Flan',
        description: 'Dense, silky caramel custard.',
        category: 'merienda',
        tray: { full: 'ask', half: null }
    },
    {
        id: 'cassava-cake',
        name: 'Cassava Cake',
        description: 'Baked grated cassava and coconut milk under a golden custard top.',
        category: 'merienda',
        tags: ['gata'],
        tray: { full: 'ask', half: null }
    },
    {
        id: 'buko-pandan',
        name: 'Buko Pandan',
        description: 'Young coconut and pandan jelly in sweet cream. Served cold.',
        category: 'merienda',
        tray: { full: 'ask', half: null }
    },
    {
        id: 'ginataang-bilo-bilo',
        name: 'Ginataang Bilo-bilo',
        description: 'Chewy rice balls, saba and jackfruit in warm, sweet coconut milk.',
        category: 'merienda',
        tags: ['gata'],
        tray: { full: 'ask', half: null }
    },
    {
        id: 'puto-cheese',
        name: 'Puto Cheese',
        description: 'Soft steamed rice cakes topped with cheese. Perfect with dinuguan.',
        category: 'merienda',
        tray: { full: 'ask', half: null }
    },
    {
        id: 'pitsi-pitsi',
        name: 'Pitsi-pitsi',
        description: 'Steamed cassava bites rolled in grated coconut.',
        category: 'merienda',
        tray: { full: 'ask', half: null }
    },
    {
        id: 'biko',
        name: 'Biko',
        also: 'Sweet rice',
        description: 'Sticky rice cooked in coconut milk and brown sugar, topped with latik.',
        category: 'merienda',
        tags: ['gata'],
        tray: { full: 'ask', half: null }
    },
    {
        id: 'fruit-salad',
        name: 'Fruit Salad',
        description: 'Filipino-style fruit salad in sweet cream. The dessert at every Christmas table.',
        category: 'merienda',
        tray: { full: 'ask', half: null }
    }
];

export const dishesIn = (category: CategoryId) => DISHES.filter((dish) => dish.category === category);
export const dishById = (id: string) => DISHES.find((dish) => dish.id === id);

/** the favorites strip on the home and menu pages, in this order */
export const FAVORITE_IDS = [
    'pork-bbq',
    'sisig',
    'lechon-belly',
    'bicol-express',
    'kare-kare-oxtail',
    'pork-dinuguan',
    'lechon-kawali',
    'turon'
];

/**
 * the "12 trays for $449 + tax" party set, exactly as the store's party-tray menu
 * lists it. the menu says: you can only choose from this set, no changes, no exceptions.
 */
export const PARTY_SET = {
    price: 449,
    trays: 12,
    slots: [
        {
            id: 'beef',
            label: 'Beef',
            tagalog: 'Baka',
            count: 1,
            options: ['Beef Afritada', 'Beef Asado', 'Beef Broccoli', 'Beef Kaldereta', 'Beef Mechado', 'Beef Papaitan', 'Beef Pochero', 'Beef Steak']
        },
        {
            id: 'chicken',
            label: 'Chicken',
            tagalog: 'Manok',
            count: 1,
            options: ['Chicken Adobo', 'Chicken Afritada', 'Chicken Curry', 'Chicken Teriyaki']
        },
        {
            id: 'pork',
            label: 'Pork',
            tagalog: 'Baboy',
            count: 1,
            options: ['Pork Adobo', 'Pork Asado', 'Bicol Express', 'Dinuguan', 'Pork Estofado', 'Giniling', 'Pork Igado', 'Pork Menudo']
        },
        {
            id: 'seafood',
            label: 'Seafood',
            tagalog: 'Pagkaing-dagat',
            count: 1,
            options: [
                'Adobong Pusit',
                'Black Bean Fish Fillet',
                'Broiled Milkfish',
                'Daing na Bangus',
                'Fish Escabeche',
                'Inihaw na Isda (Tilapia)',
                'Inihaw na Isda (Tuna)',
                'Sinigang na Hipon',
                'Sweet & Sour Fish Fillet'
            ]
        },
        {
            id: 'vegetable',
            label: 'Vegetable',
            tagalog: 'Gulay',
            count: 1,
            options: ['Ampalaya con Carne', 'Chopsuey', 'Ginataang Sitaw at Kalabasa', 'Pinakbet / Diningding', 'Steamed Green Beans', 'Steamed Okra']
        },
        {
            id: 'appetizer',
            label: 'Appetizer',
            tagalog: 'Pampagana',
            count: 1,
            options: ['Chicken Wings', 'Egg Rolls (Lumpia Shanghai)', 'Fried Vegetable Lumpia', 'Pork BBQ (20 pcs)']
        },
        {
            id: 'noodles',
            label: 'Noodles',
            tagalog: 'Pancit',
            count: 2,
            options: ['Bihon Canton', 'Miki Bihon', 'Palabok', 'Pancit Bihon', 'Pancit Canton', 'Sotanghon at Canton', 'Sotanghon Guisado', 'Spaghetti']
        },
        {
            id: 'dessert',
            label: 'Dessert',
            tagalog: 'Panghimagas',
            count: 2,
            options: [
                'Buko Pandan',
                'Cassava Cake',
                'Fruit Salad',
                'Ginataang Bilo-bilo',
                'Leche Flan',
                'Pitsi-pitsi',
                'Puto Cheese',
                'Biko (Sweet Rice)',
                'Turon'
            ]
        },
        {
            id: 'rice',
            label: 'Rice',
            tagalog: 'Kanin',
            count: 2,
            options: ['Chicken Fried Rice', 'Garlic Fried Rice', 'Shanghai Fried Rice', 'Shrimp Fried Rice', 'Vegetable Fried Rice', 'Plain White Rice']
        }
    ]
} as const;

export type PartySlotId = (typeof PARTY_SET.slots)[number]['id'];

/** whole roast pig, priced by the market at the time of the order */
export const LECHON_SIZES = [
    { id: 'medium', label: 'Medium', weight: '30–35 lbs' },
    { id: 'large', label: 'Large', weight: '36–40 lbs' }
] as const;

/** the store's tray: 12.5 × 10.5 × 2.5 inches; one full tray feeds 10–15 people */
export const TRAY_FACTS = {
    size: '12.5 × 10.5 × 2.5 in',
    feeds: '10–15 people',
    note: 'Prices are subject to change without prior notice.'
};
