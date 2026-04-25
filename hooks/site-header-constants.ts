export type SiteNavItem = {
	label: string;
	href: string;
	anchorId?: string;
	pagePrefix?: string;
};

/** Document order must match the home page section stack. */
export const HOME_SECTION_IDS = ["hero", "skills", "experience", "projects", "faqs", "contact"] as const;

export function getSiteNavItems(): SiteNavItem[] {
	return [
		{ label: "Skills", href: "/#skills", anchorId: "skills" },
		{ label: "Experience", href: "/#experience", anchorId: "experience" },
		{ label: "Projects", href: "/#projects", anchorId: "projects", pagePrefix: "/projects" },
	];
}
