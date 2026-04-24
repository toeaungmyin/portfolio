import type { Project } from "@/lib/project";

export const profile = {
	name: "TOE AUNG MYIN",
	role: "SOFTWARE ENGINEER",
	contact: {
		phones: ["+959 400 160 138", "+959 761 335 119"],
		email: "toeaungmyin.dev@gmail.com",
		address: "Thukha Wadi Housing Complex, Naypyidaw, Myanmar",
		github: "github.com/toeaungmyin",
		telegram: "t.me/toeaungmyin",
		linkedin: "linkedin.com/in/toe-aung-myin-140b453a7",
	},
	summary:
		"Software Engineer with 4 years of experience specializing in high-transaction, multi-tenant architectures. Experience in designing robust systems and scalable architectures focused on reliability and performance.",
	skills: {
		languages: [
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
		],
		frontend: [
			{
				name: "React.js",
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
				name: "HTML5",
				url: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
			},
			{
				name: "CSS3",
				url: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
			},
		],
		backend: [
			{
				name: "Node.js",
				url: "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white",
			},
			{
				name: "Express.js",
				url: "https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white",
			},
			{
				name: "Laravel",
				url: "https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white",
			},
			{
				name: "RESTful API Design",
				url: "https://img.shields.io/badge/REST_API-000000?style=for-the-badge&logo=airtable&logoColor=white",
			},
			{
				name: "WebSockets (Real-time)",
				url: "https://img.shields.io/badge/WebSockets-010101?style=for-the-badge&logo=socket.io&logoColor=white",
			},
		],
		infrastructure: [
			{
				name: "Docker & Docker Compose",
				url: "https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white",
			},
			{
				name: "Nginx",
				url: "https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white",
			},
			{
				name: "Linux",
				url: "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black",
			},
			{
				name: "CI/CD",
				url: "https://img.shields.io/badge/CI/CD-FFB000?style=for-the-badge&logo=githubactions&logoColor=white",
			},
			{
				name: "Automated Workflows",
				url: "https://img.shields.io/badge/Automated_Workflows-4EAA25?style=for-the-badge&logo=githubactions&logoColor=white",
			},
		],
		databases: [
			{
				name: "PostgreSQL",
				url: "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white",
			},
			{
				name: "MySQL",
				url: "https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white",
			},
			{
				name: "MongoDB",
				url: "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
			},
			{
				name: "Prisma ORM",
				url: "https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white",
			},
		],
		tools: [
			{
				name: "Git/GitHub/GitLab",
				url: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white",
			},
			{
				name: "Figma",
				url: "https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white",
			},
		],
	},
	expertise: [
		"Strong problem-solving and analytical thinking",
		"Fast learner with ability to adapt to new technologies",
		"Strong interest in building scalable backend systems, secure servers, and robust software architecture",
		"English communication Intermediate",
	],
	projects: [
		{
			id: "ucsm-frwc-2026",
			title: "UCSM FRWC 2026",
			subtitle: "Live voting for a university fresher welcome",
			description:
				"UCSM FRWC 2026 is a production web app for a university fresher welcome: students vote in real time for king, queen, and other categories during a short, high-energy event window.\nThe product replaces slow paper or improvised counts with one digital flow so turnout stays high and results stay visible to the crowd.\nStaff use an admin area to manage candidates, monitor participation, and correct issues without stopping the show.\nThe implementation targets a sharp traffic spike—consistent vote writes, duplicate protection, and quick updates to the public UI—not a low-traffic brochure site.\nIt runs on a TypeScript React front end, an Express and Prisma API on PostgreSQL, and Docker with Nginx; the live run handled hundreds of concurrent voters with no downtime.",
			tags: ["Full-stack", "Real-time", "PostgreSQL", "Docker", "Event"],
			metrics: [
				{ label: "Load", value: "300+ concurrent" },
				{ label: "Reliability", value: "Zero downtime" },
				{ label: "Latency", value: "<1s votes" },
			],
			status: "live",
			dateRange: "Dec 2025 – Jan 2026",
			links: [
				{ label: "Live", href: "https://ucsmfrwc.toeaungmyin.me" },
				{ label: "Source", href: "https://github.com/toeaungmyin/ucsm-frwc-2026" },
			],
			stack: {
				frontend: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "TanStack Query"],
				backend: ["Node.js", "Express 5", "Prisma", "PostgreSQL", "JWT"],
				devops: ["Docker", "Docker Compose", "Nginx"],
			},
			problem:
				"In-person events need fast, fair digital voting at high concurrency without duplicate votes or stale counts.",
			solution:
				"Full-stack on a small team: Express and Prisma on PostgreSQL, React client with TanStack Query for live counts, Zod-backed forms, and Docker/Nginx for deploy. Admin flows for candidates and monitoring. Ran at 300+ concurrent users with zero downtime and sub-second vote handling.",
			coverImage: "/projects/ucsm-frwc-2026/cover.jpg",
			gallery: [
				{
					src: "/projects/ucsm-frwc-2026/screen1.jpg",
					alt: "Voting UI",
					caption: "Mobile voting flow",
					layout: "mobile",
				},
			],
		},
		{
			id: "univibe",
			title: "UniVibe",
			subtitle: "Student social network — Laravel API + two React apps",
			description:
				"UniVibe is a campus social network delivered as three parts: a Laravel 10 API, a React SPA for students, and a second React SPA for administrators.\nPostgreSQL holds application data; Passport and Sanctum cover API and SPA-style auth, and Spatie permissions model roles as features accumulate.\nAn optional Docker Compose stack puts Nginx in front so `/`, `/admin/`, and `/api/` can share one host, which keeps CORS, cookies, and large uploads simpler for both clients.\nRealtime can be added with Laravel Reverb or Pusher when feeds or notifications need push-style updates.\nI led architecture and integration across the repos—from schema and auth to proxy routing and how each app is run locally or in containers.",
			tags: ["Full-stack", "Laravel", "React", "PostgreSQL", "Docker", "Lead"],
			metrics: [
				{ label: "Role", value: "Project lead" },
				{ label: "Apps", value: "API + 2 SPAs" },
				{ label: "Data", value: "PostgreSQL" },
			],
			status: "shipped",
			links: [
				{ label: "API", href: "https://github.com/toeaungmyin/univibe-server" },
				{ label: "User", href: "https://github.com/toeaungmyin/univibe-user" },
				{ label: "Admin", href: "https://github.com/toeaungmyin/univibe-admin" },
			],
			stack: {
				frontend: ["React 18", "Redux Toolkit", "Material Tailwind", "Chart.js", "CRA"],
				backend: ["Laravel 10", "PHP 8.2", "Passport & Sanctum", "Spatie Permission", "PostgreSQL"],
				devops: ["Docker Compose", "Nginx"],
			},
			problem:
				"A campus product needs one coherent auth and API story across a public app, an admin app, and large uploads—without a tangle of cross-origin config.",
			solution:
				"Led architecture across repos (API, user SPA, admin SPA, Nginx config): Laravel 10 with Vite, Passport, Sanctum, and Spatie on PostgreSQL; React 18 CRAs with Redux Toolkit. Docker Compose + Nginx routes `/`, `/admin/`, and `/api/` so the full stack can share one origin; optional Reverb/Pusher for realtime.",
			coverImage: "/projects/univibe/user.png",
			gallery: [
				{
					src: "/projects/univibe/admin.png",
					alt: "Admin app",
					caption: "Dashboard at `/admin/`",
				},
			],
		},
		{
			id: "i-lms",
			title: "i-LMS",
			subtitle: "Laravel LMS — courses, roles, exams",
			description:
				"i-LMS is a compact learning management system—similar in goals to Moodle or Canvas but scoped so the codebase stays approachable for teaching or extension.\nPublic visitors browse course marketing content; signed-in students progress through chapters, upload assignments, sit exams, and see marks tied to their enrollment.\nInstructors and admins use a dashboard to maintain users, course structure, question banks, and announcements.\nThe data model is course-centric: enrollment and per-student progress live together on a pivot so exam attempts and scores never float in ambiguous many-to-many joins.\nThe app is a Laravel 11 monolith with Blade, Tailwind, Alpine, Flowbite, and Vite, Laravel Breeze for auth, and SQLite by default with room to swap databases via configuration.",
			tags: ["Laravel 11", "Blade", "Tailwind", "Breeze", "SQLite", "Eloquent"],
			metrics: [
				{ label: "Stack", value: "Laravel 11" },
				{ label: "UI", value: "Blade + Vite" },
				{ label: "DB", value: "SQLite" },
			],
			status: "shipped",
			links: [{ label: "Source", href: "https://github.com/toeaungmyin/i-lms-web" }],
			stack: {
				frontend: ["Blade", "Tailwind CSS", "Alpine.js", "Flowbite", "Vite"],
				backend: ["Laravel 11", "Laravel Breeze", "Eloquent", "SQLite", "PHP 8.2"],
				devops: ["Laravel Pint", "PHPUnit"],
			},
			problem:
				"Teaching software needs clear public, student, and staff areas with enrollment, progress, and exams modeled without redundant tables.",
			solution:
				"Solo Laravel 11 app: Breeze auth with verification, Admin vs Client controllers and role middleware, Blade with Tailwind, Alpine, Flowbite, and Vite. Course-centric schema (chapters, assignments, question bank) with enrollment and progress on `course_has_students`; exams scoped per enrollment row; events for announcements. Pint and PHPUnit for quality.",
			coverImage: "/projects/i-lms/landing-page.png",
			gallery: [
				{
					src: "/projects/i-lms/admin-dashboard.png",
					alt: "Admin dashboard",
					caption: "Staff course and user management",
				},
			],
		},
	] satisfies Project[],
	experience: [
		{
			id: "solaratek",
			type: "work",
			title: "Backend Developer",
			organization: "SolaraTek Co., Ltd.",
			location: "Yangon, Myanmar",
			duration: "Apr 2025 – Feb 2026",
			description: [
				"Designed a complex multi-tenant architecture, ensuring data isolation and scalability.",
				"Optimized high-traffic transactional backends with integrated monitoring for peak reliability.",
			],
		},
		{
			id: "freelance",
			type: "work",
			title: "Freelance Full-Stack Developer",
			organization: "Remote",
			location: "Remote",
			duration: "2022 – 2025",
			description: [
				"Delivered 3+ end-to-end full-stack solutions for local clients using Node.js, Laravel, and React.",
				"Automated development tasks through custom scripting and infrastructure-as-code principles.",
			],
		},
		{
			id: "shwe-padauk",
			type: "work",
			title: "Junior Web Developer",
			organization: "Shwe Padauk Taxi Service",
			location: "Remote",
			duration: "2022",
			description: [
				"Engineered backend services to manage real-time driver data and fee calculations for a 500+ user fleet.",
				"Developed a driver wallet system to manage point-based transactions, earnings tracking, and credit balances.",
			],
		},
	],
	education: [
		{
			id: "ucsm",
			type: "education",
			title: "Bachelor of Computer Science",
			organization: "University of Computer Studies, Mandalay",
			location: "Mandalay, Myanmar",
			duration: "2019 – Present",
			description: [
				"Major: Software Engineering",
				"Coursework completes Mar 2026; degree expected 2027 — available full-time from coursework completion",
			],
		},
	],
};
