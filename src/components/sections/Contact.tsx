import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contact } from "@/content/contact";
import { getSection } from "@/lib/sections";

/**
 * Contact (spec §9.8, D17): email only. The address is shown as visible text
 * with a mailto link, plus GitHub and LinkedIn. There is no form.
 */
export function Contact() {
  const section = getSection("contact");
  if (!section) return null;

  return (
    <section
      id={section.id}
      aria-labelledby="contact-heading"
      className="pt-8 pb-16 md:pt-10 md:pb-20 lg:pt-14 lg:pb-28 2xl:pt-16 2xl:pb-32"
    >
      <Container>
        <SectionHeading
          index={section.index}
          label={section.navLabel}
          title={section.title}
          headingId="contact-heading"
        />
        <div className="mt-8 max-w-(--container-prose) md:mt-10 lg:mt-12">
          <p>{contact.invitation}</p>
          <ul className="mt-6 space-y-1">
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex min-h-11 max-w-full items-center gap-2 [overflow-wrap:anywhere] text-accent-highlight underline underline-offset-[3px] hover:text-text"
              >
                <Mail
                  aria-hidden="true"
                  size={20}
                  strokeWidth={1.75}
                  className="shrink-0"
                />
                {contact.email}
              </a>
            </li>
            <li>
              <ExternalLink href={contact.github}>GitHub</ExternalLink>
            </li>
            <li>
              <ExternalLink href={contact.linkedin}>LinkedIn</ExternalLink>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
