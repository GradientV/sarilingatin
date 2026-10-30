import { ArrowDown, CalendarDays, ClipboardList, Phone, Ruler, Store, Users } from 'lucide-react';
import PageHero from '@/components/PageHero';
import PaskoCallout from '@/components/PaskoCallout';
import LechonPicker from '@/components/planner/LechonPicker';
import MobilePlannerBar from '@/components/planner/MobilePlannerBar';
import PartySetPicker from '@/components/planner/PartySetPicker';
import PlannerAnnouncer from '@/components/planner/PlannerAnnouncer';
import { PlannerProvider } from '@/components/planner/PlannerContext';
import PlannerSummary from '@/components/planner/PlannerSummary';
import PriceList from '@/components/planner/PriceList';
import Seo from '@/components/Seo';
import { ButtonAnchor } from '@/components/ui/Button';
import SectionHeading, { Accent } from '@/components/ui/SectionHeading';
import { TRAY_FACTS } from '@/data/menu';
import { site } from '@/data/site';
import { storeSchema } from '@/lib/schema';

const FACTS = [
    { icon: Ruler, title: 'One tray size', body: `Full trays are ${TRAY_FACTS.size}. Most dishes also come by the half tray.` },
    { icon: Users, title: `Feeds ${TRAY_FACTS.feeds}`, body: 'Per full tray, as a guide. Mix three or four dishes and everyone eats well.' },
    { icon: Store, title: 'Pick up in Elmhurst', body: `Collect your order at ${site.address.street}. Ask us about anything else when you call.` }
];

const STEPS = [
    { icon: ClipboardList, title: 'Plan it here', body: 'Add trays, the party set or a lechon to your list. It stays on your device; nothing is sent.' },
    { icon: Phone, title: 'Call to order', body: `Call ${site.phone.display} (or fax ${site.fax.display}). We’ll confirm what’s available, your pickup time and the final price.` },
    { icon: CalendarDays, title: 'Give us time', body: 'The more notice the better, especially for lechon and anything around the holidays.' }
];

export default function Catering() {
    return (
        <PlannerProvider>
            <Seo pageId="catering" schema={storeSchema()} />
            <PageHero
                tone="red"
                eyebrow="Handaan · Catering"
                title={
                    <>
                        Party trays for <Accent tone="gold">every handaan</Accent>
                    </>
                }
                intro={
                    <p>
                        Birthdays, binyag, debuts, graduations, fiestas and Noche Buena. Order any dish by the full or half tray, go for the 12-tray party set, or make it a real fiesta with
                        a whole lechon.
                    </p>
                }
                photo="handaanSpread"
            >
                <ButtonAnchor href="#plan" variant="gold" size="lg">
                    Plan your trays <ArrowDown className="h-5 w-5" aria-hidden="true" />
                </ButtonAnchor>
                <ButtonAnchor href={`tel:${site.phone.tel}`} variant="cream" size="lg">
                    <Phone className="h-4 w-4" aria-hidden="true" /> {site.phone.display}
                </ButtonAnchor>
            </PageHero>

            <section aria-labelledby="basics-title" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
                <h2 id="basics-title" className="sr-only">
                    Tray basics
                </h2>
                <ul className="grid gap-5 md:grid-cols-3">
                    {FACTS.map((fact) => (
                        <li key={fact.title} className="flex gap-4 rounded-2xl border-2 border-uling-900 bg-gata-50 p-5 shadow-sign">
                            <fact.icon className="mt-1 h-6 w-6 shrink-0 text-pula-600" aria-hidden="true" />
                            <div>
                                <p className="font-display-soft text-xl font-black">{fact.title}</p>
                                <p className="mt-1 text-[0.95rem] text-uling-700">{fact.body}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <PaskoCallout className="mt-10" showPlanLink={false} />
            </section>

            <section id="plan" aria-labelledby="plan-title" className="mx-auto max-w-7xl scroll-mt-28 px-4 pb-10 sm:px-6">
                <SectionHeading
                    id="plan-title"
                    eyebrow="Plano · Plan your order"
                    title={
                        <>
                            Build your list, <Accent>then give us a call</Accent>
                        </>
                    }
                    intro="Add what you need and watch the estimate add up. When it looks right, copy your list and call: we’ll take it from there."
                />
                <ol className="mt-10 grid gap-5 md:grid-cols-3">
                    {STEPS.map((step, index) => (
                        <li key={step.title} className="relative rounded-2xl border-2 border-dashed border-uling-500 p-5">
                            <span className="absolute -top-4 left-5 grid h-8 w-8 place-items-center rounded-full border-2 border-uling-900 bg-dilaw-400 font-sign text-sm" aria-hidden="true">
                                {index + 1}
                            </span>
                            <step.icon className="h-6 w-6 text-pula-600" aria-hidden="true" />
                            <p className="mt-3 font-display-soft text-xl font-black">{step.title}</p>
                            <p className="mt-1 text-[0.95rem] text-uling-700">{step.body}</p>
                        </li>
                    ))}
                </ol>

                {/* grid-cols-1 = minmax(0, 1fr): without it the column grows to fit the scrolling chip row on phones */}
                <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_23rem] lg:items-start">
                    <div className="min-w-0 space-y-14 pb-24 lg:pb-0">
                        <PartySetPicker />
                        <LechonPicker />
                        <PriceList />
                    </div>
                    {/* the list follows you down the page; on short screens it scrolls on its own (padding leaves room for its shadow) */}
                    <aside aria-label="My catering list" className="hidden lg:sticky lg:top-28 lg:block lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto lg:pr-2 lg:pb-2">

                        <PlannerSummary />
                    </aside>
                </div>
            </section>

            <MobilePlannerBar />
            <PlannerAnnouncer />
        </PlannerProvider>
    );
}
