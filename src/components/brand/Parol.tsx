// parol: the star-shaped Christmas lantern hung in every Filipino window from September on.
import { cn } from '@/lib/cn';

function star(cx: number, cy: number, outer: number, inner: number) {
    return Array.from({ length: 10 }, (_, k) => {
        const radius = k % 2 === 0 ? outer : inner;
        const angle = ((-90 + k * 36) * Math.PI) / 180;
        return `${(cx + radius * Math.cos(angle)).toFixed(2)},${(cy + radius * Math.sin(angle)).toFixed(2)}`;
    }).join(' ');
}

type Props = { className?: string; swing?: boolean };

export default function Parol({ className, swing = true }: Props) {
    return (
        <svg viewBox="0 0 100 140" className={cn(swing && 'origin-top animate-sway', className)} aria-hidden="true" focusable="false">
            {/* hanging cord */}
            <line x1="50" y1="0" x2="50" y2="8" stroke="#e2c690" strokeWidth="2" />
            <circle cx="50" cy="52" r="45" fill="none" stroke="#fcc419" strokeWidth="3" />
            <circle cx="50" cy="52" r="40" fill="none" stroke="#ffd95e" strokeWidth="1" strokeDasharray="2 4" />
            <polygon points={star(50, 52, 42, 18)} fill="#b3191c" stroke="#fcc419" strokeWidth="2.5" strokeLinejoin="round" />
            <polygon points={star(50, 52, 24, 10)} fill="#fcc419" />
            <circle cx="50" cy="52" r="5" fill="#fffcf6" />
            {/* the two tails */}
            <path d="M40 92c-6 10 6 16 0 26s4 12 2 18" fill="none" stroke="#b3191c" strokeWidth="3" strokeLinecap="round" />
            <path d="M60 92c6 10-6 16 0 26s-4 12-2 18" fill="none" stroke="#fcc419" strokeWidth="3" strokeLinecap="round" />
            <circle cx="42" cy="136" r="3" fill="#fcc419" />
            <circle cx="58" cy="136" r="3" fill="#b3191c" />
        </svg>
    );
}
