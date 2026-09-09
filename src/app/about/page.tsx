import type { Metadata } from "next";
import { Timeline } from "@/components/about/Timeline";
import { Section } from "@/components/ui/Section";
import { experience } from "@/content/experience";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — background, experience and how I work.`,
};

export default function AboutPage() {
  return (
    <>
      <Section className="pb-8" title="About">
        <div className="max-w-2xl space-y-4 text-muted">
          <p>
            TODO: open with who you are and what you build. Keep it to two or
            three sentences.
          </p>
          <p>
            TODO: a paragraph on how you work — the problems you like, the tools
            you reach for, what you are looking for next.
          </p>
        </div>
      </Section>

      <Section title="Experience" className="pt-0">
        <Timeline items={experience} />
      </Section>
    </>
  );
}
