import Link from "next/link";
import { Mail, Send } from "lucide-react";
import { profile } from "@/lib/data";
import type { LucideIcon } from "lucide-react";
import { IconGitHub, IconLinkedIn } from "@/components/common/social-icons";
import { withHttps } from "@/lib/utils";

const navLinks = [
	{ label: "Skills", href: "/#skills" },
	{ label: "Experience", href: "/#experience" },
	{ label: "Projects", href: "/#projects" },
	{ label: "FAQs", href: "/#faqs" },
	{ label: "Contact", href: "/#contact" },
] as const;

const socialLinks: {
	label: string;
	href: string;
	Icon: LucideIcon | typeof IconGitHub;
}[] = [
	{
		label: "GitHub",
		href: withHttps(profile.contact.github),
		Icon: IconGitHub,
	},
	{
		label: "LinkedIn",
		href: withHttps(profile.contact.linkedin),
		Icon: IconLinkedIn,
	},
	{
		label: "Telegram",
		href: withHttps(profile.contact.telegram),
		Icon: Send,
	},
	{
		label: "Email",
		href: `mailto:${profile.contact.email}`,
		Icon: Mail,
	},
];

export default function SiteFooter() {
	const year = new Date().getFullYear();
	const displayName = profile.name
		.split(/\s+/)
		.map((w) => w.charAt(0) + w.slice(1).toLowerCase())
		.join(" ");

	return (
		<footer className="border-t border-white/14 bg-black" role="contentinfo">
			<div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 md:py-20">
				<div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
					<div className="lg:col-span-5">
						<Link href="/" className="group mb-6 inline-flex items-center gap-3" aria-label="Go to home">
							<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white transition-opacity group-hover:opacity-90">
								<span className="text-lg font-black leading-none tracking-tighter text-black">T</span>
							</div>
							<span className="text-sm font-bold uppercase tracking-[0.2em] text-white">
								{displayName}
							</span>
						</Link>
						<p className="max-w-sm text-sm font-light leading-relaxed text-[#a3a3a3]">
							<span className="font-medium text-[#b8b8b8]">{profile.role}</span>
							<span className="mx-2 text-white/35">·</span>
							{profile.summary.split(".")[0]}.
						</p>
					</div>

					<div className="lg:col-span-3">
						<p className="mb-4 text-[10px] font-black uppercase tracking-[0.35em] text-ink-eyebrow">
							Navigate
						</p>
						<nav className="flex flex-col gap-2" aria-label="Footer">
							{navLinks.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									className="w-fit text-[11px] font-bold uppercase tracking-[0.2em] text-[#a3a3a3] transition-colors hover:text-white"
								>
									{item.label}
								</Link>
							))}
						</nav>
					</div>

					<div className="sm:col-span-2 lg:col-span-4">
						<p className="mb-4 text-[10px] font-black uppercase tracking-[0.35em] text-ink-eyebrow">
							Connect
						</p>
						<div className="flex flex-wrap gap-2">
							{socialLinks.map(({ label, href, Icon }) => (
								<a
									key={label}
									href={href}
									target={href.startsWith("mailto:") ? undefined : "_blank"}
									rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
									className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/14 bg-white/5 text-[#a3a3a3] transition-all hover:border-white/25 hover:bg-white/8 hover:text-white"
									aria-label={label}
								>
									<Icon className="h-4 w-4" aria-hidden />
								</a>
							))}
						</div>
					</div>
				</div>

				<div className="mt-14 flex flex-col gap-4 border-t border-white/14 pt-8 sm:flex-row sm:items-center sm:justify-between">
					<p className="text-[10px] font-medium uppercase tracking-[0.2em] text-ink-label">
						© {year} {displayName}. All rights reserved.
					</p>
					<p className="text-[10px] font-medium uppercase tracking-[0.15em] text-ink-placeholder">
						Crafted for clarity — systems, interfaces, and long-term maintainability.
					</p>
				</div>
			</div>
		</footer>
	);
}
