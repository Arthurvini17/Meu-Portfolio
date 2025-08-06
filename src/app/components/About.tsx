import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});


export default function About() {
  return (
    <div
      id="about"
      className={`${poppins.className} p-10  flex justify-center bg-white text-gray-800`}
    >
      <div className="max-w-5xl space-y-6 text-center">
        <h1 className="text-3xl font-semibold text-black">Sobre Mim</h1>

        <p className="text-lg leading-relaxed">
          Olá! Sou <span className="font-semibold text-black">Arthur Vinicius</span>, Desenvolvedor Full Stack apaixonado por transformar ideias em experiências digitais memoráveis.
          Tenho <span className="font-semibold text-black">2 anos de experiência</span> em <span className="font-semibold">desenvolvimento Full Stack</span> e <span className="font-semibold">bancos de dados</span>, criando soluções que impactam positivamente os usuários.
          Minha jornada começou cedo, aos <span className="font-semibold">7 anos</span> já era fascinado por tecnologia.
          Estou sempre aprendendo e acompanhando novas tecnologias para entregar os melhores resultados e me manter atualizado com o mercado.
        </p>
      </div>
    </div>
  );
}
