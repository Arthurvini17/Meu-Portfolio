"use client"

import { Poppins } from "next/font/google";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { motion } from "motion/react";

const poppins = Poppins({
    weight: ["400", "500", "600"],
    subsets: ["latin"],
});

const experiences = [
    {
        id: 1,
        role: "Desenvolvedor mobile React Native",
        company: "Doe +",
        period: "2025 - 2025",
        description: "Atuei no desenvolvimento e manutenção de aplicações mobile com React Native. Liderei a equipe de desenvolvimento, organizei tarefas, apoiei decisões técnicas e garanti boas práticas de código. Trabalhei com integração de APIs, correção de bugs, melhorias de performance e foco em UX, utilizando Git e fluxo de trabalho colaborativo.",
    },
    {
        id: 2,
        role: "Suporte Tecnico",
        company: "AIAtende",
        period: "Nov-2025 - Dez-2025",
        description: "Atendimento e suporte técnico no CRM Kommo. Configuração de fluxos, usuários e automações. Resolução de problemas operacionais e técnicos. Apoio às equipes no uso correto da plataforma.",
    },

    {
        id: 3,
        role: "Desenvolvedor Full Stack",
        company: "AIAtende",
        period: "Atualmente",
        description: "Desenvolvimento e evolução de agentes de IA. Implementação de lógicas, testes e ajustes de automações. Integração de sistemas e otimização de fluxos de atendimento. Melhoria contínua da experiência do usuário e performance dos agentes.",
    },



    // Adicione mais experiências aqui
];

export default function Experiences() {
    return (
        <section id="experiences" className={`${poppins.className} py-20 bg-[#0B0F1A] text-[#F2F9FC]`}>
            <div className="container px-4 mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-4 text-3xl font-bold text-[#F2F9FC] md:text-4xl"
                    >
                        Minhas Experiências
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "6rem" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-1 mx-auto bg-[#3BA9F4] rounded-full"
                    />
                </div>

                <div className="relative flex flex-col items-center">
                    {/* Linha vertical central (visível apenas em desktop) */}
                    <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-0.5 bg-[#1F2937] hidden md:block transform md:-translate-x-1/2"></div>

                    <div className="flex flex-col w-full gap-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className={`flex flex-col md:flex-row items-center justify-between w-full ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Lado vazio para alinhamento em desktop */}
                                <div className="hidden w-5/12 md:block"></div>

                                {/* Ponto central na linha do tempo */}
                                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-[#121826] border-4 border-[#3BA9F4] z-10 transform -translate-x-1/2 flex items-center justify-center">
                                    <FaBriefcase className="text-xs text-[#3BA9F4]" />
                                </div>

                                {/* Card de conteúdo */}
                                <div className="w-full pl-12 md:w-5/12 md:pl-0">
                                    <div className="flex flex-col p-6 transition-all duration-300 border rounded-lg shadow-lg bg-[#121826] border-[#1F2937] hover:border-[#3BA9F4] hover:shadow-[#3BA9F4]/10 group">
                                        <h3 className="mb-1 text-xl font-bold text-[#F2F9FC] group-hover:text-[#3BA9F4] transition-colors">{exp.role}</h3>
                                        <h4 className="mb-4 text-lg font-medium text-gray-400">{exp.company}</h4>

                                        <div className="flex items-center gap-2 mb-4 text-sm text-[#3BA9F4] font-semibold">
                                            <FaCalendarAlt />
                                            <span>{exp.period}</span>
                                        </div>

                                        <p
                                            className="leading-relaxed text-gray-300"
                                            dangerouslySetInnerHTML={{ __html: exp.description }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
