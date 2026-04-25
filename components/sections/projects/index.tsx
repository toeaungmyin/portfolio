"use client";

import { SectionHeader } from "@/components/common/section-header";
import { profile } from "@/lib/data";
import { ProjectCard } from "./project-card";

export default function Projects() {
	return (
		<section id="projects" className="relative bg-black py-24 sm:py-32 lg:py-40">
			<div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
				<SectionHeader
					eyebrow="Project Ledger"
					title={
						<>
							Architectural <span className="text-secondary/80">Showcase</span>
						</>
					}
				/>

				<div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-3 md:gap-8">
					{profile.projects.map((project, index) => (
						<ProjectCard key={project.id} project={project} index={index} />
					))}
				</div>
			</div>
		</section>
	);
}
