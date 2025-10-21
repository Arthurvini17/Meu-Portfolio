import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});


export default function About() {
  return (
    <div
      id="about"
      className={`${poppins.className}   bg-white text-gray-800`}>
      <div className="flex flex-col items-center ">
        <h1 className="max-w-xl text-3xl text-black ">Sobre Mim</h1>

        <p className="p-2 text-lg leading-relaxed md:text-center">
          Olá! Sou <span className="font-semibold text-black">Arthur Vinicius</span>, Desenvolvedor Full Stack apaixonado por transformar ideias em experiências digitais memoráveis.
          Tenho <span className="font-semibold text-black">2 anos de experiência</span> em <span className="font-semibold">desenvolvimento Full Stack</span> e <span className="font-semibold">bancos de dados</span>, criando soluções que impactam positivamente os usuários.
        </p>
      </div>
    </div>
  );
}
