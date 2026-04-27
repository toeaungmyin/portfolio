import Image from "next/image";
import type { ProjectLiveDemo } from "@/lib/project";
import { SectionTitle, UiSubsectionTitle } from "./case-study-typography";

const DEFAULT_INTRO =
	"Scan or test with the sample ticket on the public app, or use the admin login for the dashboard.";
const DEFAULT_TICKET_HINT = "Scan the ticket to vote";
const DEFAULT_ADMIN_HINT = "Sign in on the live site (admin / staff area) with:";

type Props = { liveDemo: ProjectLiveDemo };

export function CaseStudyLiveDemoSection({ liveDemo }: Props) {
	const hasTicket = Boolean(liveDemo.ticketImage);
	const hasAdmin = Boolean(liveDemo.adminUsername && liveDemo.adminPassword);
	if (!hasTicket && !hasAdmin) return null;

	const intro = liveDemo.intro?.trim() ?? (hasTicket && hasAdmin ? DEFAULT_INTRO : null);

	return (
		<section className="mb-10">
			<SectionTitle>Live demo</SectionTitle>
			{intro ? (
				<p className="mb-5 max-w-2xl text-[14px] font-light leading-relaxed text-neutral-400">{intro}</p>
			) : null}
			<div className="rounded-2xl border border-white/10 bg-linear-to-b from-white/4 to-white/1 p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] sm:p-6 md:p-7">
				<div className="grid gap-8 sm:grid-cols-2 sm:gap-10 sm:items-start">
					{hasTicket && liveDemo.ticketImage ? (
						<div>
							<UiSubsectionTitle>Sample voting ticket</UiSubsectionTitle>
							<div className="relative mx-auto aspect-3/4 w-full max-w-[min(100%,300px)] overflow-hidden rounded-xl border border-black/8 bg-white shadow-[0_12px_40px_-16px_rgba(0,0,0,0.45)] sm:max-w-[min(100%,320px)]">
								<Image
									src={liveDemo.ticketImage}
									alt={liveDemo.ticketImageAlt ?? "Sample voting ticket"}
									fill
									className="object-contain p-0.5"
									sizes="(max-width: 640px) 300px, 320px"
									unoptimized
								/>
							</div>
							<p className="mt-3.5 text-center text-[11px] font-medium tracking-wide text-neutral-500">
								{liveDemo.ticketHint ?? DEFAULT_TICKET_HINT}
							</p>
						</div>
					) : null}
					{hasAdmin && liveDemo.adminUsername && liveDemo.adminPassword ? (
						<div>
							<UiSubsectionTitle>Admin dashboard</UiSubsectionTitle>
							<div className="rounded-xl border border-white/10 bg-black/30 px-5 py-5 sm:px-6 sm:py-6">
								<p className="mb-4 text-[12px] font-light leading-snug text-neutral-400">
									{liveDemo.adminHint ?? DEFAULT_ADMIN_HINT}
								</p>
								<dl className="space-y-3.5 font-mono text-[14px] text-neutral-100">
									<div className="rounded-lg border border-white/5 bg-white/4 px-3 py-2.5">
										<dt className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-secondary/80">
											Username
										</dt>
										<dd className="text-neutral-50">{liveDemo.adminUsername}</dd>
									</div>
									<div className="rounded-lg border border-white/5 bg-white/4 px-3 py-2.5">
										<dt className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-secondary/80">
											Password
										</dt>
										<dd className="text-neutral-50">{liveDemo.adminPassword}</dd>
									</div>
								</dl>
							</div>
						</div>
					) : null}
				</div>
			</div>
		</section>
	);
}
