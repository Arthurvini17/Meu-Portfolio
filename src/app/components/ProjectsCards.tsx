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

// Array de projetos
const projects = [
  {
    title: "HostPool",
    image: "/images/hostpool.png",
    alt: "Imagem HostPool",
    description:
      "Plataforma de hospedagem que permite criar ambientes de desenvolvimento usando Laravel e Docker. O projeto possui painel administrativo completo para gerenciamento de instâncias.",
    stack: "Laravel | Docker | MySQL | Livewire | Alpine JS",
    demo: null,
    github: "https://github.com/Arthurvini17/HostPool",
  },
  {
    title: "Tech-Product-LP",
    image: "/images/techpc2.png",
    alt: "Imagem Tech-Product-LP",
    description:
      "Landing page inspirada usando I.A da Gemini para fins de estudos. Apenas o design foi gerado com front!",
    stack: "NextJs | TypeScript | TailwindCSS",
    demo: "https://tech-product-lp.vercel.app/",
    github: "https://github.com/Arthurvini17/Tech-Product-LP",
  },
  {
    title: "StockManager",
    image: "/images/stockmanager.png",
    alt: "Imagem StockManager",
    description:
      "Sistema de gerenciamento de estoque FullStack com dashboard intuitiva",
    stack:
      "JavaScript | TailwindCSS | ReactJS | Nodejs | Prisma | Express | MySQL | Chartjs",
    demo: "https://stockmanager-frontend-swart.vercel.app/",
    github: "https://github.com/Arthurvini17/Stockmanager-frontend",
  },
  {
    title: "Learning +",
    image: "/images/learning+.png",
    alt: "Imagem Learning+",
    description: "Landing Page Instituicional responsiva",
    stack: "JavaScript | TailwindCSS | ReactJS | NextJs",
    demo: "https://learning-applp.vercel.app/",
    github: "https://github.com/Arthurvini17/Learning-app",
  },
  {
    title: "Desafio - Linktree",
    image: "/images/desafio-linktree.png",
    alt: "imagem desafio linktree",
    description: "Site Linktree para desafio de projeto voluntario",
    stack: "JavaScript | TailWindCSS | ReactJS | NextJS",
    demo: "https://desafio-fronten-social-links.vercel.app/",
    github: "https://github.com/Arthurvini17/desafio-fronten-social-links",
  },
  {
    title: "Desafio - Lacrei Saúde",
    image: "/images/desafio-lacrei-saude.png",
    alt: "imagem desafio lacrei saude",
    description: "Site  para desafio de projeto voluntario",
    stack: "JavaScript | TailWindCSS | ReactJS | NextJS | TypeScript",
    demo: "https://lacrei-saudelts.vercel.app/",
    github: "https://github.com/Arthurvini17/desafio-tecnico-lacrei-saude",
  },

  {
    title: "Landing Page - Sales Dashboard",
    image: "/images/sales-dashboad.png",
    alt: "imagem sales dashboard",
    description: "Landing Page para Sales Dashboard",
    stack: "JavaScript | TailWindCSS | ReactJS | NextJS | TypeScript",
    demo: "https://sales-dashboard-frontend-six.vercel.app/",
    github: "https://github.com/Arthurvini17/Sales-Dashboard-Frontend",
  },
];

export default function ProjectsCards() {
  return (
    <section
      id="projects"
      className={`${poppins.className} py-16 px-4 md:px-20 lg:px-40 bg-[#0B0F1A]`}
    >
      <h1 className="mb-12 text-3xl font-extrabold text-center text-[#F2F9FC] md:text-4xl">
        Meus Projetos
      </h1>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        className="w-full max-w-[1200px] mx-auto"
        style={{ paddingBottom: 40 }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col h-full overflow-hidden transition-all duration-300 border rounded-lg shadow-lg bg-[#121826] border-[#1F2937] hover:border-[#3BA9F4] hover:shadow-[0_0_15px_rgba(59,169,244,0.15)] group">
              <div className="relative h-[250px] w-full">
                <Image
                  src={project.image}
                  alt={project.alt}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  fill
                  sizes="(min-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="flex flex-col flex-grow gap-4 p-8">
                <h2 className="text-2xl font-bold text-[#F2F9FC] group-hover:text-[#3BA9F4] transition-colors">
                  {project.title}
                </h2>
                <p className="flex-grow text-base leading-relaxed text-gray-300">
                  {project.description}
                </p>
                <p className="font-mono text-xs text-[#3BA9F4]/80">
                  {project.stack}
                </p>
                <div className="flex gap-6 mt-4 text-sm font-medium">
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-[#0B0F1A] bg-[#3BA9F4] rounded hover:bg-[#3BA9F4]/90 transition-colors font-semibold"
                    >
                      Visualizar
                    </a>
                  ) : (
                    <span className="px-4 py-2 italic text-gray-500 border border-gray-700 rounded cursor-not-allowed bg-[#0B0F1A]">
                      Projeto não hospedado
                    </span>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-[#F2F9FC] transition-colors border border-[#3BA9F4] rounded hover:bg-[#3BA9F4]/10"
                  >
                    GitHub <FaGithub size={18} />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
