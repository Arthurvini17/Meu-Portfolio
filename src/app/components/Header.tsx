"use client";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export default function Header() {
  return (
    <header
      className={`${poppins.className} w-full py-4 px-6 border-b bg-white flex items-center `}
    >
      <p className="font-bold whitespace-nowrap">$Arthur</p>
      <nav className="gap-2 ">
        <div className="flex gap-6 px-4 py-2 text-sm font-bold rounded-md">
          <a href="#projects">Projetos</a>
          <a href="#stacks">Ferramentas</a>
          <a href="#contact">Contato</a>
        </div>
      </nav>
    </header>
  );
}
