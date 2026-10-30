// how the counter works, in three words: turo (point), pili (pick), kain (eat).
import { Pointer, Soup, Utensils } from 'lucide-react';
import { cn } from '@/lib/cn';

const STEPS = [
    {
        word: 'Turo',
        meaning: 'Point',
        icon: Pointer,
        body: 'Walk up to the counter and point at what looks good. The trays change through the day, so there’s always something new.'
    },
    {
        word: 'Pili',
        meaning: 'Pick',
        icon: Soup,
        body: 'Make it a combo: one, two or three ulam (dishes) with rice or pancit. Or take any dish home by the container.'
    },
    {
        word: 'Kain!',
        meaning: 'Eat',
        icon: Utensils,
        body: 'Grab a seat in the dining area or take it to go. Pick up something sweet from the grocery on your way out.'
    }
];

type Props = { inverted?: boolean; className?: string };

export default function TuroTuroSteps({ inverted = false, className }: Props) {
    return (
        <ol className={cn('grid gap-5 md:grid-cols-3', className)}>
            {STEPS.map((step, index) => (
                <li
                    key={step.word}
                    className={cn(
                        'relative rounded-2xl border-2 border-uling-900 p-6 shadow-sign',
                        inverted ? 'bg-uling-800 text-gata-100' : 'bg-gata-50 text-uling-800'
                    )}
                >
                    <div className="flex items-center justify-between">
                        <span className="font-sign text-5xl leading-none text-pula-600" aria-hidden="true">
                            {index + 1}
                        </span>
                        <step.icon className={cn('h-8 w-8', inverted ? 'text-dilaw-300' : 'text-pula-600')} aria-hidden="true" />
                    </div>
                    <h3 className={cn('mt-4 font-display-soft text-3xl font-black italic', inverted ? 'text-gata-50' : 'text-uling-900')}>
                        {step.word} <span className={cn('font-sans text-base font-semibold not-italic', inverted ? 'text-dilaw-300' : 'text-pula-700')}>({step.meaning})</span>
                    </h3>
                    <p className="mt-2 leading-relaxed">{step.body}</p>
                </li>
            ))}
        </ol>
    );
}
