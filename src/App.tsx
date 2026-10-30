import type { ComponentType } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import Layout from '@/components/layout/Layout';
import { ALIASES } from '@/data/aliases';
import { PAGES, type PageId } from '@/data/pages';
import Accessibility from '@/pages/Accessibility';
import Catering from '@/pages/Catering';
import Grocery from '@/pages/Grocery';
import Home from '@/pages/Home';
import Menu from '@/pages/Menu';
import NotFound from '@/pages/NotFound';
import Padala from '@/pages/Padala';
import Privacy from '@/pages/Privacy';
import Story from '@/pages/Story';
import Terms from '@/pages/Terms';
import Visit from '@/pages/Visit';

/** which component draws each page in src/data/pages.ts */
const PAGE_COMPONENTS: Record<PageId, ComponentType> = {
    home: Home,
    menu: Menu,
    catering: Catering,
    grocery: Grocery,
    padala: Padala,
    story: Story,
    visit: Visit,
    privacy: Privacy,
    terms: Terms,
    accessibility: Accessibility
};

export default function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                {PAGES.map((page) => {
                    const Page = PAGE_COMPONENTS[page.id];
                    return page.path === '/' ? <Route key={page.id} index element={<Page />} /> : <Route key={page.id} path={page.path.slice(1)} element={<Page />} />;
                })}
                {Object.entries(ALIASES).map(([from, to]) => (
                    <Route key={from} path={from.slice(1)} element={<Navigate to={to} replace />} />
                ))}
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}
