import type { Project } from "@/types";

/**
 * Project data. Each entry becomes a card on /projects and a statically
 * generated detail page at /projects/[slug].
 */
export const projects: Project[] = [
  {
    slug: "placeholder-project-one",
    title: "Placeholder Project One",
    summary:
      "One sentence on what this project is and why it mattered.",
    description:
      "A longer paragraph for the detail page: the problem, the constraints you worked under, the approach you took, and the outcome. Two to four sentences is usually enough.",
    featured: true,
    year: 2025,
    role: "Design & engineering",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    highlights: [
      "Describe a concrete result, ideally with a number.",
      "Describe a technical decision and its trade-off.",
      "Describe something you learned or shipped end to end.",
    ],
    links: {
      live: "https://example.com",
      repo: "https://github.com/TODO/placeholder-project-one",
    },
  },
  {
    slug: "placeholder-project-two",
    title: "Placeholder Project Two",
    summary: "One sentence on what this project is and why it mattered.",
    description:
      "A longer paragraph for the detail page: the problem, the constraints you worked under, the approach you took, and the outcome.",
    featured: true,
    year: 2024,
    role: "Backend engineering",
    stack: ["Python", "FastAPI", "Docker"],
    highlights: [
      "Describe a concrete result, ideally with a number.",
      "Describe a technical decision and its trade-off.",
    ],
    links: {
      repo: "https://github.com/TODO/placeholder-project-two",
    },
  },
  {
    slug: "placeholder-project-three",
    title: "Placeholder Project Three",
    summary: "One sentence on what this project is and why it mattered.",
    description:
      "A longer paragraph for the detail page: the problem, the constraints you worked under, the approach you took, and the outcome.",
    year: 2024,
    role: "Solo project",
    stack: ["React", "Node.js"],
    highlights: ["Describe a concrete result, ideally with a number."],
  },
];

export function getAllProjects(): Project[] {
  return [...projects].sort((a, b) => b.year - a.year);
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
