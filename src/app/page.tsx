import Experiences from "./components/Experiences";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import ProjectsCards from "./components/ProjectsCards";
import Stacks from "./components/Stacks";
import Footer from "./components/Footer";

// Sem metadata aqui de propósito: o title.default do layout já é o melhor
// título para a home, e um title em string aqui seria envolvido pelo
// template do layout, virando "Arthur Vinicius — Arthur Vinícius".

export default function Home() {
  return (
    <>
      <Hero />
      <Experiences />
      <Stacks />
      <ProjectsCards />
      <Contact />
      <Footer />
    </>
  );
}
