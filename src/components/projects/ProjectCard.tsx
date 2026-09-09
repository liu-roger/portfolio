import Link from "next/link";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-medium tracking-tight">
          <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0">
            {project.title}
          </Link>
        </h3>
        <span className="shrink-0 text-xs text-muted">{project.year}</span>
      </div>

      <p className="mt-2 text-sm text-muted">{project.summary}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <li key={item}>
            <Tag>{item}</Tag>
          </li>
        ))}
      </ul>
    </article>
  );
}
