// the shared frame for the privacy policy, terms and accessibility statement
import type { ReactNode } from 'react';
import Banderitas from '@/components/brand/Banderitas';
import Signboard from '@/components/ui/Signboard';
import { site } from '@/data/site';

type Props = {
    eyebrow: string;
    title: string;
    intro: string;
    updated: string;
    children: ReactNode;
};

export default function LegalPage({ eyebrow, title, intro, updated, children }: Props) {
    return (
        <>
            <section className="relative overflow-hidden border-b-2 border-uling-900 bg-gata-200/70">
                <Banderitas />
                <div className="mx-auto max-w-3xl px-4 pt-6 pb-14 sm:px-6">
                    <Signboard>{eyebrow}</Signboard>
                    <h1 className="mt-5 font-display-soft text-5xl leading-none font-black tracking-tight sm:text-6xl">{title}</h1>
                    <p className="mt-4 text-lg text-uling-700">{intro}</p>
                    <p className="mt-4 text-sm font-semibold text-uling-600">Last updated: {updated}</p>
                </div>
            </section>
            <article className="prose-legal mx-auto px-4 py-14 sm:px-6">
                {children}
                <h2>Contact us</h2>
                <p>
                    {site.legalName}
                    <br />
                    {site.address.street}, {site.address.city}, {site.address.region} {site.address.postalCode}
                    <br />
                    Phone: <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>
                    <br />
                    Fax: {site.fax.display}
                    <br />
                    Facebook:{' '}
                    <a href={site.facebook} target="_blank" rel="noreferrer">
                        {site.facebookHandle}
                    </a>
                </p>
            </article>
        </>
    );
}
