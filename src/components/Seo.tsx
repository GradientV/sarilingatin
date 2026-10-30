// the <head> tags for one page: title, description, the canonical address and what
// a shared link looks like.
//
// every page renders one <Seo /> at its top. React 19 moves <title>, <meta> and <link>
// into <head> by itself, wherever they're rendered, and swaps them on navigation.
// scripts/prerender.ts bakes the same tags into each HTML file at build time, so
// crawlers and link previews that don't run JavaScript see them too.
import { getPage, pageUrl, type PageId } from '@/data/pages';
import { SHARE_IMAGE } from '@/data/photos';
import { SITE_URL, site } from '@/data/site';

type Props = {
    /** leave out for the 404 page */
    pageId?: PageId;
    title?: string;
    description?: string;
    schema?: object;
};

export default function Seo({ pageId, title, description, schema }: Props) {
    if (!pageId) {
        return (
            <>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="robots" content="noindex, follow" />
            </>
        );
    }

    const page = getPage(pageId);
    const pageTitle = title ?? page.title;
    const pageDescription = description ?? page.description;
    const url = pageUrl(pageId);
    const image = `${SITE_URL}${SHARE_IMAGE.path}`;

    return (
        <>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            <link rel="canonical" href={url} />

            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={site.name} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content={String(SHARE_IMAGE.width)} />
            <meta property="og:image:height" content={String(SHARE_IMAGE.height)} />
            <meta property="og:image:alt" content={SHARE_IMAGE.alt} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={pageDescription} />
            <meta name="twitter:image" content={image} />

            {/* "<" is escaped so nothing inside the data can close the script tag early */}
            {schema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
                />
            )}
        </>
    );
}
