import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type SectionHeaderProps = {
	eyebrow: string;
	title: ReactNode;
	layout?: "split" | "center";
	/** Optional node before the eyebrow row (e.g. decoration) */
	leading?: ReactNode;
	titleClassName?: string;
	className?: string;
};

/** Tighter intro for bands like Skills */
export type SectionIntroStackProps = {
	eyebrow: string;
	title: ReactNode;
	leading?: ReactNode;
	titleClassName?: string;
	className?: string;
};

export function SectionHeader({
	eyebrow,
	title,
	layout = "split",
	leading,
	titleClassName,
	className,
}: SectionHeaderProps) {
	const eyebrowRow =
		layout === "center" ? (
			<div className="mb-4 flex items-center justify-center gap-3 sm:mb-6 sm:gap-4">
				<span className="h-1 w-8 shrink-0 bg-secondary/90 sm:w-12" />
				<span className="min-w-0 break-words text-center text-[9px] font-black text-ink-eyebrow uppercase tracking-[0.35em] sm:text-[10px] sm:tracking-[0.5em]">
					{eyebrow}
				</span>
				<span className="h-1 w-8 shrink-0 bg-secondary/90 sm:w-12" />
			</div>
		) : (
			<div className="mb-4 flex items-center gap-3 sm:mb-6 sm:gap-4">
				<span className="h-1 w-8 shrink-0 bg-secondary/90 sm:w-12" />
				<span className="min-w-0 break-words text-[9px] font-black text-ink-eyebrow uppercase tracking-[0.35em] sm:text-[10px] sm:tracking-[0.5em]">
					{eyebrow}
				</span>
			</div>
		);

	const titleEl = (
		<h2
			className={cn(
				"text-3xl font-black tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-7xl",
				layout === "center" && "text-center",
				titleClassName
			)}
		>
			{title}
		</h2>
	);

	if (layout === "split") {
		return (
			<div
				className={cn(
					"mb-16 flex max-sm:px-1 flex-col justify-between gap-6 sm:mb-20 sm:gap-8 sm:px-0 md:mb-28 md:flex-row md:items-end md:gap-12",
					className
				)}
			>
				<div className="relative min-w-0 max-w-xl">
					{leading}
					{eyebrowRow}
					{titleEl}
				</div>
			</div>
		);
	}

	return (
		<div className={cn("mb-16 max-sm:px-1 sm:mb-20 sm:px-0 md:mb-28", className)}>
			<div className="relative mx-auto max-w-xl text-center">
				{leading}
				{eyebrowRow}
				{titleEl}
			</div>
		</div>
	);
}

export function SectionIntroStack({
	eyebrow,
	title,
	leading,
	titleClassName,
	className,
}: SectionIntroStackProps) {
	return (
		<div className={cn("relative mb-12 max-w-3xl max-sm:px-1 sm:mb-16 sm:px-0", className)}>
			{leading}
			<div className="mb-4 flex items-center gap-3 sm:mb-6 sm:gap-4">
				<span className="h-1 w-8 shrink-0 bg-secondary/90 sm:w-12" />
				<span className="min-w-0 break-words text-[9px] font-black text-ink-eyebrow uppercase tracking-[0.35em] sm:text-[10px] sm:tracking-[0.5em]">
					{eyebrow}
				</span>
			</div>
			<h2 className={cn("text-3xl font-black tracking-tighter text-white sm:text-4xl md:text-5xl", titleClassName)}>{title}</h2>
		</div>
	);
}
