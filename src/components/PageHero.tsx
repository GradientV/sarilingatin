// the opening band of every inside page: a Tagalog signboard, the English headline,
// a short intro and (optionally) a photo in a capiz-window frame.
import type { ReactNode } from 'react';
import Banderitas from '@/components/brand/Banderitas';
import Photo from '@/components/ui/Photo';
import Signboard from '@/components/ui/Signboard';
import type { PhotoKey } from '@/data/photos';
import { PHOTOS } from '@/data/photos';
import { cn } from '@/lib/cn';

type Props = {
    eyebrow: string;
    title: ReactNode;
    intro: ReactNode;
    photo?: PhotoKey;
    /** a custom visual instead of a photo */
    art?: ReactNode;
    children?: ReactNode;
    tone?: 'cream' | 'red' | 'sea';
};

const TONES = {
    cream: { section: 'bg-gata-100', title: 'text-uling-900', intro: 'text-uling-700', sign: 'gold' as const, weave: 'text-gata-300/70' },
    red: { section: 'bg-pula-700', title: 'text-gata-50', intro: 'text-gata-200', sign: 'gold' as const, weave: 'text-pula-900/45' },
    sea: { section: 'bg-dagat-800', title: 'text-gata-50', intro: 'text-dagat-100', sign: 'gold' as const, weave: 'text-dagat-900/50' }
};

export default function PageHero({ eyebrow, title, intro, photo, art, children, tone = 'cream' }: Props) {
    const style = TONES[tone];

    return (
        <section className={cn('relative overflow-hidden', style.section)}>
            <div aria-hidden="true" className={cn('banig pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 lg:block', style.weave)} />
            <Banderitas className="relative" />
            <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pt-8 pb-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:pt-10 lg:pb-20">
                <div>
                    <Signboard tone={style.sign}>{eyebrow}</Signboard>
                    <h1 className={cn('mt-5 font-display-soft text-[2.75rem] leading-[0.98] font-black tracking-tight sm:text-6xl lg:text-[4.25rem]', style.title)}>
                        {title}
                    </h1>
                    <div className={cn('mt-5 max-w-xl text-lg leading-relaxed sm:text-xl', style.intro)}>{intro}</div>
                    {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
                </div>

                {art && !photo && <div className="relative mx-auto w-full max-w-md">{art}</div>}

                {photo && (
                    <figure className="relative mx-auto w-full max-w-md lg:max-w-none">
                        <div className="capiz rounded-[28px] border-2 border-uling-900 p-3 shadow-sign-lg">
                            <Photo photo={photo} sizes="(min-width: 1024px) 38vw, 90vw" priority className="aspect-[4/3] w-full rounded-[18px] border-2 border-uling-900" />
                        </div>
                        {PHOTOS[photo].caption && (
                            <figcaption className="absolute -bottom-4 left-6 rotate-[-2deg]">
                                <Signboard tone="cream">{PHOTOS[photo].caption}</Signboard>
                            </figcaption>
                        )}
                    </figure>
                )}
            </div>
        </section>
    );
}
