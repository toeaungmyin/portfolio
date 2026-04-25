import { person } from "./person";
import { projects } from "./projects.data";
import { experience, education } from "./career.data";

export const profile = {
	...person,
	projects,
	experience,
	education,
};
