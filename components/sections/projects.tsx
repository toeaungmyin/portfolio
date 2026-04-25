"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
import { SectionHeader } from "@/components/common/section-header";
import { CardBody } from "@/components/common/ledger-card";
import { revealTransition, viewportReveal } from "@/lib/motion";
import { cn } from "@/lib/utils";

const MotionLink = motion.create(Link);

const cardClass = cn(
	"group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/14 bg-[#0c0c0c]",
	"outline-offset-4 transition-all duration-500 ease-out",
	"hover:-translate-y-1 hover:border-white/18 hover:shadow-[0_28px_56px_-28px_rgba(0,0,0,0.9)]"
);

export default function Projects() {
	return (
		<section id="projects" className="section-box bg-black py-16 sm:py-24 lg:py-32">
			<div className="mx-auto max-w-6xl px-5 sm:px-6">
				<SectionHeader
					eyebrow="Project Ledger"
					title={
						<>
							Architectural <span className="text-white/45">Showcase</span>
						</>
					}
					description="Deep dives into high-performance applications and robust backend systems I've engineered."
				/>

				<div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-6">
					{profile.projects.map((project, index) => (
						<MotionLink
							key={project.id}
							href={`/projects/${project.id}`}
							initial={{ opacity: 0, y: 28 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={viewportReveal}
							transition={revealTransition(index)}
							className={cardClass}
						>
							<div
								className="pointer-events-none absolute inset-x-6 top-0 z-20 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-70"
								aria-hidden
							/>
							<div
								className="pointer-events-none absolute -left-px bottom-8 top-24 z-20 w-px bg-gradient-to-b from-white/0 via-white/15 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
								aria-hidden
							/>

							<CardBody className="flex flex-1 flex-col !rounded-3xl !p-7 sm:!p-8">
								<div className="mb-8 flex items-start justify-between gap-4">
									<span className="font-mono text-[11px] font-medium tabular-nums tracking-widest text-ink-eyebrow">
										{String(index + 1).padStart(2, "0")}
									</span>
									<span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-ink-label transition-colors duration-300 group-hover:text-white">
										Case
										<ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
									</span>
								</div>

								<div className="flex flex-1 flex-col">
									<p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-ink-label">
										{project.subtitle}
									</p>
									<h3 className="mb-5 text-xl font-black leading-[1.1] tracking-tighter text-white sm:text-2xl">
										{project.title}
									</h3>
									<p className="mb-8 line-clamp-4 text-[15px] font-light leading-relaxed text-[#b0b0b0] sm:line-clamp-5">
										{project.description}
									</p>

									<div className="mt-auto flex flex-wrap gap-2 border-t border-white/14 pt-5">
										{project.tags.map((tag) => (
											<span
												key={tag}
												className="rounded-md border border-white/12 bg-white/[0.03] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-ink-label transition-colors duration-300 group-hover:border-white/18 group-hover:text-white/90"
											>
												{tag}
											</span>
										))}
									</div>
								</div>
							</CardBody>
						</MotionLink>
					))}
				</div>
			</div>
		</section>
	);
}
