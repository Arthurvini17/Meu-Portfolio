import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import ProjectsCards from "./components/Project-Card";
import Stacks from "./components/Stacks";

export const metadata = {
  title: "Pagina Inicial | Arthur",
  description: "Página inicial ",
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stacks />
      <ProjectsCards />
      <Contact />
    </>
  );
}
