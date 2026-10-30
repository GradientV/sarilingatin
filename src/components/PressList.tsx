// press coverage, styled like newspaper clippings pinned to the wall.
import { ArrowUpRight } from 'lucide-react';
import { PRESS } from '@/data/story';
import { cn } from '@/lib/cn';

const TILTS = ['-rotate-[0.8deg]', 'rotate-[0.6deg]', '-rotate-[0.4deg]', 'rotate-[0.9deg]', '-rotate-[0.6deg]'];

export default function PressList({ className }: { className?: string }) {
    return (
        <ul className={cn('grid gap-5 sm:grid-cols-2 lg:grid-cols-5', className)}>
            {PRESS.map((item, index) => (
                <li key={item.outlet} className={cn('transition-transform hover:rotate-0', TILTS[index % TILTS.length])}>
                    <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex h-full flex-col rounded-md border border-uling-300 bg-gata-50 p-5 shadow-[0_10px_24px_-14px_rgb(33_23_20/0.55)] hover:border-uling-900"
                    >
                        <span className="font-sign text-[0.62rem] tracking-[0.14em] text-pula-600 uppercase">{item.year}</span>
                        <span className="mt-2 font-display-soft text-xl leading-tight font-black text-uling-900">{item.outlet}</span>
                        <span className="mt-2 flex-1 text-[0.92rem] leading-snug text-uling-700">{item.note}</span>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-pula-700 group-hover:underline">
                            Read it <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                            <span className="sr-only">(opens {item.outlet} in a new tab)</span>
                        </span>
                    </a>
                </li>
            ))}
        </ul>
    );
}
