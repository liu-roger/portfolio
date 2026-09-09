# Portfolio website

Personal portfolio built with [Next.js 16](https://nextjs.org) (App Router),
TypeScript and Tailwind CSS v4.

## Getting started

```bash
npm run dev
```

Open http://localhost:3000.

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to your real
domain — it is used for metadata, Open Graph tags and the sitemap.

## Scripts

| Command         | What it does                                  |
| --------------- | --------------------------------------------- |
| `npm run dev`   | Dev server with hot reload                     |
| `npm run build` | Production build (typechecks and prerenders)   |
| `npm start`     | Serve the production build                     |
| `npm run lint`  | ESLint                                         |

## Architecture

```
src/
├── app/                        Routes (App Router)
│   ├── layout.tsx              Root layout: fonts, metadata, Header + Footer
│   ├── page.tsx                Home — hero, featured projects, skills
│   ├── about/page.tsx          About — bio + experience timeline
│   ├── projects/page.tsx       Project index
│   ├── projects/[slug]/        Project detail (statically generated)
│   ├── contact/page.tsx        Contact form
│   ├── contact/actions.ts      Server Action handling the form submission
│   ├── error.tsx               Error boundary
│   ├── loading.tsx             Route-level loading state
│   ├── not-found.tsx           404 page
│   ├── sitemap.ts              Generated /sitemap.xml
│   ├── robots.ts               Generated /robots.txt
│   └── globals.css             Tailwind import + design tokens
├── components/
│   ├── ui/                     Primitives: Container, Section, Button, Tag
│   ├── layout/                 Header (client, mobile nav), Footer
│   ├── home/                   Hero
│   ├── projects/               ProjectCard, ProjectGrid
│   ├── about/                  Timeline
│   └── contact/                ContactForm (client, useActionState)
├── content/                    ← edit these to make the site yours
│   ├── site.ts                 Name, role, nav, socials, SEO defaults
│   ├── projects.ts             Project entries + query helpers
│   ├── experience.ts           Work history
│   └── skills.ts               Skill groups
├── lib/                        cn(), formatRange(), contact form state
└── types/                      Shared TypeScript types
```

Everything is a Server Component except `Header` and `ContactForm`, which need
client state.

### Adding a project

Add an entry to `src/content/projects.ts`. The index page, the detail page at
`/projects/<slug>`, and the sitemap all pick it up automatically —
`generateStaticParams` prerenders one page per entry. Set `featured: true` to
surface it on the home page.

Because `dynamicParams = false` on the detail route, only slugs present at build
time are served; anything else returns a real 404.

### Design tokens

Colors live as CSS variables in `src/app/globals.css` (`--background`,
`--surface`, `--foreground`, `--muted`, `--border`, `--accent`), exposed to
Tailwind through `@theme inline` as `bg-surface`, `text-muted`, etc. Dark mode
follows `prefers-color-scheme`; change the palette in one place.

### Contact form

`ContactForm` calls the `submitContactForm` Server Action via `useActionState`.
The action validates the fields and includes a honeypot, but does not yet
deliver anything — wire up an email provider (Resend, Postmark, …) where the
`TODO` is in `src/app/contact/actions.ts`, reading credentials from environment
variables.

## Placeholders to replace

Search the repo for `TODO` — the copy in `src/content/*` and the hero/about
paragraphs are all placeholders.
