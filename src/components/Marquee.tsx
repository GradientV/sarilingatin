// a slow-scrolling strip of dish names, like hand-painted letters on a jeepney.
// purely decorative (every dish is listed properly on the menu page), so it's
// hidden from screen readers, pauses on hover and stops for reduced motion.
import Sampaguita from '@/components/brand/Sampaguita';
import { cn } from '@/lib/cn';

const WORDS = ['Sisig', 'Pork BBQ', 'Lechon kawali', 'Kare-kare', 'Bicol express', 'Dinuguan', 'Pancit malabon', 'Crispy pata', 'Kaldereta', 'Turon', 'Halo-halo', 'Lumpia'];

export default function Marquee({ className }: { className?: string }) {
    const row = (
        <ul className="flex shrink-0 items-center gap-8 pr-8">
            {WORDS.map((word) => (
                <li key={word} className="flex items-center gap-8 whitespace-nowrap">
                    <span>{word}</span>
                    <Sampaguita className="h-7 w-7" />
                </li>
            ))}
        </ul>
    );

    return (
        <div aria-hidden="true" className={cn('relative overflow-hidden border-y-2 border-uling-900 bg-pula-600 py-3.5', className)}>
            <div className="banig pointer-events-none absolute inset-0 text-pula-800/40" />
            <div className="relative flex w-max animate-marquee font-sign text-xl tracking-wide text-dilaw-300 uppercase hover:[animation-play-state:paused] sm:text-2xl">
                {row}
                {row}
            </div>
        </div>
    );
}
