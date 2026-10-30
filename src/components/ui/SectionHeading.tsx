import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import Signboard from './Signboard';

type Props = {
    eyebrow?: ReactNode;
    eyebrowTone?: 'gold' | 'cream' | 'red' | 'ink' | 'sea';
    title: ReactNode;
    intro?: ReactNode;
    align?: 'left' | 'center';
    /** for headings on dark or red backgrounds */
    inverted?: boolean;
    id?: string;
    className?: string;
    as?: 'h1' | 'h2';
};

export default function SectionHeading({ eyebrow, eyebrowTone = 'gold', title, intro, align = 'left', inverted = false, id, className, as: Tag = 'h2' }: Props) {
    return (
        <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
            {eyebrow && <Signboard tone={eyebrowTone}>{eyebrow}</Signboard>}
            <Tag
                id={id}
                className={cn(
                    'mt-5 font-display-soft text-[2.4rem] leading-[1.02] font-black tracking-tight sm:text-5xl',
                    inverted ? 'text-gata-50' : 'text-uling-900'
                )}
            >
                {title}
            </Tag>
            {intro && <p className={cn('mt-4 text-lg leading-relaxed', inverted ? 'text-gata-200' : 'text-uling-700')}>{intro}</p>}
        </div>
    );
}

const ACCENT_TONES = {
    red: 'text-pula-600',
    gold: 'text-dilaw-300',
    sea: 'text-dagat-700'
} as const;

/**
 * the italic word inside a headline: Lutong bahay, <Accent>sariling atin</Accent>.
 * red on light backgrounds, tone="gold" on red / dark / blue ones
 */
export function Accent({ children, tone = 'red' }: { children: ReactNode; tone?: keyof typeof ACCENT_TONES }) {
    return <em className={cn('font-display-soft font-black italic', ACCENT_TONES[tone])}>{children}</em>;
}
