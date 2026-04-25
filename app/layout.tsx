import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { getSiteUrl, siteDescription, siteTitleDefault } from "@/lib/site";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { SiteJsonLd } from "@/components/seo/site-json-ld";
import { AppMotionProvider } from "@/components/providers/app-motion";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Hatch } from "@/components/common/hatch";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

const outfit = Outfit({
	subsets: ["latin"],
	variable: "--font-outfit",
	display: "swap",
});

const metadataBase = new URL(getSiteUrl());

export const metadata: Metadata = {
	metadataBase,
	title: {
		default: siteTitleDefault,
		template: "%s | Toe Aung Myin",
	},
	description: siteDescription,
	keywords: [
		"software engineer",
		"backend",
		"full stack",
		"TypeScript",
		"Node.js",
		"multi-tenant",
		"system design",
		"Myanmar",
	],
	authors: [{ name: "Toe Aung Myin", url: metadataBase.origin }],
	creator: "Toe Aung Myin",
	robots: { index: true, follow: true },
	alternates: { canonical: "/" },
	icons: {
		icon: [{ url: "/logo.png", type: "image/png" }],
		apple: "/logo.png",
	},
	openGraph: {
		title: siteTitleDefault,
		description: siteDescription,
		type: "website",
		url: metadataBase.origin,
		siteName: "Toe Aung Myin",
		locale: "en_US",
	},
	twitter: {
		card: "summary_large_image",
		title: siteTitleDefault,
		description: siteDescription,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			data-scroll-behavior="smooth"
			className={cn(
				"h-full scroll-smooth antialiased motion-reduce:scroll-auto",
				inter.variable,
				outfit.variable,
				"font-sans",
			)}
		>
			<body className="dark flex min-h-dvh flex-col overflow-x-hidden bg-black pl-[max(0px,env(safe-area-inset-left))] pr-[max(0px,env(safe-area-inset-right))] text-white selection:bg-white selection:text-black">
				<SiteJsonLd />
				<Analytics />
				<SpeedInsights />
				<AppMotionProvider>
					<Hatch variant="left" className="w-2 sm:w-12" />
					<Hatch variant="right" className="w-2 sm:w-12" />
					<Header />
					<main className="flex-1">{children}</main>
					<Footer />
				</AppMotionProvider>
			</body>
		</html>
	);
}
