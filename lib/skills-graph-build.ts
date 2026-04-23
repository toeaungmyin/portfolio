import dagre from "dagre";
import type { Edge, Node } from "@xyflow/react";
import type { PortfolioSkillCategory } from "@/lib/portfolio-skills";

const ROOT_ID = "stack-root";

/** Matches `portfolioSkillCategories` ids + root */
export type SkillGraphTone = "root" | "core" | "frontend" | "backend" | "data" | "delivery";

export type SkillGraphNodeData = { label: string; tone: SkillGraphTone; badgeUrl?: string };

type GraphNode = Node<SkillGraphNodeData, "root" | "domain" | "skill">;

/** Equal-width nodes */
export const SKILL_GRAPH_NODE_WIDTH = 220;
export const SKILL_GRAPH_ROOT_HEIGHT = 52;
export const SKILL_GRAPH_DOMAIN_HEIGHT = 56;
/** Skill row: label + brand fill + logo (Simple Icons) */
export const SKILL_GRAPH_SKILL_HEIGHT = 44;

const EDGE_FROM_ROOT: Record<Exclude<SkillGraphTone, "root">, string> = {
	core: "rgba(251, 191, 36, 0.38)",
	frontend: "rgba(56, 189, 248, 0.38)",
	backend: "rgba(52, 211, 153, 0.38)",
	data: "rgba(167, 139, 250, 0.38)",
	delivery: "rgba(251, 146, 60, 0.38)",
};

const EDGE_CHAIN: Record<Exclude<SkillGraphTone, "root">, string> = {
	core: "rgba(251, 191, 36, 0.22)",
	frontend: "rgba(56, 189, 248, 0.22)",
	backend: "rgba(52, 211, 153, 0.22)",
	data: "rgba(167, 139, 250, 0.22)",
	delivery: "rgba(251, 146, 60, 0.22)",
};

const EDGE_STROKE_ROOT = 3;
const EDGE_STROKE_CHAIN = 2.5;

function isCategoryTone(id: string): id is Exclude<SkillGraphTone, "root"> {
	return id === "core" || id === "frontend" || id === "backend" || id === "data" || id === "delivery";
}

function layoutWithDagre(nodes: GraphNode[], edges: Edge[]): { nodes: GraphNode[]; edges: Edge[] } {
	const g = new dagre.graphlib.Graph();
	g.setDefaultEdgeLabel(() => ({}));
	g.setGraph({
		rankdir: "TB",
		/** Horizontal gap between sibling pillars (domains under root) */
		nodesep: 22,
		/** Vertical gap between chained sub-nodes (domain → skill → skill …) */
		ranksep: 22,
		marginx: 18,
		marginy: 18,
	});

	for (const n of nodes) {
		const w = n.width ?? SKILL_GRAPH_NODE_WIDTH;
		const h = n.height ?? SKILL_GRAPH_SKILL_HEIGHT;
		g.setNode(n.id, { width: w, height: h });
	}
	for (const e of edges) {
		g.setEdge(e.source, e.target);
	}
	dagre.layout(g);

	const nextNodes: GraphNode[] = nodes.map((n) => {
		const pos = g.node(n.id);
		const w = n.width ?? SKILL_GRAPH_NODE_WIDTH;
		const h = n.height ?? SKILL_GRAPH_SKILL_HEIGHT;
		return {
			...n,
			position: { x: pos.x - w / 2, y: pos.y - h / 2 },
		};
	});

	return { nodes: nextNodes, edges };
}

/**
 * Root → category only; each pillar chains category → skill → skill …
 */
export function buildSkillGraph(categories: PortfolioSkillCategory[]): { nodes: GraphNode[]; edges: Edge[] } {
	const nodes: GraphNode[] = [];
	const edges: Edge[] = [];

	nodes.push({
		id: ROOT_ID,
		type: "root",
		position: { x: 0, y: 0 },
		data: { label: "Full-stack delivery", tone: "root" },
		width: SKILL_GRAPH_NODE_WIDTH,
		height: SKILL_GRAPH_ROOT_HEIGHT,
	});

	for (const cat of categories) {
		const tone: SkillGraphTone = isCategoryTone(cat.id) ? cat.id : "core";

		nodes.push({
			id: cat.id,
			type: "domain",
			position: { x: 0, y: 0 },
			data: { label: cat.label, tone },
			width: SKILL_GRAPH_NODE_WIDTH,
			height: SKILL_GRAPH_DOMAIN_HEIGHT,
		});
		edges.push({
			id: `${ROOT_ID}-${cat.id}`,
			source: ROOT_ID,
			target: cat.id,
			animated: true,
			style: { stroke: EDGE_FROM_ROOT[tone], strokeWidth: EDGE_STROKE_ROOT },
		});

		let parentId = cat.id;
		for (let i = 0; i < cat.items.length; i++) {
			const item = cat.items[i];
			const nid = `${cat.id}-s-${i}`;
			nodes.push({
				id: nid,
				type: "skill",
				position: { x: 0, y: 0 },
				data: { label: item.name, tone, badgeUrl: item.url },
				width: SKILL_GRAPH_NODE_WIDTH,
				height: SKILL_GRAPH_SKILL_HEIGHT,
			});
			edges.push({
				id: `${parentId}-${nid}`,
				source: parentId,
				target: nid,
				animated: true,
				style: { stroke: EDGE_CHAIN[tone], strokeWidth: EDGE_STROKE_CHAIN },
			});
			parentId = nid;
		}
	}

	return layoutWithDagre(nodes, edges);
}
