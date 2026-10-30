import { usePlanner } from './PlannerContext';

/** reads list changes aloud for screen-reader users ("Added to your list: …") */
export default function PlannerAnnouncer() {
    const { announcement } = usePlanner();
    return (
        <output aria-live="polite" className="sr-only">
            {announcement}
        </output>
    );
}
