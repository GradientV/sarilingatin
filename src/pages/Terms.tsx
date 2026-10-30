import { Link } from 'react-router';
import LegalPage from '@/components/LegalPage';
import Seo from '@/components/Seo';
import { site } from '@/data/site';

export default function Terms() {
    return (
        <>
            <Seo pageId="terms" />
            <LegalPage eyebrow="Terms" title="Terms of Use" intro="The basics of using our website and catering planner. They’re short, promise." updated="October 29, 2026">
                <p>
                    Welcome to the website of {site.legalName} (“Sariling Atin,” “we,” “us”). By using this site, you agree to these terms. Our{' '}
                    <Link to="/privacy">Privacy Policy</Link> explains how we handle information.
                </p>

                <h2>About this site</h2>
                <p>
                    This website shares information about our store in Elmhurst, Queens: our menu, catering, grocery, padala services, hours and location. We work to keep it accurate, but
                    details can change. When in doubt, call us at <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>.
                </p>

                <h2>Menu, prices and availability</h2>
                <ul>
                    <li>Our turo-turo counter changes through the day, so not every dish on the website is available at every visit.</li>
                    <li>Catering prices come from our current catering menu and are subject to change without prior notice. Prices don’t include sales tax.</li>
                    <li>Lechon is sold at market price, quoted when you order.</li>
                </ul>

                <h2>The catering planner is an estimate, not an order</h2>
                <p>
                    The planner on our <Link to="/catering">catering page</Link> helps you put a list together and estimate a subtotal. Using it doesn’t place an order, reserve a date or
                    create a price quote. Orders are placed by phone, fax or in person, and are final only once we confirm availability, pickup time and the total.
                </p>

                <h2>Allergies and dietary needs</h2>
                <p>
                    Our kitchen cooks with pork, shellfish, fish, peanuts, soy, wheat, eggs, dairy and coconut, among other ingredients, and dishes are prepared in a shared kitchen. We can’t
                    guarantee that any item is free of a particular allergen. Please tell us about allergies or dietary needs before you order.
                </p>

                <h2>Padala and balikbayan box services</h2>
                <p>
                    Money remittance and balikbayan box shipping are provided in our store together with third-party remittance and cargo companies, and are subject to their terms, rates,
                    fees and policies. Descriptions on this website are for general information only.
                </p>

                <h2>Using the site</h2>
                <p>Please use this website only for lawful purposes, and don’t try to disrupt it, access it in unauthorized ways, or misuse its features.</p>

                <h2>Our name, photos and content</h2>
                <p>
                    The Sariling Atin name, logo, photos, text and design on this site belong to Sariling Atin or are used with permission, and may not be copied or reused without our
                    permission. Names of news outlets mentioned on the site belong to their owners.
                </p>

                <h2>Links to other sites</h2>
                <p>We link to other websites, such as Google Maps, Facebook and news articles. We aren’t responsible for their content or practices.</p>

                <h2>No warranties</h2>
                <p>This website is provided “as is.” We don’t guarantee it will always be available, error-free, or complete and current.</p>

                <h2>Limitation of liability</h2>
                <p>To the fullest extent allowed by law, Sariling Atin is not liable for damages arising from your use of, or inability to use, this website.</p>

                <h2>Governing law</h2>
                <p>These terms are governed by the laws of the State of New York, without regard to its conflict-of-law rules.</p>

                <h2>Changes to these terms</h2>
                <p>We may update these terms from time to time. The “Last updated” date above shows the latest version, and using the site after a change means you accept it.</p>
            </LegalPage>
        </>
    );
}
