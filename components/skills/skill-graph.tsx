"use client";

import { useEffect, useMemo, useRef, type RefObject } from "react";
import { Background, ReactFlow, ReactFlowProvider, useReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { buildSkillGraph, portfolioSkillCategories } from "@/lib/skills";
import { cn } from "@/lib/utils";
import { skillsGraphFitViewOptions, skillsGraphViewportClassName } from "@/components/skills/constants";
import { skillGraphNodeTypes } from "@/components/skills/skill-graph-nodes";

function FitDiagramToContainer({ boundsRef }: { boundsRef: RefObject<HTMLDivElement | null> }) {
	const { fitView } = useReactFlow();

	useEffect(() => {
		const el = boundsRef.current;
		const run = () => fitView(skillsGraphFitViewOptions);
		run();
		if (!el || typeof ResizeObserver === "undefined") return;
		const ro = new ResizeObserver(() => run());
		ro.observe(el);
		return () => ro.disconnect();
	}, [boundsRef, fitView]);

	return null;
}

export default function SkillGraph() {
	const containerRef = useRef<HTMLDivElement>(null);
	const { nodes, edges } = useMemo(() => buildSkillGraph(portfolioSkillCategories), []);

	return (
		<div
			ref={containerRef}
			className={cn(
				"relative w-full overflow-hidden",
				"shadow-[0_24px_48px_-24px_rgba(0,0,0,0.85)]",
				skillsGraphViewportClassName,
			)}
		>
			<ReactFlowProvider>
				<ReactFlow
					nodes={nodes}
					edges={edges}
					nodeTypes={skillGraphNodeTypes}
					fitView={false}
					nodesDraggable={false}
					nodesConnectable={false}
					edgesReconnectable={false}
					elementsSelectable={false}
					selectNodesOnDrag={false}
					nodesFocusable={false}
					edgesFocusable={false}
					autoPanOnNodeFocus={false}
					panOnDrag={false}
					panOnScroll={false}
					zoomOnScroll={false}
					zoomOnPinch={false}
					zoomOnDoubleClick={false}
					preventScrolling={false}
					minZoom={0.02}
					maxZoom={4}
					proOptions={{ hideAttribution: true }}
					className="size-full bg-[#070707]!"
					style={{ width: "100%", height: "100%" }}
					aria-label="Skill domains and chained tools; each tool connects to the node above it. Drag to pan, scroll or pinch to zoom."
				>
					<FitDiagramToContainer boundsRef={containerRef} />
					<Background gap={22} size={1} color="rgba(255,255,255,0.055)" />
					{/* <Controls
						showInteractive={false}
						className={cn(
							"!m-3 !overflow-hidden !rounded-md !border !border-white/14 !bg-[#0c0c0c]/95 !shadow-none",
							"[&_button]:!h-8 [&_button]:!w-8 [&_button]:!border-white/14 [&_button]:!bg-transparent",
							"[&_button]:!fill-white/75 [&_button:hover]:!bg-white/6",
						)}
					/> */}
				</ReactFlow>
			</ReactFlowProvider>
		</div>
	);
}
