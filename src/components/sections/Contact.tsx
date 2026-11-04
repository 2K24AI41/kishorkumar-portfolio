import { Mail } from "lucide-react";
import type { ReactNode } from "react";
import { CopyEmailButton } from "@/components/sections/CopyEmailButton";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contact } from "@/content/contact";
import { getSection } from "@/lib/sections";

/** id of the email link, so the copy control can select it if copying fails. */
const EMAIL_LINK_ID = "contact-email";

/**
 * The address with one optional line-break hint before the "@". A <wbr> adds no
 * characters and forces nothing: on a narrow screen the address can wrap as
 * "name" / "@domain" instead of in the middle of a word, and on a wide screen
 * it stays on one line. The text, the link name and a selection are unchanged.
 */
function withBreakBeforeAt(address: string): ReactNode {
  const at = address.indexOf("@");
  if (at < 1) return address;
  return (
    <>
      {address.slice(0, at)}
      <wbr />
      {address.slice(at)}
    </>
  );
}

/**
 * Contact (spec §9.8, §20.3, D17): email only, no form. The address is large,
 * visible text with a mailto link, and it works without JavaScript. A small
 * client component adds a "Copy email address" button only when the browser can
 * copy. GitHub and LinkedIn are secondary buttons. The section itself is
 * server-rendered.
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
          <p className="mt-6">
            <a
              id={EMAIL_LINK_ID}
              href={`mailto:${contact.email}`}
              className="inline-flex min-h-11 max-w-full items-center gap-2 text-h3 [overflow-wrap:anywhere] text-accent-highlight underline underline-offset-[3px] hover:text-text"
            >
              <Mail
                aria-hidden="true"
                size={24}
                strokeWidth={1.75}
                className="shrink-0"
              />
              {/* In a span so the break hint stays inside one text run. */}
              <span>{withBreakBeforeAt(contact.email)}</span>
            </a>
          </p>
          {/* Fixed height, so nothing moves when the copy button appears. */}
          <div className="mt-2 flex min-h-11 flex-wrap items-center gap-x-4 gap-y-2">
            <CopyEmailButton email={contact.email} emailId={EMAIL_LINK_ID} />
          </div>
          <ul className="mt-6 flex flex-wrap gap-3">
            <li>
              <Button variant="secondary" href={contact.github} external>
                <GitHubIcon size={20} />
                GitHub
              </Button>
            </li>
            <li>
              <Button variant="secondary" href={contact.linkedin} external>
                <LinkedInIcon size={20} />
                LinkedIn
              </Button>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
