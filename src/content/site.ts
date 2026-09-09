import type { NavItem, SocialLink } from "@/types";

/**
 * Resolve the canonical origin, in priority order. An env var that exists but
 * is empty counts as unset — Vercel returns "" for a variable added without a
 * value, and `new URL("")` throws.
 *
 * The VERCEL_* fallbacks are bare domains with no protocol scheme, so one is
 * added here.
 */
function resolveSiteUrl(): string {
  const candidates = [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL,
    process.env.NEXT_PUBLIC_VERCEL_URL,
  ];

  for (const candidate of candidates) {
    const value = candidate?.trim();
    if (!value) continue;
    const absolute = /^https?:\/\//.test(value) ? value : `https://${value}`;
    return absolute.replace(/\/+$/, "");
  }

  return "http://localhost:3000";
}

/**
 * Single source of truth for site-wide copy, links and SEO defaults.
 * Replace the placeholder values below with your own.
 */
export const site = {
  name: "Roger Liu",
  role: "Software Engineer",
  /** Used in <title> templates and the footer. */
  shortDescription: "Software engineer building fast, thoughtful web products.",
  description:
    "Portfolio of Roger Liu — software engineer. Selected projects, experience and ways to get in touch.",
  /** Absolute origin, no trailing slash. Used by metadataBase and the sitemap. */
  url: resolveSiteUrl(),
  location: "TODO: City, Country",
} as const;

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

/**
 * Deliberately no email address here — the contact form is the only way to
 * reach out, so the address is never published in the page source.
 */
export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/TODO" },
  { label: "LinkedIn", href: "https://linkedin.com/in/TODO" },
];
