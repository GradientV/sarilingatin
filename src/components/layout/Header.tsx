import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { MapPin, Menu, Phone, X } from 'lucide-react';
import Logo from '@/components/brand/Logo';
import StoreStatus from '@/components/StoreStatus';
import { ButtonAnchor, ButtonLink } from '@/components/ui/Button';
import FacebookIcon from '@/components/ui/FacebookIcon';
import { nav, site } from '@/data/site';
import { cn } from '@/lib/cn';

function TopBar() {
    return (
        <div className="bg-uling-900 text-[0.78rem] text-gata-200 sm:text-[0.82rem]">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
                <Link to="/visit" className="whitespace-nowrap hover:text-dilaw-300">
                    <StoreStatus />
                </Link>
                <a
                    href={site.links.directions}
                    target="_blank"
                    rel="noreferrer"
                    className="hidden items-center gap-1.5 whitespace-nowrap hover:text-dilaw-300 lg:inline-flex"
                >
                    <MapPin className="h-3.5 w-3.5 text-dilaw-400" aria-hidden="true" />
                    {site.address.street}, {site.address.city}, Queens
                </a>
                <div className="flex items-center gap-4">
                    <a href={`tel:${site.phone.tel}`} className="hidden items-center gap-1.5 font-semibold whitespace-nowrap hover:text-dilaw-300 sm:inline-flex">
                        <Phone className="h-3.5 w-3.5 text-dilaw-400" aria-hidden="true" />
                        {site.phone.display}
                    </a>
                    <a href={site.facebook} target="_blank" rel="noreferrer" className="hover:text-dilaw-300" aria-label="Sariling Atin on Facebook">
                        <FacebookIcon className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </div>
    );
}

const desktopLink = ({ isActive }: { isActive: boolean }) =>
    cn(
        'relative rounded-lg px-3 py-2 text-[0.95rem] font-bold transition-colors',
        isActive
            ? 'text-pula-700 after:absolute after:inset-x-3 after:-bottom-0.5 after:h-[3px] after:rounded-full after:bg-dilaw-400'
            : 'text-uling-800 hover:bg-gata-200 hover:text-pula-700'
    );

/**
 * the full-screen menu on phones and tablets. a native modal <dialog> keeps keyboard
 * focus inside it, closes on Escape, and hides the page behind it from screen readers
 */
function MobileMenu({ onClose }: { onClose: () => void }) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const closeRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;
        if (!dialog.open) dialog.showModal();
        closeRef.current?.focus();
        const previous = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        // no dialog.close() here: unmounting removes the dialog anyway, and calling close()
        // would fire onClose (React's development double-mount would shut the menu instantly)
        return () => {
            document.body.style.overflow = previous;
        };
    }, []);

    return (
        <dialog
            ref={dialogRef}
            aria-label="Site menu"
            onClose={onClose}
            className="m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto bg-pula-700 p-0 text-gata-50 backdrop:bg-transparent xl:hidden"
        >
            <div className="relative flex min-h-full flex-col">
                <div aria-hidden="true" className="banig pointer-events-none absolute inset-0 text-pula-900/40" />
                <div className="relative flex items-center justify-between px-4 py-3 sm:px-6">
                    <Link to="/" onClick={onClose} aria-label="Sariling Atin home">
                        <Logo tone="dark" compact />
                    </Link>
                    <button
                        ref={closeRef}
                        type="button"
                        onClick={onClose}
                        aria-label="Close menu"
                        className="grid h-11 w-11 place-items-center rounded-xl border-2 border-uling-900 bg-dilaw-400 text-uling-900 shadow-sign"
                    >
                        <X className="h-5 w-5" aria-hidden="true" />
                    </button>
                </div>

                <nav aria-label="Main" className="relative mt-4 flex-1 px-4 sm:px-6">
                    <ul className="divide-y divide-pula-900/50 border-y border-pula-900/50">
                        <li>
                            <NavLink to="/" end onClick={onClose} className="flex items-baseline justify-between gap-4 py-4">
                                <span className="font-display-soft text-3xl font-black">Home</span>
                                <span className="font-sign text-[0.65rem] tracking-widest text-dilaw-300 uppercase">Tuloy po kayo</span>
                            </NavLink>
                        </li>
                        {nav.map((item) => (
                            <li key={item.to}>
                                <NavLink to={item.to} onClick={onClose} className="flex items-baseline justify-between gap-4 py-4">
                                    {({ isActive }) => (
                                        <>
                                            <span className={cn('font-display-soft text-3xl font-black', isActive && 'text-dilaw-300')}>{item.label}</span>
                                            <span className="font-sign text-[0.65rem] tracking-widest text-dilaw-300 uppercase">{item.tagalog}</span>
                                        </>
                                    )}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="relative grid gap-3 px-4 py-6 sm:px-6">
                    <ButtonAnchor href={`tel:${site.phone.tel}`} variant="gold" size="lg">
                        <Phone className="h-4 w-4" aria-hidden="true" /> Call {site.phone.display}
                    </ButtonAnchor>
                    <p className="text-center text-sm text-gata-200">
                        {site.address.street}, {site.address.city}, NY {site.address.postalCode}
                    </p>
                </div>
            </div>
        </dialog>
    );
}

export default function Header() {
    const { pathname } = useLocation();
    // the menu remembers which page it was opened on, so moving to another
    // page (a link, or the back button) closes it by itself
    const [openOn, setOpenOn] = useState<string | null>(null);
    const open = openOn === pathname;

    return (
        <>
            <TopBar />
            <header className="sticky top-0 z-40 border-b-2 border-uling-900 bg-gata-100/95 backdrop-blur supports-[backdrop-filter]:bg-gata-100/85">
                <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6">
                    <Link to="/" aria-label="Sariling Atin home" className="shrink-0">
                        <Logo compact />
                    </Link>

                    <nav aria-label="Main" className="hidden xl:block">
                        <ul className="flex items-center gap-0.5">
                            {nav.map((item) => (
                                <li key={item.to}>
                                    <NavLink to={item.to} className={desktopLink}>
                                        {item.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="flex items-center gap-2.5">
                        {/* the wrappers decide when each button shows; the buttons themselves are always inline-flex */}
                        <span className="hidden md:block">
                            <ButtonAnchor href={`tel:${site.phone.tel}`} variant="cream" size="sm" className="whitespace-nowrap">
                                <Phone className="h-4 w-4" aria-hidden="true" />
                                {site.phone.display}
                            </ButtonAnchor>
                        </span>
                        <span className="hidden sm:block">
                            <ButtonLink to="/catering" size="sm" className="whitespace-nowrap">
                                Order trays
                            </ButtonLink>
                        </span>
                        <a
                            href={`tel:${site.phone.tel}`}
                            aria-label={`Call ${site.phone.display}`}
                            className="grid h-11 w-11 place-items-center rounded-xl border-2 border-uling-900 bg-gata-50 shadow-sign md:hidden"
                        >
                            <Phone className="h-5 w-5" aria-hidden="true" />
                        </a>
                        <button
                            type="button"
                            onClick={() => setOpenOn(pathname)}
                            aria-label="Open menu"
                            aria-expanded={open}
                            className="grid h-11 w-11 place-items-center rounded-xl border-2 border-uling-900 bg-dilaw-400 text-uling-900 shadow-sign xl:hidden"
                        >
                            <Menu className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>
                </div>
                {/* a thin woven strip under the header, red and gold like the awning */}
                <div aria-hidden="true" className="relative h-1.5 bg-pula-600">
                    <div className="banig absolute inset-0 text-dilaw-400/70" />
                </div>
            </header>
            {open && <MobileMenu onClose={() => setOpenOn(null)} />}
        </>
    );
}
