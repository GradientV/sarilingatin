// the little sign-painted labels, like the route boards in a jeepney's windshield.
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

const TONES = {
    gold: 'bg-dilaw-400 text-pula-700',
    cream: 'bg-gata-50 text-pula-700',
    red: 'bg-pula-600 text-dilaw-200',
    ink: 'bg-uling-900 text-dilaw-300',
    sea: 'bg-dagat-700 text-dilaw-200'
} as const;

type Props = {
    children: ReactNode;
    tone?: keyof typeof TONES;
    className?: string;
    as?: 'span' | 'p';
};

export default function Signboard({ children, tone = 'gold', className, as: Tag = 'span' }: Props) {
    return (
        <Tag
            className={cn(
                'inline-flex items-center gap-2 rounded-md px-3 py-1.5 font-sign text-[0.7rem] leading-none tracking-[0.08em] uppercase sign-frame',
                TONES[tone],
                className
            )}
        >
            {children}
        </Tag>
    );
}
