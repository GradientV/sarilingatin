// open / closed, worked out on the store's clock in New York, no matter
// where the visitor is.
import { hours, type DayHours } from '@/data/site';

const TIME_ZONE = 'America/New_York';
const DAY_NAMES = hours.map((entry) => entry.day);

const toMinutes = (time: string) => {
    const [h, m] = time.split(':').map(Number);
    return h * 60 + m;
};

/** '20:00' -> '8 PM', '10:30' -> '10:30 AM' */
export function formatTime(time: string): string {
    const [h, m] = time.split(':').map(Number);
    const hour = h % 12 || 12;
    const minutes = m ? `:${String(m).padStart(2, '0')}` : '';
    return `${hour}${minutes} ${h < 12 ? 'AM' : 'PM'}`;
}

export const formatRange = (entry: Pick<DayHours, 'open' | 'close'>) =>
    entry.open && entry.close ? `${formatTime(entry.open)} – ${formatTime(entry.close)}` : 'Closed';

/** true when every day has the same hours, so the site can just say "daily" */
export const sameHoursEveryDay = hours.every((entry) => entry.open === hours[0].open && entry.close === hours[0].close);

/** 'Daily 9 AM – 8 PM', or the list day by day when they differ */
export const hoursSummary = sameHoursEveryDay
    ? `Daily ${formatRange(hours[0])}`
    : hours.map((entry) => `${entry.short} ${formatRange(entry)}`).join(', ');

/** the store's wall-clock time */
function storeNow(date: Date) {
    const parts = new Intl.DateTimeFormat('en-US', {
        timeZone: TIME_ZONE,
        weekday: 'long',
        hour: '2-digit',
        minute: '2-digit',
        hourCycle: 'h23'
    }).formatToParts(date);
    const get = (type: Intl.DateTimeFormatPartTypes) => parts.find((part) => part.type === type)?.value ?? '';
    return {
        dayIndex: DAY_NAMES.indexOf(get('weekday') as DayHours['day']),
        minutes: Number(get('hour')) * 60 + Number(get('minute'))
    };
}

export type StoreStatus = {
    isOpen: boolean;
    /** Tagalog first: Bukas (open) / Sarado (closed) */
    label: string;
    detail: string;
    todayIndex: number;
};

export function getStoreStatus(date = new Date()): StoreStatus {
    const { dayIndex, minutes } = storeNow(date);
    const today = hours[dayIndex];

    if (today.open && today.close && minutes >= toMinutes(today.open) && minutes < toMinutes(today.close)) {
        const left = toMinutes(today.close) - minutes;
        return {
            isOpen: true,
            label: 'Bukas na',
            detail: left <= 60 ? `Open, closing soon at ${formatTime(today.close)}` : `Open until ${formatTime(today.close)}`,
            todayIndex: dayIndex
        };
    }

    if (today.open && minutes < toMinutes(today.open)) {
        return { isOpen: false, label: 'Sarado', detail: `Opens today at ${formatTime(today.open)}`, todayIndex: dayIndex };
    }

    for (let offset = 1; offset <= 7; offset++) {
        const next = hours[(dayIndex + offset) % 7];
        if (next.open) {
            const when = offset === 1 ? 'tomorrow' : next.day;
            return { isOpen: false, label: 'Sarado', detail: `Opens ${when} at ${formatTime(next.open)}`, todayIndex: dayIndex };
        }
    }
    return { isOpen: false, label: 'Sarado', detail: '', todayIndex: dayIndex };
}

/** is the given 'HH:MM' window open right now, on the store's clock? used for the padala counter */
export function isWithin(open: string, close: string, date = new Date()): boolean {
    const { minutes } = storeNow(date);
    return minutes >= toMinutes(open) && minutes < toMinutes(close);
}

/** month (1-12) and day on the store's calendar */
export function storeDate(date = new Date()) {
    const parts = new Intl.DateTimeFormat('en-US', { timeZone: TIME_ZONE, month: 'numeric', day: 'numeric' }).formatToParts(date);
    const get = (type: Intl.DateTimeFormatPartTypes) => Number(parts.find((part) => part.type === type)?.value ?? 0);
    return { month: get('month'), day: get('day') };
}

/**
 * the Filipino Christmas season: it starts with the "-ber" months in September
 * and runs through Three Kings' Day on January 6.
 */
export function isPaskoSeason(date = new Date()): boolean {
    const { month, day } = storeDate(date);
    return month >= 9 || (month === 1 && day <= 6);
}
