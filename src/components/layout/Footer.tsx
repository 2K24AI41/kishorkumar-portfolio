import { ArrowUp, Mail } from "lucide-react";
import type { ReactNode } from "react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { contact } from "@/content/contact";
import { footer } from "@/content/footer";
import { profile } from "@/content/profile";
import { visibleSections } from "@/lib/sections";

/**
 * The footer's plain text links: at least 44 x 44px (§12.1), muted, with a
 * 150ms color change on hover.
 */
const quietLink =
  "inline-flex min-h-11 min-w-11 items-center text-small text-text-muted transition-colors duration-(--duration-fast) ease-out hover:text-text";

/**
 * The email split at the "@", so a <wbr> can sit before it: if the address
 * ever has to wrap (large text, zoom), it breaks as "name" / "@domain" rather
 * than inside a word. The <wbr> adds no characters, so the visible text and
 * the link's accessible name are exactly the address. Without a usable "@"
 * the address is shown unsplit (the same guard as in Contact).
 */
const at = contact.email.indexOf("@");
const emailText: ReactNode =
  at < 1 ? (
    contact.email
  ) : (
    <>
      {contact.email.slice(0, at)}
      <wbr />
      {contact.email.slice(at)}
    </>
  );

/**
 * Site footer (docs/DESIGN_SPEC.md §8.4, §20.3). A Server Component with no
 * client JavaScript. It is rendered once, in the root layout, directly inside
 * <body>, so it is the page's only `contentinfo` landmark.
 *
 * - Brand: the decorative "KK" monogram (hidden from assistive technology, not
 *   a link), the name and one line.
 * - Navigation: built from the visible sections, like the header, so a hidden
 *   section never gets a link. Plain `#id` links, the same as the header.
 * - Contact links: the email (visible text, mailto) and GitHub and LinkedIn as
 *   the shared secondary Button, which handles the external-link rules (§10.8).
 * - A static three-dot divider echoing the hero illustration (decorative).
 * - The copyright line (build year) and "Back to top".
 *
 * Every link is at least 44 x 44px and uses the global focus ring. Nothing
 * animates; the only transitions are 150ms color changes on hover. Mobile
 * first: groups stacked (the nav links in two columns), two columns of groups
 * from `md`, three from `lg` with the contact group aligned right.
 */
export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container width="wide" className="py-12 md:py-16">
        {/* Column gutter (§7.3): 24px at desktop, 32px from 2xl. */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 2xl:gap-x-8">
          <div className="md:col-span-2 lg:col-span-1">
            {/* Round and 40px, so it reads as an identity mark, not a control. */}
            <span
              aria-hidden="true"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface-elevated font-sans text-body font-medium"
            >
              {footer.monogram}
            </span>
            <p className="mt-4 font-medium">{profile.name}</p>
            <p className="mt-1 text-small text-text-muted">{footer.tagline}</p>
          </div>

          {/* Two columns on phones, one from md. -my-3 pulls back the invisible
              part of the first and last 44px rows (14px text in a 44px box), so
              the visible gap to the next group matches the others. Each link
              keeps its full 44 x 44px box; the grid gap leaves room for it. */}
          <nav aria-label="Footer">
            <ul className="-my-3 grid grid-cols-2 gap-x-6 md:grid-cols-1">
              {visibleSections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className={quietLink}>
                    {section.navLabel}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* content-start: keep the rows together when the grid row is taller.
              -mt-3: same visual trim as the nav for the 44px email row.
              From lg: a two-column grid sized to its content and placed at the
              end of its column, so the group ends on the same line as the
              divider and "Back to top".
              role="list": Safari drops the list role (and so this name) from
              lists styled with list-style: none. */}
          <ul
            role="list"
            aria-label="Contact links"
            className="-mt-3 flex flex-wrap content-start gap-3 lg:grid lg:grid-cols-[auto_auto] lg:justify-self-end"
          >
            <li className="basis-full lg:col-span-2">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex min-h-11 max-w-full items-center gap-2 text-small [overflow-wrap:anywhere] text-accent-highlight underline underline-offset-[3px] transition-colors duration-(--duration-fast) ease-out hover:text-text"
              >
                <Mail
                  aria-hidden="true"
                  size={16}
                  strokeWidth={1.75}
                  className="shrink-0"
                />
                {/* In a span so the break hint stays inside one text run. */}
                <span>{emailText}</span>
              </a>
            </li>
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

        {/* Decorative: three nodes, the middle one highlighted like the
            illustration's signal path. */}
        <div aria-hidden="true" className="mt-10 flex items-center gap-2">
          <span className="h-px flex-1 bg-border" />
          <span className="size-2 rounded-full border border-border-strong bg-surface-elevated" />
          <span className="size-2 rounded-full border border-accent-highlight bg-accent" />
          <span className="size-2 rounded-full border border-border-strong bg-surface-elevated" />
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-small text-text-muted">
            © {footer.copyrightYear} {footer.copyrightHolder}
          </p>
          <a href="#top" className={`${quietLink} gap-2`}>
            <ArrowUp aria-hidden="true" size={16} strokeWidth={1.75} />
            Back to top
          </a>
        </div>
      </Container>
    </footer>
  );
}
