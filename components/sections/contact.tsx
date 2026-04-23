"use client";

import React, { useId, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/section-header";
import { CardBody, shellClass } from "@/components/shared/ledger-card";
import { IconGitHub, IconLinkedIn } from "@/components/shared/social-icons";
import { cn, withHttps } from "@/lib/utils";
import { profile } from "@/lib/data";
import { EASE_OUT_STRONG, viewportReveal } from "@/lib/motion";

function telegramHandle(raw: string) {
	const path = raw.replace(/^https?:\/\//i, "").replace(/^t\.me\//i, "").split("/")[0] ?? "";
	return path.startsWith("@") ? path : `@${path}`;
}

export default function Contact() {
	const nameId = useId();
	const emailId = useId();
	const messageId = useId();

	const inputClass =
		"w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm font-light text-white transition-all placeholder:text-ink-placeholder focus:border-white/25 focus:outline-none sm:px-6 sm:py-4";

	function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const form = event.currentTarget;
		const data = new FormData(form);
		const name = String(data.get("name") ?? "").trim();
		const email = String(data.get("email") ?? "").trim();
		const message = String(data.get("message") ?? "").trim();
		if (!name || !email || !message) return;

		const subject = `Portfolio inquiry from ${name}`;
		const body = message;
		const mailto = `mailto:${profile.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
		window.location.href = mailto;
	}

	return (
		<section id="contact" className="section-box relative border-t bg-black py-32">
			<div className="mx-auto max-w-6xl px-4">
				<SectionHeader
					eyebrow="Final Interaction"
					title={
						<>
							Start the <span className="text-[#111111]">conversation</span>
						</>
					}
					description="Currently seeking opportunities to apply backend architectural skills to ambitious teams. Reach out via email, phone, socials, or the form."
				/>

				<div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={viewportReveal}
						transition={{ duration: 0.65, ease: EASE_OUT_STRONG }}
						className="divide-y divide-white/10 overflow-hidden rounded-xl border border-white/10 bg-[#080808] lg:col-span-5"
					>
						<a
							href={`mailto:${profile.contact.email}`}
							className="group flex items-center gap-5 px-5 py-6 transition-colors hover:bg-white/2 sm:px-8 sm:py-7"
						>
							<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-ink-label transition-colors duration-500 group-hover:border-white/18 group-hover:text-white">
								<Mail className="h-5 w-5" aria-hidden />
							</div>
							<div className="min-w-0">
								<p className="mb-1 text-[10px] font-black uppercase tracking-[0.35em] text-ink-eyebrow">Email</p>
								<p className="truncate text-[15px] font-medium text-white transition-colors group-hover:text-[#b0b0b0] sm:text-base">
									{profile.contact.email}
								</p>
							</div>
						</a>

						<div className="group px-5 py-6 transition-colors hover:bg-white/2 sm:px-8 sm:py-7">
							<div className="flex items-start gap-5">
								<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-ink-label transition-colors duration-500 group-hover:border-white/18 group-hover:text-white">
									<Phone className="h-5 w-5" aria-hidden />
								</div>
								<div className="min-w-0 flex-1">
									<p className="mb-2 text-[10px] font-black uppercase tracking-[0.35em] text-ink-eyebrow">Phone</p>
									<div className="flex flex-col gap-1">
										{profile.contact.phones.map((phone, idx) => (
											<a
												key={idx}
												href={`tel:${phone.replace(/\s+/g, "")}`}
												className="w-fit text-[15px] font-medium text-white transition-colors hover:text-[#b0b0b0] sm:text-base"
											>
												{phone}
											</a>
										))}
									</div>
								</div>
							</div>
						</div>

						<a
							href={withHttps(profile.contact.telegram)}
							target="_blank"
							rel="noopener noreferrer"
							className="group flex items-center gap-5 px-5 py-6 transition-colors hover:bg-white/2 sm:px-8 sm:py-7"
						>
							<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-ink-label transition-colors duration-500 group-hover:border-white/18 group-hover:text-white">
								<Send className="h-5 w-5" aria-hidden />
							</div>
							<div className="min-w-0">
								<p className="mb-1 text-[10px] font-black uppercase tracking-[0.35em] text-ink-eyebrow">Telegram</p>
								<p className="truncate text-[15px] font-medium text-white transition-colors group-hover:text-[#b0b0b0] sm:text-base">
									{telegramHandle(profile.contact.telegram)}
								</p>
							</div>
						</a>

						<a
							href={withHttps(profile.contact.linkedin)}
							target="_blank"
							rel="noopener noreferrer"
							className="group flex items-center gap-5 px-5 py-6 transition-colors hover:bg-white/2 sm:px-8 sm:py-7"
						>
							<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-ink-label transition-colors duration-500 group-hover:border-white/18 group-hover:text-white">
								<IconLinkedIn className="h-5 w-5" aria-hidden />
							</div>
							<div className="min-w-0">
								<p className="mb-1 text-[10px] font-black uppercase tracking-[0.35em] text-ink-eyebrow">LinkedIn</p>
								<p className="truncate text-[15px] font-medium text-white transition-colors group-hover:text-[#b0b0b0] sm:text-base">
									{profile.contact.linkedin}
								</p>
							</div>
						</a>

						<a
							href={withHttps(profile.contact.github)}
							target="_blank"
							rel="noopener noreferrer"
							className="group flex items-center gap-5 px-5 py-6 transition-colors hover:bg-white/2 sm:px-8 sm:py-7"
						>
							<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-ink-label transition-colors duration-500 group-hover:border-white/18 group-hover:text-white">
								<IconGitHub className="h-5 w-5" aria-hidden />
							</div>
							<div className="min-w-0">
								<p className="mb-1 text-[10px] font-black uppercase tracking-[0.35em] text-ink-eyebrow">GitHub</p>
								<p className="truncate text-[15px] font-medium text-white transition-colors group-hover:text-[#b0b0b0] sm:text-base">
									{profile.contact.github}
								</p>
							</div>
						</a>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={viewportReveal}
						transition={{ delay: 0.08, duration: 0.65, ease: EASE_OUT_STRONG }}
						className={cn(shellClass, "relative lg:col-span-7")}
					>
						<div
							className="pointer-events-none absolute inset-x-6 top-0 z-20 h-px bg-linear-to-r from-transparent via-white/25 to-transparent opacity-70"
							aria-hidden
						/>
						<CardBody className="rounded-[2.5rem]! p-7! sm:p-9!">
							<form className="space-y-7" onSubmit={handleFormSubmit}>
								<div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
									<div className="space-y-2.5">
										<label htmlFor={nameId} className="ml-0.5 text-[10px] font-black uppercase tracking-[0.35em] text-ink-label">
											Name
										</label>
										<input
											id={nameId}
											name="name"
											type="text"
											autoComplete="name"
											placeholder="Full name"
											required
											className={inputClass}
										/>
									</div>
									<div className="space-y-2.5">
										<label htmlFor={emailId} className="ml-0.5 text-[10px] font-black uppercase tracking-[0.35em] text-ink-label">
											Email
										</label>
										<input
											id={emailId}
											name="email"
											type="email"
											autoComplete="email"
											placeholder="you@company.com"
											required
											className={inputClass}
										/>
									</div>
								</div>

								<div className="space-y-2.5">
									<label htmlFor={messageId} className="ml-0.5 text-[10px] font-black uppercase tracking-[0.35em] text-ink-label">
										Message
									</label>
									<textarea
										id={messageId}
										name="message"
										placeholder="Project brief, role, or how I can help…"
										required
										className={cn(inputClass, "min-h-[200px] resize-none py-4 sm:min-h-[220px]")}
									/>
								</div>

								<Button
									type="submit"
									className="group h-14 w-full rounded-full border border-transparent bg-white text-[10px] font-black uppercase tracking-[0.28em] text-black transition-all hover:bg-[#EDEDED] sm:h-16"
								>
									Send message
									<ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1.5" />
								</Button>
							</form>
						</CardBody>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
