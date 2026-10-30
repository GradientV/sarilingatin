// sampaguita (Arabian jasmine), the national flower of the Philippines and the
// flower on Sariling Atin's own catering menu. drawn here as the brand mark.
type Props = { className?: string; title?: string };

const OUTER = [0, 72, 144, 216, 288];
const INNER = [36, 108, 180, 252, 324];

export default function Sampaguita({ className, title }: Props) {
    return (
        <svg viewBox="0 0 64 64" className={className} role={title ? 'img' : undefined} aria-hidden={title ? undefined : true} aria-label={title}>
            {/* leaves */}
            <path d="M31 37c-11-3-21 2-26 17 12 2 22-3 26-17Z" fill="#2f6f3e" />
            <path d="M33 37c11-3 21 2 26 17-12 2-22-3-26-17Z" fill="#3d8a4f" />
            <path d="M30 38c-7 4-14 9-21 15M34 38c7 4 14 9 21 15" stroke="#1d4a29" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity=".55" />
            {/* outer petals */}
            {OUTER.map((angle) => (
                <ellipse key={angle} cx="32" cy="14.5" rx="6.6" ry="10.5" transform={`rotate(${angle} 32 26)`} fill="#fffdf7" stroke="#d8c6a1" strokeWidth=".9" />
            ))}
            {/* inner petals */}
            {INNER.map((angle) => (
                <ellipse key={angle} cx="32" cy="19" rx="4.4" ry="7" transform={`rotate(${angle} 32 26)`} fill="#ffffff" stroke="#e5d7b8" strokeWidth=".7" />
            ))}
            <circle cx="32" cy="26" r="3.4" fill="#f2d675" stroke="#d9b54a" strokeWidth=".6" />
        </svg>
    );
}
