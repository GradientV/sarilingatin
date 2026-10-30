// every catering tray with its full and half price. each price is also a button
// that adds that tray to the list.
import { Plus } from 'lucide-react';
import { CATEGORIES, dishesIn, type Dish } from '@/data/menu';
import { cn } from '@/lib/cn';
import { money } from '@/lib/format';
import { askItem, trayItem, unitItem, type LineItem } from '@/lib/planner';
import { usePlanner } from './PlannerContext';

function PriceButton({ label, price, onAdd, describe }: { label: string; price: string; onAdd: () => void; describe: string }) {
    return (
        <button
            type="button"
            onClick={onAdd}
            aria-label={describe}
            className="group inline-flex min-w-[6.75rem] items-center justify-between gap-2 rounded-xl border-2 border-uling-900 bg-gata-50 py-1.5 pr-1.5 pl-3 text-left shadow-[2px_2px_0_0_var(--color-uling-900)] transition hover:-translate-y-px hover:bg-dilaw-200 active:translate-y-px active:shadow-none"
        >
            <span className="leading-tight">
                <span className="block text-[0.62rem] font-bold tracking-[0.08em] text-uling-600 uppercase">{label}</span>
                <span className="block font-bold text-uling-900 tabular-nums">{price}</span>
            </span>
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-pula-600 text-white group-hover:bg-pula-700" aria-hidden="true">
                <Plus className="h-4 w-4" />
            </span>
        </button>
    );
}

function DishRow({ dish, add }: { dish: Dish; add: (item: LineItem) => void }) {
    const tray = dish.tray;
    if (!tray) return null;

    return (
        <li className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
                <p className="font-bold text-uling-900">
                    {dish.name}
                    {dish.also && <span className="ml-1.5 font-medium text-uling-600">· {dish.also}</span>}
                </p>
                <p className="mt-0.5 text-sm text-uling-600">{dish.description}</p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-2">
                {tray.unit && typeof tray.full === 'number' && (
                    <>
                        <PriceButton
                            label={tray.unit}
                            price={money(tray.full)}
                            onAdd={() => add(unitItem(dish.id, 1))}
                            describe={`Add one ${dish.name} (${money(tray.full)} ${tray.unit}) to my list`}
                        />
                        {dish.id === 'pork-bbq' && (
                            <PriceButton
                                label="10 sticks"
                                price={money(tray.full * 10)}
                                onAdd={() => add(unitItem(dish.id, 10))}
                                describe={`Add ten ${dish.name} sticks (${money(tray.full * 10)}) to my list`}
                            />
                        )}
                    </>
                )}
                {!tray.unit && typeof tray.full === 'number' && (
                    <PriceButton label="Full" price={money(tray.full)} onAdd={() => add(trayItem(dish.id, 'full'))} describe={`Add a full tray of ${dish.name} (${money(tray.full)}) to my list`} />
                )}
                {!tray.unit && typeof tray.half === 'number' && (
                    <PriceButton label="Half" price={money(tray.half)} onAdd={() => add(trayItem(dish.id, 'half'))} describe={`Add a half tray of ${dish.name} (${money(tray.half)}) to my list`} />
                )}
                {tray.full === 'ask' && (
                    <PriceButton label="Tray" price="Ask us" onAdd={() => add(askItem(dish.id))} describe={`Add a tray of ${dish.name} (price by phone) to my list`} />
                )}
            </div>
        </li>
    );
}

export default function PriceList() {
    const { add } = usePlanner();
    const categories = CATEGORIES.filter((category) => dishesIn(category.id).some((dish) => dish.tray));

    return (
        <section aria-labelledby="price-list-title">
            <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                    <p className="font-sign text-[0.7rem] tracking-[0.14em] text-pula-600 uppercase">À la carte</p>
                    <h3 id="price-list-title" className="mt-1 font-display-soft text-3xl font-black sm:text-4xl">
                        Trays by the dish
                    </h3>
                </div>
                <p className="text-sm text-uling-600">Full tray / half tray, before tax</p>
            </div>

            <nav aria-label="Tray categories" className="no-scrollbar -mx-4 mt-5 flex gap-2 overflow-x-auto px-4 pb-1">
                {categories.map((category) => (
                    <a
                        key={category.id}
                        href={`#trays-${category.id}`}
                        className="shrink-0 rounded-full border-2 border-uling-900 bg-gata-50 px-3.5 py-1.5 text-sm font-bold whitespace-nowrap hover:bg-dilaw-200"
                    >
                        {category.tagalog}
                        <span className="ml-1 font-medium text-uling-600">{category.english}</span>
                    </a>
                ))}
            </nav>

            <div className="mt-6 space-y-8">
                {categories.map((category, index) => (
                    <div key={category.id} id={`trays-${category.id}`} className="scroll-mt-32">
                        <h4 className={cn('flex items-baseline gap-3 border-b-2 border-uling-900 pb-2', index > 0 && 'pt-2')}>
                            <span className="font-display-soft text-2xl font-black italic">{category.tagalog}</span>
                            <span className="font-sign text-[0.65rem] tracking-[0.14em] text-pula-600 uppercase">{category.english}</span>
                        </h4>
                        <ul className="divide-y divide-dashed divide-uling-300">
                            {dishesIn(category.id).map((dish) => (
                                <DishRow key={dish.id} dish={dish} add={add} />
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
