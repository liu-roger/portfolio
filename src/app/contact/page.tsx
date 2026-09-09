import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { Section } from "@/components/ui/Section";
import { site, socialLinks } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}.`,
};

export default function ContactPage() {
  return (
    <Section
      title="Contact"
      description="Have a project, a role, or a question? Send a note and I'll reply."
    >
      <ContactForm />

      <div className="mt-12 border-t border-border pt-6 text-sm text-muted">
        <p>Find me elsewhere:</p>
        <ul className="mt-3 flex gap-4">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
