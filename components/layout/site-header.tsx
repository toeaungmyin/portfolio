"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

type NavItem = {
	label: string;
	href: string;
	anchorId?: string;
	pagePrefix?: string;
};

/** Document order must match the home page stack (ids may be missing, e.g. blog on /). */
const HOME_SECTION_IDS = ["hero", "skills", "experience", "projects", "faqs", "contact"] as const;

export default function SiteHeader() {
	const pathname = usePathname();
	const headerRef = useRef<HTMLElement>(null);
	const [mobileOpen, setMobileOpen] = useState(false);
	const [activeAnchor, setActiveAnchor] = useState<string | null>(null);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		const syncHash = () => {
			const hash = window.location.hash?.replace(/^#/, "") ?? "";
			setActiveAnchor(hash || null);
		};
		syncHash();
		window.addEventListener("hashchange", syncHash);
		return () => window.removeEventListener("hashchange", syncHash);
	}, []);

	/** Scroll-spy: last section whose top has crossed the line just under the sticky header. */
	useEffect(() => {
		if (pathname !== "/") return;

		let raf = 0;
		const update = () => {
			raf = 0;
			const line = headerRef.current?.getBoundingClientRect().bottom ?? 96;
			let active: string = HOME_SECTION_IDS[0];
			for (const id of HOME_SECTION_IDS) {
				const el = document.getElementById(id);
				if (!el) continue;
				const top = el.getBoundingClientRect().top;
				if (top <= line + 2) active = id;
			}
			setActiveAnchor((prev) => (prev === active ? prev : active));
		};

		const onScrollOrResize = () => {
			if (raf) return;
			raf = requestAnimationFrame(update);
		};

		update();
		window.addEventListener("scroll", onScrollOrResize, { passive: true });
		window.addEventListener("resize", onScrollOrResize, { passive: true });
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("scroll", onScrollOrResize);
			window.removeEventListener("resize", onScrollOrResize);
		};
	}, [pathname]);

	const navItems: NavItem[] = useMemo(
		() => [
			{ label: "Skills", href: "/#skills", anchorId: "skills" },
			{ label: "Experience", href: "/#experience", anchorId: "experience" },
			{ label: "Projects", href: "/#projects", anchorId: "projects", pagePrefix: "/projects" },
		],
		[]
	);

	const activeKey = useMemo(() => {
		if (pathname?.startsWith("/projects")) return "projects";
		if (pathname === "/") return activeAnchor ?? "hero";
		return null;
	}, [activeAnchor, pathname]);

	return (
		<header
			ref={headerRef}
			className={`fixed top-0 z-[100] w-full transition-all duration-500 ${scrolled ? "py-4" : "py-8"}`}
		>
			<div className="mx-auto max-w-6xl px-4">
				<div
					className={`flex h-16 items-center justify-between rounded-full px-6 transition-all duration-500 ${
						scrolled ? "glass shadow-2xl shadow-white/5" : "bg-transparent"
					}`}
				>
					<Link href="/" className="group flex items-center gap-2" aria-label="Go to home">
						<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
							<span className="text-xl font-black leading-none tracking-tighter text-black">T</span>
						</div>
						<span className="hidden text-sm font-bold uppercase tracking-[0.2em] text-white sm:block">
							Toe Aung Myin
						</span>
					</Link>

					<nav className="hidden items-center gap-1 md:flex" aria-label="Portfolio navigation">
						{navItems.map((item) => {
							const isActive =
								activeKey === item.anchorId || (item.pagePrefix && pathname?.startsWith(item.pagePrefix));
							return (
								<Link
									key={item.label}
									href={item.href}
									className={`relative px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
										isActive ? "text-white" : "text-[#555555] hover:text-white"
									}`}
								>
									{item.label}
									{isActive && (
										<motion.div
											layoutId="nav-active"
											className="absolute bottom-0 left-4 right-4 h-px bg-white"
											transition={{ type: "spring", stiffness: 380, damping: 30 }}
										/>
									)}
								</Link>
							);
						})}
					</nav>

					<div className="hidden items-center gap-4 md:flex">
						<Button
							asChild
							className="group h-10 rounded-full border border-white/[0.1] bg-white/[0.05] px-6 text-[10px] font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black"
						>
							<Link href="#contact">
								Let&apos;s Talk
								<ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
							</Link>
						</Button>
					</div>

					<div className="md:hidden">
						<Dialog open={mobileOpen} onOpenChange={setMobileOpen}>
							<DialogTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									className="h-10 w-10 rounded-full border border-white/10 bg-white/5 text-white"
								>
									{mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
								</Button>
							</DialogTrigger>

							<DialogContent
								showCloseButton={false}
								className="glass animate-in fade-in zoom-in-95 left-auto right-4 top-24 w-[calc(100vw-32px)] max-w-sm rounded-3xl p-4"
							>
								<nav className="flex flex-col gap-2">
									{navItems.map((item) => {
										const isActive =
											activeKey === item.anchorId ||
											(item.pagePrefix && pathname?.startsWith(item.pagePrefix));
										return (
											<DialogClose asChild key={item.label}>
												<Link
													href={item.href}
													className={`flex h-14 items-center rounded-2xl px-6 text-sm font-bold uppercase tracking-widest transition-all ${
														isActive ? "bg-white text-black" : "text-[#888888] hover:bg-white/5 hover:text-white"
													}`}
												>
													{item.label}
												</Link>
											</DialogClose>
										);
									})}
									<DialogClose asChild>
										<Link
											href="#contact"
											className="mt-4 flex h-14 items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 text-sm font-bold uppercase tracking-widest text-white"
										>
											Contact
											<ArrowRight className="h-4 w-4" />
										</Link>
									</DialogClose>
								</nav>
							</DialogContent>
						</Dialog>
					</div>
				</div>
			</div>
		</header>
	);
}
