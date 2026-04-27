const icon = (name: string) => `/icons/${name}` as const;

export type SkillIconItem = {
	id: string;
	name: string;
	iconSrc: string;
};

const SKILL_ICONS: Readonly<SkillIconItem[]> = [
	{ id: "javascript", name: "JavaScript", iconSrc: icon("js.png") },
	{ id: "typescript", name: "TypeScript", iconSrc: icon("ts.png") },
	{ id: "python", name: "Python", iconSrc: icon("python.png") },
	{ id: "php", name: "PHP", iconSrc: icon("php.png") },
	{ id: "html5", name: "HTML5", iconSrc: icon("html5.png") },
	{ id: "css3", name: "CSS3", iconSrc: icon("css3.png") },
	{ id: "react", name: "React.js", iconSrc: icon("react.png") },
	{ id: "nextjs", name: "Next.js", iconSrc: icon("nextjs.png") },
	{ id: "tailwind", name: "Tailwind CSS", iconSrc: icon("tailwind.png") },
	{ id: "nodejs", name: "Node.js", iconSrc: icon("node.png") },
	{ id: "express", name: "Express.js", iconSrc: icon("express.svg") },
	{ id: "laravel", name: "Laravel", iconSrc: icon("laravel.png") },
	{ id: "socketio", name: "WebSockets", iconSrc: icon("socketio.svg") },
	{ id: "docker", name: "Docker", iconSrc: icon("docker.png") },
	{ id: "nginx", name: "Nginx", iconSrc: icon("nginx.png") },
	{ id: "linux", name: "Linux", iconSrc: icon("linux.png") },
	{ id: "aws", name: "AWS", iconSrc: icon("aws.png") },
	{ id: "git", name: "Git", iconSrc: icon("git.png") },
	{ id: "github", name: "GitHub", iconSrc: icon("github.png") },
	{ id: "postgres", name: "PostgreSQL", iconSrc: icon("postgres.png") },
	{ id: "mysql", name: "MySQL", iconSrc: icon("mysql.png") },
	{ id: "mongodb", name: "MongoDB", iconSrc: icon("mongodb.png") },
	{ id: "prisma", name: "Prisma ORM", iconSrc: icon("prisma.png") },
	{ id: "cursor", name: "Cursor", iconSrc: icon("cursor.png") },
] as const;

export function getSkillIconGridItems(): SkillIconItem[] {
	return [...SKILL_ICONS];
}
