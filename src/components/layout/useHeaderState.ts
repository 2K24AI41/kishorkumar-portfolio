"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

/** True once the page has scrolled past `threshold` pixels (spec §8.1: 24). */
export function useScrolled(threshold: number): boolean {
  return useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > threshold,
    () => false,
  );
}

/**
 * The id of the section currently being read, or null (spec §8.2).
 * Uses an IntersectionObserver on a thin band near the top of the screen.
 * At the very top of the page no section is active. At the very bottom the
 * last section wins, because a short last section may never reach the band.
 */
export function useActiveSection(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(null);
  const key = ids.join(",");

  useEffect(() => {
    const sectionIds = key
      .split(",")
      .filter((id) => id && document.getElementById(id));
    const visible = new Set<string>();

    const update = () => {
      // At the very top only the hero is on screen, and it has no nav link.
      if (window.scrollY <= 0) {
        setActive(null);
        return;
      }
      const atBottom =
        window.scrollY > 0 &&
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 2;
      if (atBottom && sectionIds.length > 0) {
        setActive(sectionIds[sectionIds.length - 1]);
        return;
      }
      setActive(sectionIds.find((id) => visible.has(id)) ?? null);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        update();
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );

    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }
    window.addEventListener("scroll", update, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", update);
    };
  }, [key]);

  return active;
}
