import { SectionIntroStack } from "@/components/common/section-header";
import { SKILLS_CANVAS_HEX, SkillGraphSlot, SkillMobileAccordion } from "@/components/skills";
import { portfolioSkillCategories } from "@/lib/skills";

export default function Skills() {
	return (
		<section
			id="skills"
			className="section-box relative overflow-hidden border-t px-5 py-16 sm:px-6 sm:py-20 md:py-28 lg:py-32"
			style={{ backgroundColor: SKILLS_CANVAS_HEX }}
		>
			<div
				className="pointer-events-none absolute inset-x-0 top-0 z-2 h-px bg-linear-to-r from-transparent via-white/12 to-transparent"
				aria-hidden
			/>

			<div className="relative z-3 mx-auto max-w-6xl">
				<SectionIntroStack
					eyebrow="System Inventory"
					title={
						<>
							Capabilities <span className="text-white/8">/</span>
						</>
					}
					description="How I build — from languages and UI to APIs, data, and shipping. Explore the map on desktop or expand the list on mobile."
					className="mb-0 md:max-w-2xl"
				/>

				<p className="sr-only">
					Interactive skill hierarchy on large screens; an expandable list on small screens.
				</p>

				<p className="mt-6 text-xs text-ink-label lg:hidden">
					Tap a domain below to see tools. On a larger screen, use the interactive map.
				</p>

				<div className="mt-8 hidden lg:block">
					<SkillGraphSlot />
				</div>

				<div className="mt-8 lg:hidden">
					<SkillMobileAccordion categories={portfolioSkillCategories} />
				</div>
			</div>
		</section>
	);
}
