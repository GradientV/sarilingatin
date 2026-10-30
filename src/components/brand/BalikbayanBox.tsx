// a taped-up balikbayan box, ready to ship home.
import { cn } from '@/lib/cn';

export default function BalikbayanBox({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 220 190" className={cn(className)} aria-hidden="true" focusable="false">
            {/* shadow */}
            <ellipse cx="112" cy="176" rx="92" ry="9" fill="rgb(15 35 80 / .35)" />
            {/* top, front, side */}
            <path d="M22 58 86 36l112 22-64 24Z" fill="#e3b77c" stroke="#211714" strokeWidth="3" strokeLinejoin="round" />
            <path d="M22 58l112 24v86L22 144Z" fill="#cf9a5b" stroke="#211714" strokeWidth="3" strokeLinejoin="round" />
            <path d="m134 82 64-24v84l-64 26Z" fill="#b57f43" stroke="#211714" strokeWidth="3" strokeLinejoin="round" />
            {/* packing tape along the top seam */}
            <path d="m72 69 12 2.6 62-23.4-12-2.6Z" fill="#fcc419" />

            {/* everything on the front face, drawn flat and then slanted to match it.
                the front face becomes the rectangle x 22–134, y 53–139 */}
            <g transform="skewY(12)">
                <rect x="72" y="54" width="12" height="24" fill="#fcc419" />
                <text
                    x="30"
                    y="98"
                    textLength="96"
                    lengthAdjust="spacingAndGlyphs"
                    fontFamily="Bungee, 'Arial Black', sans-serif"
                    fontSize="12"
                    fill="#211714"
                >
                    BALIKBAYAN
                </text>
                <text
                    x="30"
                    y="111"
                    textLength="96"
                    lengthAdjust="spacingAndGlyphs"
                    fontFamily="Bungee, 'Arial Black', sans-serif"
                    fontSize="7.5"
                    fill="#6c0f12"
                >
                    PARA SA PAMILYA
                </text>
                {/* this-side-up arrows */}
                <path d="M34 132v-10m0 0-3.5 4m3.5-4 3.5 4M45 132v-10m0 0-3.5 4m3.5-4 3.5 4" stroke="#211714" strokeWidth="2" strokeLinecap="round" fill="none" opacity=".7" />
                {/* heart */}
                <path d="M113 120.5c-5-6-14-1-9.5 6l9.5 8.5 9.5-8.5c4.5-7-4.5-12-9.5-6Z" fill="#b3191c" stroke="#211714" strokeWidth="2" strokeLinejoin="round" />
            </g>

            {/* shipping label on the side */}
            <g transform="rotate(-21 166 112)">
                <rect x="146" y="98" width="40" height="28" rx="3" fill="#fffcf6" stroke="#211714" strokeWidth="2" />
                <path d="M151 106h28M151 112h22M151 118h26" stroke="#1f4fb4" strokeWidth="2" strokeLinecap="round" />
            </g>
        </svg>
    );
}
