// "Bukas na · Open until 8 PM". before the page hydrates (and in the prerendered
// HTML) it just shows the regular hours, so nothing ever shows a stale open/closed.
import { useStoreStatus } from '@/hooks/useStoreStatus';
import { cn } from '@/lib/cn';
import { hoursSummary } from '@/lib/hours';

type Props = { className?: string; tone?: 'light' | 'dark' };

export default function StoreStatus({ className, tone = 'dark' }: Props) {
    const status = useStoreStatus();

    if (!status) {
        return (
            <span className={cn('inline-flex items-center gap-2', className)}>
                <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-dilaw-400" />
                <span>Open {hoursSummary.replace('Daily', 'daily')}</span>
            </span>
        );
    }

    return (
        <span className={cn('inline-flex items-center gap-2', className)}>
            <span
                aria-hidden="true"
                className={cn(
                    'h-2.5 w-2.5 rounded-full',
                    status.isOpen ? 'bg-dahon-500 shadow-[0_0_0_3px_rgb(61_138_79/0.3)]' : 'bg-pula-500 shadow-[0_0_0_3px_rgb(211_41_31/0.25)]'
                )}
            />
            <span>
                <strong className={cn('font-bold', tone === 'dark' ? 'text-gata-50' : 'text-uling-900')}>{status.label}</strong>
                <span className="mx-1.5 opacity-60">·</span>
                {status.detail}
            </span>
        </span>
    );
}
