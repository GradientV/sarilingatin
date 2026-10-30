// shared state for the catering planner on /catering: the list itself, plus the
// actions every part of the page uses (add, change quantity, remove, clear).
// it's saved to localStorage so a reload doesn't lose it. nothing leaves the browser.
import { createContext, use, useCallback, useEffect, useMemo, useReducer, useState, type ReactNode } from 'react';
import { MAX_QTY, hasPhoneQuotes, lineLabel, sanitize, subtotal, type LineItem } from '@/lib/planner';
import { readJson, writeJson } from '@/lib/storage';

const STORAGE_KEY = 'sariling-atin:tray-list:v1';

type Action =
    | { type: 'add'; item: LineItem }
    | { type: 'setQty'; key: string; qty: number }
    | { type: 'remove'; key: string }
    | { type: 'clear' }
    | { type: 'load'; items: LineItem[] };

function reducer(items: LineItem[], action: Action): LineItem[] {
    switch (action.type) {
        case 'add': {
            const existing = items.find((item) => item.key === action.item.key);
            if (!existing) return [...items, action.item];
            return items.map((item) => (item.key === action.item.key ? { ...item, qty: Math.min(item.qty + action.item.qty, MAX_QTY) } : item));
        }
        case 'setQty': {
            if (action.qty < 1) return items.filter((item) => item.key !== action.key);
            const qty = Math.min(Math.floor(action.qty), MAX_QTY);
            return items.map((item) => (item.key === action.key ? { ...item, qty } : item));
        }
        case 'remove':
            return items.filter((item) => item.key !== action.key);
        case 'clear':
            return [];
        case 'load':
            return action.items;
    }
}

type PlannerValue = {
    items: LineItem[];
    count: number;
    subtotal: number;
    hasPhoneQuotes: boolean;
    /** the last thing added, read out by the live region */
    announcement: string;
    add: (item: LineItem) => void;
    setQty: (key: string, qty: number) => void;
    remove: (key: string) => void;
    clear: () => void;
};

const PlannerContext = createContext<PlannerValue | null>(null);

export function PlannerProvider({ children }: { children: ReactNode }) {
    const [items, dispatch] = useReducer(reducer, []);
    const [announcement, setAnnouncement] = useState('');
    // true once the saved list has been read back. saving waits for it, so the
    // empty starting list never overwrites what was saved
    const [ready, setReady] = useState(false);

    // read the saved list after the first render, so the prerendered page and
    // the browser's first pass both start from an empty list
    useEffect(() => {
        dispatch({ type: 'load', items: sanitize(readJson<unknown>(STORAGE_KEY, [])) });
        // syncing from localStorage (an outside system) after hydration is what effects are for
        // oxlint-disable-next-line react/set-state-in-effect
        setReady(true);
    }, []);

    useEffect(() => {
        if (ready) writeJson(STORAGE_KEY, items);
    }, [items, ready]);

    const add = useCallback((item: LineItem) => {
        dispatch({ type: 'add', item });
        setAnnouncement(`Added to your list: ${item.qty > 1 ? `${item.qty} × ` : ''}${lineLabel(item)}`);
    }, []);
    const setQty = useCallback((key: string, qty: number) => dispatch({ type: 'setQty', key, qty }), []);
    const remove = useCallback((key: string) => {
        dispatch({ type: 'remove', key });
        setAnnouncement('Removed from your list');
    }, []);
    const clear = useCallback(() => {
        dispatch({ type: 'clear' });
        setAnnouncement('Your list is empty');
    }, []);

    const value = useMemo<PlannerValue>(
        () => ({
            items,
            // different things on the list (10 barbecue sticks count once)
            count: items.length,
            subtotal: subtotal(items),
            hasPhoneQuotes: hasPhoneQuotes(items),
            announcement,
            add,
            setQty,
            remove,
            clear
        }),
        [items, announcement, add, setQty, remove, clear]
    );

    return <PlannerContext value={value}>{children}</PlannerContext>;
}

export function usePlanner(): PlannerValue {
    const value = use(PlannerContext);
    if (!value) throw new Error('usePlanner needs a <PlannerProvider> above it');
    return value;
}
