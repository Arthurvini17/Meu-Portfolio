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
      <p className="text-xs font-bold whitespace-nowrap">$Arthur</p>
      <nav className="  gap-2">
        <div className="flex text-sm gap-6 px-4 py-2 rounded-md font-bold">
          <a href="#">Projetos</a>
          <a href="#">Habilidades</a>
          <a href="#">Contato</a>
        </div>
      </nav>
    </header>
  );
}
