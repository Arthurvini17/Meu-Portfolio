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
        demo: "https://desafio-tecnico-lacrei-saude.vercel.app/",
        github: "https://github.com/Arthurvini17/desafio-tecnico-lacrei-saude",
    },
];

export default function ProjectsCards() {
    return (
        <section
            id="projects"
            className={`${poppins.className} py-8 px-4 md:px-20 lg:px-40 mt-10 max-w-[1200px] mx-auto`}
        >
            <h1 className="mb-8 text-3xl font-extrabold text-center text-gray-900">
                Meus Projetos
            </h1>

            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                className="w-full"
                style={{ paddingBottom: 40 }}
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col h-full overflow-hidden bg-white rounded-lg shadow-lg">
                            <div className="relative h-[200px] w-full">
                                <Image
                                    src={project.image}
                                    alt={project.alt}
                                    className="object-cover"
                                    fill
                                    sizes="(min-width: 1024px) 100vw, 50vw"
                                    priority
                                />
                            </div>
                            <div className="flex flex-col flex-grow gap-4 p-6">
                                <h2 className="text-xl font-semibold text-gray-900">
                                    {project.title}
                                </h2>
                                <p className="flex-grow text-sm leading-relaxed text-gray-700">
                                    {project.description}
                                </p>
                                <p className="font-mono text-xs text-gray-500">
                                    {project.stack}
                                </p>
                                <div className="flex gap-6 text-sm font-medium">
                                    {project.demo ? (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 underline transition-colors hover:text-blue-800"
                                        >
                                            Visualizar
                                        </a>
                                    ) : (
                                        <span className="italic text-gray-400 cursor-not-allowed">
                                            Projeto não hospedado
                                        </span>
                                    )}
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-blue-600 transition-colors hover:text-blue-800"
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
