import { Link } from 'react-router';
import { MapPin, Phone, Printer } from 'lucide-react';
import Banderitas from '@/components/brand/Banderitas';
import Logo from '@/components/brand/Logo';
import FacebookIcon from '@/components/ui/FacebookIcon';
import { nav, remittanceHours, site } from '@/data/site';
import { formatRange, hoursSummary } from '@/lib/hours';

const YEAR = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="relative mt-24 bg-uling-900 text-gata-200">
            <Banderitas className="absolute inset-x-0 -top-1" string="#e2c690" />

            <div className="mx-auto grid max-w-7xl gap-12 px-4 pt-20 pb-12 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_0.8fr_0.8fr]">
                <div>
                    <Link to="/" aria-label="Sariling Atin home" className="inline-block">
                        <Logo tone="dark" />
                    </Link>
                    <p className="mt-5 max-w-sm font-display-soft text-2xl leading-snug font-bold text-gata-50 italic">Lutong bahay, sariling atin.</p>
                    <p className="mt-1 max-w-sm text-sm text-uling-300">Home cooking that’s our very own. Family-run on Queens Blvd since 2014.</p>
                    <a
                        href={site.facebook}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 inline-flex items-center gap-2 rounded-xl border-2 border-gata-200/30 px-3.5 py-2 text-sm font-semibold hover:border-dilaw-400 hover:text-dilaw-300"
                    >
                        <FacebookIcon className="h-4 w-4" /> Follow us on Facebook
                    </a>
                </div>

                <div>
                    <h2 className="font-sign text-xs tracking-[0.14em] text-dilaw-300 uppercase">Bisitahin kami</h2>
                    <ul className="mt-4 space-y-3 text-[0.95rem]">
                        <li>
                            <a href={site.links.directions} target="_blank" rel="noreferrer" className="flex gap-2.5 hover:text-dilaw-300">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-dilaw-400" aria-hidden="true" />
                                <span>
                                    {site.address.street}
                                    <br />
                                    {site.address.city}, {site.address.region} {site.address.postalCode}
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href={`tel:${site.phone.tel}`} className="flex gap-2.5 font-semibold hover:text-dilaw-300">
                                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-dilaw-400" aria-hidden="true" />
                                {site.phone.display}
                            </a>
                        </li>
                        <li className="flex gap-2.5">
                            <Printer className="mt-0.5 h-4 w-4 shrink-0 text-dilaw-400" aria-hidden="true" />
                            <span>Fax {site.fax.display}</span>
                        </li>
                        <li className="pt-1 text-sm text-uling-300">
                            Store: {hoursSummary}
                            <br />
                            Padala counter: daily {formatRange(remittanceHours)}
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="font-sign text-xs tracking-[0.14em] text-dilaw-300 uppercase">Explore</h2>
                    <ul className="mt-4 space-y-2.5 text-[0.95rem]">
                        {nav.map((item) => (
                            <li key={item.to}>
                                <Link to={item.to} className="hover:text-dilaw-300">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="font-sign text-xs tracking-[0.14em] text-dilaw-300 uppercase">Legal</h2>
                    <ul className="mt-4 space-y-2.5 text-[0.95rem]">
                        <li>
                            <Link to="/privacy" className="hover:text-dilaw-300">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link to="/terms" className="hover:text-dilaw-300">
                                Terms of Use
                            </Link>
                        </li>
                        <li>
                            <Link to="/accessibility" className="hover:text-dilaw-300">
                                Accessibility
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gata-200/15">
                <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-uling-300 sm:px-6 md:flex-row md:items-center md:justify-between">
                    <p>
                        © <span suppressHydrationWarning>{YEAR}</span> {site.legalName} · Elmhurst, Queens
                    </p>
                    <p className="font-display-soft text-base text-gata-100 italic">Maraming salamat po!</p>
                    <p>
                        Designed &amp; built by{' '}
                        <a href="https://gradientv.com" target="_blank" rel="noopener" className="font-semibold text-gata-100 underline decoration-dilaw-400/60 underline-offset-2 hover:text-dilaw-300">
                            GradientV
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
