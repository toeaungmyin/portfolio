"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { useSiteHeader } from "@/hooks/use-site-header";
import { Hatch } from "../common/hatch";

export default function SiteHeader() {
	const { headerRef, mobileOpen, setMobileOpen, activeKey, scrolled, navItems, pathname } =
		useSiteHeader();

	return (
		<header
			ref={headerRef}
			className={`fixed top-0 z-100 w-full transition-all duration-500 [padding-top:max(0.5rem,env(safe-area-inset-top))] ${scrolled ? "pb-2 sm:pb-4" : "pb-3 sm:pb-6 md:pb-8"}`}
		>
			<div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
				<div
					className={`flex h-14 min-h-14 items-center justify-between rounded-full px-4 transition-all duration-500 sm:h-16 sm:min-h-16 sm:px-6 ${
						scrolled
							? "border border-white/15 bg-black/50 shadow-2xl shadow-white/5 backdrop-blur-xl"
							: "bg-transparent"
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
								activeKey === item.anchorId ||
								(item.pagePrefix && pathname?.startsWith(item.pagePrefix));
							return (
								<Link
									key={item.label}
									href={item.href}
									className={`relative px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
										isActive ? "text-white" : "text-[#9a9a9a] hover:text-secondary"
									}`}
								>
									{item.label}
									{isActive && (
										<motion.div
											layoutId="nav-active"
											className="absolute bottom-0 left-4 right-4 h-0.5 bg-secondary"
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
							className="group h-10 rounded-full border border-white/14 bg-white/[0.07] px-6 text-[10px] font-bold uppercase tracking-widest text-white transition-all hover:border-secondary/45 hover:bg-secondary/10 hover:text-white"
						>
							<Link href="#contact">
								Let&apos;s Talk
								<ArrowRight className="ml-2 h-3 w-3 text-secondary transition-transform group-hover:translate-x-1" />
							</Link>
						</Button>
					</div>

					<div className="md:hidden">
						<Dialog open={mobileOpen} onOpenChange={setMobileOpen}>
							<DialogTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									className="h-10 w-10 rounded-full border border-white/14 bg-white/[0.07] text-white"
								>
									{mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
								</Button>
							</DialogTrigger>

							<DialogContent
								showCloseButton={false}
								aria-describedby={undefined}
								className="animate-in fade-in zoom-in-95 w-full max-w-[min(24rem,calc(100vw-1.5rem))] rounded-3xl border border-white/15 bg-black/50 p-4 backdrop-blur-xl"
							>
								<DialogTitle className="sr-only">Site navigation</DialogTitle>
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
														isActive
															? "bg-secondary text-white"
															: "text-[#a3a3a3] hover:bg-secondary/10 hover:text-secondary"
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
											className="mt-4 flex h-14 items-center justify-between rounded-2xl border border-secondary/30 bg-white/[0.07] px-6 text-sm font-bold uppercase tracking-widest text-white"
										>
											Contact
											<ArrowRight className="h-4 w-4 text-secondary" />
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
