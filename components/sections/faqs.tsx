"use client";

import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeader } from "@/components/common/section-header";
import { EASE_OUT_STRONG, viewportReveal } from "@/lib/motion";

const items = [
	{
		q: "What is your preferred backend stack?",
		a: "I specialize in Node.js (TypeScript) and Laravel (PHP). For high-performance, real-time systems, I prefer a Node.js ecosystem with PostgreSQL and Prisma ORM. For robust, structured enterprise-grade logic, Laravel is my go-to choice.",
	},
	{
		q: "How do you approach Software Quality Assurance?",
		a: "I follow a backend-first quality approach: strict TypeScript typing, comprehensive API documentation (Swagger/Postman), and automated workflows for CI/CD. I prioritize system reliability and data isolation, especially in multi-tenant architectures.",
	},
	{
		q: "Are you available for full-time roles?",
		a: "Yes. While my coursework at the University of Computer Studies, Mandalay, finishes in March 2026, I am available for full-time roles starting then. I am currently seeking internship or junior/mid-level opportunities to apply my 4 years of freelance and professional experience.",
	},
	{
		q: "What experience do you have with multi-tenant systems?",
		a: "During my time at SolaraTek, I designed a complex multi-tenant architecture from the ground up, ensuring complete data isolation between clients while maintaining a scalable, shared infrastructure for peak efficiency.",
	},
];

export default function FAQs() {
	return (
		<section id="faqs" className="section-box border-t bg-black py-16 sm:py-24 lg:py-32">
			<div className="mx-auto max-w-4xl px-5 sm:px-6">
				<SectionHeader
					layout="center"
					eyebrow="Clarity & Detail"
					title={
						<>
							Questions <span className="text-white/25">/</span>
						</>
					}
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
						{items.map((item, index) => (
							<AccordionItem
								key={item.q}
								value={`item-${index}`}
								className="border-border px-0"
							>
								<AccordionTrigger className="gap-4 px-6 py-6 sm:px-8 sm:py-7 [&>span:first-child]:min-w-0">
									<span className="flex min-w-0 flex-1 items-start gap-4 sm:gap-5">
										<span className="mt-0.5 shrink-0 font-mono text-[11px] font-medium tabular-nums tracking-widest text-ink-eyebrow">
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
