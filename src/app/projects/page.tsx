import type { Metadata } from "next";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { Section } from "@/components/ui/Section";
import { getAllProjects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects, with the problem, the approach and the outcome.",
};

export default function ProjectsPage() {
  return (
    <Section
      title="Projects"
      description="Selected work, newest first. Each one has a short write-up."
    >
      <ProjectGrid projects={getAllProjects()} />
    </Section>
  );
}
