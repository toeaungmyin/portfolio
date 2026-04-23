<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# 00 Project Context
You are building a modern developer portfolio using:
- Next.js (App Router), React (functional components), TypeScript (strict mode)
- Tailwind CSS (utility-first styling), shadcn/ui (component system), motion.dev

## Core Goals
- Clean, minimal, professional UI. High performance (Lighthouse optimized).
- Reusable component architecture with a scalable folder structure.

---

# 01 Code Standards
- Always use TypeScript with strict types (no `any`), prefer interfaces over type aliases.
- Split logic into reusable hooks and keep functions small and pure.
- Max file length: 300 lines. One component per file (unless tightly coupled).
- Use absolute imports (`@/`).
- Always handle edge cases and avoid silent failures.

---

# 02 Portfolio Source of Truth
The portfolio must be generated using the following files:

## Structure Definition (/idea/structure.md)
Defines page layout, section order, UI/UX design ideas, and visual behavior.

## Content Source (/idea/resume.md)
Provides ALL actual content (skills, projects, experience, contact info).

## Rules for Agent
1. **Separation of Concerns:** NEVER invent content. ALWAYS pull content from `resume.md`. ALWAYS follow layout from `structure.md`.
2. **Mapping Logic:**
   - Hero section → use name + summary from resume.md
   - Skills section → map skills categories directly
   - Projects section → map projects exactly
   - Experience section → map work experience
3. **Consistency:** Ensure `structure.md` and `resume.md` stay synchronized.
4. **Restrictions:**
   - Do NOT duplicate content unnecessarily.
   - Do NOT create fake projects or skills.
   - Do NOT dynamically import or parse `.md` files into the application runtime.
