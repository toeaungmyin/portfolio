"use client";

import { motion } from "motion/react";
import { Mail, Phone, Send } from "lucide-react";
import { IconGitHub, IconLinkedIn } from "@/components/common/social-icons";
import { withHttps } from "@/lib/utils";
import { profile } from "@/lib/data";
import { EASE_OUT_STRONG, viewportReveal } from "@/lib/motion";
import { formatTelegramHandle } from "./telegram";

export function ContactRail() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={viewportReveal}
			transition={{ duration: 0.65, ease: EASE_OUT_STRONG }}
			className="divide-y divide-white/14 overflow-hidden rounded-xl border border-white/14 bg-[#0c0c0c] lg:col-span-5"
		>
			<a
				href={`mailto:${profile.contact.email}`}
				className="group flex items-center gap-5 px-5 py-6 transition-colors hover:bg-white/2 sm:px-8 sm:py-7"
			>
				<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/14 bg-white/[0.07] text-ink-label transition-colors duration-500 group-hover:border-secondary/45 group-hover:text-secondary">
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
					<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/14 bg-white/[0.07] text-ink-label transition-colors duration-500 group-hover:border-secondary/45 group-hover:text-secondary">
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
				<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/14 bg-white/[0.07] text-ink-label transition-colors duration-500 group-hover:border-secondary/45 group-hover:text-secondary">
					<Send className="h-5 w-5" aria-hidden />
				</div>
				<div className="min-w-0">
					<p className="mb-1 text-[10px] font-black uppercase tracking-[0.35em] text-ink-eyebrow">Telegram</p>
					<p className="truncate text-[15px] font-medium text-white transition-colors group-hover:text-[#b0b0b0] sm:text-base">
						{formatTelegramHandle(profile.contact.telegram)}
					</p>
				</div>
			</a>

			<a
				href={withHttps(profile.contact.linkedin)}
				target="_blank"
				rel="noopener noreferrer"
				className="group flex items-center gap-5 px-5 py-6 transition-colors hover:bg-white/2 sm:px-8 sm:py-7"
			>
				<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/14 bg-white/[0.07] text-ink-label transition-colors duration-500 group-hover:border-secondary/45 group-hover:text-secondary">
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
				<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/14 bg-white/[0.07] text-ink-label transition-colors duration-500 group-hover:border-secondary/45 group-hover:text-secondary">
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
	);
}
