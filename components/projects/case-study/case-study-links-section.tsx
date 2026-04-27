import { ExternalLink } from "lucide-react";
import type { ProjectLink } from "@/lib/project";
import { SectionTitle } from "./case-study-typography";

export function CaseStudyLinksSection({ links }: { links: ProjectLink[] }) {
	if (links.length === 0) return null;
	return (
		<section className="mb-10">
			<SectionTitle>Links</SectionTitle>
			<div className="flex flex-wrap gap-2">
				{links.map((link) => (
					<a
						key={`${link.label}-${link.href}`}
						href={link.href}
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/6 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white/95 transition-colors hover:border-white/30 hover:bg-white/10"
					>
						{link.label}
						<ExternalLink className="h-3 w-3 opacity-60" />
					</a>
				))}
			</div>
		</section>
	);
}
