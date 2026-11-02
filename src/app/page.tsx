import { profile } from "@/content/profile";

export default function Home() {
  return (
    <main id="main" className="flex flex-1 flex-col justify-center px-4">
      <h1 className="text-4xl font-semibold">{profile.name}</h1>
      <p className="font-mono text-text-muted">{profile.role}</p>
    </main>
  );
}
