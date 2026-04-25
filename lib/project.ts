export type ProjectLink = { label: string; href: string };

/** default = 16:9 (landscape); mobile = phone-style portrait, contain fit */
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

export type Project = {
	id: string;
	title: string;
	subtitle: string;
	description: string;
	tags: string[];
	status?: "live" | "shipped" | "archived" | "wip";
	dateRange?: string;
	links?: ProjectLink[];
	problem?: string;
	roleAndScope?: string;
	solution?: string;
	outcomes?: string[];
	challenges?: string;
	learnings?: string[];
	stack?: ProjectStack;
	architectureHighlights?: string[];
	/** Public path from site root, e.g. /projects/ucsm-frwc-2026/cover.jpg (not ./relative) */
	coverImage?: string;
	gallery?: ProjectMedia[];
};
