"use client";

import { SectionHeader } from "@/components/common/section-header";
import { getProfileTimeline } from "@/lib/experience-timeline";
import { ExperienceTimelineItem } from "./experience-timeline-item";

export default function Experience() {
	const timeline = getProfileTimeline();

	return (
		<section id="experience" className="relative bg-black py-24 sm:py-32 lg:py-40">
			<div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
				<SectionHeader
					eyebrow="Chronological Record"
					title="Career Path"
				/>

				<div className="space-y-0">
					{timeline.map((item, index) => (
						<ExperienceTimelineItem
							key={item.id ?? String(index)}
							item={item}
							index={index}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
