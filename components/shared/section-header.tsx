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
			<div className="flex items-center justify-center gap-4 mb-6">
				<span className="w-12 h-px bg-white/20" />
				<span className="text-[10px] font-black text-ink-eyebrow uppercase tracking-[0.5em]">{eyebrow}</span>
				<span className="w-12 h-px bg-white/20" />
			</div>
		) : (
			<div className="flex items-center gap-4 mb-6">
				<span className="w-12 h-px bg-white/20" />
				<span className="text-[10px] font-black text-ink-eyebrow uppercase tracking-[0.5em]">{eyebrow}</span>
			</div>
		);

	const titleEl = (
		<h2
			className={cn(
				"text-5xl md:text-7xl font-black tracking-tighter text-white",
				layout === "center" && "text-center",
				titleClassName
			)}
		>
			{title}
		</h2>
	);

	if (layout === "split") {
		return (
			<div className={cn("mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12", className)}>
				<div className="relative max-w-xl">
					{leading}
					{eyebrowRow}
					{titleEl}
				</div>
				{description ? (
					<p className="text-[#555555] text-lg font-light max-w-sm leading-relaxed md:text-right">{description}</p>
				) : null}
			</div>
		);
	}

	return (
		<div className={cn("mb-24", className)}>
			<div className="relative mx-auto max-w-xl text-center">
				{leading}
				{eyebrowRow}
				{titleEl}
			</div>
			{description ? (
				<p className="text-[#555555] text-lg font-light max-w-sm mx-auto text-center mt-8 leading-relaxed">{description}</p>
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
		<div className={cn("relative mb-12 max-w-3xl", className)}>
			{leading}
			<div className="flex items-center gap-4 mb-6">
				<span className="w-12 h-px bg-white/20" />
				<span className="text-[10px] font-black text-ink-eyebrow uppercase tracking-[0.5em]">{eyebrow}</span>
			</div>
			<h2 className={cn("text-4xl md:text-5xl font-black tracking-tighter text-white", titleClassName)}>{title}</h2>
			{description ? (
				<p className="text-[#555555] text-base md:text-lg font-light max-w-lg mt-6 leading-relaxed">{description}</p>
			) : null}
		</div>
	);
}
