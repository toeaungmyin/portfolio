import type { ProjectStack } from "@/lib/project";
import { SectionTitle } from "./case-study-typography";

const ROWS: (keyof ProjectStack)[] = ["frontend", "backend", "devops"];
const LABELS: Record<keyof ProjectStack, string> = {
	frontend: "Frontend",
	backend: "Backend",
	devops: "DevOps",
};

export function CaseStudyTechStackSection({ stack }: { stack: ProjectStack }) {
	return (
		<section className="mb-12">
			<SectionTitle>Tech stack</SectionTitle>
			<div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
				{ROWS.map((key) => (
					<div key={key}>
						<p className="mb-3 text-[10px] font-black uppercase tracking-widest text-neutral-200">
							{LABELS[key]}
						</p>
						<ul className="space-y-2.5 text-[14px] font-light leading-snug text-neutral-300">
							{stack[key].map((item) => (
								<li key={item} className="border-l border-white/15 pl-3.5">
									{item}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
