import type { FooterContent } from "@/types/content";

export const footer: FooterContent = {
  monogram: "KK",
  tagline: "AI undergraduate · University of Sindh",
  copyrightHolder: "Kishor Kumar",
  // The build year. This module is evaluated on the server when the pages are
  // statically generated, so the year is fixed into the HTML at build time.
  // It is never computed in the browser, and it does not make any page dynamic.
  copyrightYear: new Date().getFullYear(),
};
