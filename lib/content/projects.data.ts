import type { Project } from "@/lib/project";

export const projects = [
	{
		id: "ucsm-frwc-2026",
		title: "UCSM FRWC 2026",
		subtitle: "University Fresher Welcome Voting System",
		description:
			"The UCSM FRWC 2026 is a high-performance, real-time voting application engineered for the Fresher Welcome event at the University of Computer Studies, Mandalay, held on January 6, 2026. Designed to replace traditional paper ballots with a seamless digital flow, the system supported over 300 students and faculty members during a high-energy live event window. The platform featured a secure authentication system via unique voting tickets and a robust administrative suite that allowed staff to manage candidates and monitor live participation without interrupting the ceremony.To meet an aggressive two-week development timeline—moving from initial conception in late December to a production-ready launch in the first week of January—the workflow integrated AI agents to accelerate coding, debugging, and architectural planning. This rapid-response approach was backed by a technical stack featuring React and TypeScript for the frontend, with Node.js, Express, and Prisma (PostgreSQL) powering the backend. The entire infrastructure was containerized with Docker and Docker Compose and deployed on a Contabo VPS using Nginx, ensuring a stable, zero-downtime experience during the peak traffic spikes of the live event.",
		tags: ["Full-stack", "Real-time", "PostgreSQL", "Docker", "Event"],
		status: "live",
		dateRange: "Dec 2025 – Jan 2026",
		links: [
			{ label: "Public", href: "https://ucsmfrwc.toeaungmyin.me" },
			{ label: "Admin", href: "https://ucsmfrwc.toeaungmyin.me/admin" },
			{ label: "Code", href: "https://github.com/toeaungmyin/ucsm-frwc-2026" },
		],
		liveDemo: {
			intro: "Scan or test with the sample ticket on the public app, or use the admin login for the dashboard.",
			ticketImage: "/projects/ucsm-frwc-2026/test-voting-ticket.png",
			ticketImageAlt: "Sample voting ticket (QR) for the live app",
			ticketHint: "Scan the ticket to vote",
			adminHint: "Sign in on the live site (admin / staff area) with:",
			adminUsername: "admin",
			adminPassword: "password",
		},
		stack: {
			frontend: [
				"React",
				"TypeScript",
				"Vite",
				"Tailwind CSS",
				"Flowbite",
				"TanStack Query",
				"TanStack Router",
				"React Hook Form",
				"Zod",
				"Zustand",
				"Axios",
			],
			backend: [
				"Node.js",
				"Express",
				"TypeScript",
				"Prisma",
				"PostgreSQL",
				"JWT",
				"Helmet",
				"Zod",
				"Vercel Blob",
			],
			devops: ["Docker", "Docker Compose", "Nginx"],
		},
		coverImage: "/projects/ucsm-frwc-2026/cover.jpg",
		gallery: [
			{
				src: "/projects/ucsm-frwc-2026/ucsm-frwc-dashboard.png",
				alt: "Live dashboard",
				caption: "Real-time results and event monitoring in the staff view",
			},
			{
				src: "/projects/ucsm-frwc-2026/ucsm-frwc-voting-statistics.png",
				alt: "Voting statistics",
				caption: "Category and turnout breakdowns during the event",
			},
			{
				src: "/projects/ucsm-frwc-2026/ucsm-frwc-mobile-home.png",
				alt: "Voting home",
				caption: "Mobile entry and category selection",
				layout: "mobile",
			},
			{
				src: "/projects/ucsm-frwc-2026/ucsm-frwc-mobile-candidate.png",
				alt: "Candidate view",
				caption: "Mobile candidate detail and vote action",
				layout: "mobile",
			},
		],
	},
	{
		id: "univibe",
		title: "UniVibe",
		subtitle: "University Social Network",
		description:
			"UniVibe is a comprehensive campus social platform developed by a collaborative four-member team as a core academic project. Modeled after industry-leading social networks, the system is architected as a decoupled ecosystem featuring a centralized Laravel API server and two specialized React-based Progressive Web Apps (PWAs) for students and administrators. The client-side experience focuses on high engagement, featuring a dynamic News Feed with real-time reactions and comments, a private Real-Time Chat system, and integrated Push Notifications for seamless updates. To maintain community standards, the platform includes a robust Profile Management suite and a dedicated Reporting System for user-generated content.The Admin Dashboard serves as the command center for platform health, providing tools for real-time monitoring and user management. This includes advanced Report Analysis workflows where administrators can issue warnings or enact bans on users and posts to ensure a safe campus environment. The entire infrastructure is designed for streamlined deployment, utilizing Docker Compose and Nginx to manage proxy routing across the API and both PWAs, simplifying authentication and CORS management across the platform.",
		tags: ["Full-stack", "Laravel", "React", "PostgreSQL", "Docker", "Team Project"],
		status: "archived",
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
