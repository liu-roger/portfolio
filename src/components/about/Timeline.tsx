import { formatRange } from "@/lib/utils";
import type { ExperienceItem } from "@/types";

export function Timeline({ items }: { items: ExperienceItem[] }) {
  return (
    <ol className="space-y-8 border-l border-border pl-6">
      {items.map((item) => (
        <li key={`${item.company}-${item.start}`} className="relative">
          <span
            aria-hidden
            className="absolute -left-[1.8125rem] top-2 size-2 rounded-full bg-accent"
          />
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-medium">
              {item.role} · {item.company}
            </h3>
            <span className="text-sm text-muted">
              {formatRange(item.start, item.end)}
            </span>
          </div>
          {item.location && (
            <p className="text-sm text-muted">{item.location}</p>
          )}
          <p className="mt-2 text-muted">{item.summary}</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
            {item.achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
