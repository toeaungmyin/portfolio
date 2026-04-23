import type { Transition } from "framer-motion";

/** Shared easing (matches existing sections) */
export const EASE_OUT_STRONG: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * Scroll-triggered reveals: run once, fire slightly before full entry to feel snappier.
 * `amount` avoids firing when only a sliver is visible.
 */
export const viewportReveal = {
	once: true,
	margin: "-48px 0px",
	amount: 0.2,
} as const;

export function revealTransition(
	index: number,
	opts?: { stagger?: number; duration?: number; delayBase?: number },
): Transition {
	const { stagger = 0.08, duration = 0.65, delayBase = 0 } = opts ?? {};
	return {
		delay: delayBase + index * stagger,
		duration,
		ease: EASE_OUT_STRONG,
	};
}

export function revealTransitionShort(index: number): Transition {
	return revealTransition(index, { stagger: 0.1, duration: 0.55 });
}
