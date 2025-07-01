import { Poppins } from "next/font/google";

 const poppins = Poppins({
    weight: ["400", "500", "600"],
    subsets: ["latin"],
  });


export default function About() {

 
  return (
    <div className={`${poppins.className} p-5  flex flex-col `}>
      <h1 className="text-center text-xl mb-2">Sobre Mim</h1>
      <p className="  leading-relaxed">
        Olá! Eu sou <strong>arthur Vinicius</strong>, um Desenvolvedor Full
        Stack apaixonado por criar experiências digitais incríveis.
      </p>
      <p>
        Tenho <strong>2 anos de experiência</strong> com{" "}
        <strong>Sistemas Full Stack</strong> e <strong>Banco de Dados</strong>,
        focando em soluções eficientes que impactam positivamente os usuários.
      </p>
      <p>
        Minha jornada na tecnologia começou cedo — aos <strong>7 anos</strong>{" "}
        já me interessava por como os computadores funcionavam. Desde então,
        venho evoluindo com:
      </p>
      <p>
          <strong>React</strong> & <strong>Next.js</strong>  <strong>Laravel</strong>    <strong>MySQL</strong>  <strong>Livewire</strong>
          </p>
      <p>
        Estou sempre aprendendo e buscando novas tecnologias para entregar
        melhores resultados e me manter atualizado com o mercado.
      </p>
    </div>
  );
}
