"use client";

import { Handle, Position, type NodeProps, type NodeTypes } from "@xyflow/react";
import { motion, useReducedMotion } from "framer-motion";
import {
	SKILL_GRAPH_NODE_WIDTH,
	type SkillGraphNodeData,
	type SkillGraphTone,
} from "@/lib/skills-graph-build";
import { parseShieldsIoBadgeStyle, skillBrandIconUrl } from "@/lib/shield-badge-style";
import { cn } from "@/lib/utils";
import { Boxes, Cloud, Code2, Database, Monitor, Server, type LucideIcon } from "lucide-react";

const nodeFrame = "relative box-border flex w-full flex-col items-center";

const nodeMotionTransition = { type: "spring" as const, stiffness: 420, damping: 32, mass: 0.85 };

const skillNodeCardMotionActive = {
	whileHover: { scale: 1.04, y: -3, transition: nodeMotionTransition },
	whileTap: { scale: 0.97, transition: { duration: 0.12 } },
} as const;

function useSkillCardMotionProps() {
	const reduce = useReducedMotion();
	return reduce ? {} : skillNodeCardMotionActive;
}

const cardBase = cn(
	"box-border w-full rounded-md border px-3 py-2 text-center",
	"break-words [overflow-wrap:anywhere]",
);

const domainIcon: Record<Exclude<SkillGraphTone, "root">, LucideIcon> = {
	core: Code2,
	frontend: Monitor,
	backend: Server,
	data: Database,
	delivery: Cloud,
};

const rootCardClass = cn(
	cardBase,
	"flex items-center justify-center gap-2 border-2 border-zinc-500 bg-black py-2.5 font-heading text-[10px] font-bold uppercase tracking-[0.22em] text-white md:text-[11px]",
);

const pillarBorder: Record<Exclude<SkillGraphTone, "root">, string> = {
	core: "border-2 border-amber-500",
	frontend: "border-2 border-sky-500",
	backend: "border-2 border-emerald-500",
	data: "border-2 border-violet-500",
	delivery: "border-2 border-orange-500",
};

const domainTone: Record<Exclude<SkillGraphTone, "root">, string> = {
	core: "border-2 border-amber-500 bg-black font-heading text-[11px] font-semibold leading-snug text-amber-50",
	frontend: "border-2 border-sky-500 bg-black font-heading text-[11px] font-semibold leading-snug text-sky-50",
	backend: "border-2 border-emerald-500 bg-black font-heading text-[11px] font-semibold leading-snug text-emerald-50",
	data: "border-2 border-violet-500 bg-black font-heading text-[11px] font-semibold leading-snug text-violet-50",
	delivery: "border-2 border-orange-500 bg-black font-heading text-[11px] font-semibold leading-snug text-orange-50",
};

const domainIconClass: Record<Exclude<SkillGraphTone, "root">, string> = {
	core: "text-amber-200",
	frontend: "text-sky-200",
	backend: "text-emerald-200",
	data: "text-violet-200",
	delivery: "text-orange-200",
};

const skillShell: Record<Exclude<SkillGraphTone, "root">, string> = {
	core: "border-2 border-amber-500 bg-black",
	frontend: "border-2 border-sky-500 bg-black",
	backend: "border-2 border-emerald-500 bg-black",
	data: "border-2 border-violet-500 bg-black",
	delivery: "border-2 border-orange-500 bg-black",
};

const handleHidden =
	"pointer-events-none !h-px !w-px !min-h-0 !min-w-0 !border-0 !bg-transparent !opacity-0";

function handleClass(_tone: SkillGraphTone) {
	return handleHidden;
}

function RootNode({ data }: NodeProps) {
	const { label, tone } = data as SkillGraphNodeData;
	const motionProps = useSkillCardMotionProps();
	return (
		<div className={nodeFrame} style={{ width: SKILL_GRAPH_NODE_WIDTH }}>
			<motion.div
				className={cn(
					rootCardClass,
					"cursor-pointer shadow-sm hover:shadow-[0_12px_28px_-8px_rgba(0,0,0,0.65)]",
				)}
				{...motionProps}
			>
				<Boxes className="size-4 shrink-0 text-zinc-300" aria-hidden />
				{label}
			</motion.div>
			<Handle type="source" position={Position.Bottom} className={handleClass(tone)} />
		</div>
	);
}

function DomainNode({ data }: NodeProps) {
	const { label, tone } = data as SkillGraphNodeData;
	const t = tone === "root" ? "core" : tone;
	const palette = domainTone[t];
	const Icon = domainIcon[t];
	const iconCls = domainIconClass[t];
	const motionProps = useSkillCardMotionProps();
	return (
		<div className={nodeFrame} style={{ width: SKILL_GRAPH_NODE_WIDTH }}>
			<Handle type="target" position={Position.Top} className={handleClass(tone)} />
			<motion.div
				className={cn(
					cardBase,
					palette,
					"flex cursor-pointer flex-col items-center justify-center gap-1.5 py-2.5 text-center shadow-sm hover:shadow-[0_12px_28px_-8px_rgba(0,0,0,0.55)]",
				)}
				{...motionProps}
			>
				<Icon className={cn("size-[18px] shrink-0", iconCls)} aria-hidden strokeWidth={2} />
				<span className="block w-full text-center">{label}</span>
			</motion.div>
			<Handle type="source" position={Position.Bottom} className={handleClass(tone)} />
		</div>
	);
}

function SkillNode({ data }: NodeProps) {
	const { label, tone, badgeUrl } = data as SkillGraphNodeData;
	const t = tone === "root" ? "core" : tone;
	const shell = skillShell[t];
	const chip = badgeUrl ? parseShieldsIoBadgeStyle(badgeUrl) : null;
	const iconSrc = chip?.icon ? skillBrandIconUrl(chip.icon.slug, chip.icon.colorHex) : null;
	const motionProps = useSkillCardMotionProps();
	return (
		<div className={nodeFrame} style={{ width: SKILL_GRAPH_NODE_WIDTH }}>
			<Handle type="target" position={Position.Top} className={handleClass(tone)} />
			<motion.div
				className={cn(
					"box-border flex w-full cursor-pointer flex-wrap items-center justify-center gap-2 overflow-hidden rounded-md border px-2.5 py-1.5 text-center shadow-sm hover:shadow-[0_10px_24px_-10px_rgba(0,0,0,0.55)]",
					"text-[10px] font-semibold leading-tight break-words",
					chip
						? cn(pillarBorder[t], "shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)]")
						: cn(shell, "text-zinc-200"),
				)}
				style={
					chip ? { backgroundColor: chip.background, color: chip.labelColor } : undefined
				}
				aria-label={label}
				{...motionProps}
			>
				{iconSrc ? (
					<img
						src={iconSrc}
						alt=""
						width={18}
						height={18}
						loading="lazy"
						decoding="async"
						className="size-[18px] shrink-0 object-contain"
					/>
				) : null}
				<span className="min-w-0 max-w-full text-center">{label}</span>
			</motion.div>
			<Handle type="source" position={Position.Bottom} className={handleClass(tone)} />
		</div>
	);
}

export const skillGraphNodeTypes: NodeTypes = {
	root: RootNode,
	domain: DomainNode,
	skill: SkillNode,
};
