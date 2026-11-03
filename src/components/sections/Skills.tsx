import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { skillGroups } from "@/content/skills";
import { getSection } from "@/lib/sections";

/** Builds a valid element id (no spaces) from a group label. */
function groupId(label: string): string {
  return `skills-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

/**
 * Technical skills (spec §9.3): grouped lists only. No percentages, bars,
 * ratings or years of experience.
 */
export function Skills() {
  const section = getSection("skills");
  if (!section) return null;

  return (
    <section
      id={section.id}
      aria-labelledby="skills-heading"
      className="py-8 md:py-10 lg:py-14 2xl:py-16"
    >
      <Container>
        <SectionHeading
          index={section.index}
          label={section.navLabel}
          title={section.title}
          headingId="skills-heading"
        />
        <ul className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2 md:gap-6 lg:mt-12 lg:grid-cols-3 2xl:grid-cols-4">
          {skillGroups.map((group) => (
            <li
              key={group.label}
              className="rounded-lg border border-border bg-surface p-5 md:p-6"
            >
              <h3 id={groupId(group.label)} className="text-h3">
                {group.label}
              </h3>
              <ul
                aria-labelledby={groupId(group.label)}
                className="mt-4 flex flex-wrap gap-2"
              >
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <Tag>{skill}</Tag>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
