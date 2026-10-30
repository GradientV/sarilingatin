import { Link } from 'react-router';
import LegalPage from '@/components/LegalPage';
import Seo from '@/components/Seo';
import { SITE_URL, site } from '@/data/site';

export default function Privacy() {
    return (
        <>
            <Seo pageId="privacy" />
            <LegalPage eyebrow="Privacy" title="Privacy Policy" intro="How this website handles your information, in plain English." updated="October 29, 2026">
                <p>
                    {site.legalName} (“Sariling Atin,” “we,” “us”) respects your privacy. This policy explains what information the website at{' '}
                    <a href={SITE_URL}>{SITE_URL.replace('https://', '')}</a> collects, why, and the choices you have.
                </p>

                <h2>The short version</h2>
                <ul>
                    <li>There are no accounts, sign-up forms or newsletters on this site.</li>
                    <li>We don’t use advertising trackers, and the site doesn’t set cookies of its own.</li>
                    <li>The catering planner keeps your list on your own device. We never see it unless you read it to us.</li>
                    <li>We don’t sell or rent your personal information to anyone.</li>
                </ul>

                <h2>Who we are</h2>
                <p>
                    Sariling Atin is a family-run Filipino grill and grocery at {site.address.street}, {site.address.city}, {site.address.region} {site.address.postalCode}. You can reach us
                    using the contact details at the bottom of this page.
                </p>

                <h2>What we collect</h2>
                <h3>Information you choose to give us</h3>
                <p>
                    When you call, fax, message us on Facebook or order in the store, we receive whatever you share, such as your name, phone number and order details. We use it to answer
                    you and to prepare your order.
                </p>
                <h3>Your catering list</h3>
                <p>
                    The planner on our <Link to="/catering">catering page</Link> saves your list in your browser’s local storage, on your device, so it’s still there if you reload the
                    page. It is never sent to us or anyone else. Use the “Clear” button, or clear this site’s data in your browser settings, to delete it.
                </p>
                <h3>Website analytics</h3>
                <p>
                    We use Vercel Web Analytics to count page views and see which pages are useful. It doesn’t use cookies, doesn’t follow you to other websites, and reports totals rather
                    than information about individual visitors.
                </p>
                <h3>Server logs</h3>
                <p>
                    Like nearly every website, our hosting provider (Vercel) processes technical information such as your IP address, browser type and the pages requested, to deliver the
                    site and protect it from abuse.
                </p>

                <h2>Other services this site connects to</h2>
                <ul>
                    <li>
                        <strong>Google Maps.</strong> The map on our pages only loads if you click “Show the map here,” and the directions links open Google Maps or Apple Maps. Once you
                        use them, that company’s privacy policy applies.
                    </li>
                    <li>
                        <strong>Facebook.</strong> We link to our Facebook page. What happens there is covered by Facebook’s own privacy policy.
                    </li>
                    <li>
                        <strong>Phone links.</strong> Tapping a phone number opens your phone app. The call is between you and us.
                    </li>
                </ul>

                <h2>In the store: padala and balikbayan boxes</h2>
                <p>
                    When you send money or ship a balikbayan box from our store, the remittance and cargo companies we work with collect the information they need (for example ID and
                    recipient details) under their own privacy policies and legal obligations. This website does not collect that information.
                </p>

                <h2>How we use information</h2>
                <ul>
                    <li>To answer your questions and take, prepare and confirm your orders.</li>
                    <li>To keep this website running, secure and useful.</li>
                    <li>To meet our legal obligations.</li>
                </ul>

                <h2>Who we share it with</h2>
                <p>
                    We don’t sell or rent personal information. We share it only with service providers that help us run the website (hosting and analytics), who may use it only to provide
                    that service, and when the law requires it.
                </p>

                <h2>Your choices</h2>
                <ul>
                    <li>Clear your catering list at any time.</li>
                    <li>Skip the map; the address and directions links work without it.</li>
                    <li>Ask us what information we have from you, or ask us to delete it, using the contact details below.</li>
                </ul>

                <h2>Children</h2>
                <p>This website is meant for a general audience and isn’t directed to children under 13. We don’t knowingly collect personal information from children.</p>

                <h2>Security</h2>
                <p>The site is served over an encrypted (HTTPS) connection. No method of sending or storing information is perfectly secure, but we take reasonable care.</p>

                <h2>Changes to this policy</h2>
                <p>If we change this policy, we’ll update the “Last updated” date at the top of the page.</p>
            </LegalPage>
        </>
    );
}
