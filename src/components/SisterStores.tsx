import { MapPin, Phone } from 'lucide-react';
import Photo from '@/components/ui/Photo';
import { SISTER_STORES } from '@/data/story';
import { cn } from '@/lib/cn';

export default function SisterStores({ className }: { className?: string }) {
    if (!SISTER_STORES.length) return null;

    return (
        <ul className={cn('grid gap-5 md:grid-cols-3', className)}>
            {SISTER_STORES.map((store) => (
                <li key={store.name} className="flex flex-col overflow-hidden rounded-2xl border-2 border-uling-900 bg-gata-50 shadow-sign">
                    {store.photo && (
                        <Photo photo={store.photo} sizes="(min-width: 768px) 30vw, 92vw" className="aspect-[16/9] w-full border-b-2 border-uling-900" />
                    )}
                    <div className="flex flex-1 flex-col p-6">
                        <p className="font-sign text-[0.62rem] tracking-[0.14em] text-pula-600 uppercase">{store.area}</p>
                        <h3 className="mt-2 font-display-soft text-xl font-black">{store.name}</h3>
                        <p className="mt-2 flex-1 text-[0.95rem] text-uling-700">{store.note}</p>
                        <p className="mt-4 flex gap-2 text-sm text-uling-800">
                            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-pula-600" aria-hidden="true" />
                            {store.address}
                        </p>
                        {store.phone && (
                            <a href={`tel:${store.phone.tel}`} className="mt-2 flex gap-2 text-sm font-semibold text-uling-900 hover:text-pula-700">
                                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-pula-600" aria-hidden="true" />
                                {store.phone.display}
                            </a>
                        )}
                    </div>
                </li>
            ))}
        </ul>
    );
}
