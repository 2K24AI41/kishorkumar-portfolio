import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { profile } from "@/content/profile";

/**
 * Simple text header: your name, linking to the top of the home page
 * (spec §8.1). Navigation links are added as sections are built.
 */
export function Header() {
  return (
    <header>
      <Container className="flex min-h-16 items-center lg:min-h-18">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center text-body font-medium underline-offset-[3px] hover:underline"
        >
          {profile.name}
        </Link>
      </Container>
    </header>
  );
}
