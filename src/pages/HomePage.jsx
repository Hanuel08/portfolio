import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Education } from "../components/sections/Education";
import { Projects } from "../components/sections/Projects";
import { Skills } from "../components/sections/Skills";
import { Certifications } from "../components/sections/Certifications";
import { Contact } from "../components/sections/Contact";

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
    </>
  );
}
