import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-start py-32">
      <p className="text-sm text-muted">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-3 text-muted">
        The link may be out of date, or the page may have moved.
      </p>
      <ButtonLink href="/" className="mt-8">
        Back home
      </ButtonLink>
    </Container>
  );
}
