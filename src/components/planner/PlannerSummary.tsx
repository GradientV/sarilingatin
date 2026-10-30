// "Ang listahan ko" (my list): what's been added, quantities, the estimated
// subtotal, and the ways to place the order (call, or copy the list first).
import { useState, type ReactNode } from 'react';
import { Check, ClipboardList, Copy, Minus, Phone, Plus, Trash2 } from 'lucide-react';
import { buttonClasses } from '@/components/ui/Button';
import { TRAY_FACTS } from '@/data/menu';
import { site } from '@/data/site';
import { cn } from '@/lib/cn';
import { moneyExact } from '@/lib/format';
import { MAX_QTY, lineLabel, orderText, partyLines, priceNote } from '@/lib/planner';
import { usePlanner } from './PlannerContext';

async function copyToClipboard(text: string): Promise<boolean> {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch {
        // older browsers / blocked clipboard: fall back to a hidden textarea
        try {
            const area = document.createElement('textarea');
            area.value = text;
            area.setAttribute('readonly', '');
            area.style.position = 'fixed';
            area.style.opacity = '0';
            document.body.appendChild(area);
            area.select();
            const ok = document.execCommand('copy');
            area.remove();
            return ok;
        } catch {
            return false;
        }
    }
}

type Props = {
    className?: string;
    /** shown at the right of the header instead of the Tagalog label (the dialog's close button) */
    headerAction?: ReactNode;
};

export default function PlannerSummary({ className, headerAction }: Props) {
    const { items, count, subtotal, hasPhoneQuotes, setQty, remove, clear } = usePlanner();
    const [copied, setCopied] = useState<'idle' | 'done' | 'failed'>('idle');

    async function copy() {
        const ok = await copyToClipboard(orderText(items));
        setCopied(ok ? 'done' : 'failed');
        window.setTimeout(() => setCopied('idle'), 2500);
    }

    return (
        <div className={cn('overflow-hidden rounded-3xl border-2 border-uling-900 bg-gata-50 shadow-sign-lg', className)}>
            <div className="flex items-center justify-between gap-3 border-b-2 border-uling-900 bg-pula-600 px-5 py-4 text-gata-50">
                <h3 className="flex items-center gap-2 font-display-soft text-2xl font-black">
                    <ClipboardList className="h-5 w-5 text-dilaw-300" aria-hidden="true" />
                    My list
                </h3>
                {headerAction ?? <span className="font-sign text-[0.65rem] tracking-[0.14em] text-dilaw-200 uppercase">Ang listahan ko</span>}
            </div>

            {items.length === 0 ? (
                <div className="px-5 py-8 text-center">
                    <p className="font-display-soft text-xl font-bold">Wala pa. Nothing yet!</p>
                    <p className="mt-2 text-sm text-uling-600">Add trays, the party set or a lechon, and they’ll show up here with an estimated total.</p>
                </div>
            ) : (
                <>
                    <ul className="max-h-[46vh] divide-y divide-dashed divide-uling-300 overflow-y-auto px-5 lg:max-h-[30vh]">
                        {items.map((item) => (
                            <li key={item.key} className="py-3.5">
                                <div className="flex items-start justify-between gap-3">
                                    <p className="leading-snug font-bold text-uling-900">{lineLabel(item)}</p>
                                    <button
                                        type="button"
                                        onClick={() => remove(item.key)}
                                        className="shrink-0 rounded-md p-1 text-uling-500 hover:bg-pula-50 hover:text-pula-700"
                                        aria-label={`Remove ${lineLabel(item)}`}
                                    >
                                        <Trash2 className="h-4 w-4" aria-hidden="true" />
                                    </button>
                                </div>
                                {item.kind === 'party' && (
                                    <ul className="mt-1.5 space-y-0.5 text-xs leading-snug text-uling-600">
                                        {partyLines(item.picks).map((line) => (
                                            <li key={line}>{line}</li>
                                        ))}
                                    </ul>
                                )}
                                <div className="mt-2.5 flex items-center justify-between gap-3">
                                    <div className="flex items-center rounded-lg border-2 border-uling-900 bg-gata-100">
                                        <button
                                            type="button"
                                            onClick={() => setQty(item.key, item.qty - 1)}
                                            className="grid h-8 w-8 place-items-center hover:bg-gata-200"
                                            aria-label={`One fewer: ${lineLabel(item)}`}
                                        >
                                            <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                                        </button>
                                        <input
                                            type="number"
                                            inputMode="numeric"
                                            min={1}
                                            max={MAX_QTY}
                                            value={item.qty}
                                            onChange={(event) => {
                                                const next = Number(event.target.value);
                                                if (Number.isFinite(next) && next >= 1) setQty(item.key, next);
                                            }}
                                            aria-label={`Quantity: ${lineLabel(item)}`}
                                            className="h-8 w-12 [appearance:textfield] border-x-2 border-uling-900 bg-gata-50 text-center text-sm font-bold tabular-nums [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setQty(item.key, item.qty + 1)}
                                            className="grid h-8 w-8 place-items-center hover:bg-gata-200"
                                            aria-label={`One more: ${lineLabel(item)}`}
                                        >
                                            <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <span className="text-sm font-bold text-uling-900 tabular-nums">{priceNote(item)}</span>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="border-t-2 border-uling-900 bg-gata-100 px-5 py-4">
                        <div className="flex items-baseline justify-between gap-3">
                            <span className="font-semibold">
                                Estimated subtotal
                                <span className="block text-xs font-medium text-uling-600">
                                    {count} item{count === 1 ? '' : 's'}, before tax
                                </span>
                            </span>
                            <span className="font-display-soft text-3xl font-black text-pula-700 tabular-nums">{moneyExact(subtotal)}</span>
                        </div>
                        {hasPhoneQuotes && <p className="mt-2 text-xs text-uling-700">Plus the items marked “market price” or “price by phone,” quoted when you call.</p>}
                    </div>
                </>
            )}

            <div className="space-y-3 border-t-2 border-uling-900 px-5 py-5">
                <a href={`tel:${site.phone.tel}`} className={buttonClasses({ variant: 'red', size: 'md', className: 'w-full' })}>
                    <Phone className="h-4 w-4" aria-hidden="true" /> Call to order: {site.phone.display}
                </a>
                {items.length > 0 && (
                    <div className="flex gap-2">
                        <button type="button" onClick={copy} className={buttonClasses({ variant: 'cream', size: 'sm', className: 'flex-1' })}>
                            {copied === 'done' ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
                            {copied === 'done' ? 'Copied!' : copied === 'failed' ? 'Couldn’t copy' : 'Copy my list'}
                        </button>
                        <button type="button" onClick={clear} className={buttonClasses({ variant: 'cream', size: 'sm' })}>
                            Clear
                        </button>
                    </div>
                )}
                <p className="text-xs leading-relaxed text-uling-600">
                    This list stays on your device and isn’t sent to us. Orders are placed by phone (or fax at {site.fax.display}); we’ll confirm what’s available, your pickup time and the
                    final total. {TRAY_FACTS.note}
                </p>
            </div>
        </div>
    );
}
