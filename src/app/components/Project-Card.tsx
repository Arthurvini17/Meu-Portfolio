"use client";

import { Poppins } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export default function ProjectsCards() {
  return (
    <div className={`${poppins.className} p-2 bg-slate-50`}>
      <h1 className="mb-4 text-center">Meus Projetos</h1>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        className="w-full"
      >
        {/* Slide 1 - HostPool */}
        <SwiperSlide>
          <div className="w-full h-full p-2 shadow bg-slate-50">
            <div className="h-[100px] w-full overflow-hidden rounded-t-lg">
              <Image
                src="/images/hostpool.png"
                alt="imagemhost"
                className="object-cover w-full h-full"
                width={400}
                height={200}
              />
            </div>
            <div className="flex flex-col gap-2 p-2 ">
              <h1 className="font-bold">HostPool</h1>
              <p className="text-xs leading-relaxed">
                Plataforma de hospedagem que permite criar ambientes de desenvolvimento usando Laravel e
                Docker. O projeto possui painel administrativo completo para gerenciamento de instâncias.
              </p>
              <p className="text-xs">Laravel | Docker | MySQL | Livewire |
                Alpine JS </p>
              <div className="flex gap-4 text-xs">
                <a
                  href="https://tech-product-lp.vercel.app/"
                  className="font-semibold text-blue-500 underline"
                >
                  Projeto não hospedado
                </a>
                <a
                  href="https://github.com/Arthurvini17/HostPool"
                  className="flex items-center gap-1 text-gray-800 hover:text-black"
                >
                  GitHub <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 - Tech-Product-LP */}
        <SwiperSlide>
          <div className="shadow bg-slate-50">
            <div className="h-[200px] overflow-hidden rounded-t-lg">
              <Image
                src="/images/techpc2.png"
                alt="imagem"
                className="object-cover w-full h-full"
                width={400}
                height={200}
              />
            </div>
            <div className="flex flex-col gap-2 p-2">
              <h1 className="font-bold">Tech-Product-LP</h1>
              <p className="text-xs leading-relaxed">
                Landing page inspirada usando I.A da Gemini para fins de
                estudos. Apenas o design foi gerado com front!
              </p>
              <p className="text-xs">NextJs TypeScript TailwindCSS</p>

              <div className="flex gap-4 text-xs">
                <a
                  href="https://tech-product-lp.vercel.app/"
                  className="font-semibold text-blue-500 underline"
                >
                  Visualizar
                </a>
                <a
                  href="https://github.com/Arthurvini17/Tech-Product-LP"
                  className="flex items-center gap-1 text-gray-800 hover:text-black"
                >
                  GitHub <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
