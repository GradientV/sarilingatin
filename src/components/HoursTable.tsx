import { useStoreStatus } from '@/hooks/useStoreStatus';
import { hours } from '@/data/site';
import { cn } from '@/lib/cn';
import { formatRange } from '@/lib/hours';

/** the week's hours, with today highlighted once the page knows what day it is */
export default function HoursTable({ className }: { className?: string }) {
    const status = useStoreStatus();

    return (
        <table className={cn('w-full text-left text-[0.98rem]', className)}>
            <caption className="sr-only">Store hours</caption>
            <tbody>
                {hours.map((entry, index) => {
                    const isToday = status?.todayIndex === index;
                    return (
                        <tr key={entry.day} className={cn('border-b border-dashed border-uling-300 last:border-0', isToday && 'bg-dilaw-100')}>
                            <th scope="row" className={cn('py-2.5 pr-4 pl-2 font-semibold', isToday && 'text-pula-700')}>
                                {entry.day}
                                {isToday && <span className="ml-2 font-sign text-[0.6rem] tracking-widest text-pula-600 uppercase">Today</span>}
                            </th>
                            <td className="py-2.5 pr-2 text-right tabular-nums">{formatRange(entry)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
