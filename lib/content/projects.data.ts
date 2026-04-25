import type { Project } from "@/lib/project";

export const projects = [
	{
		id: "ucsm-frwc-2026",
		title: "UCSM FRWC 2026",
		subtitle: "University Fresher Welcome Voting System",
		description:
			"UCSM FRWC 2026 is a production web app for a university fresher welcome: students vote in real time for king, queen, and other categories during a short, high-energy event window.\nThe product replaces slow paper or improvised counts with one digital flow so turnout stays high and results stay visible to the crowd.\nStaff use an admin area to manage candidates, monitor participation, and correct issues without stopping the show.\nThe implementation targets a sharp traffic spike—consistent vote writes, duplicate protection, and quick updates to the public UI—not a low-traffic brochure site.\nIt runs on a TypeScript React front end, an Express and Prisma API on PostgreSQL, and Docker with Nginx; the live run handled hundreds of concurrent voters with no downtime.",
		tags: ["Full-stack", "Real-time", "PostgreSQL", "Docker", "Event"],
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
		subtitle: "University Social Network",
		description:
			"UniVibe is a campus social network delivered as three parts: a Laravel API, a React SPA for students, and a second React SPA for administrators.\nPostgreSQL holds application data; Passport cover API and SPA-style auth, and Spatie permissions model roles as features accumulate.\nAn optional Docker Compose stack puts Nginx in front so `/`, `/admin/`, and `/api/` can share one host, which keeps CORS, cookies, and large uploads simpler for both clients.\nRealtime can be added with Laravel Reverb or Pusher when feeds or notifications need push-style updates.\nI led architecture and integration across the repos—from schema and auth to proxy routing and how each app is run locally or in containers.",
		tags: ["Full-stack", "Laravel", "React", "PostgreSQL", "Docker", "Lead"],
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
		subtitle: "Learning Management System",
		description:
			"i-LMS is a compact learning management system—similar in goals to Moodle or Canvas but scoped so the codebase stays approachable for teaching or extension.\nPublic visitors browse course marketing content; signed-in students progress through chapters, upload assignments, sit exams, and see marks tied to their enrollment.\nInstructors and admins use a dashboard to maintain users, course structure, question banks, and announcements.\nThe data model is course-centric: enrollment and per-student progress live together on a pivot so exam attempts and scores never float in ambiguous many-to-many joins.\nThe app is a Laravel 11 monolith with Blade, Tailwind, Alpine, Flowbite, and Vite, Laravel Breeze for auth, and SQLite by default with room to swap databases via configuration.",
		tags: ["Laravel 11", "Blade", "Tailwind", "Breeze", "SQLite", "Eloquent"],
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
] satisfies Project[];
