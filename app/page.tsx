import { Hatch } from "@/components/common/hatch";
import Hero from "@/components/sections/hero";
import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import FAQs from "@/components/sections/faqs";
import Contact from "@/components/sections/contact";

export default function Home() {
	return (
		<>
			<Hero />
			<Hatch />
			<Skills />
			<Hatch />
			<Experience />
			<Hatch />
			<Projects />
			<Hatch />
			<FAQs />
			<Hatch />
			<Contact />
			<Hatch />
		</>
	);
}
