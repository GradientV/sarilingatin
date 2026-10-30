// chunky, sign-painted buttons: a thick ink border and a hard shadow that
// presses in when you click. ButtonLink for pages on this site, ButtonAnchor
// for phone numbers and other sites.
import type { ComponentProps, ReactNode } from 'react';
import { Link } from 'react-router';
import { cn } from '@/lib/cn';

const VARIANTS = {
    red: 'bg-pula-600 text-white hover:bg-pula-700',
    gold: 'bg-dilaw-400 text-uling-900 hover:bg-dilaw-300',
    cream: 'bg-gata-50 text-uling-900 hover:bg-white',
    ink: 'bg-uling-900 text-gata-50 hover:bg-uling-800'
} as const;

const SIZES = {
    sm: 'px-3.5 py-2 text-sm',
    md: 'px-5 py-3 text-[0.95rem]',
    lg: 'px-6 py-3.5 text-base sm:text-[1.05rem]'
} as const;

export type ButtonStyle = { variant?: keyof typeof VARIANTS; size?: keyof typeof SIZES; className?: string };

export function buttonClasses({ variant = 'red', size = 'md', className }: ButtonStyle = {}) {
    return cn(
        'inline-flex items-center justify-center gap-2 rounded-xl border-2 border-uling-900 font-bold leading-tight shadow-sign',
        'transition-[transform,box-shadow,background-color] duration-150 hover:-translate-x-px hover:-translate-y-px hover:shadow-sign-lg',
        'active:translate-x-[2px] active:translate-y-[2px] active:shadow-none disabled:pointer-events-none disabled:opacity-50',
        VARIANTS[variant],
        SIZES[size],
        className
    );
}

type LinkProps = ButtonStyle & { to: string; children: ReactNode } & Omit<ComponentProps<typeof Link>, 'to' | 'className' | 'children'>;

export function ButtonLink({ variant, size, className, children, ...rest }: LinkProps) {
    return (
        <Link className={buttonClasses({ variant, size, className })} {...rest}>
            {children}
        </Link>
    );
}

type AnchorProps = ButtonStyle & ComponentProps<'a'>;

export function ButtonAnchor({ variant, size, className, children, ...rest }: AnchorProps) {
    return (
        <a className={buttonClasses({ variant, size, className })} {...rest}>
            {children}
        </a>
    );
}
