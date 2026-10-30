// the catering planner's list: what's on it, what it costs, and the text a
// customer copies before calling the store. no React in here, just data in and out.
//
// nothing is ever sent anywhere. orders are placed by phone; the list lives in
// the visitor's browser (see PlannerContext) so it survives a reload.
import { LECHON_SIZES, PARTY_SET, dishById, type PartySlotId } from '@/data/menu';
import { site } from '@/data/site';
import { moneyExact } from './format';

export type TraySize = 'full' | 'half';
export type LechonSize = (typeof LECHON_SIZES)[number]['id'];
export type PartyPicks = Partial<Record<PartySlotId, string[]>>;

export type LineItem =
    | { key: string; kind: 'tray'; dishId: string; size: TraySize; qty: number }
    | { key: string; kind: 'unit'; dishId: string; qty: number }
    | { key: string; kind: 'ask'; dishId: string; qty: number }
    | { key: string; kind: 'party'; picks: PartyPicks; qty: number }
    | { key: string; kind: 'lechon'; size: LechonSize; qty: number };

export const MAX_QTY = 999;

export const trayItem = (dishId: string, size: TraySize, qty = 1): LineItem => ({ key: `tray:${dishId}:${size}`, kind: 'tray', dishId, size, qty });
export const unitItem = (dishId: string, qty = 1): LineItem => ({ key: `unit:${dishId}`, kind: 'unit', dishId, qty });
export const askItem = (dishId: string, qty = 1): LineItem => ({ key: `ask:${dishId}`, kind: 'ask', dishId, qty });
export const lechonItem = (size: LechonSize, qty = 1): LineItem => ({ key: `lechon:${size}`, kind: 'lechon', size, qty });

/** two identical party sets stack; different picks are separate lines */
export function partyItem(picks: PartyPicks, qty = 1): LineItem {
    const signature = PARTY_SET.slots.map((slot) => (picks[slot.id] ?? []).join('+')).join('|');
    return { key: `party:${signature}`, kind: 'party', picks, qty };
}

/** the price of one of this item, or null when it's quoted by phone */
export function unitPrice(item: LineItem): number | null {
    switch (item.kind) {
        case 'tray': {
            const price = dishById(item.dishId)?.tray?.[item.size];
            return typeof price === 'number' ? price : null;
        }
        case 'unit': {
            const price = dishById(item.dishId)?.tray?.full;
            return typeof price === 'number' ? price : null;
        }
        case 'party':
            return PARTY_SET.price;
        case 'ask':
        case 'lechon':
            return null;
    }
}

export function lineTotal(item: LineItem): number | null {
    const price = unitPrice(item);
    return price === null ? null : price * item.qty;
}

export function subtotal(items: LineItem[]): number {
    return items.reduce((sum, item) => sum + (lineTotal(item) ?? 0), 0);
}

export const hasPhoneQuotes = (items: LineItem[]) => items.some((item) => unitPrice(item) === null);

export function lineLabel(item: LineItem): string {
    switch (item.kind) {
        case 'tray':
            return `${dishById(item.dishId)?.name ?? item.dishId}, ${item.size} tray`;
        case 'unit': {
            const dish = dishById(item.dishId);
            return `${dish?.name ?? item.dishId} (${dish?.tray?.unit ?? 'each'})`;
        }
        case 'ask':
            return `${dishById(item.dishId)?.name ?? item.dishId}, tray`;
        case 'party':
            return `Party tray set (${PARTY_SET.trays} trays)`;
        case 'lechon': {
            const size = LECHON_SIZES.find((entry) => entry.id === item.size);
            return `Whole lechon, ${size?.label.toLowerCase()} (${size?.weight})`;
        }
    }
}

/** the picks inside a party set, as one line per slot */
export function partyLines(picks: PartyPicks): string[] {
    return PARTY_SET.slots.map((slot) => `${slot.label}: ${(picks[slot.id] ?? []).join(', ')}`);
}

export function priceNote(item: LineItem): string {
    if (item.kind === 'lechon') return 'market price';
    if (item.kind === 'ask') return 'price by phone';
    const total = lineTotal(item);
    return total === null ? 'price by phone' : moneyExact(total);
}

/** the text that "Copy list" puts on the clipboard */
export function orderText(items: LineItem[]): string {
    const lines = [`${site.name} catering list`, ''];
    for (const item of items) {
        lines.push(`• ${item.qty} × ${lineLabel(item)}: ${priceNote(item)}`);
        if (item.kind === 'party') {
            for (const line of partyLines(item.picks)) lines.push(`    ${line}`);
        }
    }
    lines.push('');
    lines.push(`Estimated subtotal: ${moneyExact(subtotal(items))} + tax${hasPhoneQuotes(items) ? ' (plus items priced by phone)' : ''}`);
    lines.push('Prices are subject to change. Final total confirmed by phone.');
    lines.push(`${site.phone.display} · ${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`);
    return lines.join('\n');
}

/** checks a list read back from localStorage: anything malformed or no longer on the menu is dropped */
export function sanitize(raw: unknown): LineItem[] {
    if (!Array.isArray(raw)) return [];
    const clean: LineItem[] = [];
    for (const entry of raw as Array<Partial<LineItem>>) {
        if (!entry || typeof entry !== 'object' || typeof entry.qty !== 'number' || entry.qty < 1) continue;
        const qty = Math.min(Math.floor(entry.qty), MAX_QTY);
        if (entry.kind === 'tray' && typeof entry.dishId === 'string' && (entry.size === 'full' || entry.size === 'half')) {
            if (typeof dishById(entry.dishId)?.tray?.[entry.size] === 'number') clean.push(trayItem(entry.dishId, entry.size, qty));
        } else if (entry.kind === 'unit' && typeof entry.dishId === 'string') {
            if (dishById(entry.dishId)?.tray?.unit) clean.push(unitItem(entry.dishId, qty));
        } else if (entry.kind === 'ask' && typeof entry.dishId === 'string') {
            if (dishById(entry.dishId)?.tray?.full === 'ask') clean.push(askItem(entry.dishId, qty));
        } else if (entry.kind === 'lechon' && LECHON_SIZES.some((size) => size.id === entry.size)) {
            clean.push(lechonItem(entry.size as LechonSize, qty));
        } else if (entry.kind === 'party' && entry.picks && typeof entry.picks === 'object') {
            const picks = entry.picks as PartyPicks;
            const valid = PARTY_SET.slots.every((slot) => {
                const chosen = picks[slot.id];
                const allowed: readonly string[] = slot.options;
                return Array.isArray(chosen) && chosen.length === slot.count && chosen.every((option) => allowed.includes(option));
            });
            if (valid) clean.push(partyItem(picks, qty));
        }
    }
    return clean;
}
