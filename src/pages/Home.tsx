import { ArrowRight, Banknote, Clock, MapPin, Package, Phone, TrainFront } from 'lucide-react';
import Banderitas from '@/components/brand/Banderitas';
import BalikbayanBox from '@/components/brand/BalikbayanBox';
import Sampaguita from '@/components/brand/Sampaguita';
import DishCard from '@/components/DishCard';
import HoursTable from '@/components/HoursTable';
import MapFacade from '@/components/MapFacade';
import Marquee from '@/components/Marquee';
import PaskoCallout from '@/components/PaskoCallout';
import PressList from '@/components/PressList';
import Seo from '@/components/Seo';
import StoreStatus from '@/components/StoreStatus';
import TuroTuroSteps from '@/components/TuroTuroSteps';
import { ButtonAnchor, ButtonLink } from '@/components/ui/Button';
import Photo from '@/components/ui/Photo';
import SectionHeading, { Accent } from '@/components/ui/SectionHeading';
import Signboard from '@/components/ui/Signboard';
import { AISLES } from '@/data/grocery';
import { FAVORITE_IDS, dishById, type Dish } from '@/data/menu';
import { remittanceHours, site } from '@/data/site';
import { ANNIVERSARY_QUOTE } from '@/data/story';
import { formatRange } from '@/lib/hours';
import { storeSchema } from '@/lib/schema';

function Hero() {
    return (
        <section className="relative overflow-hidden">
            {/* capiz windowpanes behind the photo collage on wide screens */}
            <div aria-hidden="true" className="capiz absolute inset-y-0 right-0 hidden w-[44%] border-l-2 border-uling-900 lg:block" />
            <Banderitas className="relative z-10" />

            <div className="relative mx-auto grid max-w-7xl gap-14 px-4 pt-6 pb-20 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:pt-8 lg:pb-24">
                <div>
                    <Signboard>Since 2014 · 89-12 Queens Blvd</Signboard>
                    <h1 className="mt-6 font-display-soft text-[3.3rem] leading-[0.94] font-black tracking-tight text-uling-900 sm:text-7xl xl:text-[5.6rem]">
                        Lutong bahay, <Accent>sariling atin.</Accent>
                    </h1>
                    <p className="mt-4 font-sign text-[0.8rem] tracking-[0.16em] text-uling-600 uppercase">Home cooking that’s our very own</p>
                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-uling-700 sm:text-xl">
                        Home-style Filipino food served turo-turo style, a full Filipino grocery, party trays for every handaan, and padala to send home. All under one roof
                        on Queens Boulevard.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <ButtonLink to="/menu" size="lg">
                            See what’s cooking <ArrowRight className="h-5 w-5" aria-hidden="true" />
                        </ButtonLink>
                        <ButtonLink to="/catering" variant="gold" size="lg">
                            Order party trays
                        </ButtonLink>
                    </div>
                    <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t-2 border-dashed border-uling-300 pt-6 text-[0.95rem] text-uling-800">
                        <StoreStatus tone="light" />
                        <span className="inline-flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-pula-600" aria-hidden="true" /> Elmhurst, Queens
                        </span>
                        <span>Dine-in · Take-out · Catering</span>
                    </div>
                </div>

                <HeroCollage />
            </div>
        </section>
    );
}

/** three photos framed like the panes of a narra-wood capiz window */
function HeroCollage() {
    return (
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="grid aspect-[5/6] grid-cols-5 grid-rows-6 gap-2.5 rounded-[32px] border-2 border-uling-900 bg-[#7a5634] p-2.5 shadow-sign-lg">
                <Photo
                    photo="lechonBellyRolls"
                    sizes="(min-width: 1024px) 28vw, 56vw"
                    priority
                    className="col-span-3 row-span-6 h-full w-full rounded-l-[24px] rounded-r-md border-2 border-uling-900"
                />
                <Photo photo="porkBbq" sizes="(min-width: 1024px) 18vw, 38vw" eager className="col-span-2 row-span-3 h-full w-full rounded-tr-[24px] rounded-l-md rounded-br-md border-2 border-uling-900" />
                <Photo photo="steamTableBbq" sizes="(min-width: 1024px) 18vw, 38vw" eager className="col-span-2 row-span-3 h-full w-full rounded-br-[24px] rounded-l-md rounded-tr-md border-2 border-uling-900" />
            </div>
            <div className="absolute top-8 -left-3 -rotate-6 sm:-left-6">
                <Signboard tone="red">Turo-turo!</Signboard>
            </div>
            <div className="absolute right-4 -bottom-6 rotate-2 rounded-2xl border-2 border-uling-900 bg-gata-50 px-4 py-3 shadow-sign sm:right-8">
                <p className="font-sign text-[0.6rem] tracking-[0.14em] text-pula-600 uppercase">Paborito</p>
                <p className="font-display-soft text-lg leading-tight font-black">Lechon belly &amp; pork BBQ</p>
            </div>
            <Sampaguita className="absolute -top-7 -right-3 h-20 w-20 rotate-12 drop-shadow-[0_6px_10px_rgb(33_23_20/0.25)]" />
        </div>
    );
}

function TuroTuro() {
    return (
        <section aria-labelledby="turo-title" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <SectionHeading
                    id="turo-title"
                    eyebrow="Turo-turo · Point-point"
                    title={
                        <>
                            Point at what looks good. <Accent>Kain na!</Accent>
                        </>
                    }
                    intro="Turo-turo literally means “point point.” Every day our kitchen fills the counter with home-style dishes, cooked the way they are at home and at every carinderia back in the Philippines. Walk up, point, and eat."
                />
                <figure className="relative">
                    <Photo photo="steamTable" sizes="(min-width: 1024px) 42vw, 92vw" className="aspect-[4/3] w-full rounded-3xl border-2 border-uling-900 shadow-sign-lg" />
                    <figcaption className="absolute -bottom-4 left-5 -rotate-2">
                        <Signboard tone="cream">The counter changes every day</Signboard>
                    </figcaption>
                </figure>
            </div>
            <TuroTuroSteps className="mt-16" />
        </section>
    );
}

function Favorites() {
    const dishes = FAVORITE_IDS.map(dishById).filter((dish): dish is Dish => Boolean(dish));

    return (
        <section aria-labelledby="favorites-title" className="relative border-y-2 border-uling-900 bg-gata-200/70 py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <SectionHeading
                        id="favorites-title"
                        eyebrow="Mga paborito · Favorites"
                        title={
                            <>
                                The dishes people <Accent>keep coming back for</Accent>
                            </>
                        }
                        intro="The ones our regulars order again and again, and the ones reviewers keep bringing up."
                    />
                    <ButtonLink to="/menu" variant="cream">
                        The whole menu <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </ButtonLink>
                </div>
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {dishes.map((dish, index) => (
                        <DishCard key={dish.id} dish={dish} toneIndex={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function Catering() {
    const facts = [
        { value: '$449', label: '+ tax for the 12-tray party set' },
        { value: '10–15', label: 'people fed by one full tray' },
        { value: 'Half', label: 'trays for smaller get-togethers' }
    ];

    return (
        <section aria-labelledby="catering-title" className="relative overflow-hidden bg-pula-700 py-20 text-gata-100 lg:py-28">
            <div aria-hidden="true" className="banig pointer-events-none absolute inset-0 text-pula-900/40" />
            <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:items-center">
                <div>
                    <SectionHeading
                        id="catering-title"
                        inverted
                        eyebrow="Handaan · Catering"
                        title={
                            <>
                                Having a party? <Accent tone="gold">Kami na ang bahala.</Accent>
                            </>
                        }
                        intro="Leave it to us. Pick from more than 70 dishes by the full or half tray, go big with the 12-tray party set, or make it a fiesta with a whole lechon."
                    />
                    <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                        {facts.map((fact) => (
                            <li key={fact.label} className="rounded-2xl border-2 border-uling-900 bg-gata-50 p-4 text-uling-900 shadow-sign">
                                <p className="font-display-soft text-3xl leading-none font-black whitespace-nowrap text-pula-700">{fact.value}</p>
                                <p className="mt-2 text-sm leading-snug font-semibold text-uling-700">{fact.label}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <ButtonLink to="/catering" variant="gold" size="lg">
                            Plan your trays <ArrowRight className="h-5 w-5" aria-hidden="true" />
                        </ButtonLink>
                        <ButtonAnchor href={`tel:${site.phone.tel}`} variant="cream" size="lg">
                            <Phone className="h-4 w-4" aria-hidden="true" /> {site.phone.display}
                        </ButtonAnchor>
                    </div>
                </div>

                <div className="relative grid grid-cols-2 gap-4">
                    <Photo photo="handaanSpread" sizes="(min-width: 1024px) 44vw, 92vw" className="col-span-2 aspect-[16/10] w-full rounded-3xl border-2 border-uling-900 shadow-sign-lg" />
                    <Photo photo="grilledSquid" sizes="(min-width: 1024px) 22vw, 46vw" className="aspect-square w-full rounded-3xl border-2 border-uling-900 shadow-sign" />
                    <Photo photo="lechonWhole" sizes="(min-width: 1024px) 22vw, 46vw" className="aspect-square w-full rounded-3xl border-2 border-uling-900 shadow-sign" />
                </div>
            </div>

            <div className="relative mx-auto mt-16 max-w-7xl px-4 sm:px-6">
                <PaskoCallout />
            </div>
        </section>
    );
}

function Grocery() {
    return (
        <section aria-labelledby="grocery-title" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
            <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                <div className="grid grid-cols-2 grid-rows-2 gap-4">
                    <Photo photo="grocerySauces" sizes="(min-width: 1024px) 22vw, 46vw" className="row-span-2 h-full min-h-80 w-full rounded-3xl border-2 border-uling-900 shadow-sign" />
                    <Photo photo="grocerySnacks" sizes="(min-width: 1024px) 22vw, 46vw" className="aspect-[4/3] h-full w-full rounded-3xl border-2 border-uling-900 shadow-sign" />
                    <Photo photo="groceryFridge" sizes="(min-width: 1024px) 22vw, 46vw" className="aspect-[4/3] h-full w-full rounded-3xl border-2 border-uling-900 shadow-sign" />
                </div>
                <div>
                    <SectionHeading
                        id="grocery-title"
                        eyebrow="Sari-sari · Grocery"
                        title={
                            <>
                                A little piece of <Accent>home</Accent>, aisle by aisle
                            </>
                        }
                        intro="When the store opened in 2014 it was the first Filipino grocery on the south side of Queens Blvd. Come for lunch, leave with a bag full of the things you can’t find anywhere else."
                    />
                    <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                        {AISLES.map((aisle) => (
                            <li key={aisle.id} className="flex items-baseline gap-3 border-b border-dashed border-uling-300 pb-3">
                                <Sampaguita className="h-5 w-5 shrink-0 translate-y-1" />
                                <span>
                                    <span className="font-display-soft text-lg font-black italic">{aisle.tagalog}</span>
                                    <span className="ml-2 text-sm text-uling-600">{aisle.english}</span>
                                </span>
                            </li>
                        ))}
                    </ul>
                    <ButtonLink to="/grocery" variant="cream" className="mt-8">
                        What’s on the shelves <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </ButtonLink>
                </div>
            </div>
        </section>
    );
}

function Padala() {
    return (
        <section aria-labelledby="padala-title" className="relative overflow-hidden border-y-2 border-uling-900 bg-dagat-800 py-20 text-dagat-50 lg:py-28">
            <div aria-hidden="true" className="banig pointer-events-none absolute inset-0 text-dagat-900/50" />
            <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                    <SectionHeading
                        id="padala-title"
                        inverted
                        eyebrowTone="gold"
                        eyebrow="Padala · Send home"
                        title={
                            <>
                                Send love <Accent tone="gold">home.</Accent>
                            </>
                        }
                        intro="For a lot of families, padala is how the story starts. Send money to the Philippines from our remittance counter, and drop off or schedule pick-up for your balikbayan box, right here in Elmhurst."
                    />
                    <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                        <li className="rounded-2xl border-2 border-uling-900 bg-gata-50 p-5 text-uling-900 shadow-sign">
                            <Banknote className="h-7 w-7 text-dagat-700" aria-hidden="true" />
                            <p className="mt-3 font-display-soft text-xl font-black">Pera padala</p>
                            <p className="mt-1 text-sm text-uling-700">Money remittance to the Philippines.</p>
                            <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-dagat-700">
                                <Clock className="h-4 w-4" aria-hidden="true" /> Daily {formatRange(remittanceHours)}
                            </p>
                        </li>
                        <li className="rounded-2xl border-2 border-uling-900 bg-gata-50 p-5 text-uling-900 shadow-sign">
                            <Package className="h-7 w-7 text-dagat-700" aria-hidden="true" />
                            <p className="mt-3 font-display-soft text-xl font-black">Balikbayan box</p>
                            <p className="mt-1 text-sm text-uling-700">Drop-off and pick-up with ATLAS Express Padala.</p>
                            <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-dagat-700">
                                <Phone className="h-4 w-4" aria-hidden="true" /> Tumawag lang po: call us
                            </p>
                        </li>
                    </ul>
                    <ButtonLink to="/padala" variant="gold" className="mt-8">
                        How padala works <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </ButtonLink>
                </div>
                <BalikbayanBox className="mx-auto w-full max-w-md drop-shadow-[0_18px_30px_rgb(15_35_80/0.45)]" />
            </div>
        </section>
    );
}

function Press() {
    return (
        <section aria-labelledby="press-title" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
            <SectionHeading
                id="press-title"
                align="center"
                eyebrow="Napabalita · In the news"
                title={
                    <>
                        New York <Accent>took notice</Accent>
                    </>
                }
                intro="From our first few months on the boulevard to today."
            />
            <PressList className="mt-12" />
        </section>
    );
}

function Story() {
    return (
        <section aria-labelledby="story-title" className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid overflow-hidden rounded-[32px] border-2 border-uling-900 bg-gata-50 shadow-sign-lg lg:grid-cols-2">
                <Photo
                    photo="elmhurstCounter"
                    sizes="(min-width: 1024px) 46vw, 92vw"
                    className="aspect-[4/3] w-full border-b-2 border-uling-900 lg:aspect-auto lg:h-full lg:border-r-2 lg:border-b-0"
                />
                <div className="p-8 sm:p-12">
                    <Signboard>Kwento · Our story</Signboard>
                    <h2 id="story-title" className="mt-5 font-display-soft text-4xl leading-[1.05] font-black tracking-tight sm:text-5xl">
                        “Sariling atin” means <Accent>our very own.</Accent>
                    </h2>
                    <p className="mt-5 text-lg leading-relaxed text-uling-700">
                        Nilo and Rose Concepcion opened their first store in Toms River, New Jersey in 2007. Seven years later a relative told them about an empty storefront on Queens
                        Blvd, and on April 5, 2014, more than 700 people showed up on opening day. The family has been feeding Elmhurst ever since.
                    </p>
                    <blockquote className="mt-6 border-l-4 border-dilaw-400 pl-5">
                        <p className="font-display-soft text-xl leading-snug font-bold text-uling-900 italic">“{ANNIVERSARY_QUOTE.text}”</p>
                        <footer className="mt-2 text-sm text-uling-600">{ANNIVERSARY_QUOTE.source}</footer>
                    </blockquote>
                    <ButtonLink to="/our-story" variant="ink" className="mt-8">
                        Read our story <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </ButtonLink>
                </div>
            </div>
        </section>
    );
}

function Visit() {
    return (
        <section aria-labelledby="visit-title" className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:pt-28">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
                <div>
                    <SectionHeading
                        id="visit-title"
                        eyebrow="Bisitahin kami · Visit"
                        title={
                            <>
                                Tuloy po <Accent>kayo!</Accent>
                            </>
                        }
                        intro="Come on in. We’re on the south side of Queens Blvd, across from Queens Center mall."
                    />
                    <div className="mt-8 rounded-2xl border-2 border-uling-900 bg-gata-50 p-5 shadow-sign">
                        <HoursTable />
                        <p className="mt-3 px-2 text-sm text-uling-600">Padala counter: daily {formatRange(remittanceHours)}</p>
                    </div>
                    <ul className="mt-6 space-y-3 text-[0.98rem]">
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
                            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-pula-600" aria-hidden="true" />
                            <a href={`tel:${site.phone.tel}`} className="font-bold hover:text-pula-700">
                                {site.phone.display}
                            </a>
                        </li>
                    </ul>
                </div>
                <MapFacade className="min-h-[26rem]" />
            </div>
        </section>
    );
}

export default function Home() {
    return (
        <>
            <Seo pageId="home" schema={storeSchema()} />
            <Hero />
            <Marquee />
            <TuroTuro />
            <Favorites />
            <Catering />
            <Grocery />
            <Padala />
            <Press />
            <Story />
            <Visit />
        </>
    );
}
