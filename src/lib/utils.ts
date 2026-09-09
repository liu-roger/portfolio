/** Join conditional class names — a dependency-free `clsx`. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** "2024" or "2022 – Present" style ranges for the experience timeline. */
export function formatRange(start: string, end: string) {
  return `${start} – ${end}`;
}
