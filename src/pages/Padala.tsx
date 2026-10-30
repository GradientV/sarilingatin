import { Banknote, Clock, MapPin, Package, Phone } from 'lucide-react';
import BalikbayanBox from '@/components/brand/BalikbayanBox';
import PageHero from '@/components/PageHero';
import Seo from '@/components/Seo';
import { ButtonAnchor } from '@/components/ui/Button';
import SectionHeading, { Accent } from '@/components/ui/SectionHeading';
import Signboard from '@/components/ui/Signboard';
import { useHydrated } from '@/hooks/useHydrated';
import { remittanceHours, site } from '@/data/site';
import { SISTER_STORES } from '@/data/story';
import { formatRange, isWithin } from '@/lib/hours';
import { storeSchema } from '@/lib/schema';

/** "Open now" for the padala counter, once the page knows the time */
function CounterStatus() {
    const hydrated = useHydrated();
    if (!hydrated) return <span>Daily {formatRange(remittanceHours)}</span>;
    const open = isWithin(remittanceHours.open, remittanceHours.close);
    return (
        <span className="inline-flex items-center gap-2">
            <span aria-hidden="true" className={open ? 'h-2.5 w-2.5 rounded-full bg-dahon-500' : 'h-2.5 w-2.5 rounded-full bg-pula-500'} />
            {open ? 'Counter open now' : 'Counter closed now'} · daily {formatRange(remittanceHours)}
        </span>
    );
}

export default function Padala() {
    const woodside = SISTER_STORES.find((store) => store.area.startsWith('Woodside'));

    return (
        <>
            <Seo pageId="padala" schema={storeSchema()} />
            <PageHero
                tone="sea"
                eyebrow="Padala · Send home"
                title={
                    <>
                        Send love <Accent tone="gold">home</Accent>
                    </>
                }
                intro={
                    <p>
                        Money for the family, a balikbayan box for the holidays: send both to the Philippines from Elmhurst, with people who have been doing padala for their own family for
                        years.
                    </p>
                }
                art={<BalikbayanBox className="w-full drop-shadow-[0_18px_30px_rgb(5_15_40/0.5)]" />}
            >
                <ButtonAnchor href={`tel:${site.phone.tel}`} variant="gold" size="lg">
                    <Phone className="h-4 w-4" aria-hidden="true" /> Tumawag lang po: {site.phone.display}
                </ButtonAnchor>
            </PageHero>

            <section aria-label="Padala services" className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-2">
                <article className="flex flex-col rounded-3xl border-2 border-uling-900 bg-gata-50 p-7 shadow-sign-lg sm:p-9">
                    <Banknote className="h-10 w-10 text-dagat-700" aria-hidden="true" />
                    <Signboard tone="sea" className="mt-5 self-start">
                        Pera padala
                    </Signboard>
                    <h2 className="mt-4 font-display-soft text-4xl font-black">Send money to the Philippines</h2>
                    <p className="mt-4 flex-1 text-lg leading-relaxed text-uling-700">
                        Stop by the remittance counter inside the store and we’ll walk you through sending money to family back home. Rates, fees and payout options are confirmed at the
                        counter when you send.
                    </p>
                    <p className="mt-6 inline-flex items-center gap-2 rounded-xl bg-dagat-50 px-4 py-3 font-semibold text-dagat-800">
                        <Clock className="h-5 w-5" aria-hidden="true" />
                        <CounterStatus />
                    </p>
                </article>

                <article className="flex flex-col rounded-3xl border-2 border-uling-900 bg-gata-50 p-7 shadow-sign-lg sm:p-9">
                    <Package className="h-10 w-10 text-dagat-700" aria-hidden="true" />
                    <Signboard tone="sea" className="mt-5 self-start">
                        Balikbayan box
                    </Signboard>
                    <h2 className="mt-4 font-display-soft text-4xl font-black">Drop it off, or we’ll pick it up</h2>
                    <p className="mt-4 flex-1 text-lg leading-relaxed text-uling-700">
                        Sariling Atin handles balikbayan box drop-off and pick-up with ATLAS Express Padala. Bring your packed box to the store, or call to schedule a pick-up. Ask us about box
                        sizes, current rates and shipping schedules before you pack.
                    </p>
                    <p className="mt-6 inline-flex items-center gap-2 rounded-xl bg-dagat-50 px-4 py-3 font-semibold text-dagat-800">
                        <Phone className="h-5 w-5" aria-hidden="true" />
                        <a href={`tel:${site.phone.tel}`} className="underline underline-offset-2">
                            Call {site.phone.display} for rates &amp; pick-up
                        </a>
                    </p>
                </article>
            </section>

            <section aria-labelledby="balikbayan-title" className="border-y-2 border-uling-900 bg-dagat-50 py-20">
                <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <SectionHeading
                        id="balikbayan-title"
                        eyebrowTone="sea"
                        eyebrow="Ano ’yan? · What’s that?"
                        title={
                            <>
                                What’s a <Accent tone="sea">balikbayan box?</Accent>
                            </>
                        }
                        intro={
                            <>
                                A <em>balikbayan</em> is a Filipino coming back home, and the balikbayan box is what they send ahead: a big cardboard box packed to the flaps with chocolates,
                                canned goods, clothes, shoes and gifts for everyone. Families fill them slowly for months, and opening one back home is an event. If you grew up with one, you
                                already know.
                            </>
                        }
                    />
                    <div className="rounded-3xl border-2 border-uling-900 bg-gata-50 p-7 shadow-sign">
                        <h3 className="font-display-soft text-2xl font-black">Before you pack</h3>
                        <ul className="mt-4 space-y-3 text-[0.98rem] text-uling-700">
                            <li className="flex gap-3">
                                <span className="font-sign text-pula-600">1</span> Call us for current box sizes and rates.
                            </li>
                            <li className="flex gap-3">
                                <span className="font-sign text-pula-600">2</span> Ask what can and can’t be shipped, so nothing gets held up.
                            </li>
                            <li className="flex gap-3">
                                <span className="font-sign text-pula-600">3</span> Have the full delivery address and a contact number in the Philippines ready.
                            </li>
                            <li className="flex gap-3">
                                <span className="font-sign text-pula-600">4</span> Drop off at {site.address.street}, or schedule a pick-up.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {woodside && (
                <section aria-label="Also in Woodside" className="mx-auto max-w-7xl px-4 pt-20 sm:px-6">
                    <div className="flex flex-col gap-4 rounded-3xl border-2 border-dashed border-uling-500 p-7 sm:flex-row sm:items-center sm:justify-between">
                        <p className="flex items-start gap-3 text-lg text-uling-800">
                            <MapPin className="mt-1 h-5 w-5 shrink-0 text-pula-600" aria-hidden="true" />
                            <span>
                                Closer to Roosevelt Ave? Our Woodside branch at <strong>{woodside.address}</strong> also takes balikbayan boxes.
                            </span>
                        </p>
                    </div>
                </section>
            )}
        </>
    );
}
