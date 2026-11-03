"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import type { NavItem } from "@/types/navigation";
import {
  MobileMenuButton,
  MobileMenuPanel,
} from "@/components/layout/MobileMenu";
import {
  useActiveSection,
  useScrolled,
} from "@/components/layout/useHeaderState";
import { useMobileMenu } from "@/components/layout/useMobileMenu";

type HeaderShellProps = {
  name: string;
  items: NavItem[];
};

/**
 * Sticky header (spec §8.1–8.3). Transparent at the top of the page; after
 * 24px of scrolling it gets a translucent surface, a light blur and a bottom
 * border. Desktop shows the inline nav; smaller screens get the menu button.
 */
export function HeaderShell({ name, items }: HeaderShellProps) {
  const scrolled = useScrolled(24);
  const menu = useMobileMenu();
  const activeId = useActiveSection(items.map((item) => item.id));
  const solid = scrolled || menu.open;

  return (
    <>
      <header
        className={`sticky top-0 z-(--z-header) border-b ${
          solid
            ? "border-border bg-surface/90 backdrop-blur-sm"
            : "border-transparent"
        }`}
      >
        <Container
          width="wide"
          className="flex min-h-16 items-center justify-between gap-6 lg:min-h-18"
        >
          <Link
            href="/"
            onClick={menu.closeFromLogo}
            className="inline-flex min-h-11 items-center text-body font-medium underline-offset-[3px] hover:underline"
          >
            {name}
          </Link>
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex gap-x-6">
              {items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={activeId === item.id ? "true" : undefined}
                    className="inline-flex min-h-11 items-center border-b-2 border-transparent text-small text-text-muted hover:text-text aria-[current=true]:border-accent aria-[current=true]:text-text"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <MobileMenuButton
            open={menu.open}
            setOpen={menu.setOpen}
            buttonRef={menu.buttonRef}
          />
        </Container>
      </header>
      <MobileMenuPanel
        open={menu.open}
        setOpen={menu.setOpen}
        panelRef={menu.panelRef}
        pendingFocusRef={menu.pendingFocusRef}
        items={items}
        activeId={activeId}
      />
    </>
  );
}
