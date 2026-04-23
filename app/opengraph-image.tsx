import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Toe Aung Myin — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
	return new ImageResponse(
		(
			<div
				style={{
					height: "100%",
					width: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					justifyContent: "center",
					background: "linear-gradient(145deg, #050505 0%, #0a0a0a 50%, #000000 100%)",
					padding: 72,
					border: "1px solid rgba(255,255,255,0.08)",
				}}
			>
				<div
					style={{
						fontSize: 76,
						fontWeight: 900,
						color: "#ffffff",
						letterSpacing: "-0.045em",
						lineHeight: 1,
					}}
				>
					Toe Aung Myin
				</div>
				<div
					style={{
						fontSize: 26,
						color: "rgba(255,255,255,0.45)",
						marginTop: 28,
						fontWeight: 400,
						maxWidth: 900,
						lineHeight: 1.35,
					}}
				>
					Software Engineer — high-transaction, multi-tenant systems
				</div>
				<div
					style={{
						marginTop: 48,
						fontSize: 11,
						fontWeight: 700,
						letterSpacing: "0.35em",
						textTransform: "uppercase",
						color: "rgba(255,255,255,0.28)",
					}}
				>
					Portfolio
				</div>
			</div>
		),
		{ ...size },
	);
}
