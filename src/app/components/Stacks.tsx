"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Poppins } from "next/font/google";
import { FaLaravel, FaReact, FaGitAlt, FaPhp, FaJs } from "react-icons/fa";
import {
  SiLivewire,
  SiTailwindcss,
  SiOpenai,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiHtml5,
  SiLinux,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { DiDocker, DiMysql } from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

type Stack = { name: string; icon: ReactNode; color: string };

/** Agrupadas para que dê para responder "no que ele é forte?" sem ler as 19. */
const grupos: { titulo: string; itens: Stack[] }[] = [
  {
    titulo: "Front-end",
    itens: [
      { name: "HTML", icon: <SiHtml5 />, color: "#e34c26" },
      { name: "Javascript", icon: <FaJs />, color: "#f7df1e" },
      { name: "ReactJS", icon: <FaReact />, color: "#61dafb" },
      { name: "NextJS", icon: <RiNextjsFill />, color: "#ffffff" },
      { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#38bdf8" },
      { name: "ReactNative", icon: <TbBrandReactNative />, color: "#61dafb" },
    ],
  },
  {
    titulo: "Back-end",
    itens: [
      { name: "NodeJS", icon: <IoLogoNodejs />, color: "#68a063" },
      { name: "Express", icon: <SiExpress />, color: "#d1d5db" },
      { name: "PHP", icon: <FaPhp />, color: "#777bb4" },
      { name: "Laravel", icon: <FaLaravel />, color: "#ff2d20" },
      { name: "Livewire", icon: <SiLivewire />, color: "#fb70a9" },
    ],
  },
  {
    titulo: "Dados",
    itens: [
      { name: "MySQL", icon: <DiMysql />, color: "#00a4c4" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4b8bc4" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "Prisma", icon: <SiPrisma />, color: "#ffffff" },
    ],
  },
  {
    titulo: "Infra e IA",
    itens: [
      { name: "Docker", icon: <DiDocker />, color: "#2496ed" },
      { name: "Linux", icon: <SiLinux />, color: "#ffffff" },
      { name: "Git", icon: <FaGitAlt />, color: "#f1502f" },
      { name: "OpenAI", icon: <SiOpenai />, color: "#ffffff" },
    ],
  },
];

const stackItemClass =
  "flex items-center justify-center gap-1.5 md:gap-2 py-3 px-3 md:py-4 md:px-6 bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#3BA9F4] hover:shadow-[0_0_15px_rgba(59,169,244,0.3)] transition-all duration-300 rounded-lg group";

export default function Stacks() {
  const reduzirMovimento = useReducedMotion();

  return (
    <section
      id="stacks"
      aria-labelledby="stacks-heading"
      className={`${poppins.className} py-16 bg-[#050505] text-[#F2F9FC] font-bold`}
    >
      <div className="flex items-center justify-center mb-10">
        <motion.h2
          id="stacks-heading"
          initial={{ opacity: 0, y: reduzirMovimento ? 0 : -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl"
        >
          Minhas Ferramentas
        </motion.h2>
      </div>

      <div className="container px-4 mx-auto">
        {grupos.map((grupo, gi) => (
          <motion.div
            key={grupo.titulo}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: gi * 0.08 }}
            className="mb-8 last:mb-0"
          >
            <h3 className="mb-4 text-sm font-semibold tracking-widest text-gray-400 uppercase">
              {grupo.titulo}
            </h3>

            <ul className="grid grid-cols-2 gap-3 text-center sm:gap-4 md:gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {grupo.itens.map((item) => (
                <li key={item.name} className={stackItemClass}>
                  <span className="text-xs md:text-base group-hover:text-[#3BA9F4] transition-colors">
                    {item.name}
                  </span>
                  <span aria-hidden="true" className="text-2xl" style={{ color: item.color }}>
                    {item.icon}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
