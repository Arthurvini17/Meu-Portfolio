import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});


export default function About() {
  return (
    <div
      id="about"
      className={`${poppins.className} py-12 bg-[#0B0F1A] text-[#F2F9FC]`}>
      <div className="container flex flex-col items-center px-4 mx-auto">
        <h1 className="mb-6 text-3xl font-bold text-[#F2F9FC] md:text-4xl">Sobre Mim</h1>

        <p className="max-w-3xl p-2 text-lg leading-relaxed text-center text-gray-300">
          Olá! Sou <span className="font-semibold text-[#3BA9F4]">Arthur Vinicius</span>, Desenvolvedor Full Stack apaixonado por transformar ideias em experiências digitais memoráveis.
          Tenho <span className="font-semibold text-[#3BA9F4]">2 anos de experiência</span> em <span className="font-semibold">desenvolvimento Full Stack</span> e <span className="font-semibold">bancos de dados</span>, criando soluções que impactam positivamente os usuários.
        </p>
      </div>
    </div>
  );
}
