"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/section-header";
import { CardBody, shellClass } from "@/components/shared/ledger-card";
import { cn } from "@/lib/utils";
import { posts } from "@/lib/posts";
import { revealTransitionShort, viewportReveal } from "@/lib/motion";

export default function Blog() {
	return (
		<section id="blog" className="section-box border-t bg-black py-32">
			<div className="mx-auto max-w-6xl px-4">
				<SectionHeader
					eyebrow="Technical Insights"
					title={
						<>
							Writing <span className="text-[#111111]">/</span>
						</>
					}
					description="Deep dives into software engineering, system design, and backend development."
				/>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
					{posts.map((post, index) => (
						<motion.div
							key={post.slug}
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={viewportReveal}
							transition={revealTransitionShort(index)}
							className={cn(shellClass, "h-full")}
						>
							<CardBody>
								<div className="mb-10 flex items-center justify-between">
									<span className="text-[10px] font-black uppercase tracking-[0.2em] text-ink-label transition-colors duration-500 group-hover:text-white">
										{post.tag}
									</span>
									<span className="text-[10px] font-black uppercase tracking-widest text-ink-eyebrow">{post.date}</span>
								</div>

								<h3 className="mb-3 text-2xl font-black leading-tight tracking-tighter text-white transition-colors duration-500 group-hover:text-[#EDEDED] sm:text-3xl">
									{post.title}
								</h3>
								<p className="mb-10 flex-1 text-base font-light leading-relaxed text-[#888888] transition-colors duration-500 group-hover:text-[#AAAAAA]">
									{post.excerpt}
								</p>

								<Button
									variant="link"
									className="group/btn mt-auto flex h-auto items-center gap-3 p-0 font-black text-[10px] uppercase tracking-[0.3em] text-white hover:no-underline"
									asChild
								>
									<Link href={`/blog#${post.slug}`}>
										View on archive
										<ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-2" />
									</Link>
								</Button>
							</CardBody>
						</motion.div>
					))}
				</div>

				<div className="mt-24 text-center">
					<Button
						className="h-16 rounded-full border border-white/10 bg-white/5 px-12 font-black text-[10px] uppercase tracking-[0.2em] text-white transition-all hover:bg-white hover:text-black"
						asChild
					>
						<Link href="/blog">
							<BookOpen className="mr-3 h-4 w-4" />
							Full archives
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
