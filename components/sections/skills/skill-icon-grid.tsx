"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { getSkillIconGridItems } from "@/lib/skill-grid";
import { revealTransition, viewportReveal } from "@/lib/motion";
import { cn } from "@/lib/utils";

const ICON_PX = 32;

export function SkillIconGrid() {
	const items = getSkillIconGridItems();
	const reduceMotion = useReducedMotion();

	return (
		<div className="mt-24 grid grid-cols-4 gap-4 sm:mt-16 sm:grid-cols-6 sm:gap-5 md:grid-cols-8 md:gap-6">
			{items.map((item, index) => {
				const image = (
					<Image
						src={item.iconSrc}
						alt=""
						width={ICON_PX}
						height={ICON_PX}
						className={cn(
							"h-8 w-8 object-contain text-white transition-[filter,opacity] duration-300",
							"hover:opacity-100",
							!reduceMotion && "opacity-90",
						)}
						sizes="32px"
					/>
				);

				if (reduceMotion) {
					return (
						<div
							key={item.id}
							className="flex items-center justify-center"
							aria-label={item.name}
						>
							{image}
						</div>
					);
				}

				return (
					<motion.div
						key={item.id}
						initial={{ filter: "grayscale(1)" }}
						whileInView={{ filter: "grayscale(0)" }}
						viewport={viewportReveal}
						transition={revealTransition(index, { duration: 0.55, stagger: 0.04 })}
						className="flex items-center justify-center"
						aria-label={item.name}
					>
						{image}
					</motion.div>
				);
			})}
		</div>
	);
}
