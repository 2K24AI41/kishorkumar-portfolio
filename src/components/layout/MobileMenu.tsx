"use client";

import { Menu, X } from "lucide-react";
import type { NavItem } from "@/types/navigation";
import type { MobileMenuState } from "@/components/layout/useMobileMenu";

const PANEL_ID = "mobile-menu";

/** The Menu / X button, shown below 1024px. Lives inside the header. */
export function MobileMenuButton({
  open,
  setOpen,
  buttonRef,
}: Pick<MobileMenuState, "open" | "setOpen" | "buttonRef">) {
  const Icon = open ? X : Menu;
  return (
    <button
      ref={buttonRef}
      type="button"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      aria-controls={PANEL_ID}
      onClick={() => setOpen(!open)}
      className="-mr-2 inline-flex size-12 items-center justify-center rounded-md hover:bg-surface-elevated lg:hidden"
    >
      <Icon aria-hidden="true" size={24} strokeWidth={1.75} />
    </button>
  );
}

type MobileMenuPanelProps = Pick<
  MobileMenuState,
  "open" | "setOpen" | "panelRef" | "pendingFocusRef"
> & {
  items: NavItem[];
  activeId: string | null;
};

/**
 * The overlay panel. It must be rendered next to the header, not inside it:
 * the header's backdrop blur would otherwise become the containing block for
 * this fixed-position panel and collapse it.
 */
export function MobileMenuPanel({
  open,
  setOpen,
  panelRef,
  pendingFocusRef,
  items,
  activeId,
}: MobileMenuPanelProps) {
  return (
    <div
      ref={panelRef}
      id={PANEL_ID}
      hidden={!open}
      className="fixed inset-x-0 top-(--header-height) bottom-0 z-(--z-menu) overflow-y-auto bg-surface-elevated lg:hidden"
    >
      <nav aria-label="Primary">
        <ul className="px-4 py-4 md:px-6">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={activeId === item.id ? "true" : undefined}
                onClick={() => {
                  pendingFocusRef.current = item.id;
                  setOpen(false);
                }}
                className="flex min-h-12 items-center border-l-2 border-transparent pl-4 text-body-lg aria-[current=true]:border-accent"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
