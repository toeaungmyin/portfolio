"use client";

import React from "react";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import { Briefcase, GraduationCap } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { revealTransition, viewportReveal } from "@/lib/motion";

export default function Experience() {
	const timeline = [
		...profile.experience.map((exp) => ({ ...exp, type: "work" as const })),
		...profile.education.map((edu) => ({ ...edu, type: "education" as const })),
	];

	return (
		<section id="experience" className="section-box border-t bg-black py-32">
			<div className="mx-auto max-w-6xl px-4">
				<SectionHeader
					eyebrow="Chronological Record"
					title={
						<>
							Career Path <span className="text-white/10">/</span>
						</>
					}
					description="A strictly chronological view of my professional and academic background."
				/>

				<div className="space-y-0">
					{timeline.map((item, index) => (
						<motion.div
							key={item.id || index}
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={viewportReveal}
							transition={revealTransition(index, { duration: 0.6 })}
							className="group relative grid grid-cols-1 gap-8 rounded-none border-t px-4 py-14 transition-all duration-500 last:border-b hover:bg-white/[0.015] md:grid-cols-12 -mx-4"
						>
							<div className="flex flex-col gap-3 md:col-span-3">
								<div className="flex items-center gap-2">
									<span
										className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md ${
											item.type === "work" ? "bg-white/5 text-white/40" : "bg-white/5 text-white/25"
										}`}
									>
										{item.type === "work" ? (
											<Briefcase className="h-2.5 w-2.5" />
										) : (
											<GraduationCap className="h-2.5 w-2.5" />
										)}
									</span>
									<span className="text-[9px] font-black uppercase tracking-[0.3em] text-ink-label transition-colors duration-500 group-hover:text-[#6a6a6a]">
										{item.type === "work" ? "Work" : "Education"}
									</span>
								</div>
								<span className="text-sm font-bold uppercase tracking-widest text-ink-label transition-colors duration-500 group-hover:text-white">
									{item.duration}
								</span>
							</div>

							<div className="md:col-span-4">
								<h3 className="mb-2 text-2xl font-black tracking-tighter text-white transition-transform duration-500 group-hover:translate-x-1">
									{item.title}
								</h3>
								<p className="text-xs font-bold uppercase tracking-[0.2em] text-[#444444] transition-colors duration-500 group-hover:text-[#777777]">
									{item.organization}
								</p>
								{item.location ? (
									<p className="mt-3 text-[10px] uppercase tracking-widest text-ink-eyebrow transition-colors duration-500 group-hover:text-ink-label">
										{item.location}
									</p>
								) : null}
							</div>

							<div className="md:col-span-5">
								<ul className="space-y-3">
									{item.description.map((desc, i) => (
										<li
											key={i}
											className="flex items-start text-sm font-light leading-relaxed text-[#555555] transition-colors duration-500 group-hover:text-[#999999]"
										>
											<span className="mr-4 mt-2 block h-[3px] w-[3px] shrink-0 rounded-full bg-ink-bullet transition-colors duration-500 group-hover:bg-white/40" />
											<span>{desc}</span>
										</li>
									))}
								</ul>
							</div>

							<div className="absolute bottom-0 left-0 top-0 w-px bg-white/0 transition-colors duration-500 group-hover:bg-white/10" />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
