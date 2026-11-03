import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/content/profile";
import { getSection } from "@/lib/sections";

/** About section (spec §9.2): the approved paragraphs at prose width. */
export function About() {
  const section = getSection("about");
  if (!section) return null;

  return (
    <section
      id={section.id}
      aria-labelledby="about-heading"
      className="py-8 md:py-10 lg:py-14 2xl:py-16"
    >
      <Container>
        <SectionHeading
          index={section.index}
          label={section.navLabel}
          title={section.title}
          headingId="about-heading"
        />
        <div className="mt-8 max-w-(--container-prose) space-y-4 md:mt-10 lg:mt-12">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </section>
  );
}
