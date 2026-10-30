import { Plus } from 'lucide-react';
import Photo from '@/components/ui/Photo';
import { buttonClasses } from '@/components/ui/Button';
import { LECHON_SIZES } from '@/data/menu';
import { lechonItem } from '@/lib/planner';
import { usePlanner } from './PlannerContext';

/** whole roast pig: priced by the market on the day you order */
export default function LechonPicker() {
    const { add } = usePlanner();

    return (
        <section aria-labelledby="lechon-title" className="grid overflow-hidden rounded-3xl border-2 border-uling-900 bg-gata-50 shadow-sign-lg md:grid-cols-[0.9fr_1.1fr]">
            <Photo photo="lechonWhole" sizes="(min-width: 768px) 30vw, 92vw" className="h-64 w-full border-b-2 border-uling-900 md:h-full md:border-r-2 md:border-b-0" />
            <div className="p-6 sm:p-8">
                <p className="font-sign text-[0.7rem] tracking-[0.14em] text-pula-600 uppercase">Lechon</p>
                <h3 id="lechon-title" className="mt-1 font-display-soft text-3xl font-black sm:text-4xl">
                    The whole pig
                </h3>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-uling-700">
                    The centerpiece of every big Filipino party: a whole roast pig with crackling skin, ordered separately from the trays. Lechon is priced at market rate, so we’ll quote it when you call.
                </p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {LECHON_SIZES.map((size) => (
                        <li key={size.id} className="rounded-2xl border-2 border-uling-900 bg-gata-100 p-4">
                            <p className="font-display-soft text-xl font-black">{size.label}</p>
                            <p className="text-sm text-uling-700">{size.weight} · market price</p>
                            <button
                                type="button"
                                onClick={() => add(lechonItem(size.id))}
                                className={buttonClasses({ variant: 'cream', size: 'sm', className: 'mt-3 w-full' })}
                                aria-label={`Add a ${size.label.toLowerCase()} lechon (${size.weight}) to my list`}
                            >
                                <Plus className="h-4 w-4" aria-hidden="true" /> Add to list
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
