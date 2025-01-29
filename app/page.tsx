import Hero from "@/components/sections/Hero";
import Project from "@/components/sections/Project";
import Skills from "@/components/sections/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Skills />
      <Project />
    </main>
  );
}
