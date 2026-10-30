// a dish with its photo, or (when there's no photo of it yet) a painted
// signboard tile with its name. swap in a real photo by adding `photo` to the
// dish in src/data/menu.ts.
import Photo from '@/components/ui/Photo';
import { CATEGORIES, TAG_LABELS, type Dish } from '@/data/menu';
import { PHOTOS, type PhotoKey } from '@/data/photos';
import { cn } from '@/lib/cn';

const TILE_TONES = [
    { bg: 'bg-pula-600', text: 'text-dilaw-300', weave: 'text-pula-800/45', sub: 'text-gata-100' },
    { bg: 'bg-dilaw-400', text: 'text-pula-700', weave: 'text-dilaw-600/35', sub: 'text-uling-800' },
    { bg: 'bg-dagat-700', text: 'text-gata-50', weave: 'text-dagat-900/45', sub: 'text-dagat-100' },
    { bg: 'bg-dahon-600', text: 'text-gata-50', weave: 'text-dahon-700/50', sub: 'text-dahon-100' }
];

function NameTile({ dish, toneIndex }: { dish: Dish; toneIndex: number }) {
    const tone = TILE_TONES[toneIndex % TILE_TONES.length];
    const category = CATEGORIES.find((entry) => entry.id === dish.category);

    return (
        <div className={cn('relative flex aspect-[4/3] items-center justify-center overflow-hidden', tone.bg)}>
            <div aria-hidden="true" className={cn('banig absolute inset-0', tone.weave)} />
            <div className="relative px-6 text-center">
                <p className={cn('font-sign text-[0.65rem] tracking-[0.18em] uppercase', tone.sub)}>{category?.tagalog}</p>
                <p className={cn('mt-2 font-display-soft text-[2.1rem] leading-none font-black italic', tone.text)}>{dish.name}</p>
            </div>
        </div>
    );
}

type Props = { dish: Dish; toneIndex?: number; className?: string };

export default function DishCard({ dish, toneIndex = 0, className }: Props) {
    const photoKey = dish.photo as PhotoKey | undefined;

    return (
        <article className={cn('group flex flex-col overflow-hidden rounded-2xl border-2 border-uling-900 bg-gata-50 shadow-sign', className)}>
            <div className="overflow-hidden border-b-2 border-uling-900">
                {photoKey && PHOTOS[photoKey] ? (
                    <Photo
                        photo={photoKey}
                        sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 92vw"
                        className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                ) : (
                    <NameTile dish={dish} toneIndex={toneIndex} />
                )}
            </div>
            <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display-soft text-[1.45rem] leading-tight font-black">{dish.name}</h3>
                {dish.also && <p className="mt-0.5 font-sign text-[0.62rem] tracking-[0.12em] text-pula-600 uppercase">{dish.also}</p>}
                <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-uling-700">{dish.description}</p>
                {dish.tags && dish.tags.some((tag) => tag !== 'favorite') && (
                    <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Notes">
                        {dish.tags
                            .filter((tag) => tag !== 'favorite')
                            .map((tag) => (
                                <li key={tag} className="rounded-full bg-gata-200 px-2.5 py-1 text-xs font-semibold text-uling-800">
                                    {TAG_LABELS[tag]}
                                </li>
                            ))}
                    </ul>
                )}
            </div>
        </article>
    );
}
