import type { ReactNode } from "react";

export function SectionTitle({ children }: { children: ReactNode }) {
	return (
		<h2 className="mb-4 text-[11px] font-black uppercase tracking-[0.32em] text-secondary/90">{children}</h2>
	);
}

export function UiSubsectionTitle({ children }: { children: ReactNode }) {
	return <h3 className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-secondary/70">{children}</h3>;
}

export function Prose({ children, className }: { children: ReactNode; className?: string }) {
	return (
		<div
			className={`text-[16px] sm:text-[17px] font-light leading-[1.75] text-neutral-200 antialiased ${className ?? ""}`}
		>
			{children}
		</div>
	);
}
