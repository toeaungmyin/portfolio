import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type SectionHeaderProps = {
	eyebrow: string;
	title: ReactNode;
	/** Right column (split) or below title (center) */
	description?: string;
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
	description?: string;
	leading?: ReactNode;
	titleClassName?: string;
	className?: string;
};

export function SectionHeader({
	eyebrow,
	title,
	description,
	layout = "split",
	leading,
	titleClassName,
	className,
}: SectionHeaderProps) {
	const eyebrowRow =
		layout === "center" ? (
			<div className="mb-4 flex items-center justify-center gap-3 sm:mb-6 sm:gap-4">
				<span className="h-px w-8 shrink-0 bg-white/30 sm:w-12" />
				<span className="min-w-0 break-words text-center text-[9px] font-black text-ink-eyebrow uppercase tracking-[0.35em] sm:text-[10px] sm:tracking-[0.5em]">
					{eyebrow}
				</span>
				<span className="h-px w-8 shrink-0 bg-white/30 sm:w-12" />
			</div>
		) : (
			<div className="mb-4 flex items-center gap-3 sm:mb-6 sm:gap-4">
				<span className="h-px w-8 shrink-0 bg-white/30 sm:w-12" />
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
					"mb-12 flex max-sm:px-1 flex-col justify-between gap-6 sm:mb-16 sm:gap-8 sm:px-0 md:mb-24 md:flex-row md:items-end md:gap-12",
					className
				)}
			>
				<div className="relative min-w-0 max-w-xl">
					{leading}
					{eyebrowRow}
					{titleEl}
				</div>
				{description ? (
					<p className="max-w-sm text-base font-light leading-relaxed text-[#a3a3a3] md:text-right md:text-lg">
						{description}
					</p>
				) : null}
			</div>
		);
	}

	return (
		<div className={cn("mb-12 max-sm:px-1 sm:mb-16 sm:px-0 md:mb-24", className)}>
			<div className="relative mx-auto max-w-xl text-center">
				{leading}
				{eyebrowRow}
				{titleEl}
			</div>
			{description ? (
				<p className="mx-auto mt-6 max-w-sm text-center text-base font-light leading-relaxed text-[#a3a3a3] sm:mt-8 sm:text-lg">
					{description}
				</p>
			) : null}
		</div>
	);
}

export function SectionIntroStack({
	eyebrow,
	title,
	description,
	leading,
	titleClassName,
	className,
}: SectionIntroStackProps) {
	return (
		<div className={cn("relative mb-8 max-w-3xl max-sm:px-1 sm:mb-12 sm:px-0", className)}>
			{leading}
			<div className="mb-4 flex items-center gap-3 sm:mb-6 sm:gap-4">
				<span className="h-px w-8 shrink-0 bg-white/30 sm:w-12" />
				<span className="min-w-0 break-words text-[9px] font-black text-ink-eyebrow uppercase tracking-[0.35em] sm:text-[10px] sm:tracking-[0.5em]">
					{eyebrow}
				</span>
			</div>
			<h2 className={cn("text-3xl font-black tracking-tighter text-white sm:text-4xl md:text-5xl", titleClassName)}>{title}</h2>
			{description ? (
				<p className="mt-4 max-w-lg text-sm font-light leading-relaxed text-[#a3a3a3] sm:mt-6 sm:text-base md:text-lg">
					{description}
				</p>
			) : null}
		</div>
	);
}
