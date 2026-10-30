// Filipino Christmas starts in September. from Sept 1 through Jan 6 (Three Kings)
// this card turns into a "book your Noche Buena trays" reminder with a swinging parol;
// the rest of the year it's a general party-season card.
//
// the prerendered HTML and the browser's first pass always show the general version,
// then it switches once the page knows today's date, so hydration always matches.
import { CalendarHeart, Phone } from 'lucide-react';
import Parol from '@/components/brand/Parol';
import { ButtonAnchor, ButtonLink } from '@/components/ui/Button';
import { useHydrated } from '@/hooks/useHydrated';
import { site } from '@/data/site';
import { cn } from '@/lib/cn';
import { isPaskoSeason } from '@/lib/hours';

type Props = { className?: string; showPlanLink?: boolean };

export default function PaskoCallout({ className, showPlanLink = true }: Props) {
    const hydrated = useHydrated();
    const pasko = hydrated && isPaskoSeason();

    const copy = pasko
        ? {
              kicker: 'Pasko na!',
              title: 'Book your Noche Buena trays early',
              body: 'Christmas starts in September back home, and so do our holiday orders. Lechon, kare-kare, pancit and fruit salad for Noche Buena and Media Noche: call ahead while there’s still room on the calendar.'
          }
        : {
              kicker: 'Handaan season',
              title: 'Birthdays, binyag, fiestas and graduations',
              body: 'Whatever the occasion, there’s a tray for it. Lechon, pancit for long life and dessert for the titas: call ahead so we can have everything ready for your celebration.'
          };

    return (
        <aside className={cn('relative overflow-hidden rounded-3xl border-2 border-uling-900 bg-uling-900 p-7 text-gata-100 shadow-sign-lg sm:p-9', className)}>
            <div aria-hidden="true" className="banig pointer-events-none absolute inset-0 text-uling-800/70" />
            <Parol className={cn('absolute -top-1 right-5 h-32 w-24 transition-opacity duration-700 sm:right-10 sm:h-40 sm:w-28', pasko ? 'opacity-100' : 'opacity-0')} />
            <div className="relative max-w-xl">
                <p className="flex items-center gap-2 font-sign text-sm tracking-[0.12em] text-dilaw-300 uppercase">
                    <CalendarHeart className="h-4 w-4" aria-hidden="true" />
                    {copy.kicker}
                </p>
                <h3 className="mt-3 pr-20 font-display-soft text-3xl leading-tight font-black text-gata-50 sm:pr-24 sm:text-4xl">{copy.title}</h3>
                <p className="mt-3 text-[1.02rem] leading-relaxed text-gata-200">{copy.body}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                    <ButtonAnchor href={`tel:${site.phone.tel}`} variant="gold">
                        <Phone className="h-4 w-4" aria-hidden="true" /> Call {site.phone.display}
                    </ButtonAnchor>
                    {showPlanLink && (
                        <ButtonLink to="/catering#plan" variant="cream">
                            Plan your trays
                        </ButtonLink>
                    )}
                </div>
            </div>
        </aside>
    );
}
