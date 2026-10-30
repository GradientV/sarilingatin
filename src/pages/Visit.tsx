import { ArrowUpRight, Building2, MapPin, Navigation, Phone, Printer, TrainFront } from 'lucide-react';
import HoursTable from '@/components/HoursTable';
import MapFacade from '@/components/MapFacade';
import PageHero from '@/components/PageHero';
import Seo from '@/components/Seo';
import SisterStores from '@/components/SisterStores';
import StoreStatus from '@/components/StoreStatus';
import { ButtonAnchor } from '@/components/ui/Button';
import FacebookIcon from '@/components/ui/FacebookIcon';
import SectionHeading, { Accent } from '@/components/ui/SectionHeading';
import Signboard from '@/components/ui/Signboard';
import { remittanceHours, site } from '@/data/site';
import { formatRange } from '@/lib/hours';
import { storeSchema } from '@/lib/schema';

const FAQ = [
    {
        q: 'Can I order ahead?',
        a: `Yes. Call ${site.phone.display} and we’ll have it ready. For party trays and lechon, see the catering page and give us as much notice as you can.`
    },
    { q: 'Do you take cards?', a: `${site.payment}.` },
    { q: 'Can I eat there?', a: 'Yes. Order at the turo-turo counter and eat in, or take it to go.' },
    { q: 'Do you cater?', a: 'Every kind of handaan: full and half trays, the 12-tray party set and whole lechon. Plan your order on the catering page, then call us.' },
    { q: 'Can I send a balikbayan box from here?', a: 'Yes. Drop it off at the store or call to schedule a pick-up. Money remittance is at the padala counter, daily 9 AM – 7 PM.' }
];

export default function Visit() {
    return (
        <>
            <Seo pageId="visit" schema={storeSchema()} />
            <PageHero
                eyebrow="Bisitahin kami · Visit"
                title={
                    <>
                        Tuloy po <Accent>kayo!</Accent>
                    </>
                }
                intro={
                    <p>
                        “Please, come in.” Find us at {site.address.street} in Elmhurst, on the south side of the boulevard across from Queens Center mall. Open every day.
                    </p>
                }
                photo="elmhurstCounter"
            >
                <ButtonAnchor href={site.links.directions} target="_blank" rel="noreferrer" size="lg">
                    <Navigation className="h-4 w-4" aria-hidden="true" /> Get directions
                </ButtonAnchor>
                <ButtonAnchor href={`tel:${site.phone.tel}`} variant="cream" size="lg">
                    <Phone className="h-4 w-4" aria-hidden="true" /> {site.phone.display}
                </ButtonAnchor>
            </PageHero>

            <section aria-label="Hours and contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
                <div className="grid gap-6 lg:grid-cols-3">
                    <div className="rounded-3xl border-2 border-uling-900 bg-gata-50 p-6 shadow-sign-lg lg:row-span-2">
                        <Signboard>Oras · Hours</Signboard>
                        <p className="mt-4 text-[0.98rem] text-uling-800">
                            <StoreStatus tone="light" />
                        </p>
                        <HoursTable className="mt-4" />
                        <div className="mt-5 rounded-2xl bg-dagat-50 p-4 text-sm text-dagat-800">
                            <p className="font-bold">Padala counter</p>
                            <p>Daily {formatRange(remittanceHours)}</p>
                        </div>
                    </div>

                    <div className="rounded-3xl border-2 border-uling-900 bg-gata-50 p-6 shadow-sign">
                        <Signboard tone="cream">Tawagan kami · Call us</Signboard>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <a href={`tel:${site.phone.tel}`} className="flex items-center gap-3 font-display-soft text-2xl font-black hover:text-pula-700">
                                    <Phone className="h-5 w-5 text-pula-600" aria-hidden="true" /> {site.phone.display}
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-uling-700">
                                <Printer className="h-5 w-5 text-pula-600" aria-hidden="true" /> Fax {site.fax.display} (catering orders)
                            </li>
                            <li>
                                <a href={site.facebook} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-uling-800 hover:text-pula-700">
                                    <FacebookIcon className="h-5 w-5 text-pula-600" /> Message us on Facebook
                                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="rounded-3xl border-2 border-uling-900 bg-gata-50 p-6 shadow-sign">
                        <Signboard tone="cream">Papunta dito · Getting here</Signboard>
                        <ul className="mt-4 space-y-3 text-[0.98rem] text-uling-800">
                            <li className="flex gap-3">
                                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-pula-600" aria-hidden="true" />
                                <span>
                                    {site.address.street}, {site.address.city}, {site.address.region} {site.address.postalCode}
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <TrainFront className="mt-0.5 h-5 w-5 shrink-0 text-pula-600" aria-hidden="true" />
                                <span>{site.transit[0].detail}</span>
                            </li>
                            <li className="flex gap-3">
                                <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-pula-600" aria-hidden="true" />
                                <span>{site.transit[1].detail}</span>
                            </li>
                        </ul>
                        <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm font-semibold">
                            <a href={site.links.googleMaps} target="_blank" rel="noreferrer" className="text-pula-700 underline underline-offset-2">
                                Google Maps
                            </a>
                            <a href={site.links.appleMaps} target="_blank" rel="noreferrer" className="text-pula-700 underline underline-offset-2">
                                Apple Maps
                            </a>
                        </p>
                    </div>

                    <MapFacade className="min-h-[22rem] lg:col-span-2" />
                </div>
            </section>

            <section aria-labelledby="faq-title" className="border-y-2 border-uling-900 bg-gata-200/70 py-20">
                <div className="mx-auto max-w-3xl px-4 sm:px-6">
                    <SectionHeading
                        id="faq-title"
                        align="center"
                        eyebrow="Mga tanong · Questions"
                        title={
                            <>
                                Good to <Accent>know</Accent>
                            </>
                        }
                    />
                    <div className="mt-10 space-y-3">
                        {FAQ.map((item) => (
                            <details key={item.q} className="group rounded-2xl border-2 border-uling-900 bg-gata-50 shadow-sign open:bg-white">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-display-soft text-xl font-black [&::-webkit-details-marker]:hidden">
                                    {item.q}
                                    <span aria-hidden="true" className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-dilaw-400 font-sans text-xl leading-none transition-transform group-open:rotate-45">
                                        +
                                    </span>
                                </summary>
                                <p className="px-5 pb-5 text-[1.02rem] leading-relaxed text-uling-700">{item.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section aria-labelledby="sister-title" className="mx-auto max-w-7xl px-4 pt-20 sm:px-6">
                <SectionHeading
                    id="sister-title"
                    eyebrow="Iba pang tindahan · Other stores"
                    title={
                        <>
                            Not in Elmhurst? <Accent>No problem.</Accent>
                        </>
                    }
                    intro="The Sariling Atin family runs stores in Queens and New Jersey too."
                />
                <SisterStores className="mt-10" />
            </section>
        </>
    );
}
