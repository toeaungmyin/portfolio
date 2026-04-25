import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { profile } from "@/lib/data";
import { type Project } from "@/lib/project";
import { getSiteUrl } from "@/lib/site";

type PageProps = {
	params: Promise<{ id: string }>;
};

function SectionTitle({ children }: { children: ReactNode }) {
	return (
		<h2 className="mb-4 text-[11px] font-black uppercase tracking-[0.32em] text-secondary/90">{children}</h2>
	);
}

function Prose({ children, className }: { children: ReactNode; className?: string }) {
	return (
		<div
			className={`text-[16px] sm:text-[17px] font-light leading-[1.75] text-neutral-200 antialiased ${className ?? ""}`}
		>
			{children}
		</div>
	);
}

export function generateStaticParams() {
	return profile.projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { id } = await params;
	const project = profile.projects.find((p) => p.id === id) as Project | undefined;
	if (!project) return { title: "Project" };
	const caseUrl = `${getSiteUrl()}/projects/${id}`;
	const metaDescription = project.description.replace(/\s*\n\s*/g, " ").trim();
	const ogImage =
		project.coverImage && project.coverImage.length > 0
			? [{ url: `${getSiteUrl()}${project.coverImage}` }]
			: undefined;
	return {
		title: project.title,
		description: metaDescription,
		alternates: { canonical: `/projects/${id}` },
		openGraph: {
			title: project.title,
			description: metaDescription,
			type: "article",
			url: caseUrl,
			...(ogImage ? { images: ogImage } : {}),
		},
		twitter: {
			card: "summary_large_image",
			title: project.title,
			description: metaDescription,
			...(ogImage ? { images: [ogImage[0].url] } : {}),
		},
	};
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
	const { id } = await params;
	const project = profile.projects.find((p) => p.id === id) as Project | undefined;
	if (!project) notFound();

	const validLinks = project.links?.filter((l) => l.href && l.href !== "https://" && l.href.length > 8);
	const galleryItems =
		project.gallery?.filter((item) => !project.coverImage || item.src !== project.coverImage) ?? [];
	const hasUi = Boolean(project.coverImage || galleryItems.length > 0);

	return (
		<div className="min-h-dvh bg-black px-5 pb-[max(5rem,env(safe-area-inset-bottom))] pt-[max(6.5rem,env(safe-area-inset-top))] sm:px-6 sm:pb-24 sm:pt-28">
			<div className="mx-auto max-w-3xl">
				<Link
					href="/#projects"
					className="mb-8 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-neutral-300 transition-colors hover:text-secondary sm:mb-12 md:mb-16"
				>
					<ArrowLeft className="w-3 h-3 text-secondary/80" />
					All projects
				</Link>

				<div className="mb-10">
					<h1 className="text-4xl sm:text-5xl font-black tracking-tighter text-white leading-[0.95] mb-4 font-heading text-balance">
						{project.title}
					</h1>
					<p className="text-xs sm:text-sm font-semibold text-neutral-300 uppercase tracking-[0.22em] mb-4 max-w-2xl leading-snug">
						{project.subtitle}
					</p>
					<div className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
						{project.status ? <span>Status: {project.status}</span> : null}
						{project.dateRange ? <span>{project.dateRange}</span> : null}
					</div>
				</div>

				<section className="mb-10">
					<SectionTitle>Summary</SectionTitle>
					<Prose>
						<p className="whitespace-pre-line">{project.description}</p>
					</Prose>
				</section>

				{validLinks && validLinks.length > 0 ? (
					<section className="mb-10">
						<SectionTitle>Links</SectionTitle>
						<div className="flex flex-wrap gap-2">
							{validLinks.map((link) => (
								<a
									key={`${link.label}-${link.href}`}
									href={link.href}
									target="_blank"
									rel="noreferrer"
									className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/[0.06] px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white/95 transition-colors hover:border-white/30 hover:bg-white/10"
								>
									{link.label}
									<ExternalLink className="h-3 w-3 opacity-60" />
								</a>
							))}
						</div>
					</section>
				) : null}

				{hasUi ? (
					<section className="mb-12">
						<SectionTitle>UI</SectionTitle>
						<div className="space-y-8">
							{project.coverImage ? (
								<figure className="space-y-3">
									<div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/14 bg-[#0c0c0c]">
										<Image
											src={project.coverImage}
											alt={`${project.title} — primary screen`}
											fill
											className="object-cover"
											sizes="(max-width: 768px) 100vw, 42rem"
											priority
											unoptimized
										/>
									</div>
									<figcaption className="text-center text-xs text-neutral-400">
										<span className="text-[10px] font-bold uppercase tracking-widest text-neutral-300">
											Primary screen
										</span>
									</figcaption>
								</figure>
							) : null}
							{galleryItems.map((item) => {
								const isMobile = item.layout === "mobile";
								return (
									<figure key={item.src} className="space-y-3">
										<div
											className={
												isMobile
													? "relative mx-auto w-full max-w-[min(100%,320px)] overflow-hidden rounded-2xl border border-white/14 bg-[#0c0c0c] aspect-9/19 sm:max-w-[360px] sm:aspect-9/18.5"
													: "relative aspect-video w-full overflow-hidden rounded-2xl border border-white/14 bg-[#0c0c0c]"
											}
										>
											<Image
												src={item.src}
												alt={item.alt}
												fill
												className={isMobile ? "object-contain" : "object-cover"}
												sizes={
													isMobile
														? "(max-width: 640px) 100vw, 360px"
														: "(max-width: 768px) 100vw, 42rem"
												}
												unoptimized
											/>
										</div>
										<figcaption className="text-center text-xs text-neutral-400">
											<span className="text-[10px] font-bold uppercase tracking-widest text-neutral-300 block mb-1">
												{item.alt}
											</span>
											{item.caption ? (
												<span className="font-light text-neutral-300">{item.caption}</span>
											) : null}
										</figcaption>
									</figure>
								);
							})}
						</div>
					</section>
				) : null}

				{project.stack ? (
					<section className="mb-12">
						<SectionTitle>Tech stack</SectionTitle>
						<div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
							{(
								[
									["Frontend", project.stack.frontend],
									["Backend", project.stack.backend],
									["DevOps", project.stack.devops],
								] as const
							).map(([label, items]) => (
								<div key={label}>
									<p className="mb-3 text-[10px] font-black uppercase tracking-widest text-neutral-200">{label}</p>
									<ul className="space-y-2.5 text-[14px] font-light leading-snug text-neutral-300">
										{items.map((item) => (
											<li key={item} className="border-l border-white/15 pl-3.5">
												{item}
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</section>
				) : null}

				<div className="space-y-12">
					{project.problem ? (
						<section>
							<SectionTitle>Problem</SectionTitle>
							<Prose>
								<p>{project.problem}</p>
							</Prose>
						</section>
					) : null}

					{project.solution ? (
						<section>
							<SectionTitle>Solution</SectionTitle>
							<Prose>
								<p>{project.solution}</p>
							</Prose>
						</section>
					) : null}
				</div>
			</div>
		</div>
	);
}
