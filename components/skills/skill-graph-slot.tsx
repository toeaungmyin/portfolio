"use client";

import dynamic from "next/dynamic";
import { skillsGraphViewportClassName } from "@/components/skills/constants";
import { cn } from "@/lib/utils";

const SkillGraphLazy = dynamic(() => import("@/components/skills/skill-graph"), {
	ssr: false,
	loading: () => (
		<div
			className={cn(
				"flex items-center justify-center rounded-none border-none bg-black/40 ring-1 ring-white/6",
				skillsGraphViewportClassName,
			)}
			role="status"
			aria-label="Loading skill map"
		>
			<div className="h-1 w-36 overflow-hidden rounded-full bg-white/16">
				<div className="h-full w-2/5 animate-pulse rounded-full bg-white/45" />
			</div>
		</div>
	),
});

export function SkillGraphSlot() {
	return <SkillGraphLazy />;
}
