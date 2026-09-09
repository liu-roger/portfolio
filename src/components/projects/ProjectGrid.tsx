import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/types";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return <p className="text-muted">No projects yet — check back soon.</p>;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {projects.map((project) => (
        <div key={project.slug} className="relative">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}
