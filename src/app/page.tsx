import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
      <Hero />
      <About />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}
