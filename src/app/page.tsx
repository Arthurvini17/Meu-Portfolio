import Hero from "./components/Hero";
import Stacks from "./components/Stacks";

export const metadata = {
  title: "Pagina Inicial | Arthur",
  description: "Página inicial ",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Stacks />
    </>
  );
}
