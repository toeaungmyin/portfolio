/** Section + graph share the same canvas color */
export const SKILLS_CANVAS_HEX = "#070707" as const;

/** React Flow viewport (also used by the lazy-load placeholder) */
export const skillsGraphViewportClassName =
	"h-[min(78vh,720px)] min-h-[480px] w-full" as const;

export const skillsGraphFitViewOptions = {
	padding: 0.1,
	duration: 0,
	maxZoom: 1.35,
	minZoom: 0.02,
} as const;

/** Shields.io badge row height in the mobile accordion */
export const SKILLS_MOBILE_BADGE_HEIGHT = 36;
