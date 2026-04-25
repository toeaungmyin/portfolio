"use client";

import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";
import { introTransition } from "@/lib/motion";

type HeroContentProps = {
	reduceMotion: boolean | null;
};

export function HeroContent({ reduceMotion }: HeroContentProps) {
	return (
		<div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
			<div className="flex flex-col items-center text-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={introTransition}
				>
					<span className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-secondary/30 bg-white/[0.05] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.25em] text-ink-label backdrop-blur-md sm:mb-8 sm:px-4 sm:py-2 sm:text-[10px] sm:tracking-[0.3em]">
						<span
							className={`h-1.5 w-1.5 rounded-full bg-secondary ${reduceMotion ? "" : "animate-pulse"}`}
						/>
						{profile.role}
					</span>
				</motion.div>

				<motion.h1
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ ...introTransition, delay: 0.08 }}
					className="mb-6 flex w-full max-w-full flex-wrap justify-center gap-x-3 gap-y-1 text-4xl font-black leading-[0.92] tracking-tighter text-white min-[400px]:text-5xl sm:mb-10 sm:gap-x-4 sm:gap-y-0 sm:text-6xl sm:leading-[0.85] md:text-8xl lg:text-[10rem]"
				>
					{profile.name.split(" ").map((word, i) => (
						<span
							key={i}
							className={`${i % 2 !== 0 ? "text-white/50" : "text-white"}`}
						>
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
					Specializing in <span className="font-medium text-secondary">high-transaction</span>, multi-tenant
					architectures. Designing robust systems for global scalability.
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
							Explore Systems
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
