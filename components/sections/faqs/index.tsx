"use client";

import { motion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeader } from "@/components/common/section-header";
import { EASE_OUT_STRONG, viewportReveal } from "@/lib/motion";
import { faqItems } from "@/lib/content/faqs.data";

export default function FAQs() {
	return (
		<section id="faqs" className="relative bg-black py-24 sm:py-32 lg:py-40">
			<div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10">
				<SectionHeader
					layout="center"
					eyebrow="Clarity & Detail"
					title="Questions"
				/>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={viewportReveal}
					transition={{ duration: 0.5, ease: EASE_OUT_STRONG }}
					className="mx-auto max-w-3xl"
				>
					<Accordion
						type="single"
						collapsible
						className="w-full rounded-xl border border-white/14 bg-[#0c0c0c]"
					>
						{faqItems.map((item, index) => (
							<AccordionItem
								key={item.q}
								value={`item-${index}`}
								className="border-border px-0"
							>
								<AccordionTrigger className="gap-4 px-6 py-6 sm:px-8 sm:py-7 [&>span:first-child]:min-w-0">
									<span className="flex min-w-0 flex-1 items-start gap-4 sm:gap-5">
										<span className="mt-0.5 shrink-0 font-mono text-[11px] font-medium tabular-nums tracking-widest text-secondary/90">
											{String(index + 1).padStart(2, "0")}
										</span>
										<span className="min-w-0 text-left text-[15px] font-semibold leading-snug tracking-tight text-white transition-colors group-hover/accordion-trigger:text-[#b0b0b0] sm:text-base">
											{item.q}
										</span>
									</span>
								</AccordionTrigger>
								<AccordionContent className="border-t border-white/10 py-4 pl-12 pr-5 text-[15px] font-light leading-relaxed text-[#b0b0b0] data-[state=closed]:border-t-0 sm:py-6 sm:pl-16 sm:pr-8">
									{item.a}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</motion.div>
			</div>
		</section>
	);
}
