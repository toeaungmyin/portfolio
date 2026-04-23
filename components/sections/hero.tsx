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
			className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black"
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

			<div className="relative z-10 mx-auto w-full max-w-6xl px-4">
				<div className="flex flex-col items-center text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={introTransition}
					>
						<span className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-ink-label backdrop-blur-md">
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
						className="mb-10 text-6xl font-black leading-[0.85] tracking-tighter text-white sm:text-8xl lg:text-[10rem]"
					>
						{profile.name.split(" ").map((word, i) => (
							<span
								key={i}
								className={`mr-6 inline-block last:mr-0 ${i % 2 !== 0 ? "text-white/30" : "text-white"}`}
							>
								{word}
							</span>
						))}
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ ...introTransition, delay: 0.16 }}
						className="mb-16 max-w-2xl text-balance text-xl font-light leading-relaxed tracking-tight text-[#888888] sm:text-2xl"
					>
						Specializing in <span className="font-medium text-white">high-transaction</span>, multi-tenant
						architectures. Designing robust systems for global scalability.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ ...introTransition, delay: 0.24 }}
						className="flex flex-col items-center gap-6 sm:flex-row"
					>
						<Button
							size="lg"
							className="group h-16 rounded-full bg-white px-10 text-xs font-black uppercase tracking-[0.2em] text-black transition-all hover:bg-[#EDEDED]"
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
							className="group h-16 rounded-full border-white/[0.1] bg-white/[0.02] px-10 text-xs font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-white/[0.05]"
							asChild
						>
							<a href="/resume.pdf" download>
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
				className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
			>
				<span className="text-[9px] font-black uppercase tracking-[0.5em] text-ink-label">Scroll</span>
				{reduceMotion ? (
					<div className="h-10 w-px bg-gradient-to-b from-white/25 to-transparent" />
				) : (
					<motion.div
						animate={{ y: [0, 6, 0] }}
						transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
						className="h-10 w-px bg-gradient-to-b from-white/25 to-transparent"
					/>
				)}
			</motion.div>
		</section>
	);
}
