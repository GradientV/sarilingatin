import { ArrowRight, CreditCard, Phone, ShoppingBasket } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Seo from '@/components/Seo';
import { ButtonAnchor, ButtonLink } from '@/components/ui/Button';
import Photo from '@/components/ui/Photo';
import SectionHeading, { Accent } from '@/components/ui/SectionHeading';
import Signboard from '@/components/ui/Signboard';
import { AISLES } from '@/data/grocery';
import { site } from '@/data/site';
import { cn } from '@/lib/cn';
import { storeSchema } from '@/lib/schema';

const TILE_TONES = ['bg-pula-600 text-dilaw-300', 'bg-dahon-600 text-gata-50', 'bg-dagat-700 text-gata-50'];

export default function Grocery() {
    return (
        <>
            <Seo pageId="grocery" schema={storeSchema()} />
            <PageHero
                eyebrow="Sari-sari · Grocery"
                title={
                    <>
                        A Filipino grocery on <Accent>Queens Blvd</Accent>
                    </>
                }
                intro={
                    <p>
                        When we opened in 2014 we were the first Filipino grocery on the south side of the boulevard. The shelves are still stocked with the sauces, snacks, sweets and
                        frozen favorites that taste like home.
                    </p>
                }
                photo="grocerySauces"
            >
                <ButtonLink to="/visit" size="lg">
                    Hours &amp; directions
                </ButtonLink>
                <ButtonAnchor href={`tel:${site.phone.tel}`} variant="cream" size="lg">
                    <Phone className="h-4 w-4" aria-hidden="true" /> Ask if it’s in stock
                </ButtonAnchor>
            </PageHero>

            <section aria-labelledby="aisles-title" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
                <SectionHeading
                    id="aisles-title"
                    eyebrow="Mga pasilyo · The aisles"
                    title={
                        <>
                            What you’ll find <Accent>on the shelves</Accent>
                        </>
                    }
                    intro="Stock changes with every delivery, so think of this as a tour, not a catalog. If you’re hunting for something specific, give us a call before you come."
                />
                <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {AISLES.map((aisle, index) => {
                        const tone = TILE_TONES[index % TILE_TONES.length];
                        return (
                            <li key={aisle.id} className="flex flex-col overflow-hidden rounded-2xl border-2 border-uling-900 bg-gata-50 shadow-sign">
                                {aisle.photo ? (
                                    <Photo photo={aisle.photo} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw" className="aspect-[4/3] w-full border-b-2 border-uling-900" />
                                ) : (
                                    <div className={cn('relative grid aspect-[4/3] place-items-center overflow-hidden border-b-2 border-uling-900', tone)}>
                                        <div aria-hidden="true" className="banig absolute inset-0 text-uling-950/20" />
                                        <p className="relative px-6 text-center font-display-soft text-4xl font-black italic">{aisle.tagalog}</p>
                                    </div>
                                )}
                                <div className="flex flex-1 flex-col p-5">
                                    <p className="font-sign text-[0.62rem] tracking-[0.14em] text-pula-600 uppercase">{aisle.tagalog}</p>
                                    <h3 className="mt-1 font-display-soft text-2xl font-black">{aisle.english}</h3>
                                    <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-uling-700">{aisle.body}</p>
                                    <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`Examples: ${aisle.english}`}>
                                        {aisle.examples.map((example) => (
                                            <li key={example} className="rounded-full bg-gata-200 px-2.5 py-1 text-xs font-semibold text-uling-800">
                                                {example}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </section>

            <section aria-labelledby="merienda-title" className="border-y-2 border-uling-900 bg-dilaw-100 py-20 lg:py-24">
                <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:items-center">
                    <div className="grid grid-cols-2 gap-4">
                        <Photo photo="taho" sizes="(min-width: 1024px) 22vw, 46vw" className="aspect-[3/4] w-full rounded-3xl border-2 border-uling-900 shadow-sign" />
                        <Photo photo="crispyPancit" sizes="(min-width: 1024px) 22vw, 46vw" className="aspect-[3/4] w-full translate-y-8 rounded-3xl border-2 border-uling-900 shadow-sign" />
                    </div>
                    <div>
                        <SectionHeading
                            id="merienda-title"
                            eyebrow="Merienda · Pasalubong"
                            title={
                                <>
                                    Something for <Accent>later</Accent>
                                </>
                            }
                            intro="Merienda is the snack between meals, and pasalubong is the treat you bring home for everyone else. We’ve got both: kakanin in the cooler, turon and sweets from the kitchen, and bags of chichirya for the road."
                        />
                        <ButtonLink to="/menu#menu-merienda" variant="ink" className="mt-8">
                            Snacks &amp; desserts on the menu <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </ButtonLink>
                    </div>
                </div>
            </section>

            <section aria-label="Good to know" className="mx-auto max-w-7xl px-4 pt-20 sm:px-6">
                <div className="grid gap-5 md:grid-cols-2">
                    <div className="flex gap-4 rounded-2xl border-2 border-uling-900 bg-gata-50 p-6 shadow-sign">
                        <CreditCard className="mt-1 h-6 w-6 shrink-0 text-pula-600" aria-hidden="true" />
                        <div>
                            <Signboard tone="cream">Paying</Signboard>
                            <p className="mt-3 text-[0.98rem] text-uling-700">{site.payment}.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 rounded-2xl border-2 border-uling-900 bg-gata-50 p-6 shadow-sign">
                        <ShoppingBasket className="mt-1 h-6 w-6 shrink-0 text-pula-600" aria-hidden="true" />
                        <div>
                            <Signboard tone="cream">Lunch, then groceries</Signboard>
                            <p className="mt-3 text-[0.98rem] text-uling-700">
                                The turo-turo counter is inside the grocery, so you can eat first and shop after. Open daily, same hours as the kitchen.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
