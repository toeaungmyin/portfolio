import type { MetadataRoute } from "next";
import { siteDescription, siteTitleDefault } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: siteTitleDefault,
		short_name: "Toe Aung Myin",
		description: siteDescription,
		start_url: "/",
		display: "standalone",
		background_color: "#000000",
		theme_color: "#000000",
		lang: "en",
	};
}
