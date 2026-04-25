export const faqItems = [
	{
		q: "What is your go-to full stack?",
		a: "On the product side I work in React and Next.js (TypeScript) with Tailwind for UI, paired with Node.js services—Express or similar—and PostgreSQL with Prisma when I need a strongly typed data layer. When the domain fits a more conventional server-rendered or API-heavy setup, I reach for Laravel. I design APIs and data models with the same rigor I apply to components and state: clear contracts, predictable error handling, and performance that holds up as usage grows.",
	},
	{
		q: "How do you keep quality high across the whole stack?",
		a: "I treat the UI and the server as one system. That means shared TypeScript types or strict contracts where it helps, meaningful tests where risk is high (not just coverage for its own sake), and CI that runs linting and build checks. I document APIs clearly—Swagger, Postman collections, or equivalent—so frontend and backend stay aligned. In multi-tenant or high-transaction work, I’m especially strict about data isolation, observability, and not shipping ambiguity across the stack.",
	},
	{
		q: "Are you open to full-time full stack roles?",
		a: "Yes. My coursework at the University of Computer Studies, Mandalay, completes in March 2026, and I can start full-time from then. Until then I’m open to internship or contract work where I can own features end to end. I bring about four years of freelance and professional experience shipping production systems, not just coursework.",
	},
	{
		q: "What full stack work have you done at scale?",
		a: "A concrete example is multi-tenant systems: I’ve been involved in designs where tenants must stay isolated end to end—database boundaries, access rules, and tenant-aware APIs—while the same infrastructure serves everyone efficiently. I’m comfortable working from the database and service layer through to the client, making sure the UX stays fast and the backend stays correct when load and tenant count both increase.",
	},
] as const;
