"use client";

import { motion } from "motion/react";
import { Briefcase, GraduationCap } from "lucide-react";
import { revealTransition, viewportReveal } from "@/lib/motion";
import type { ProfileTimelineItem } from "@/lib/experience-timeline";

type ExperienceTimelineItemProps = {
	item: ProfileTimelineItem;
	index: number;
};

export function ExperienceTimelineItem({ item, index }: ExperienceTimelineItemProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 16 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={viewportReveal}
			transition={revealTransition(index, { duration: 0.6 })}
			className="group relative -mx-5 grid grid-cols-1 gap-6 rounded-none border-t px-6 py-12 transition-all duration-500 last:border-b hover:bg-white/1.5 sm:-mx-6 sm:gap-8 sm:px-6 sm:py-14 md:grid-cols-12 md:py-16"
		>
			<div className="flex flex-col gap-3 md:col-span-3">
				<div className="flex items-center gap-2.5">
					<span
						className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ring-1 ring-secondary/25 sm:h-9 sm:w-9 ${
							item.type === "work" ? "bg-white/5 text-secondary/90" : "bg-white/5 text-secondary/50"
						}`}
					>
						{item.type === "work" ? (
							<Briefcase className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2} />
						) : (
							<GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2} />
						)}
					</span>
					<span className="text-[9px] font-black uppercase tracking-[0.3em] text-ink-label transition-colors duration-500 group-hover:text-[#9a9a9a]">
						{item.type === "work" ? "Work" : "Education"}
					</span>
				</div>
				<span className="text-sm font-bold uppercase tracking-widest text-ink-label transition-colors duration-500 group-hover:text-white">
					{item.duration}
				</span>
			</div>

			<div className="md:col-span-4">
				<h3 className="mb-2 text-xl font-black tracking-tighter text-white transition-transform duration-500 group-hover:translate-x-1 sm:text-2xl">
					{item.title}
				</h3>
				<p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7a7a7a] transition-colors duration-500 group-hover:text-[#a3a3a3]">
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
							className="flex items-start text-sm font-light leading-relaxed text-[#a3a3a3] transition-colors duration-500 group-hover:text-[#c4c4c4]"
						>
							<span className="mr-4 mt-1.5 block h-[6px] w-[6px] shrink-0 rounded-full bg-secondary/40 transition-colors duration-500 group-hover:bg-secondary" />
							<span>{desc}</span>
						</li>
					))}
				</ul>
			</div>

			<div className="absolute bottom-0 left-0 top-0 w-px bg-white/0 transition-all duration-500 group-hover:w-1 group-hover:bg-secondary/50" />
		</motion.div>
	);
}
