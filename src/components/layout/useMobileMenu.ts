"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Shared state for the mobile menu (spec §8.3). While open: focus is trapped
 * between the menu button and the panel links, Esc closes and returns focus to
 * the button, and page scroll is locked.
 */
export function useMobileMenu() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  /** Section id to focus once the menu has finished closing (see cleanup). */
  const pendingFocusRef = useRef<string | null>(null);
  /** True when the menu is closing because the logo was clicked. */
  const restoreButtonFocusRef = useRef(false);

  useEffect(() => {
    if (!open) return;

    const button = buttonRef.current;
    const panel = panelRef.current;
    if (!button || !panel) return;

    // The page behind the menu is made inert so keyboard and screen reader
    // users cannot reach it while the overlay is open.
    const main = document.getElementById("main");
    main?.setAttribute("inert", "");
    document.body.style.overflow = "hidden";
    panel.querySelector<HTMLElement>("a")?.focus();

    // If focus lands anywhere outside the menu (for example the logo or the
    // skip link), send it back into the panel.
    const onFocusIn = (event: FocusEvent) => {
      const target = event.target;
      if (
        target instanceof Node &&
        target !== button &&
        !panel.contains(target)
      ) {
        panel.querySelector<HTMLElement>("a")?.focus();
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        button.focus();
        return;
      }
      if (event.key !== "Tab") return;
      const stops = [
        button,
        ...Array.from(panel.querySelectorAll<HTMLElement>("a")),
      ];
      const first = stops[0];
      const last = stops[stops.length - 1];
      const current = document.activeElement;
      if (event.shiftKey && current === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && current === last) {
        event.preventDefault();
        first.focus();
      }
    };

    // If the window grows to desktop width, the desktop nav takes over: close
    // the menu so the scroll lock and the inert state are released. Moving
    // focus is done by the always-on effect below.
    const desktop = window.matchMedia("(min-width: 64rem)");
    const onResize = () => {
      if (desktop.matches) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("focusin", onFocusIn);
    desktop.addEventListener("change", onResize);
    return () => {
      main?.removeAttribute("inert");
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("focusin", onFocusIn);
      desktop.removeEventListener("change", onResize);

      // Choosing a link: move focus to that section now that the page is no
      // longer inert and the focus guard is gone (spec §8.3).
      const pendingId = pendingFocusRef.current;
      pendingFocusRef.current = null;
      const target = pendingId ? document.getElementById(pendingId) : null;
      if (target) {
        target.tabIndex = -1;
        target.focus({ preventScroll: true });
      }

      // Logo click: the click moves focus out of the menu, so put it on the
      // menu button once the guard is gone. Otherwise it would fall to <body>.
      if (restoreButtonFocusRef.current) {
        restoreButtonFocusRef.current = false;
        button.focus();
      }
    };
  }, [open]);

  // Crossing the desktop breakpoint hides one navigation and shows the other:
  //  - desktop -> mobile: the inline nav disappears. Focus that was on one of
  //    its links goes to the menu button (the menu is not opened).
  //  - mobile -> desktop: the menu button and the panel disappear, whether the
  //    menu is open or closed. Focus that was on either goes to the first
  //    desktop nav link.
  // The browser may already have dropped focus to <body> when the media query
  // fires, so we remember where focus was instead of reading
  // document.activeElement at that moment.
  useEffect(() => {
    const nav = document.querySelector<HTMLElement>(
      'header nav[aria-label="Primary"]',
    );
    const button = buttonRef.current;
    const panel = panelRef.current;
    if (!nav || !button || !panel) return;
    const desktop = window.matchMedia("(min-width: 64rem)");

    type Zone = "nav" | "menu";
    let zone: Zone | null = null;

    const zoneOf = (node: Node | null): Zone | null => {
      if (!node) return null;
      if (nav.contains(node)) return "nav";
      if (button.contains(node) || panel.contains(node)) return "menu";
      return null;
    };
    const isRendered = (element: Element) =>
      element.getClientRects().length > 0;

    const onFocusIn = (event: FocusEvent) => {
      zone = event.target instanceof Node ? zoneOf(event.target) : null;
    };
    // Focus going nowhere only means "left" while the element that lost it is
    // still rendered. When a resize hides that element, the browser drops
    // focus and we must keep remembering where it was. (The element itself is
    // checked, not its zone: with the menu open the panel can still be visible
    // while the button that held focus is already hidden.)
    const onFocusOut = (event: FocusEvent) => {
      if (event.relatedTarget || !zone) return;
      if (event.target instanceof Element && isRendered(event.target)) {
        zone = null;
      }
    };
    const onChange = () => {
      const remembered = zone;
      zone = null; // our own focus() below records the new location
      if (!remembered) return;
      const active = document.activeElement;
      const focusDropped = !active || active === document.body;
      if (!focusDropped && zoneOf(active) !== remembered) return;

      if (desktop.matches && remembered === "menu") {
        nav.querySelector<HTMLElement>("a")?.focus();
      } else if (!desktop.matches && remembered === "nav") {
        button.focus();
      }
    };

    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("focusout", onFocusOut);
    desktop.addEventListener("change", onChange);
    return () => {
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("focusout", onFocusOut);
      desktop.removeEventListener("change", onChange);
    };
  }, []);

  /** Click handler for the logo: closes an open menu and restores focus. */
  const closeFromLogo = () => {
    if (!open) return;
    restoreButtonFocusRef.current = true;
    setOpen(false);
  };

  return {
    open,
    setOpen,
    buttonRef,
    panelRef,
    pendingFocusRef,
    closeFromLogo,
  };
}

/** Everything the header needs from the hook, for typing the menu components. */
export type MobileMenuState = ReturnType<typeof useMobileMenu>;
