// on phones and tablets the list can't sit beside the menu, so a bar pinned to the
// bottom of the screen shows the running total and opens the full list in a dialog.
// the native <dialog> handles focus, Escape and the backdrop for us.
import { useRef } from 'react';
import { ClipboardList, X } from 'lucide-react';
import { moneyExact } from '@/lib/format';
import { usePlanner } from './PlannerContext';
import PlannerSummary from './PlannerSummary';

export default function MobilePlannerBar() {
    const { items, count, subtotal } = usePlanner();
    const dialog = useRef<HTMLDialogElement>(null);

    return (
        <>
            {items.length > 0 && (
                <div className="fixed inset-x-0 bottom-0 z-30 border-t-2 border-uling-900 bg-gata-50/95 px-4 py-3 backdrop-blur lg:hidden">
                    <div className="mx-auto flex max-w-xl items-center justify-between gap-3">
                        <p className="text-sm leading-tight">
                            <span className="block font-bold">
                                My list · {count} item{count === 1 ? '' : 's'}
                            </span>
                            <span className="text-uling-600">{moneyExact(subtotal)} + tax (estimate)</span>
                        </p>
                        <button
                            type="button"
                            onClick={() => dialog.current?.showModal()}
                            className="inline-flex items-center gap-2 rounded-xl border-2 border-uling-900 bg-pula-600 px-4 py-2.5 text-sm font-bold text-white shadow-sign"
                        >
                            <ClipboardList className="h-4 w-4" aria-hidden="true" /> View list
                        </button>
                    </div>
                </div>
            )}

            {/* Escape and the close button handle keyboards; the click below only adds "tap outside to close" for pointers */}
            {/* oxlint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
            <dialog
                ref={dialog}
                aria-label="My catering list"
                className="m-auto w-[min(100%-1.5rem,28rem)] bg-transparent p-0 backdrop:bg-uling-950/70"
                onClick={(event) => {
                    // a click on the backdrop (the dialog element itself) closes it
                    if (event.target === event.currentTarget) event.currentTarget.close();
                }}
            >
                <PlannerSummary
                    headerAction={
                        <button
                            type="button"
                            onClick={() => dialog.current?.close()}
                            aria-label="Close my list"
                            className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border-2 border-uling-900 bg-dilaw-400 text-uling-900"
                        >
                            <X className="h-4 w-4" aria-hidden="true" />
                        </button>
                    }
                />
            </dialog>
        </>
    );
}
