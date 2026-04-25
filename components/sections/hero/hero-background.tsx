"use client";

import { motion, type MotionValue } from "motion/react";

type HeroBackgroundProps = {
	mousePos: { x: number; y: number };
	reduceMotion: boolean | null;
	y1: MotionValue<number>;
	opacity: MotionValue<number>;
};

export function HeroBackground({ mousePos, reduceMotion, y1, opacity }: HeroBackgroundProps) {
	return (
		<>
			{!reduceMotion ? (
				<div
					className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-1000"
					style={{
						background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.04), transparent 40%)`,
					}}
				/>
			) : null}

			<motion.div style={{ y: y1, opacity }} className="absolute inset-0 z-0">
				<div className="absolute left-1/2 top-1/4 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[120px]" />
				<div
					className="absolute inset-0 opacity-[0.02]"
					style={{
						backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
						backgroundSize: "40px 40px",
					}}
				/>
			</motion.div>
		</>
	);
}
