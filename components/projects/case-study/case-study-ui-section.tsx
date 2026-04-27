import type { ProjectMedia } from "@/lib/project";
import { partitionGalleryByLayout } from "@/lib/project-case-study";
import { GalleryFrame } from "./gallery-frame";
import { SectionTitle, UiSubsectionTitle } from "./case-study-typography";

const MOBILE_FRAME = "mx-auto w-full max-w-[min(100%,300px)] sm:mx-0 sm:max-w-none";

type Props = { gallery: ProjectMedia[] };

export function CaseStudyUiSection({ gallery }: Props) {
	if (gallery.length === 0) return null;
	const { mobile: mobileGallery, desktop: adminGallery } = partitionGalleryByLayout(gallery);
	const showSubsections = mobileGallery.length > 0 && adminGallery.length > 0;

	return (
		<section className="mb-12">
			<SectionTitle>UI</SectionTitle>
			{showSubsections ? (
				<div className="space-y-10">
					<div>
						<UiSubsectionTitle>Mobile</UiSubsectionTitle>
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 sm:items-start">
							{mobileGallery.map((item) => (
								<GalleryFrame key={item.src} item={item} frameClassName={MOBILE_FRAME} />
							))}
						</div>
					</div>
					<div>
						<UiSubsectionTitle>Admin & dashboard</UiSubsectionTitle>
						<div className="space-y-8">
							{adminGallery.map((item) => (
								<GalleryFrame key={item.src} item={item} />
							))}
						</div>
					</div>
				</div>
			) : (
				<div className="space-y-8">
					{mobileGallery.length > 0 ? (
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 sm:items-start">
							{mobileGallery.map((item) => (
								<GalleryFrame key={item.src} item={item} frameClassName={MOBILE_FRAME} />
							))}
						</div>
					) : (
						adminGallery.map((item) => <GalleryFrame key={item.src} item={item} />)
					)}
				</div>
			)}
		</section>
	);
}
