import { useSyncExternalStore } from 'react';
import { getStoreStatus, type StoreStatus } from '@/lib/hours';

// a tiny shared clock: one timer for the whole page, ticking once a minute,
// no matter how many components show the open/closed status.
let snapshot: StoreStatus | null = null;
const listeners = new Set<() => void>();
let timer: ReturnType<typeof setInterval> | undefined;

function tick() {
    snapshot = getStoreStatus();
    listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
    listeners.add(listener);
    if (listeners.size === 1) {
        snapshot = getStoreStatus();
        timer = setInterval(tick, 60_000);
    }
    return () => {
        listeners.delete(listener);
        if (listeners.size === 0) clearInterval(timer);
    };
}

const getSnapshot = () => (snapshot ??= getStoreStatus());

/** null on the build machine and during hydration, so the first pass matches the prerendered HTML */
const getServerSnapshot = () => null;

/** live open/closed state, refreshed every minute */
export function useStoreStatus(): StoreStatus | null {
    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
