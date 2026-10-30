// banderitas: the strings of little triangle flags hung across the street for every
// town fiesta. drawn as a repeating SVG pattern so the flags keep their shape at any width.
import { useId } from 'react';
import { cn } from '@/lib/cn';

const TILE = 180;
const COLORS = ['#b3191c', '#fcc419', '#1f4fb4', '#fffcf6', '#3d8a4f'];

/** the string sags like a real one: y = 3 + 36·t·(1 − t) across the tile */
const FLAGS = [0.1, 0.3, 0.5, 0.7, 0.9].map((t, index) => {
    const x = t * TILE;
    const y = 3 + 36 * t * (1 - t);
    const angle = (Math.atan(0.2 * (1 - 2 * t)) * 180) / Math.PI;
    return { x, y, angle, color: COLORS[index % COLORS.length] };
});

type Props = { className?: string; string?: string };

export default function Banderitas({ className, string = '#6b4f35' }: Props) {
    const id = `banderitas-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;

    return (
        <svg className={cn('block h-11 w-full', className)} aria-hidden="true" focusable="false">
            <defs>
                <pattern id={id} width={TILE} height="44" patternUnits="userSpaceOnUse">
                    <path d={`M0 3 Q${TILE / 2} 21 ${TILE} 3`} fill="none" stroke={string} strokeWidth="1.5" />
                    {FLAGS.map((flag) => (
                        <g key={flag.x} transform={`rotate(${flag.angle.toFixed(2)} ${flag.x} ${flag.y})`}>
                            <path
                                d={`M${flag.x - 11} ${flag.y} L${flag.x + 11} ${flag.y} L${flag.x} ${flag.y + 22} Z`}
                                fill={flag.color}
                                stroke="rgb(33 23 20 / .25)"
                                strokeWidth="1"
                            />
                        </g>
                    ))}
                    <circle cx="0" cy="3" r="2" fill={string} />
                    <circle cx={TILE} cy="3" r="2" fill={string} />
                </pattern>
            </defs>
            <rect width="100%" height="44" fill={`url(#${id})`} />
        </svg>
    );
}
