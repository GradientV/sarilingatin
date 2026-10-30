import LegalPage from '@/components/LegalPage';
import Seo from '@/components/Seo';
import { site } from '@/data/site';

export default function Accessibility() {
    return (
        <>
            <Seo pageId="accessibility" />
            <LegalPage eyebrow="Accessibility" title="Accessibility" intro="Everyone is welcome at Sariling Atin, online and in person." updated="October 29, 2026">
                <p>We want our website and our store to work for as many people as possible, including people with disabilities.</p>

                <h2>Our goal</h2>
                <p>
                    We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at Level AA as a practical standard. Accessibility is ongoing work, and we keep improving the site over
                    time.
                </p>

                <h2>What we’ve done on this website</h2>
                <ul>
                    <li>Clear, readable text with strong color contrast, and pages that hold up when zoomed to 200%.</li>
                    <li>Descriptive alternative text for photos; purely decorative graphics are hidden from screen readers.</li>
                    <li>Full keyboard navigation, a “Skip to content” link and visible focus outlines.</li>
                    <li>Proper headings, landmarks and labels so screen readers can make sense of every page.</li>
                    <li>A catering planner with labeled controls that announces each change to your list.</li>
                    <li>Animations that stop when your device is set to reduce motion.</li>
                    <li>A layout that works on phones, tablets and computers.</li>
                </ul>

                <h2>In the store</h2>
                <p>
                    We want every guest to feel at home at {site.address.street}. If something would make your visit easier, just let our staff know, or call ahead at{' '}
                    <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a> and we’ll do our best to help. You can also order by phone and pick up.
                </p>

                <h2>Known limitations</h2>
                <ul>
                    <li>The embedded Google Map comes from an outside service and may not be fully accessible. The address, directions links and transit details are always available as text.</li>
                    <li>Links to Facebook and news sites lead to pages we don’t control.</li>
                </ul>

                <h2>Tell us what to fix</h2>
                <p>
                    If anything on this website gets in your way, or you need information in another format, please call us or send a message on Facebook. Tell us the page and what
                    happened, and we’ll work to fix it and get you what you need.
                </p>
            </LegalPage>
        </>
    );
}
