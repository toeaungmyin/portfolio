"use client";

import { useState, useEffect } from "react";
import { useReducedMotion, useScroll, useTransform } from "motion/react";
export function useHeroAnimations() {
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
	const reduceMotion = useReducedMotion();
	const { scrollY } = useScroll();

	const y1 = useTransform(scrollY, (y) => {
		if (reduceMotion === true) return 0;
		if (y <= 0) return 0;
		if (y >= 500) return 200;
		return (y / 500) * 200;
	});
	const opacity = useTransform(scrollY, (y) => {
		if (reduceMotion === true) return 1;
		if (y <= 0) return 1;
		if (y >= 300) return 0;
		return 1 - y / 300;
	});

	useEffect(() => {
		if (reduceMotion) return;
		let raf = 0;
		const onMove = (e: MouseEvent) => {
			cancelAnimationFrame(raf);
			raf = requestAnimationFrame(() => setMousePos({ x: e.clientX, y: e.clientY }));
		};
		window.addEventListener("mousemove", onMove, { passive: true });
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("mousemove", onMove);
		};
	}, [reduceMotion]);

	return { mousePos, reduceMotion, y1, opacity };
}
