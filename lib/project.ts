/**
 * Project content for the home grid + `/projects/[id]` case study.
 * Not every project fills every field: omit optional blocks and the page skips them.
 */
export type ProjectLink = { label: string; href: string };

/** default = 16:9 (landscape); mobile = 2× grid + portrait frame */
export type ProjectMediaLayout = "default" | "mobile";

export type ProjectMedia = {
	src: string;
	alt: string;
	caption?: string;
	layout?: ProjectMediaLayout;
};

export type ProjectStack = {
	frontend: string[];
	backend: string[];
	devops: string[];
};

/**
 * Public demo / test credentials (optional). Omitted for projects without a live URL or demo.
 */
export type ProjectLiveDemo = {
	/** One short paragraph under the “Live demo” title */
	intro?: string;
	ticketImage?: string;
	ticketImageAlt?: string;
	/** e.g. “Scan the ticket to vote” */
	ticketHint?: string;
	adminUsername?: string;
	adminPassword?: string;
	/** Shown above the admin credential list */
	adminHint?: string;
};

export type Project = {
	id: string;
	title: string;
	subtitle: string;
	/** Long-form narrative; replaces separate problem/solution */
	description: string;
	tags: string[];
	status?: "live" | "shipped" | "archived" | "wip";
	dateRange?: string;
	links?: ProjectLink[];
	stack?: ProjectStack;
	/** Site-root path, e.g. /projects/…/cover.jpg */
	coverImage?: string;
	liveDemo?: ProjectLiveDemo;
	gallery?: ProjectMedia[];
};
