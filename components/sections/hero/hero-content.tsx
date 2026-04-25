"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";
import { EASE_OUT_STRONG, introTransition } from "@/lib/motion";

const ROLE_CYCLE_MS = 3200;

type HeroContentProps = {
	reduceMotion: boolean | null;
};

function HeroRolePill({ reduceMotion }: { reduceMotion: boolean | null }) {
	const roles = profile.roles;
	const [index, setIndex] = useState(0);

	useEffect(() => {
		if (reduceMotion) return;
		const id = window.setInterval(() => {
			setIndex((i) => (i + 1) % roles.length);
		}, ROLE_CYCLE_MS);
		return () => window.clearInterval(id);
	}, [reduceMotion, roles.length]);

	return (
		<span className="mb-5 inline-flex max-w-full min-h-[1.5em] items-center justify-center gap-2 rounded-full border border-secondary/30 bg-white/[0.05] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.25em] text-ink-label backdrop-blur-md sm:mb-8 sm:px-4 sm:py-2 sm:text-[10px] sm:tracking-[0.3em]">
			<span
				className={`h-1.5 w-1.5 shrink-0 rounded-full bg-secondary ${reduceMotion ? "" : "animate-pulse"}`}
			/>
			<span className="inline-grid w-[32ch] shrink-0 place-items-center text-center">
				{reduceMotion ? (
					<span>{roles[0]}</span>
				) : (
					<AnimatePresence mode="wait" initial={false}>
						<motion.span
							key={roles[index]}
							className="col-start-1 row-start-1"
							initial={{ opacity: 0, y: 5 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -5 }}
							transition={{ duration: 0.4, ease: EASE_OUT_STRONG }}
						>
							{roles[index]}
						</motion.span>
					</AnimatePresence>
				)}
			</span>
		</span>
	);
}

export function HeroContent({ reduceMotion }: HeroContentProps) {
	return (
		<div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
			<div className="flex flex-col items-center text-center">
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={introTransition}>
					<HeroRolePill reduceMotion={reduceMotion} />
				</motion.div>

				<motion.h1
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ ...introTransition, delay: 0.08 }}
					className="mb-6 flex w-full max-w-full flex-wrap justify-center gap-x-3 gap-y-1 text-4xl font-black leading-[0.92] tracking-tighter text-white min-[400px]:text-5xl sm:mb-10 sm:gap-x-4 sm:gap-y-0 sm:text-6xl sm:leading-[0.85] md:text-8xl lg:text-[10rem]"
				>
					{profile.name.split(" ").map((word, i) => (
						<span key={i} className={`${i % 2 !== 0 ? "text-white/50" : "text-white"}`}>
							{word}
						</span>
					))}
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ ...introTransition, delay: 0.16 }}
					className="mb-12 max-w-2xl text-balance px-0.5 text-base font-light leading-relaxed tracking-tight text-[#b0b0b0] sm:mb-20 sm:text-xl md:text-2xl"
				>
					{profile.summary}
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ ...introTransition, delay: 0.24 }}
					className="flex w-full max-w-md flex-col items-stretch gap-4 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-6"
				>
					<Button
						size="lg"
						className="group h-14 w-full rounded-full bg-white px-8 text-xs font-black uppercase tracking-[0.2em] text-black transition-all hover:bg-[#EDEDED] sm:h-16 sm:w-auto sm:px-10"
						asChild
					>
						<a href="#projects">
							Explore Projects
							<ArrowRight className="ml-3 h-4 w-4 text-secondary transition-transform group-hover:translate-x-1" />
						</a>
					</Button>

					<Button
						variant="outline"
						size="lg"
						className="group h-14 w-full rounded-full border-secondary/30 bg-white/[0.02] px-8 text-xs font-black uppercase tracking-[0.2em] text-white transition-all hover:border-secondary/50 hover:bg-secondary/10 sm:h-16 sm:w-auto sm:px-10"
						asChild
					>
						<a href="/Toe Aung Myin - Resume.pdf" target="_blank" download>
							<Download className="mr-3 h-4 w-4 text-secondary/90 transition-transform group-hover:-translate-y-1" />
							Resume
						</a>
					</Button>
				</motion.div>
			</div>
		</div>
	);
}
