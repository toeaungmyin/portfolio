import { profile } from "@/lib/data";
import { getSiteUrl, siteDescription } from "@/lib/site";

function toAbsoluteUrl(contactPath: string): string {
	const t = contactPath.trim();
	if (t.startsWith("http://") || t.startsWith("https://")) return t;
	return `https://${t.replace(/^\/\//, "")}`;
}

export function SiteJsonLd() {
	const base = getSiteUrl();
	const sameAs = [
		toAbsoluteUrl(profile.contact.github),
		toAbsoluteUrl(profile.contact.linkedin),
		toAbsoluteUrl(profile.contact.telegram),
	].filter(Boolean);

	const schema = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebSite",
				"@id": `${base}/#website`,
				url: base,
				name: "Toe Aung Myin",
				description: siteDescription,
				inLanguage: "en",
				publisher: { "@id": `${base}/#person` },
			},
			{
				"@type": "Person",
				"@id": `${base}/#person`,
				name: "Toe Aung Myin",
				jobTitle: "Software Engineer",
				url: base,
				email: `mailto:${profile.contact.email}`,
				sameAs,
			},
		],
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
		/>
	);
}
