"use client";

import { Poppins } from "next/font/google";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { motion, useReducedMotion } from "motion/react";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

type Project = {
  title: string;
  image: string;
  alt: string;
  description: string;
  stack: string;
  demo: string | null;
  github: string | null;
};

// Projetos com demo ao vivo primeiro: o primeiro card é o que decide a visita.
const projects: Project[] = [
  {
    title: "BrasilSat Open API",
    image: "/images/brasilsat-open-api.jpg",
    alt: "Portal de documentação da Open API da BrasilSat GPS",
    description:
      "Portal de documentação da API aberta de rastreamento GPS da BrasilSat. Construí o site: navegação, busca, alternância PT/EN e tema escuro.",
    stack: "NextJs | Nextra | TypeScript | TailwindCSS",
    demo: "https://docsbrasil.nyz.com.br/docs",
    github: null,
  },
  {
    title: "StockManager",
    image: "/images/stockmanager.png",
    alt: "Dashboard do StockManager",
    description:
      "Sistema de gerenciamento de estoque full stack com dashboard intuitiva.",
    stack:
      "JavaScript | TailwindCSS | ReactJS | Nodejs | Prisma | Express | MySQL | Chartjs",
    demo: "https://stockmanager-frontend-swart.vercel.app/",
    github: "https://github.com/Arthurvini17/Stockmanager-frontend",
  },
  {
    title: "Learning +",
    image: "/images/learning+.png",
    alt: "Landing page institucional Learning+",
    description: "Landing page institucional responsiva.",
    stack: "JavaScript | TailwindCSS | ReactJS | NextJs",
    demo: "https://learning-applp.vercel.app/",
    github: "https://github.com/Arthurvini17/Learning-app",
  },
  {
    title: "Tech-Product-LP",
    image: "/images/techpc2.png",
    alt: "Landing page Tech-Product",
    description:
      "Landing page inspirada usando I.A da Gemini para fins de estudos. Apenas o design foi gerado; o front é meu.",
    stack: "NextJs | TypeScript | TailwindCSS",
    demo: "https://tech-product-lp.vercel.app/",
    github: "https://github.com/Arthurvini17/Tech-Product-LP",
  },
  {
    title: "Landing Page - Sales Dashboard",
    image: "/images/sales-dashboad.png",
    alt: "Landing page do Sales Dashboard",
    description: "Landing Page para Sales Dashboard.",
    stack: "JavaScript | TailWindCSS | ReactJS | NextJS | TypeScript",
    demo: "https://sales-dashboard-frontend-six.vercel.app/",
    github: "https://github.com/Arthurvini17/Sales-Dashboard-Frontend",
  },
  {
    title: "Desafio - Lacrei Saúde",
    image: "/images/desafio-lacrei-saude.png",
    alt: "Site do desafio técnico Lacrei Saúde",
    description: "Site para desafio técnico de projeto voluntário.",
    stack: "JavaScript | TailWindCSS | ReactJS | NextJS | TypeScript",
    demo: "https://lacrei-saudelts.vercel.app/",
    github: "https://github.com/Arthurvini17/desafio-tecnico-lacrei-saude",
  },
  {
    title: "Desafio - Linktree",
    image: "/images/desafio-linktree.png",
    alt: "Site do desafio Linktree",
    description: "Página de links sociais para desafio de projeto voluntário.",
    stack: "JavaScript | TailWindCSS | ReactJS | NextJS",
    demo: "https://desafio-fronten-social-links.vercel.app/",
    github: "https://github.com/Arthurvini17/desafio-fronten-social-links",
  },
  {
    title: "HostPool",
    image: "/images/hostpool.png",
    alt: "Painel administrativo do HostPool",
    description:
      "Plataforma de hospedagem que permite criar ambientes de desenvolvimento usando Laravel e Docker. Possui painel administrativo completo para gerenciamento de instâncias.",
    stack: "Laravel | Docker | MySQL | Livewire | Alpine JS",
    demo: null,
    github: "https://github.com/Arthurvini17/HostPool",
  },
];

export default function ProjectsCards() {
  const reduzirMovimento = useReducedMotion();

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className={`${poppins.className} py-16 px-4 md:px-20 lg:px-40 bg-[#050505]`}
    >
      <motion.h2
        id="projects-heading"
        initial={{ opacity: 0, y: reduzirMovimento ? 0 : -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-3xl font-extrabold text-center text-[#F2F9FC] md:text-4xl"
      >
        Meus Projetos
      </motion.h2>

      {/* Grade em vez de carrossel: os 7 ficam escaneáveis de uma vez e
          navegáveis por teclado, o que as setas do Swiper não eram. */}
      <ul className="grid max-w-[1200px] gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.li
            key={project.title}
            initial={{ opacity: 0, y: reduzirMovimento ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            // O atraso reinicia a cada linha da grade: sem isso o ultimo card
            // do desktop esperaria meio segundo depois de ja estar visivel.
            transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
            className="flex"
          >
            <article className="flex flex-col w-full h-full overflow-hidden transition-all duration-300 border rounded-lg bg-[#0a0a0a] border-[#1f1f1f] hover:border-[#3BA9F4] hover:shadow-[0_0_15px_rgba(59,169,244,0.15)] group">
              <div className="relative h-[180px] md:h-[200px] w-full">
                <Image
                  src={project.image}
                  alt={project.alt}
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  priority={index === 0}
                />
              </div>

              <div className="flex flex-col flex-grow gap-3 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-[#F2F9FC] group-hover:text-[#3BA9F4] transition-colors">
                  {project.title}
                </h3>

                <p className="flex-grow text-sm leading-relaxed text-gray-300">
                  {project.description}
                </p>

                <p className="font-mono text-xs text-[#3BA9F4]/80">
                  {project.stack}
                </p>

                <div className="flex flex-wrap gap-3 mt-2 text-sm font-medium">
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-[#050505] bg-[#3BA9F4] rounded hover:bg-[#3BA9F4]/90 transition-colors font-semibold"
                    >
                      Visualizar
                      <span className="sr-only"> {project.title} ao vivo</span>
                    </a>
                  ) : (
                    <span className="px-4 py-2 italic text-gray-400 border border-gray-700 rounded bg-[#050505]">
                      Sem demo público
                    </span>
                  )}
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-[#F2F9FC] transition-colors border border-[#3BA9F4] rounded hover:bg-[#3BA9F4]/10"
                    >
                      GitHub
                      <span className="sr-only"> de {project.title}</span>
                      <FaGithub size={18} aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="px-4 py-2 italic text-gray-400 border border-gray-700 rounded bg-[#050505]">
                      Código privado
                    </span>
                  )}
                </div>
              </div>
            </article>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
