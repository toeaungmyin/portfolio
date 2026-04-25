import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

export const hatchBackgroundStyle: React.CSSProperties = {
	backgroundImage: `repeating-linear-gradient(
		-45deg,
		transparent,
		transparent 7px,
		rgba(255,255,255,0.1) 7px,
		rgba(255,255,255,0.1) 8px
	)`,
}

const hatchVariants = cva("pointer-events-none border-border bg-black", {
	variants: {
		variant: {
			horizontal: "z-0 h-28 w-full border-t border-b sm:h-32",
			vertical:
				"z-0 h-full min-h-24 w-24 shrink-0 self-stretch border-l border-r",
			top: "absolute top-0 left-1/2 z-0 h-24 w-screen -translate-x-1/2 border-t border-b",
			bottom:
				"absolute bottom-0 left-1/2 z-0 h-24 w-screen -translate-x-1/2 border-t border-b",
			left: "fixed top-[calc(var(--rail-inset)*0.5)] bottom-[calc(var(--rail-inset)*0.5)] left-0 z-9997 w-[var(--rail-inset)] border-l border-r",
			right:
				"fixed top-[calc(var(--rail-inset)*0.5)] bottom-[calc(var(--rail-inset)*0.5)] right-0 z-9997 w-[var(--rail-inset)] border-l border-r",
		},
	},
	defaultVariants: {
		variant: "horizontal",
	},
})

function Hatch({
	className,
	variant = "horizontal",
	style,
	...props
}: Omit<React.ComponentProps<"div">, "style"> &
	VariantProps<typeof hatchVariants> & { style?: React.CSSProperties }) {
	return (
		<div
			data-slot="hatch"
			data-variant={variant}
			aria-hidden
			className={cn(hatchVariants({ variant, className }))}
			style={{ ...hatchBackgroundStyle, ...style }}
			{...props}
		/>
	)
}

export { Hatch, hatchVariants }
