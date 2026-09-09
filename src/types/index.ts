export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  /** Highlighted on the home page. */
  featured?: boolean;
  year: number;
  role: string;
  stack: string[];
  highlights: string[];
  links?: {
    live?: string;
    repo?: string;
  };
  /** Path under /public, e.g. "/projects/foo.png". */
  image?: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  start: string;
  end: string | "Present";
  location?: string;
  summary: string;
  achievements: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type NavItem = {
  href: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
};
