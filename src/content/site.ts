import type { NavItem, SocialLink } from "@/types";

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
  /** No trailing slash. Also used as metadataBase and in the sitemap. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  email: "rogerliu80@gmail.com",
  location: "TODO: City, Country",
} as const;

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/TODO" },
  { label: "LinkedIn", href: "https://linkedin.com/in/TODO" },
  { label: "Email", href: `mailto:${site.email}` },
];
