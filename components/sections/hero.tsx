"use client";

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EASE_OUT_STRONG } from "@/lib/motion";
import { profile } from "@/lib/data";

const introTransition = { duration: 0.75, ease: EASE_OUT_STRONG };

export default function Hero() {
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
	const reduceMotion = useReducedMotion();
	const { scrollY } = useScroll();

	const y1 = useTransform(scrollY, (y) => {
		if (reduceMotion === true) return 0;
		if (y <= 0) return 0;
		if (y >= 500) return 200;
		return (y / 500) * 200;
	});
	const opacity = useTransform(scrollY, (y) => {
		if (reduceMotion === true) return 1;
		if (y <= 0) return 1;
		if (y >= 300) return 0;
		return 1 - y / 300;
	});

	useEffect(() => {
		if (reduceMotion) return;
		let raf = 0;
		const onMove = (e: MouseEvent) => {
			cancelAnimationFrame(raf);
			raf = requestAnimationFrame(() => setMousePos({ x: e.clientX, y: e.clientY }));
		};
		window.addEventListener("mousemove", onMove, { passive: true });
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("mousemove", onMove);
		};
	}, [reduceMotion]);

	return (
		<section
			id="hero"
			className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-black pt-[max(5rem,env(safe-area-inset-top))] pb-8 sm:pb-10"
		>
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

			<div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-6">
				<div className="flex flex-col items-center text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={introTransition}
					>
						<span className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.25em] text-ink-label backdrop-blur-md sm:mb-8 sm:px-4 sm:py-2 sm:text-[10px] sm:tracking-[0.3em]">
							<span
								className={`h-1.5 w-1.5 rounded-full bg-white ${reduceMotion ? "" : "animate-pulse"}`}
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
						className="mb-10 max-w-2xl text-balance px-0.5 text-base font-light leading-relaxed tracking-tight text-[#b0b0b0] sm:mb-16 sm:text-xl md:text-2xl"
					>
						Specializing in <span className="font-medium text-white">high-transaction</span>, multi-tenant
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
								<ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</a>
						</Button>

						<Button
							variant="outline"
							size="lg"
							className="group h-14 w-full rounded-full border-white/[0.1] bg-white/[0.02] px-8 text-xs font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-white/[0.05] sm:h-16 sm:w-auto sm:px-10"
							asChild
						>
							<a href="/Toe Aung Myin - Resume.pdf" target="_blank" download>
								<Download className="mr-3 h-4 w-4 transition-transform group-hover:-translate-y-1" />
								Resume
							</a>
						</Button>
					</motion.div>
				</div>
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: reduceMotion ? 0 : 0.85, duration: reduceMotion ? 0.2 : 0.6 }}
				className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 [padding-bottom:max(0.5rem,env(safe-area-inset-bottom))] sm:bottom-10 sm:gap-3"
			>
				<span className="text-[9px] font-black uppercase tracking-[0.5em] text-ink-label">Scroll</span>
				{reduceMotion ? (
					<div className="h-10 w-px bg-gradient-to-b from-white/40 to-transparent" />
				) : (
					<motion.div
						animate={{ y: [0, 6, 0] }}
						transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
						className="h-10 w-px bg-gradient-to-b from-white/40 to-transparent"
					/>
				)}
			</motion.div>
		</section>
	);
}
