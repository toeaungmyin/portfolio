import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { profile } from "@/lib/data";
import { getSiteUrl } from "@/lib/site";

type PageProps = {
	params: Promise<{ id: string }>;
};

export function generateStaticParams() {
	return profile.projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { id } = await params;
	const project = profile.projects.find((p) => p.id === id);
	if (!project) return { title: "Project" };
	const caseUrl = `${getSiteUrl()}/projects/${id}`;
	return {
		title: project.title,
		description: project.description,
		alternates: { canonical: `/projects/${id}` },
		openGraph: {
			title: project.title,
			description: project.description,
			type: "article",
			url: caseUrl,
		},
		twitter: {
			card: "summary_large_image",
			title: project.title,
			description: project.description,
		},
	};
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
	const { id } = await params;
	const project = profile.projects.find((p) => p.id === id);
	if (!project) notFound();

	return (
		<div className="min-h-screen pt-28 pb-24 px-4">
			<div className="max-w-3xl mx-auto">
				<Link
					href="/#projects"
					className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-ink-label hover:text-white transition-colors mb-16"
				>
					<ArrowLeft className="w-3 h-3" />
					All projects
				</Link>

				<div className="mb-10">
					<div className="mb-6 flex items-center gap-4">
						<span className="w-12 h-px bg-white/20" />
						<span className="text-[10px] font-black text-ink-eyebrow uppercase tracking-[0.5em]">Case study</span>
					</div>
					<h1 className="text-4xl sm:text-5xl font-black tracking-tighter text-white leading-[0.95] mb-4">
						{project.title}
					</h1>
					<p className="text-[10px] font-bold text-ink-label uppercase tracking-[0.3em] mb-10">{project.subtitle}</p>
					<p className="text-lg text-[#888888] font-light leading-relaxed">{project.description}</p>
				</div>

				<div className="grid grid-cols-2 gap-4 mb-12">
					{project.metrics.map((metric) => (
						<div
							key={metric.label}
							className="rounded-2xl border border-white/10 bg-[#080808] p-5"
						>
							<p className="text-[10px] uppercase tracking-widest text-ink-eyebrow font-black mb-2">{metric.label}</p>
							<p className="text-xl text-white font-bold tracking-tight">{metric.value}</p>
						</div>
					))}
				</div>

				<div className="flex flex-wrap gap-2">
					{project.tags.map((tag) => (
						<span
							key={tag}
							className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-ink-label"
						>
							{tag}
						</span>
					))}
				</div>

				<p className="mt-16 text-sm text-ink-label font-light leading-relaxed">
					Extended write-up and architecture diagrams can be added here when you&apos;re ready — this page stays aligned
					with your homepage project ledger.
				</p>
			</div>
		</div>
	);
}
