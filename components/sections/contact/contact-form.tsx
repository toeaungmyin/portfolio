"use client";

import { useId, type FormEvent } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardBody, shellClass } from "@/components/common/ledger-card";
import { cn } from "@/lib/utils";
import { profile } from "@/lib/data";
import { EASE_OUT_STRONG, viewportReveal } from "@/lib/motion";

const inputClass =
	"w-full rounded-xl border border-white/14 bg-white/[0.07] px-5 py-3.5 text-sm font-light text-white transition-all placeholder:text-ink-placeholder focus:border-secondary/55 focus:outline-none sm:px-6 sm:py-4";

function handleInquiryMailto(event: FormEvent<HTMLFormElement>) {
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

export function ContactForm() {
	const nameId = useId();
	const emailId = useId();
	const messageId = useId();

	return (
		<motion.div
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={viewportReveal}
			transition={{ delay: 0.08, duration: 0.65, ease: EASE_OUT_STRONG }}
			className={cn(shellClass, "relative lg:col-span-7")}
		>
			<div
				className="pointer-events-none absolute inset-x-6 top-0 z-20 h-px bg-linear-to-r from-transparent via-secondary/40 to-transparent opacity-80"
				aria-hidden
			/>
			<CardBody className="rounded-[2.5rem]! p-7! sm:p-9!">
				<form className="space-y-7" onSubmit={handleInquiryMailto}>
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
						className="group h-14 w-full rounded-full border-2 border-secondary/40 bg-white text-[10px] font-black uppercase tracking-[0.28em] text-black transition-all hover:border-secondary/70 hover:bg-[#EDEDED] sm:h-16"
					>
						Send message
						<ArrowRight className="ml-3 h-4 w-4 text-secondary transition-transform group-hover:translate-x-1.5" />
					</Button>
				</form>
			</CardBody>
		</motion.div>
	);
}
