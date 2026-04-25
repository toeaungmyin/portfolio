"use client";

import { HeroBackground } from "./hero-background";
import { HeroContent } from "./hero-content";
import { useHeroAnimations } from "@/hooks/use-hero-animations";

export default function Hero() {
	const { mousePos, reduceMotion, y1, opacity } = useHeroAnimations();

	return (
		<section
			id="hero"
			className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-black pt-[max(5rem,env(safe-area-inset-top))] pb-16 sm:pb-20"
		>
			<HeroBackground mousePos={mousePos} reduceMotion={reduceMotion} y1={y1} opacity={opacity} />
			<HeroContent reduceMotion={reduceMotion} />
		</section>
	);
}
