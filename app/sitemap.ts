import type { MetadataRoute } from "next";
import { profile } from "@/lib/data";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
	const base = getSiteUrl();
	const now = new Date();

	const entries: MetadataRoute.Sitemap = [
		{
			url: base,
			lastModified: now,
			changeFrequency: "weekly",
			priority: 1,
		},
		{
			url: `${base}/blog`,
			lastModified: now,
			changeFrequency: "monthly",
			priority: 0.8,
		},
		...profile.projects.map((p) => ({
			url: `${base}/projects/${p.id}`,
			lastModified: now,
			changeFrequency: "monthly" as const,
			priority: 0.7,
		})),
	];

	return entries;
}
