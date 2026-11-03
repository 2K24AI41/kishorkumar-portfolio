import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { education } from "@/content/education";
import { getSection } from "@/lib/sections";

/**
 * Education (spec §9.6) as a timeline (§10.7) with an accent dot on the
 * current entry. Layout follows §12.1: stacked on mobile; dates beside the
 * title on tablet; dates in a left column from desktop width. The status is
 * also written out, so the dot is never the only signal.
 *
 * Every item is a direct child of the list item, and the dates come after the
 * title in the source, so reading order stays logical at every width.
 */
export function Education() {
  const section = getSection("education");
  if (!section) return null;

  return (
    <section
      id={section.id}
      aria-labelledby="education-heading"
      className="py-8 md:py-10 lg:py-14 2xl:py-16"
    >
      <Container>
        <SectionHeading
          index={section.index}
          label={section.navLabel}
          title={section.title}
          headingId="education-heading"
        />
        <ol className="mt-8 border-l border-border md:mt-10 lg:mt-12">
          {education.map((entry) => (
            <li
              key={`${entry.degree}-${entry.startYear}`}
              className="relative pb-8 pl-6 last:pb-0 md:grid md:grid-cols-[1fr_auto] md:gap-x-6 md:pl-8 lg:grid-cols-[8rem_1fr] lg:gap-x-8"
            >
              <span
                aria-hidden="true"
                className={`absolute top-2 -left-1.5 size-3 rounded-full ${
                  entry.current ? "bg-accent" : "bg-border-strong"
                }`}
              />
              <h3 className="text-h3 lg:col-start-2">{entry.degree}</h3>
              <p className="mt-1 text-text-muted md:col-span-2 lg:col-span-1 lg:col-start-2">
                {entry.institute}, {entry.university}
              </p>
              <p className="text-text-muted md:col-span-2 lg:col-span-1 lg:col-start-2">
                {entry.location}
              </p>
              <p className="mt-3 font-mono text-label text-text-muted uppercase md:col-start-2 md:row-start-1 md:mt-0 md:self-center lg:col-start-1">
                <time dateTime={String(entry.startYear)}>
                  {entry.startYear}
                </time>
                –<time dateTime={String(entry.endYear)}>{entry.endYear}</time>
              </p>
              <p className="mt-3 md:col-span-2 lg:col-span-1 lg:col-start-2">
                <Tag>{entry.status}</Tag>
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
