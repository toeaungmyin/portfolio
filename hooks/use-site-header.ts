"use client";

import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { HOME_SECTION_IDS, getSiteNavItems } from "./site-header-constants";

export function useSiteHeader() {
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

	const navItems = useMemo(() => getSiteNavItems(), []);

	const activeKey = useMemo(() => {
		if (pathname?.startsWith("/projects")) return "projects";
		if (pathname === "/") return activeAnchor ?? "hero";
		return null;
	}, [activeAnchor, pathname]);

	return {
		headerRef,
		mobileOpen,
		setMobileOpen,
		activeKey,
		scrolled,
		navItems,
		pathname,
	};
}
