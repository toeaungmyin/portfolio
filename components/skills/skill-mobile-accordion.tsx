"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { SKILLS_MOBILE_BADGE_HEIGHT } from "@/components/skills/constants";
import type { PortfolioSkillCategory } from "@/lib/portfolio-skills";
import { cn } from "@/lib/utils";

type SkillMobileAccordionProps = {
	categories: PortfolioSkillCategory[];
	className?: string;
};

export function SkillMobileAccordion({ categories, className }: SkillMobileAccordionProps) {
	return (
		<div
			className={cn(
				"overflow-hidden rounded-sm border border-white/8 bg-[#080808]/80 ring-1 ring-white/6",
				className,
			)}
		>
			<p className="sr-only">
				Skill list grouped by domain. Expand each section to see tools and technologies.
			</p>
			<Accordion type="multiple" className="w-full">
				{categories.map((cat) => (
					<AccordionItem key={cat.id} value={cat.id} className="border-white/8">
						<AccordionTrigger className="px-4 py-3 text-white hover:no-underline">
							<span className="font-heading text-sm font-semibold tracking-tight">{cat.label}</span>
							<span className="ml-2 text-xs text-ink-label">({cat.items.length})</span>
						</AccordionTrigger>
						<AccordionContent className="px-3 pb-4 pt-0">
							<ul className="flex flex-wrap gap-2">
								{cat.items.map((item) => (
									<li key={`${cat.id}-${item.name}`} className="list-none">
										<div className="rounded border border-white/[0.08] bg-black/60 px-1.5 py-1">
											<img
												src={item.url}
												alt=""
												width={120}
												height={SKILLS_MOBILE_BADGE_HEIGHT}
												loading="lazy"
												decoding="async"
												className="mx-auto h-8 w-auto max-w-[7.5rem] object-contain"
											/>
											<span className="sr-only">{item.name}</span>
										</div>
									</li>
								))}
							</ul>
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
}
