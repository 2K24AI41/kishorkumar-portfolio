import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
};

/**
 * Link to another website (spec §10.8): opens in a new tab, shows an
 * arrow icon, and tells screen reader users that it opens a new tab.
 * Always underlined so it is not identified by color alone.
 */
export function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-11 items-center gap-1 text-accent-highlight underline underline-offset-[3px] hover:text-text"
    >
      {children}
      <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.75} />
      <span className="sr-only"> (opens in new tab)</span>
    </a>
  );
}
