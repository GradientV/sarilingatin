// the map only loads when someone asks for it. until then nothing is requested
// from Google: faster pages, and no third-party cookies for people who don't need a map.
import { useState } from 'react';
import { ArrowUpRight, MapPin, Navigation } from 'lucide-react';
import { buttonClasses } from '@/components/ui/Button';
import { site } from '@/data/site';
import { cn } from '@/lib/cn';

export default function MapFacade({ className }: { className?: string }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className={cn('relative overflow-hidden rounded-3xl border-2 border-uling-900 shadow-sign-lg', className)}>
            {loaded ? (
                <iframe
                    title="Map of Sariling Atin at 89-12 Queens Blvd, Elmhurst"
                    src={site.links.mapEmbed}
                    className="h-full min-h-80 w-full"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                />
            ) : (
                <div className="capiz flex h-full min-h-80 flex-col items-center justify-center gap-5 p-8 text-center">
                    <span className="grid h-16 w-16 place-items-center rounded-full border-2 border-uling-900 bg-pula-600 text-gata-50 shadow-sign">
                        <MapPin className="h-8 w-8" aria-hidden="true" />
                    </span>
                    <div>
                        <p className="font-display-soft text-2xl font-black">{site.address.street}</p>
                        <p className="text-uling-700">
                            {site.address.city}, {site.address.region} {site.address.postalCode} · across from Queens Center
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        <a href={site.links.directions} target="_blank" rel="noreferrer" className={buttonClasses({ variant: 'red', size: 'sm' })}>
                            <Navigation className="h-4 w-4" aria-hidden="true" /> Get directions
                        </a>
                        <button type="button" onClick={() => setLoaded(true)} className={buttonClasses({ variant: 'cream', size: 'sm' })}>
                            Show the map here
                        </button>
                    </div>
                    <p className="max-w-xs text-xs text-uling-600">
                        Showing the map loads Google Maps, which has its own{' '}
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="underline underline-offset-2">
                            privacy policy
                            <ArrowUpRight className="inline h-3 w-3" aria-hidden="true" />
                        </a>
                        .
                    </p>
                </div>
            )}
        </div>
    );
}
