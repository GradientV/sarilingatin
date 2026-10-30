import Sampaguita from '@/components/brand/Sampaguita';
import PageHero from '@/components/PageHero';
import PressList from '@/components/PressList';
import Seo from '@/components/Seo';
import SisterStores from '@/components/SisterStores';
import Photo from '@/components/ui/Photo';
import SectionHeading, { Accent } from '@/components/ui/SectionHeading';
import { ANNIVERSARY_QUOTE, OWNER_THANKS, TIMELINE } from '@/data/story';
import { storeSchema } from '@/lib/schema';

export default function Story() {
    return (
        <>
            <Seo pageId="story" schema={storeSchema()} />
            <PageHero
                eyebrow="Kwento · Our story"
                title={
                    <>
                        Our very <Accent>own</Accent>
                    </>
                }
                intro={
                    <p>
                        <em>Sariling atin</em> is Tagalog for “our very own.” It’s the name of a family business, and the feeling of walking into a place that smells like
                        your lola’s kitchen, on the other side of the world from home.
                    </p>
                }
                photo="tenthAnniversary"
            />

            <section aria-labelledby="family-title" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
                <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                        <SectionHeading
                            id="family-title"
                            eyebrow="Ang pamilya · The family"
                            title={
                                <>
                                    A family store, <Accent>then and now</Accent>
                                </>
                            }
                        />
                        <div className="mt-6 space-y-5 text-lg leading-relaxed text-uling-700">
                            <p>
                                Sariling Atin is run by the Concepcion family: Celso “Nilo” and Rosario “Rose” Concepcion, their daughters, and a few more relatives behind the counter.
                                They started with a small fast-food counter and grocery in Toms River, New Jersey, and named it for their girls: RJ, for Rocel and Julia.
                            </p>
                            <p>
                                In 2014 they brought it to Queens Boulevard. A relative tipped them off to an empty furniture showroom by Queens Center mall; after months of permits and
                                paperwork, the doors opened on April 5, 2014, and the line went out the door. Home-style cooking, served turo-turo style, with a grocery full of things you
                                couldn’t find anywhere else on the boulevard.
                            </p>
                            <p>
                                Ten years later the family is still here, still cooking, and still sending boxes and padala home for the community, the same way so many of our families got
                                started.
                            </p>
                        </div>
                        <blockquote className="mt-10 rounded-3xl border-2 border-uling-900 bg-dilaw-100 p-7 shadow-sign">
                            <p className="font-display-soft text-2xl leading-snug font-black text-uling-900 italic sm:text-3xl">“{ANNIVERSARY_QUOTE.text}”</p>
                            <footer className="mt-3 text-sm font-semibold text-uling-700">{ANNIVERSARY_QUOTE.source}</footer>
                        </blockquote>
                    </div>
                    <div className="grid content-start gap-5">
                        <Photo photo="elmhurstCounter" sizes="(min-width: 1024px) 38vw, 92vw" className="aspect-[4/5] w-full rounded-3xl border-2 border-uling-900 shadow-sign-lg" />
                        <p className="text-sm text-uling-600">Inside the Elmhurst store: red walls, a chalkboard that says it all (“Sariling Atin, ‘our own’”), and the counter.</p>
                    </div>
                </div>
            </section>

            <section aria-labelledby="timeline-title" className="border-y-2 border-uling-900 bg-gata-200/70 py-20 lg:py-28">
                <div className="mx-auto max-w-4xl px-4 sm:px-6">
                    <SectionHeading
                        id="timeline-title"
                        align="center"
                        eyebrow="Mula noon · Since then"
                        title={
                            <>
                                From Toms River <Accent>to the boulevard</Accent>
                            </>
                        }
                    />
                    <ol className="relative mt-14 border-l-4 border-dotted border-pula-600 pl-8 sm:pl-10">
                        {TIMELINE.map((milestone) => (
                            <li key={milestone.year} className="relative pb-12 last:pb-0">
                                <span className="absolute top-0 -left-[3.05rem] grid h-10 w-10 place-items-center rounded-full border-2 border-uling-900 bg-gata-50 sm:-left-[3.55rem]">
                                    <Sampaguita className="h-7 w-7" />
                                </span>
                                <p className="font-sign text-sm tracking-[0.1em] text-pula-600 uppercase">{milestone.year}</p>
                                <h3 className="mt-1 font-display-soft text-2xl font-black sm:text-3xl">{milestone.title}</h3>
                                <p className="mt-2 text-lg leading-relaxed text-uling-700">{milestone.body}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section aria-labelledby="stores-title" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
                <SectionHeading
                    id="stores-title"
                    eyebrow="Pamilya ng tindahan · Family of stores"
                    title={
                        <>
                            The rest of <Accent>the family</Accent>
                        </>
                    }
                    intro="Elmhurst is one of several Sariling Atin stores run by the family in New York and New Jersey."
                />
                <SisterStores className="mt-10" />
            </section>

            <section aria-labelledby="press-title" className="mx-auto max-w-7xl px-4 sm:px-6">
                <SectionHeading
                    id="press-title"
                    eyebrow="Napabalita · In the news"
                    title={
                        <>
                            What they’ve <Accent>said</Accent>
                        </>
                    }
                />
                <PressList className="mt-10" />

                <figure className="mx-auto mt-20 max-w-2xl text-center">
                    <Sampaguita className="mx-auto h-14 w-14" />
                    <blockquote className="mt-4 font-display-soft text-4xl font-black text-pula-700 italic">“{OWNER_THANKS.text}”</blockquote>
                    <figcaption className="mt-3 font-sign text-xs tracking-[0.14em] text-uling-700 uppercase">
                        {OWNER_THANKS.name}, {OWNER_THANKS.role} · Maraming salamat po
                    </figcaption>
                </figure>
            </section>
        </>
    );
}
