"use client";

import { MotionConfig } from "framer-motion";

/**
 * `reducedMotion="user"` maps OS “reduce motion” to shorter Framer animations.
 * Sections still gate heavy effects explicitly (e.g. Hero parallax, skill graph hover).
 */
export function AppMotionProvider({ children }: { children: React.ReactNode }) {
	return (
		<MotionConfig reducedMotion="user" transition={{ bounce: 0 }}>
			{children}
		</MotionConfig>
	);
}
