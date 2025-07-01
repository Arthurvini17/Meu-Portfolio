import { Poppins } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export default function ProjectsCards() {
  return (
    <div className={`${poppins.className}  p-4 bg-slate-50    font-bold`}>
      <h1 className="text-center">Meus Projetos</h1>
      <div className="flex flex-col w-full h-full">
        <div className="bg-white shadow w-full h-full">
          <div className=" border-b border-black w-full p-2 text-center">
            <h1>Projeto 1</h1>
          </div>
          <div className="p-2 gap-2 flex flex-col">
            <h1>HostPool</h1>
            <p className="text-xs leading-relaxed">
              Uma breve descrição do projeto, destacando o que ele faz e as
              principais tecnologias utilizadas
            </p>
            <div className="flex flex-row text-xs">
              <p>Laravel livewire tailwind</p>
            </div>
          </div>
        </div>
      </div>


       <div className="flex flex-col w-full h-full">
        <div className="bg-white shadow w-full h-full">
          <div className=" border-b border-black w-full p-2 text-center">
            <h1>Projeto 2</h1>
          </div>
          <div className="p-2 gap-2 flex flex-col">
            <h1>Tech-Product-LP</h1>
            <p className="text-xs leading-relaxed">
              Uma breve descrição do projeto, destacando o que ele faz e as
              principais tecnologias utilizadas
            </p>
            <div className="flex flex-row text-xs">
              <p>NextJs TypeScript TailwindCSS</p>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
}
