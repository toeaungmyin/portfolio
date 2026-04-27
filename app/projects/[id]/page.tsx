import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { profile } from "@/lib/data";
import {
	getCaseStudyGalleryItems,
	getValidProjectLinks,
	hasLiveDemoSection,
} from "@/lib/project-case-study";
import type { Project } from "@/lib/project";
import { getSiteUrl } from "@/lib/site";
import {
	CaseStudyCoverHeader,
	CaseStudyNoCoverHeader,
	CaseStudyLinksSection,
	CaseStudyLiveDemoSection,
	CaseStudyTechStackSection,
	CaseStudyUiSection,
	Prose,
	SectionTitle,
	caseStudyHeaderPaddingTop,
} from "@/components/projects/case-study";

type PageProps = {
	params: Promise<{ id: string }>;
};

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

	const validLinks = getValidProjectLinks(project.links);
	const galleryItems = getCaseStudyGalleryItems(project);
	const hasCover = Boolean(project.coverImage);

	return (
		<div className="min-h-dvh bg-black">
			{hasCover ? <CaseStudyCoverHeader project={project} /> : null}

			<div
				className={`mx-auto max-w-3xl px-5 pb-[max(5rem,env(safe-area-inset-bottom))] sm:px-6 sm:pb-24 ${
					hasCover ? "pt-6 sm:pt-8" : caseStudyHeaderPaddingTop
				}`}
			>
				{!hasCover ? <CaseStudyNoCoverHeader project={project} /> : null}

				<section className="mb-10">
					<SectionTitle>Summary</SectionTitle>
					<Prose>
						<p className="whitespace-pre-line">{project.description}</p>
					</Prose>
				</section>

				<CaseStudyLinksSection links={validLinks} />

				{hasLiveDemoSection(project) && project.liveDemo ? (
					<CaseStudyLiveDemoSection liveDemo={project.liveDemo} />
				) : null}

				<CaseStudyUiSection gallery={galleryItems} />

				{project.stack ? <CaseStudyTechStackSection stack={project.stack} /> : null}
			</div>
		</div>
	);
}
