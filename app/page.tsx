import Nav from "@/app/components/nav";
import Hero from "@/app/components/hero";
import About from "@/app/components/about";
import Projects from "@/app/components/projects";
import Stack from "@/app/components/stack";
import Certifications from "@/app/components/certifications";
import Learning from "@/app/components/learning";
import Contact from "@/app/components/contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Stack />
        <Certifications />
        <Learning />
        <Contact />
      </main>
    </>
  );
}
