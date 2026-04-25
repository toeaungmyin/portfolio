import Link from "next/link";
import { Mail, Send } from "lucide-react";
import { profile } from "@/lib/data";
import type { LucideIcon } from "lucide-react";
import { IconGitHub, IconLinkedIn } from "@/components/common/social-icons";
import { withHttps } from "@/lib/utils";
import { Hatch } from "../common/hatch";

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
		<footer className="relative border-t border-white/14 bg-black" role="contentinfo">
			<div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 md:py-24 lg:px-10">
				<div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
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
							<span className="font-medium text-secondary/90">{profile.roles[0]}</span>
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
									className="w-fit text-[11px] font-bold uppercase tracking-[0.2em] text-[#a3a3a3] transition-colors hover:text-secondary"
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
									className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/14 bg-white/5 text-[#a3a3a3] transition-all hover:border-secondary/40 hover:bg-secondary/10 hover:text-secondary"
									aria-label={label}
								>
									<Icon className="h-4 w-4" aria-hidden />
								</a>
							))}
						</div>
					</div>
				</div>

				<div className="mt-16 flex flex-col gap-4 border-t border-white/14 pt-10 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
					<p className="text-[10px] font-medium uppercase tracking-[0.2em] text-ink-label">
						© {year} {displayName}. All rights reserved.
					</p>
				</div>
			</div>

			<div className="relative isolate mt-2 min-h-48 w-full overflow-hidden sm:min-h-64 md:min-h-72">
				{/* z-0: name sits under the hatch pattern; diagonals are transparent so type reads through */}
				<p className="absolute inset-0 z-0 flex items-center justify-center px-2 text-center text-[clamp(1.75rem,12.5vw,8.5rem)] font-black uppercase leading-[0.9] tracking-[0.06em] sm:px-4">
					<span className="max-w-full bg-linear-to-b from-white/1 to-white/20 bg-clip-text whitespace-normal text-transparent wrap-anywhere sm:whitespace-nowrap">
						{displayName}
					</span>
				</p>
				<Hatch
					variant="horizontal"
					className="absolute inset-0 z-10 h-full min-h-full w-full border-0 border-y border-white/10 bg-transparent"
				/>
			</div>
		</footer>
	);
}
