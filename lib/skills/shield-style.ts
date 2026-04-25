/**
 * Parse shields.io static badge URLs for local "chip" rendering: brand fill, label contrast,
 * and optional Simple Icons asset (from `logo` / `logoColor`) via `cdn.simpleicons.org`.
 */

function relativeLuminance(hex: string): number {
	const r = parseInt(hex.slice(1, 3), 16) / 255;
	const g = parseInt(hex.slice(3, 5), 16) / 255;
	const b = parseInt(hex.slice(5, 7), 16) / 255;
	const lin = (c: number) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
	const R = lin(r);
	const G = lin(g);
	const B = lin(b);
	return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}

/** Shields `logo=` names that differ from Simple Icons slugs */
const SHIELD_LOGO_TO_SIMPLE_ICONS: Record<string, string> = {
	"next.js": "nextdotjs",
	"tailwind-css": "tailwindcss",
	"node.js": "nodedotjs",
	"socket.io": "socketdotio",
	"amazon-web-services": "amazonaws",
	/** W3C CSS3 shield uses `css3`; Simple Icons merged the mark under `css` */
	css3: "css",
};

function shieldsLogoToSimpleIconsSlug(raw: string): string {
	const key = decodeURIComponent(raw).toLowerCase().trim();
	if (SHIELD_LOGO_TO_SIMPLE_ICONS[key]) return SHIELD_LOGO_TO_SIMPLE_ICONS[key];
	const singleSpaced = key.replace(/\s+/g, " ");
	if (SHIELD_LOGO_TO_SIMPLE_ICONS[singleSpaced]) return SHIELD_LOGO_TO_SIMPLE_ICONS[singleSpaced];
	return key.replace(/\s+/g, "");
}

function labelColorFromParams(background: string, logoColorRaw: string | null): string {
	const logoColor = logoColorRaw?.toLowerCase().replace("#", "") ?? "";
	if (logoColor === "black" || logoColor === "000000" || logoColor === "000") {
		return "rgba(10,10,10,0.96)";
	}
	if (logoColor === "white" || logoColor === "ffffff" || logoColor === "fff") {
		return "rgba(250,250,250,0.98)";
	}
	return relativeLuminance(background) > 0.55 ? "rgba(10,10,10,0.96)" : "rgba(250,250,250,0.98)";
}

/** Hex without `#`, for `cdn.simpleicons.org/{slug}/{iconColor}` */
function iconColorHexFromParams(background: string, logoColorRaw: string | null): string {
	const raw = logoColorRaw?.replace("#", "").toLowerCase() ?? "";
	if (/^[0-9a-f]{6}$/.test(raw)) return raw;
	if (raw === "black" || raw === "000" || raw === "000000") return "000000";
	if (raw === "white" || raw === "fff" || raw === "ffffff") return "ffffff";
	return relativeLuminance(background) > 0.55 ? "000000" : "ffffff";
}

export type ParsedShieldsBadgeStyle = {
	background: string;
	labelColor: string;
	icon?: { slug: string; colorHex: string };
};

export function simpleIconsCdnUrl(slug: string, colorHex6: string): string {
	return `https://cdn.simpleicons.org/${encodeURIComponent(slug)}/${encodeURIComponent(colorHex6)}`;
}

/**
 * Simple Icons CDN dropped some brands (e.g. AWS family); serve multicolor SVGs from Devicon instead.
 * `colorHex6` is ignored for these (original artwork).
 */
const DEVICON_BY_SLUG: Record<string, string> = {
	/** Devicon never shipped `amazonwebservices-original.svg` (only wordmark variants) */
	amazonaws:
		"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
};

export function skillBrandIconUrl(slug: string, colorHex6: string): string {
	const dev = DEVICON_BY_SLUG[slug];
	if (dev) return dev;
	return simpleIconsCdnUrl(slug, colorHex6);
}

export function parseShieldsIoBadgeStyle(url: string): ParsedShieldsBadgeStyle | null {
	try {
		const u = new URL(url);
		const rawPath = u.pathname.match(/\/badge\/(.+)/)?.[1];
		if (!rawPath) return null;
		const decoded = decodeURIComponent(rawPath.split("?")[0] ?? rawPath);
		const hexMatch = decoded.match(/-([0-9A-Fa-f]{6})$/);
		if (!hexMatch) return null;
		const background = `#${hexMatch[1]}`;
		const logoColorParam = u.searchParams.get("logoColor");
		const base: ParsedShieldsBadgeStyle = {
			background,
			labelColor: labelColorFromParams(background, logoColorParam),
		};
		const logoRaw = u.searchParams.get("logo");
		if (!logoRaw) return base;
		return {
			...base,
			icon: {
				slug: shieldsLogoToSimpleIconsSlug(logoRaw),
				colorHex: iconColorHexFromParams(background, logoColorParam),
			},
		};
	} catch {
		return null;
	}
}

/** @deprecated Use `parseShieldsIoBadgeStyle` */
export function styleFromShieldsIoBadgeUrl(url: string): { background: string; color: string } | null {
	const p = parseShieldsIoBadgeStyle(url);
	return p ? { background: p.background, color: p.labelColor } : null;
}
