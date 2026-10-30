// the 12-tray party set ($449 + tax). the store's rule: you choose only from
// this set, no swaps, so the picker only offers the options on their menu.
import { useId, useState } from 'react';
import { Check, PartyPopper, RotateCcw } from 'lucide-react';
import { buttonClasses } from '@/components/ui/Button';
import { PARTY_SET, type PartySlotId } from '@/data/menu';
import { cn } from '@/lib/cn';
import { money } from '@/lib/format';
import { partyItem, type PartyPicks } from '@/lib/planner';
import { usePlanner } from './PlannerContext';

type Picks = Record<PartySlotId, string[]>;

const emptyPicks = (): Picks =>
    Object.fromEntries(PARTY_SET.slots.map((slot) => [slot.id, Array.from({ length: slot.count }, () => '')])) as Picks;

export default function PartySetPicker() {
    const { add } = usePlanner();
    const [picks, setPicks] = useState<Picks>(emptyPicks);
    const [justAdded, setJustAdded] = useState(false);
    const baseId = useId();

    const chosen = Object.values(picks).flat().filter(Boolean).length;
    const complete = chosen === PARTY_SET.trays;

    function choose(slot: PartySlotId, index: number, value: string) {
        setJustAdded(false);
        setPicks((current) => ({ ...current, [slot]: current[slot].map((old, i) => (i === index ? value : old)) }));
    }

    function addSet() {
        if (!complete) return;
        add(partyItem(picks as PartyPicks));
        setPicks(emptyPicks());
        setJustAdded(true);
    }

    return (
        <section aria-labelledby={`${baseId}-title`} className="relative overflow-hidden rounded-3xl border-2 border-uling-900 bg-dilaw-100 shadow-sign-lg">
            <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-uling-900 bg-dilaw-400 px-6 py-5 sm:px-8">
                <div>
                    <p className="flex items-center gap-2 font-sign text-[0.7rem] tracking-[0.14em] text-pula-700 uppercase">
                        <PartyPopper className="h-4 w-4" aria-hidden="true" /> Party tray set
                    </p>
                    <h3 id={`${baseId}-title`} className="mt-1 font-display-soft text-3xl font-black text-uling-900 sm:text-4xl">
                        {PARTY_SET.trays} trays for {money(PARTY_SET.price)}
                        <span className="ml-2 align-middle text-base font-bold text-uling-800">+ tax</span>
                    </h3>
                </div>
                <p className="max-w-xs text-sm font-medium text-uling-800">
                    1 beef, 1 chicken, 1 pork, 1 seafood, 1 vegetable, 1 appetizer, 2 noodles, 2 desserts and 2 rice.
                </p>
            </div>

            <div className="px-6 py-6 sm:px-8">
                <p className="text-[0.95rem] text-uling-700">
                    The set is a fixed menu: choose from the options below. Swaps and substitutions aren’t available on the set (order those trays separately).
                </p>

                <div className="mt-6 grid gap-x-5 gap-y-4 sm:grid-cols-2">
                    {PARTY_SET.slots.map((slot) =>
                        picks[slot.id].map((value, index) => {
                            const id = `${baseId}-${slot.id}-${index}`;
                            return (
                                <div key={id}>
                                    <label htmlFor={id} className="flex items-baseline justify-between text-sm font-bold text-uling-900">
                                        <span>
                                            {slot.label}
                                            {slot.count > 1 ? ` ${index + 1}` : ''}
                                        </span>
                                        <span className="font-sign text-[0.58rem] tracking-[0.12em] text-pula-600 uppercase">{slot.tagalog}</span>
                                    </label>
                                    <select
                                        id={id}
                                        value={value}
                                        onChange={(event) => choose(slot.id, index, event.target.value)}
                                        className={cn(
                                            'mt-1.5 w-full rounded-xl border-2 bg-gata-50 px-3 py-2.5 text-[0.95rem] font-medium',
                                            value ? 'border-uling-900 text-uling-900' : 'border-uling-300 text-uling-600'
                                        )}
                                    >
                                        <option value="">Choose {slot.label.toLowerCase()}…</option>
                                        {slot.options.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            );
                        })
                    )}
                </div>

                <div className="mt-7">
                    <div className="flex items-center justify-between text-sm font-semibold text-uling-800">
                        <span>
                            {chosen} of {PARTY_SET.trays} trays chosen
                        </span>
                        {chosen > 0 && (
                            <button type="button" onClick={() => setPicks(emptyPicks())} className="inline-flex items-center gap-1 text-uling-600 hover:text-pula-700">
                                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" /> Start over
                            </button>
                        )}
                    </div>
                    <div className="mt-2 h-3 overflow-hidden rounded-full border-2 border-uling-900 bg-gata-50" aria-hidden="true">
                        <div className="h-full bg-pula-600 transition-[width] duration-300" style={{ width: `${(chosen / PARTY_SET.trays) * 100}%` }} />
                    </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                    <button type="button" onClick={addSet} disabled={!complete} className={buttonClasses({ variant: 'red', size: 'lg' })}>
                        Add the set to my list
                    </button>
                    {justAdded && (
                        <p className="inline-flex items-center gap-1.5 text-sm font-bold text-dahon-700">
                            <Check className="h-4 w-4" aria-hidden="true" /> Added. Your picks are in your list.
                        </p>
                    )}
                    {!complete && !justAdded && <p className="text-sm text-uling-600">Pick all {PARTY_SET.trays} trays to add the set.</p>}
                </div>
            </div>
        </section>
    );
}
