import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
      <Hero />
    </main>
  );
}
