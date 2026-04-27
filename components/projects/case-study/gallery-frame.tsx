import Image from "next/image";
import type { ProjectMedia } from "@/lib/project";

export function GalleryFrame({
	item,
	frameClassName = "",
}: {
	item: ProjectMedia;
	frameClassName?: string;
}) {
	const isMobile = item.layout === "mobile";
	return (
		<figure className="space-y-2.5 sm:space-y-3">
			<div
				className={
					isMobile
						? `relative w-full overflow-hidden rounded-2xl border border-white/12 bg-[#0c0c0c] ring-1 ring-inset ring-white/5 aspect-9/19 sm:aspect-9/18.5 ${frameClassName}`.trim()
						: `relative aspect-video w-full max-w-full overflow-hidden rounded-2xl border border-white/12 bg-[#0c0c0c] ring-1 ring-inset ring-white/5 ${frameClassName}`.trim()
				}
			>
				<Image
					src={item.src}
					alt={item.alt}
					fill
					className={isMobile ? "object-contain" : "object-cover object-top sm:object-center"}
					sizes={
						isMobile
							? "(max-width: 640px) 100vw, (max-width: 1280px) 40vw, 300px"
							: "(max-width: 768px) 100vw, min(42rem, 90vw)"
					}
					unoptimized
				/>
			</div>
			<figcaption className="text-center text-xs text-neutral-400">
				<span className="text-[10px] font-bold uppercase tracking-widest text-neutral-300 block mb-1">
					{item.alt}
				</span>
				{item.caption ? <span className="font-light text-neutral-300">{item.caption}</span> : null}
			</figcaption>
		</figure>
	);
}
