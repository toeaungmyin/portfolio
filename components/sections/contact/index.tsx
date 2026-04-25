"use client";

import { SectionHeader } from "@/components/common/section-header";
import { ContactForm } from "./contact-form";
import { ContactRail } from "./contact-rail";

export default function Contact() {
	return (
		<section id="contact" className="relative bg-black py-24 sm:py-32 lg:py-40">
			<div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
				<SectionHeader
					eyebrow="Final Interaction"
					title={
						<>
							Start the <span className="text-secondary/85">conversation</span>
						</>
					}
				/>

				<div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
					<ContactRail />
					<ContactForm />
				</div>
			</div>
		</section>
	);
}
