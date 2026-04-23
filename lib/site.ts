export const siteTitleDefault = "Toe Aung Myin — Software Engineer";
export const siteDescription =
	"Software Engineer specializing in high-transaction, multi-tenant architectures.";

/** Public production domain (custom domain on Vercel or elsewhere). */
export const canonicalSiteOrigin = "https://toeaungmyin.me";

/**
 * Canonical site origin for metadata, sitemap, and robots.
 * Override with NEXT_PUBLIC_SITE_URL when needed (e.g. preview-specific URLs).
 */
export function getSiteUrl(): string {
	const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
	if (fromEnv) return fromEnv;
	// Vercel production: use custom domain for OG, sitemap, JSON-LD (not *.vercel.app).
	if (process.env.VERCEL_ENV === "production") return canonicalSiteOrigin;
	const vercel = process.env.VERCEL_URL?.trim();
	if (vercel) return `https://${vercel.replace(/^https?:\/\//, "")}`;
	if (process.env.NODE_ENV === "production") return canonicalSiteOrigin;
	return "http://localhost:3000";
}
