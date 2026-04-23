import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Outer surface: dark card on black — use on motion/Link wrappers */
export const shellClass =
	"group relative flex flex-col bg-[#080808] border border-white/10 rounded-[2.5rem] overflow-visible hover:border-transparent transition-all duration-700";

/** Inner padded content area */
export const bodyClass =
	"relative z-10 flex flex-1 flex-col overflow-hidden rounded-[2.5rem] p-8 sm:p-10";

type CardBodyProps = {
	children: ReactNode;
	className?: string;
};

export function CardBody({ children, className }: CardBodyProps) {
	return <div className={cn(bodyClass, className)}>{children}</div>;
}
