import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <p className="text-sm text-muted">{site.role}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          {site.shortDescription}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          TODO: two sentences on what you work on, what you care about, and
          what you are looking for next.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/projects">View projects</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Get in touch
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
