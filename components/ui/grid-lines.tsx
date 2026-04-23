"use client";

import type { CSSProperties } from "react";

/**
 * GridLines — fixed frame panels (left, right, top, bottom) with bordered edges
 * and diagonal hatching in the gutter. Top/bottom band height is half of `--rail-inset`.
 */
const railInset = "var(--rail-inset)";
const endBandHeight = "calc(var(--rail-inset) * 0.5)";

const hatchStyle: CSSProperties = {
	backgroundImage: `repeating-linear-gradient(
		-45deg,
		transparent,
		transparent 7px,
		rgba(255,255,255,0.1) 7px,
		rgba(255,255,255,0.1) 8px
	)`,
};

const panelZ = "z-[9997]";

export function GridLines() {
	return (
		<>
			{/* Top — full width; height = half of side panel width */}
			<div
				aria-hidden="true"
				className={`pointer-events-none fixed left-0 right-0 top-0 ${panelZ} border-border border-t border-b bg-black`}
				style={{
					height: endBandHeight,
					...hatchStyle,
				}}
			/>

			{/* Bottom */}
			<div
				aria-hidden="true"
				className={`pointer-events-none fixed bottom-0 left-0 right-0 ${panelZ} border-border border-t border-b bg-black`}
				style={{
					height: endBandHeight,
					...hatchStyle,
				}}
			/>

			{/* Left — between top and bottom bands; inner = hatching, framed L/R */}
			<div
				aria-hidden="true"
				className={`pointer-events-none fixed left-0 ${panelZ} border-border border-l border-r bg-black`}
				style={{
					width: railInset,
					top: endBandHeight,
					bottom: endBandHeight,
				}}
			>
				<div className="h-full w-full min-h-0" style={hatchStyle} />
			</div>

			{/* Right */}
			<div
				aria-hidden="true"
				className={`pointer-events-none fixed right-0 ${panelZ} border-border border-l border-r bg-black`}
				style={{
					width: railInset,
					top: endBandHeight,
					bottom: endBandHeight,
				}}
			>
				<div className="h-full w-full min-h-0" style={hatchStyle} />
			</div>
		</>
	);
}
