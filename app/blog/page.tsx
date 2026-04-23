import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { posts } from "@/lib/posts";
import { getSiteUrl } from "@/lib/site";

const blogDescription =
	"Notes on software engineering, system design, and backend development.";

export const metadata: Metadata = {
	title: "Writing",
	description: blogDescription,
	keywords: ["blog", "software engineering", "system design", "backend", "TypeScript"],
	alternates: { canonical: "/blog" },
	openGraph: {
		title: "Writing",
		description: blogDescription,
		type: "article",
		url: `${getSiteUrl()}/blog`,
	},
	twitter: {
		card: "summary_large_image",
		title: "Writing",
		description: blogDescription,
	},
};

export default function BlogPage() {
	return (
		<div className="min-h-screen pt-28 pb-24 px-4">
			<div className="max-w-3xl mx-auto">
				<Link
					href="/"
					className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-ink-label hover:text-white transition-colors mb-16"
				>
					<ArrowLeft className="w-3 h-3" />
					Back to site
				</Link>

				<div className="flex items-center gap-4 mb-8">
					<span className="w-12 h-px bg-white/20" />
					<span className="text-[10px] font-black text-ink-eyebrow uppercase tracking-[0.5em]">Archive</span>
				</div>

				<h1 className="text-5xl sm:text-6xl font-black tracking-tighter text-white mb-6 leading-[0.95]">
					Writing
				</h1>
				<p className="text-lg text-[#555555] font-light leading-relaxed mb-20 max-w-xl">
					Technical notes and longer-form drafts. Each entry opens the same preview as on the homepage.
				</p>

				<ul className="space-y-12">
					{posts.map((post) => (
						<li key={post.slug} id={post.slug} className="scroll-mt-28">
							<article className="rounded-[2.5rem] border border-white/10 bg-[#080808] p-8 sm:p-10">
								<div className="flex items-center justify-between gap-4 mb-6">
									<span className="text-[10px] uppercase tracking-[0.2em] font-black text-ink-label">{post.tag}</span>
									<time className="text-[10px] text-ink-eyebrow font-black uppercase tracking-widest">{post.date}</time>
								</div>
								<h2 className="text-2xl sm:text-3xl font-black text-white tracking-tighter mb-4">{post.title}</h2>
								<p className="text-[#888888] text-base leading-relaxed font-light mb-8">{post.excerpt}</p>
								<p className="text-[10px] font-black uppercase tracking-[0.3em] text-ink-eyebrow flex items-center gap-2">
									Full article coming soon
									<ArrowRight className="w-3 h-3 opacity-60" />
								</p>
							</article>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
