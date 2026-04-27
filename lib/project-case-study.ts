import type { Project, ProjectLink, ProjectMedia } from "@/lib/project";

const INVALID_PLACEHOLDER = "https://";

export function getValidProjectLinks(links: Project["links"]): ProjectLink[] {
	if (!links?.length) return [];
	return links.filter((l) => l.href && l.href !== INVALID_PLACEHOLDER && l.href.length > 8);
}

/** Gallery items, excluding a duplicate of the cover image if present. */
export function getCaseStudyGalleryItems(project: Project): ProjectMedia[] {
	const g = project.gallery ?? [];
	if (!project.coverImage) return g;
	return g.filter((item) => item.src !== project.coverImage);
}

export function partitionGalleryByLayout(gallery: ProjectMedia[]): {
	mobile: ProjectMedia[];
	desktop: ProjectMedia[];
} {
	const mobile = gallery.filter((i) => i.layout === "mobile");
	const desktop = gallery.filter((i) => i.layout !== "mobile");
	return { mobile, desktop };
}

export function hasLiveDemoSection(project: Project): boolean {
	const d = project.liveDemo;
	if (!d) return false;
	if (d.ticketImage) return true;
	if (d.adminUsername && d.adminPassword) return true;
	return false;
}
