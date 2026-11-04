import { NeuralFigure } from "@/components/sections/NeuralFigure";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { contact } from "@/content/contact";
import { education } from "@/content/education";
import { profile } from "@/content/profile";
import { getSection } from "@/lib/sections";

/**
 * Home page hero (docs/DESIGN_SPEC.md §9.1, §20.3): role, name, positioning
 * sentence, credential, focus areas and actions on a faint blueprint grid,
 * with the neural-network illustration beside the text from `lg` and below it
 * on smaller screens. There is no photo and no resume link (owner decisions).
 *
 * Motion: every block except the h1 rises into place once on page load
 * (`rise-in`, transform only, never a fade). `--rise-order` sets the stagger;
 * the last block starts at 4 x 60ms and ends inside the 800ms budget.
 * The h1 is the likely LCP element and is never animated.
 *
 * The bottom padding is half of the section spacing (§7.4); the section below
 * adds the other half, like every other pair of sections. The top padding is
 * 80px from `md` up (it was 112px at `lg`): with it, the text and the whole
 * illustration card fit above the fold at 1280x720 (measured, §19.7).
 */
export function Hero() {
  const current = education.find((entry) => entry.current);
  const credential = current
    ? [current.degree, current.university, current.status].join(" · ")
    : undefined;
  // Only offer "Get in touch" while the Contact section exists to link to.
  const hasContactSection = getSection("contact") !== undefined;

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      <div aria-hidden="true" className="absolute inset-0 blueprint-grid" />
      <Container
        width="wide"
        className="relative pt-16 pb-8 md:pt-20 md:pb-10 lg:pb-14 2xl:pb-16"
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-x-8">
          <div className="lg:col-span-7">
            <p className="rise-in font-mono text-label text-accent-highlight uppercase [--rise-order:0]">
              {profile.role}
            </p>
            <h1 id="hero-heading" className="mt-4 text-display">
              {profile.name}
            </h1>
            <p className="mt-6 max-w-(--container-prose) rise-in text-body-lg [--rise-order:1]">
              {profile.positioning}
            </p>
            {credential ? (
              <p className="mt-4 rise-in font-mono text-label text-text-muted [--rise-order:2]">
                {credential}
              </p>
            ) : null}
            <ul
              aria-label="Focus areas"
              className="mt-8 flex rise-in flex-wrap gap-2 [--rise-order:3]"
            >
              {profile.focusAreas.map((area) => (
                <li key={area}>
                  <Tag>{area}</Tag>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex rise-in flex-wrap items-center gap-3 [--rise-order:4]">
              {hasContactSection ? (
                <Button href="#contact">Get in touch</Button>
              ) : null}
              <Button
                variant="icon"
                label="GitHub"
                href={contact.github}
                external
              >
                <GitHubIcon />
              </Button>
              <Button
                variant="icon"
                label="LinkedIn"
                href={contact.linkedin}
                external
              >
                <LinkedInIcon />
              </Button>
            </div>
          </div>
          {/*
            The figure is at most about 360px wide and centered in its area: in
            the 5-column slot from `lg`, below the text on smaller screens, so
            the whole hero fits above the fold at 1280x720. On short landscape
            screens it is smaller still, never hidden (owner decisions).
          */}
          <div className="mx-auto w-full max-w-[22.5rem] rise-in [--rise-order:1] lg:col-span-5 [@media(max-height:30rem)]:max-w-64">
            <NeuralFigure />
          </div>
        </div>
      </Container>
    </section>
  );
}
