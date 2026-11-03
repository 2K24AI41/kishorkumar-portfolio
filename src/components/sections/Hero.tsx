import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { profile } from "@/content/profile";

/**
 * Home page hero (spec §9.1): role, name and focus areas on a faint
 * blueprint grid. It has no buttons yet and no photo (owner decisions).
 * The bottom padding is half of the section spacing (§7.4); the section below
 * adds the other half, like every other pair of sections.
 */
export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      <div aria-hidden="true" className="absolute inset-0 blueprint-grid" />
      <Container
        width="wide"
        className="relative pt-16 pb-8 md:pt-20 md:pb-10 lg:pt-28 lg:pb-14 2xl:pb-16"
      >
        <p className="font-mono text-label text-accent-highlight uppercase">
          {profile.role}
        </p>
        <h1 id="hero-heading" className="mt-4 text-display">
          {profile.name}
        </h1>
        <ul aria-label="Focus areas" className="mt-8 flex flex-wrap gap-2">
          {profile.focusAreas.map((area) => (
            <li key={area}>
              <Tag>{area}</Tag>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
