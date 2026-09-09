import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { getAllProjects, getProjectBySlug } from "@/content/projects";

// The project list is fixed at build time — unknown slugs 404 instead of
// being rendered on demand.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary },
  };
}

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <article className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <Link href="/projects" className="text-sm text-muted hover:text-foreground">
          ← All projects
        </Link>

        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-3 text-lg text-muted">{project.summary}</p>

        <dl className="mt-8 grid gap-6 border-y border-border py-6 sm:grid-cols-3">
          <div>
            <dt className="text-xs uppercase tracking-wide text-muted">Year</dt>
            <dd className="mt-1 text-sm">{project.year}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-muted">Role</dt>
            <dd className="mt-1 text-sm">{project.role}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-muted">Stack</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </dd>
          </div>
        </dl>

        <div className="mt-10 space-y-4">
          <h2 className="text-xl font-medium tracking-tight">Overview</h2>
          <p className="text-muted">{project.description}</p>
        </div>

        {project.highlights.length > 0 && (
          <div className="mt-10 space-y-4">
            <h2 className="text-xl font-medium tracking-tight">Highlights</h2>
            <ul className="list-disc space-y-2 pl-5 text-muted">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        )}

        {(project.links?.live || project.links?.repo) && (
          <div className="mt-10 flex flex-wrap gap-3">
            {project.links.live && (
              <ButtonLink href={project.links.live} external>
                Visit site
              </ButtonLink>
            )}
            {project.links.repo && (
              <ButtonLink href={project.links.repo} external variant="secondary">
                Source code
              </ButtonLink>
            )}
          </div>
        )}
      </Container>
    </article>
  );
}
