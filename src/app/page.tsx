import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import ProjectsCards from "./components/ProjectsCards";
import Stacks from "./components/Stacks";
import Footer from "./components/Footer";

export const metadata = {
  title: "Arthur Vinicius",

};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stacks />
      <ProjectsCards />
      <Contact />
      <Footer />
    </>
  );
}
