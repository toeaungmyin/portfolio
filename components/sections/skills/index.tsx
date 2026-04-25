import { SectionIntroStack } from "@/components/common/section-header";
import { SkillIconGrid } from "./skill-icon-grid";

export default function Skills() {
	return (
		<section id="skills" className="relative bg-black py-24 sm:py-32 lg:py-40">
			<div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
				<SectionIntroStack
					eyebrow="TECH STACK"
					title="Capabilities"
					titleClassName="text-5xl leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl"
				/>
				<SkillIconGrid />
			</div>
		</section>
	);
}
