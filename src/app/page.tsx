import { Hero } from "@/components/home/Hero";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { getFeaturedProjects } from "@/content/projects";
import { skills } from "@/content/skills";
import Link from "next/link";

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      <Hero />

      <Section
        title="Selected work"
        description="A few projects worth talking about."
        action={
          <Link href="/projects" className="text-sm text-muted hover:text-foreground">
            All projects →
          </Link>
        }
      >
        <ProjectGrid projects={featured} />
      </Section>

      <Section title="What I work with">
        <dl className="grid gap-8 sm:grid-cols-3">
          {skills.map((group) => (
            <div key={group.category}>
              <dt className="text-sm font-medium">{group.category}</dt>
              <dd className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Section>
    </>
  );
}
