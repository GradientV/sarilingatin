import { cn } from '@/lib/cn';
import Sampaguita from './Sampaguita';

type Props = {
    /** 'light' sits on cream backgrounds, 'dark' on charcoal or red */
    tone?: 'light' | 'dark';
    className?: string;
    compact?: boolean;
};

export default function Logo({ tone = 'light', className, compact = false }: Props) {
    return (
        <span className={cn('flex items-center gap-2.5', className)}>
            <Sampaguita className={cn('shrink-0', compact ? 'h-9 w-9' : 'h-11 w-11')} />
            <span className="leading-none">
                <span
                    className={cn(
                        'block font-display-soft font-black tracking-tight',
                        compact ? 'text-[1.35rem]' : 'text-[1.6rem]',
                        tone === 'light' ? 'text-pula-700' : 'text-gata-50'
                    )}
                >
                    Sariling Atin
                </span>
                <span
                    className={cn(
                        'mt-1 block font-sign text-[0.56rem] tracking-[0.14em] uppercase',
                        tone === 'light' ? 'text-uling-700' : 'text-dilaw-300'
                    )}
                >
                    Filipino Grill &amp; Grocery
                </span>
            </span>
        </span>
    );
}
