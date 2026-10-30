// builds /llms.txt: a plain-text summary of the store for AI assistants and
// crawlers, written from the same data as the site so the two never disagree.
// scripts/prerender.ts writes it into dist/ at build time.
import { PARTY_SET } from '@/data/menu';
import { PAGES } from '@/data/pages';
import { ONE_LINER, SITE_URL, remittanceHours, site } from '@/data/site';
import { PRESS, SISTER_STORES } from '@/data/story';
import { formatRange, hoursSummary } from './hours';

const url = (path: string) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`);

export function llmsTxt(): string {
    const lines: string[] = [];
    lines.push(`# ${site.name}`);
    lines.push('');
    lines.push(
        `> ${site.name} (${site.legalName}) is a ${ONE_LINER.charAt(0).toLowerCase()}${ONE_LINER.slice(1)} Address: ${site.address.street}, ${site.address.city}, ${site.address.borough}, ${site.address.region} ${site.address.postalCode}, across Queens Blvd from Queens Center mall. Hours: ${hoursSummary}. Padala (remittance) counter: daily ${formatRange(remittanceHours)}. Phone: ${site.phone.display}. Fax: ${site.fax.display}. Facebook: ${site.facebook}. "Sariling atin" is Tagalog for "${site.meaning}."`
    );
    lines.push('');
    lines.push('## Pages');
    lines.push('');
    for (const page of PAGES) {
        lines.push(`- [${page.title.split(' | ')[0]}](${url(page.path)}): ${page.description}`);
    }
    lines.push('');
    lines.push('## Catering');
    lines.push('');
    lines.push(`- Full trays are 12.5 × 10.5 × 2.5 inches and feed about 10–15 people; most dishes also come as half trays.`);
    lines.push(`- Party tray set: ${PARTY_SET.trays} trays for $${PARTY_SET.price} + tax (1 beef, 1 chicken, 1 pork, 1 seafood, 1 vegetable, 1 appetizer, 2 noodles, 2 desserts, 2 rice), chosen from a fixed list.`);
    lines.push('- Whole lechon (roast pig): medium 30–35 lbs or large 36–40 lbs, market price.');
    lines.push(`- Orders are placed by phone at ${site.phone.display}. Prices are subject to change without prior notice.`);
    lines.push('');
    lines.push('## Press');
    lines.push('');
    for (const item of PRESS) lines.push(`- [${item.outlet} (${item.year})](${item.href}): ${item.note}`);
    if (SISTER_STORES.length) {
        lines.push('');
        lines.push('## Other Sariling Atin stores');
        lines.push('');
        for (const store of SISTER_STORES) lines.push(`- ${store.name}: ${store.address}${store.phone ? `, ${store.phone.display}` : ''}`);
    }
    lines.push('');
    return lines.join('\n');
}
