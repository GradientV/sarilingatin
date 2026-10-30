// structured data (schema.org JSON-LD) so Google can show hours, address,
// phone and the menu link right in search results.
import { PHOTOS, SHARE_IMAGE } from '@/data/photos';
import { ONE_LINER, SITE_URL, hours, site } from '@/data/site';

/** groups days that share the same hours into one OpeningHoursSpecification each */
function openingHours() {
    const groups = new Map<string, string[]>();
    for (const entry of hours) {
        if (!entry.open || !entry.close) continue;
        const key = `${entry.open}-${entry.close}`;
        groups.set(key, [...(groups.get(key) ?? []), entry.day]);
    }
    return [...groups.entries()].map(([key, days]) => {
        const [opens, closes] = key.split('-');
        return { '@type': 'OpeningHoursSpecification', dayOfWeek: days, opens, closes };
    });
}

export function storeSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Restaurant',
        '@id': `${SITE_URL}/#store`,
        name: site.name,
        legalName: site.legalName,
        description: ONE_LINER,
        slogan: 'Lutong bahay, sariling atin.',
        url: `${SITE_URL}/`,
        telephone: '+1-718-397-1200',
        faxNumber: '+1-718-397-1201',
        priceRange: '$$',
        servesCuisine: ['Filipino'],
        acceptsReservations: false,
        hasMenu: `${SITE_URL}/menu`,
        foundingDate: site.openedOn,
        paymentAccepted: 'Cash, Credit Card',
        currenciesAccepted: 'USD',
        image: [`${SITE_URL}${SHARE_IMAGE.path}`, `${SITE_URL}${PHOTOS.porkBbq.src}`, `${SITE_URL}${PHOTOS.steamTable.src}`, `${SITE_URL}${PHOTOS.elmhurstCounter.src}`],
        address: {
            '@type': 'PostalAddress',
            streetAddress: site.address.street,
            addressLocality: site.address.city,
            addressRegion: site.address.region,
            postalCode: site.address.postalCode,
            addressCountry: site.address.country
        },
        geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
        openingHoursSpecification: openingHours(),
        sameAs: [site.facebook]
    };
}
