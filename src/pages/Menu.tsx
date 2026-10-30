import { ArrowRight, Flame, Info, Phone } from 'lucide-react';
import Sampaguita from '@/components/brand/Sampaguita';
import DishCard from '@/components/DishCard';
import PageHero from '@/components/PageHero';
import Seo from '@/components/Seo';
import TuroTuroSteps from '@/components/TuroTuroSteps';
import { ButtonAnchor, ButtonLink } from '@/components/ui/Button';
import Photo from '@/components/ui/Photo';
import SectionHeading, { Accent } from '@/components/ui/SectionHeading';
import Signboard from '@/components/ui/Signboard';
import { CATEGORIES, DISHES, FAVORITE_IDS, TAG_LABELS, dishById, dishesIn, type Dish } from '@/data/menu';
import { site } from '@/data/site';
import { storeSchema } from '@/lib/schema';

const GRILL_IDS = ['pork-bbq', 'lechon-belly', 'lechon-kawali', 'crispy-pata', 'inihaw-na-liempo', 'sinugba', 'grilled-squid', 'chicharon-bulaklak'];

function KitchenEntry({ dish }: { dish: Dish }) {
    const tags = (dish.tags ?? []).filter((tag) => tag !== 'favorite');
    const favorite = dish.tags?.includes('favorite');

    return (
        <li className="flex gap-3 border-b border-dashed border-uling-300 py-4">
            <Sampaguita className="mt-1 h-5 w-5 shrink-0" />
            <div>
                <h4 className="font-bold text-uling-900">
                    {dish.name}
                    {dish.also && <span className="ml-1.5 font-medium text-uling-600">· {dish.also}</span>}
                    {favorite && <span className="ml-2 rounded-full bg-dilaw-300 px-2 py-0.5 align-middle text-[0.65rem] font-bold tracking-wide text-uling-900 uppercase">Paborito</span>}
                </h4>
                <p className="mt-1 text-[0.95rem] leading-relaxed text-uling-700">{dish.description}</p>
                {tags.length > 0 && <p className="mt-1.5 text-xs font-semibold text-pula-700">{tags.map((tag) => TAG_LABELS[tag]).join(' · ')}</p>}
            </div>
        </li>
    );
}

export default function Menu() {
    const favorites = FAVORITE_IDS.map(dishById).filter((dish): dish is Dish => Boolean(dish));
    const grill = GRILL_IDS.map(dishById).filter((dish): dish is Dish => Boolean(dish));

    return (
        <>
            <Seo pageId="menu" schema={storeSchema()} />
            <PageHero
                eyebrow="Ulam at merienda · Menu"
                title={
                    <>
                        Today’s ulam, <Accent>tomorrow’s</Accent> craving
                    </>
                }
                intro={
                    <p>
                        Ulam is whatever goes with your rice, and our counter is full of it: adobo, sisig, kare-kare, Bicol express, dinuguan, pancit and more, cooked fresh and served turo-turo
                        style.
                    </p>
                }
                photo="steamTableBbq"
            >
                <ButtonAnchor href="#kitchen" size="lg">
                    Browse the kitchen
                </ButtonAnchor>
                <ButtonLink to="/catering" variant="gold" size="lg">
                    Order by the tray
                </ButtonLink>
            </PageHero>

            <section aria-labelledby="how-title" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
                <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                    <SectionHeading
                        id="how-title"
                        eyebrow="Paano? · How it works"
                        title={
                            <>
                                Combo meals, <Accent>your way</Accent>
                            </>
                        }
                        intro="Choose one, two or three ulam with rice or noodles, or take any dish home by the container. Prices are posted at the counter."
                    />
                    <figure className="relative">
                        <Photo photo="mustTry" sizes="(min-width: 1024px) 38vw, 92vw" className="aspect-[16/10] w-full rounded-3xl border-2 border-uling-900 shadow-sign-lg" />
                        <figcaption className="absolute -bottom-4 left-5 -rotate-2">
                            <Signboard tone="cream">Ask what’s new on the counter</Signboard>
                        </figcaption>
                    </figure>
                </div>
                <TuroTuroSteps className="mt-14" />
                <p className="mt-8 flex max-w-3xl items-start gap-3 rounded-2xl border-2 border-dashed border-uling-500 bg-gata-50 p-5 text-[0.98rem] text-uling-700">
                    <Info className="mt-0.5 h-5 w-5 shrink-0 text-pula-600" aria-hidden="true" />
                    <span>
                        The counter changes through the day, so not every dish below is out at once. Craving something specific? Call{' '}
                        <a href={`tel:${site.phone.tel}`} className="font-bold text-pula-700 underline underline-offset-2">
                            {site.phone.display}
                        </a>{' '}
                        and ask what’s on today.
                    </span>
                </p>
            </section>

            <section aria-labelledby="fav-title" className="border-y-2 border-uling-900 bg-gata-200/70 py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <SectionHeading
                        id="fav-title"
                        eyebrow="Mga paborito · Favorites"
                        title={
                            <>
                                Start <Accent>here</Accent>
                            </>
                        }
                        intro="First time at a Filipino turo-turo? These are the dishes our regulars and reviewers talk about most."
                    />
                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {favorites.map((dish, index) => (
                            <DishCard key={dish.id} dish={dish} toneIndex={index} />
                        ))}
                    </div>
                </div>
            </section>

            <section aria-labelledby="grill-title" className="relative overflow-hidden bg-uling-900 py-20 text-gata-100 lg:py-28">
                <div aria-hidden="true" className="banig pointer-events-none absolute inset-0 text-uling-800/70" />
                <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
                    <div>
                        <SectionHeading
                            id="grill-title"
                            inverted
                            eyebrow={
                                <>
                                    <Flame className="h-3.5 w-3.5" aria-hidden="true" /> Inihaw at prito · Grill & fry
                                </>
                            }
                            title={
                                <>
                                    Smoke, char and <Accent tone="gold">crackling skin</Accent>
                                </>
                            }
                            intro="The part of the menu you can smell from the sidewalk. Barbecue sticks come off the grill all day; lechon belly and crispy pata are worth planning a trip around."
                        />
                        <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
                            {grill.map((dish) => (
                                <li key={dish.id} className="border-b border-dashed border-uling-700 py-3">
                                    <p className="font-display-soft text-lg font-black text-gata-50">{dish.name}</p>
                                    <p className="text-sm text-uling-300">{dish.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Photo photo="porkBbq" sizes="(min-width: 1024px) 44vw, 92vw" className="col-span-2 aspect-[16/10] w-full rounded-3xl border-2 border-gata-50/80" />
                        <Photo photo="lechonBellySlice" sizes="(min-width: 1024px) 22vw, 46vw" className="aspect-square w-full rounded-3xl border-2 border-gata-50/80" />
                        <Photo photo="grilledSquid" sizes="(min-width: 1024px) 22vw, 46vw" className="aspect-square w-full rounded-3xl border-2 border-gata-50/80" />
                    </div>
                </div>
            </section>

            <section id="kitchen" aria-labelledby="kitchen-title" className="mx-auto max-w-7xl scroll-mt-28 px-4 py-20 sm:px-6 lg:py-28">
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <SectionHeading
                        id="kitchen-title"
                        eyebrow="Kusina · The kitchen"
                        title={
                            <>
                                Everything our kitchen <Accent>cooks</Accent>
                            </>
                        }
                        intro={`${DISHES.length} dishes, grouped the Filipino way: by what’s in the pot.`}
                    />
                </div>

                <nav aria-label="Menu sections" className="no-scrollbar sticky top-[4.5rem] z-20 -mx-4 mt-10 flex gap-2 overflow-x-auto border-y-2 border-uling-900 bg-gata-100/95 px-4 py-3 backdrop-blur">
                    {CATEGORIES.map((category) => (
                        <a
                            key={category.id}
                            href={`#menu-${category.id}`}
                            className="shrink-0 rounded-full border-2 border-uling-900 bg-gata-50 px-3.5 py-1.5 text-sm font-bold whitespace-nowrap hover:bg-dilaw-200"
                        >
                            {category.tagalog}
                            <span className="ml-1 font-medium text-uling-600">{category.english}</span>
                        </a>
                    ))}
                </nav>

                <div className="mt-10 grid gap-x-14 gap-y-14 lg:grid-cols-2">
                    {CATEGORIES.map((category) => (
                        <section key={category.id} id={`menu-${category.id}`} aria-labelledby={`menu-${category.id}-title`} className="scroll-mt-44">
                            <div className="border-b-2 border-uling-900 pb-3">
                                <h3 id={`menu-${category.id}-title`} className="flex items-baseline gap-3">
                                    <span className="font-display-soft text-4xl font-black text-pula-700 italic">{category.tagalog}</span>
                                    <span className="font-sign text-[0.68rem] tracking-[0.14em] text-uling-700 uppercase">{category.english}</span>
                                </h3>
                                <p className="mt-1 text-uling-600">{category.blurb}</p>
                            </div>
                            <ul>
                                {dishesIn(category.id).map((dish) => (
                                    <KitchenEntry key={dish.id} dish={dish} />
                                ))}
                            </ul>
                        </section>
                    ))}
                </div>

                <aside className="mt-16 grid gap-8 rounded-3xl border-2 border-uling-900 bg-gata-50 p-7 shadow-sign-lg sm:p-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
                    <div>
                        <Signboard tone="red">Allergies &amp; diets</Signboard>
                        <p className="mt-4 text-lg leading-relaxed text-uling-800">
                            Filipino cooking leans on pork, shrimp paste (bagoong), fish sauce (patis), peanuts, soy and coconut, often in dishes you wouldn’t expect. If you have an
                            allergy or a dietary need, please ask us before you order and we’ll tell you what’s in each dish.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                        <ButtonAnchor href={`tel:${site.phone.tel}`} variant="cream">
                            <Phone className="h-4 w-4" aria-hidden="true" /> Ask us: {site.phone.display}
                        </ButtonAnchor>
                        <ButtonLink to="/catering" variant="red">
                            Feeding a crowd? See trays <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </ButtonLink>
                    </div>
                </aside>
            </section>
        </>
    );
}
