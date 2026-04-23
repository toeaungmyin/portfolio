export type Post = {
	slug: string;
	title: string;
	excerpt: string;
	date: string;
	tag: string;
};

export const posts: Post[] = [
	{
		slug: "architecting-multi-tenant-systems",
		title: "Architecting Multi-Tenant Systems",
		excerpt:
			"A deep dive into data isolation strategies and shared infrastructure for scalable SaaS applications.",
		date: "Nov 2025",
		tag: "Architecture",
	},
	{
		slug: "real-time-concurrency-nodejs",
		title: "Real-time Concurrency with Node.js",
		excerpt:
			"Handling 300+ concurrent users with zero downtime: Lessons learned from the UCSM FRWC project.",
		date: "Jan 2026",
		tag: "Performance",
	},
	{
		slug: "mastering-laravel-backend-logic",
		title: "Mastering Laravel Backend Logic",
		excerpt:
			"Best practices for building modular and maintainable backend services with clean code principles.",
		date: "Feb 2026",
		tag: "Laravel",
	},
];
