import { cn } from "@/lib/utils";
import { Container } from "./Container";

type SectionProps = {
  title?: string;
  description?: string;
  /** Rendered on the right of the heading row, e.g. a "View all" link. */
  action?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};

export function Section({
  title,
  description,
  action,
  className,
  children,
}: SectionProps) {
  return (
    <section className={cn("py-16 sm:py-20", className)}>
      <Container>
        {(title || action) && (
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              {title && (
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {title}
                </h2>
              )}
              {description && (
                <p className="mt-2 max-w-2xl text-muted">{description}</p>
              )}
            </div>
            {action}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
