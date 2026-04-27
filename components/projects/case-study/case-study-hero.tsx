import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Project } from "@/lib/project";

const HEADER_PADDING = "pt-[max(6.5rem,env(safe-area-inset-top))] sm:pt-28";
const BACK_COVER = "mb-6 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-neutral-300 transition-colors hover:text-secondary";
const BACK_PLAIN =
	"mb-8 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-neutral-300 transition-colors hover:text-secondary sm:mb-12 md:mb-16";

function TitleAndMeta({ project, metaBottom }: { project: Project; metaBottom: boolean }) {
	return (
		<>
			<h1 className="text-4xl sm:text-5xl font-black tracking-tighter text-white leading-[0.95] mb-4 font-heading text-balance">
				{project.title}
			</h1>
			<p className="text-xs sm:text-sm font-semibold text-neutral-300 uppercase tracking-[0.22em] mb-4 max-w-2xl leading-snug">
				{project.subtitle}
			</p>
			<div
				className={`flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-bold uppercase tracking-widest text-neutral-400 ${
					metaBottom ? "mb-6" : ""
				}`}
			>
				{project.status ? <span>Status: {project.status}</span> : null}
				{project.dateRange ? <span>{project.dateRange}</span> : null}
			</div>
		</>
	);
}

/** Full-width header with cover image + title (inside max-w-3xl column) */
export function CaseStudyCoverHeader({ project }: { project: Project }) {
	if (!project.coverImage) return null;
	return (
		<header className="border-b border-white/10 bg-black">
			<div className={`mx-auto max-w-3xl px-5 sm:px-6 ${HEADER_PADDING} pb-10 sm:pb-12`}>
				<Link href="/#projects" className={BACK_COVER}>
					<ArrowLeft className="w-3 h-3 text-secondary/80" />
					All projects
				</Link>
				<div className="relative w-full aspect-video overflow-hidden rounded-2xl border border-white/12 bg-[#0c0c0c] shadow-[0_20px_50px_-24px_rgba(0,0,0,0.85)] ring-1 ring-inset ring-white/5">
					<Image
						src={project.coverImage}
						alt={`${project.title} — cover`}
						fill
						className="object-cover object-center"
						sizes="(max-width: 768px) 100vw, min(48rem, 100vw)"
						priority
						unoptimized
					/>
				</div>
				<div className="mt-8 sm:mt-10">
					<TitleAndMeta project={project} metaBottom={false} />
				</div>
			</div>
		</header>
	);
}

/** Back link + title when there is no cover (render as first child of the main case-study column) */
export function CaseStudyNoCoverHeader({ project }: { project: Project }) {
	return (
		<>
			<Link href="/#projects" className={BACK_PLAIN}>
				<ArrowLeft className="w-3 h-3 text-secondary/80" />
				All projects
			</Link>
			<div className="mb-10">
				<TitleAndMeta project={project} metaBottom />
			</div>
		</>
	);
}

export { HEADER_PADDING as caseStudyHeaderPaddingTop };
