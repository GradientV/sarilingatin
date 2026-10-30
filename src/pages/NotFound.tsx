import { ArrowRight } from 'lucide-react';
import Banderitas from '@/components/brand/Banderitas';
import Sampaguita from '@/components/brand/Sampaguita';
import Seo from '@/components/Seo';
import { ButtonLink } from '@/components/ui/Button';
import Signboard from '@/components/ui/Signboard';
import { nav } from '@/data/site';

export default function NotFound() {
    return (
        <>
            <Seo title="Page not found | Sariling Atin" description="This page doesn’t exist. Find the menu, catering, grocery, padala and visit pages here." />
            <section className="relative overflow-hidden">
                <Banderitas />
                <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-24">
                    <Sampaguita className="mx-auto h-20 w-20" />
                    <Signboard tone="red" className="mt-6">
                        404 · Wala dito
                    </Signboard>
                    <h1 className="mt-5 font-display-soft text-5xl leading-none font-black tracking-tight sm:text-7xl">Naligaw ka yata!</h1>
                    <p className="mt-4 text-xl text-uling-700">Looks like you got lost. This page isn’t here, but the food is.</p>
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        <ButtonLink to="/" size="lg">
                            Back home <ArrowRight className="h-5 w-5" aria-hidden="true" />
                        </ButtonLink>
                        <ButtonLink to="/menu" variant="gold" size="lg">
                            See the menu
                        </ButtonLink>
                    </div>
                    <ul className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[0.98rem] font-semibold">
                        {nav.map((item) => (
                            <li key={item.to}>
                                <ButtonLink to={item.to} variant="cream" size="sm">
                                    {item.label}
                                </ButtonLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
}
