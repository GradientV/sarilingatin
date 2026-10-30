/**
 * addresses people are likely to type, or that other sites may link to, and the
 * page each one should land on. vercel.json sends the same ones as real (308)
 * redirects in production; App.tsx uses this list so they also work in `npm run dev`.
 */
export const ALIASES: Record<string, string> = {
    '/about': '/our-story',
    '/story': '/our-story',
    '/contact': '/visit',
    '/hours': '/visit',
    '/location': '/visit',
    '/catering-menu': '/catering',
    '/party-trays': '/catering',
    '/remittance': '/padala',
    '/balikbayan-box': '/padala'
};
