/**
 * Curated stack for the portfolio Skills section (React Flow + mobile accordion): languages,
 * shipping frameworks, APIs, data, and delivery — trimmed of peripheral tools (e.g. Markdown, Sass).
 * Resume-specific detail stays in `profile.skills` in `lib/content/person`.
 */
export type PortfolioSkillBadge = { name: string; url: string };

const coreTech: PortfolioSkillBadge[] = [
	{
		name: "JavaScript",
		url: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
	},
	{
		name: "TypeScript",
		url: "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white",
	},
	{
		name: "Python",
		url: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
	},
	{
		name: "PHP",
		url: "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white",
	},
	{
		name: "Java",
		url: "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white",
	},
	{
		name: "HTML5",
		url: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
	},
	{
		name: "CSS3",
		url: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
	},
];

const frontendTech: PortfolioSkillBadge[] = [
	{
		name: "React",
		url: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
	},
	{
		name: "Next.js",
		url: "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white",
	},
	{
		name: "Tailwind CSS",
		url: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
	},
	{
		name: "Redux",
		url: "https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white",
	},
	{
		name: "Vite",
		url: "https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white",
	},
];

const backendTech: PortfolioSkillBadge[] = [
	{
		name: "Node.js",
		url: "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white",
	},
	{
		name: "Express.js",
		url: "https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white",
	},
	{
		name: "RESTful",
		url: "https://img.shields.io/badge/RESTful-276749?style=for-the-badge&logo=openapiinitiative&logoColor=white",
	},
	{
		name: "Laravel",
		url: "https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white",
	},
	{
		name: "Socket.io",
		url: "https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white",
	},
];

const databaseTech: PortfolioSkillBadge[] = [
	{
		name: "MySQL",
		url: "https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white",
	},
	{
		name: "PostgreSQL",
		url: "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white",
	},
	{
		name: "MongoDB",
		url: "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
	},
	{
		name: "Redis",
		url: "https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white",
	},
	{
		name: "Prisma",
		url: "https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white",
	},
];

const devopsTech: PortfolioSkillBadge[] = [
	{
		name: "Git",
		url: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white",
	},
	{
		name: "GitHub",
		url: "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white",
	},
	{
		name: "Docker",
		url: "https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white",
	},
	{
		name: "Linux",
		url: "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black",
	},
	{
		name: "Nginx",
		url: "https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white",
	},
	{
		name: "AWS",
		url: "https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-web-services&logoColor=white",
	},
];

/** Ordered for the portfolio grid: languages → frontend → backend → data → delivery */
export const portfolioTechBadges: PortfolioSkillBadge[] = [
	...coreTech,
	...frontendTech,
	...backendTech,
	...databaseTech,
	...devopsTech,
];

/** Grouped for hierarchy (React Flow) and mobile accordion */
export type PortfolioSkillCategory = {
	id: string;
	label: string;
	items: PortfolioSkillBadge[];
};

export const portfolioSkillCategories: PortfolioSkillCategory[] = [
	{ id: "core", label: "Languages & core", items: coreTech },
	{ id: "frontend", label: "Frontend", items: frontendTech },
	{ id: "backend", label: "Backend & APIs", items: backendTech },
	{ id: "data", label: "Data & storage", items: databaseTech },
	{ id: "delivery", label: "Delivery & platform", items: devopsTech },
];
