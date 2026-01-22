"use client";

import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { motion } from "motion/react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";

const poppins = Poppins({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
});

export default function Hero() {
    return (
        <section className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0F1A] text-[#F2F9FC] ${poppins.className}`}>

            {/* Background com Overlay e Gradiente */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/image-bg.jpg"
                    alt="Background Tech"
                    fill
                    className="object-cover opacity-20"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-[#0B0F1A]/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F1A] via-transparent to-[#0B0F1A]" />
            </div>

            <div className="container relative z-10 px-6 mx-auto">
                <div className="flex flex-col items-center max-w-4xl mx-auto text-center gap-8">

                    {/* Badge de Boas-vindas */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="px-4 py-2 bg-[#1F2937]/50 border border-[#3BA9F4]/30 rounded-full backdrop-blur-sm"
                    >
                        <span className="text-sm font-medium text-[#3BA9F4]"> Olá, bem-vindo ao meu portfólio</span>
                    </motion.div>

                    {/* Título Principal */}
                    <div className="space-y-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-5xl font-bold leading-tight md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-white via-[#F2F9FC] to-[#9CA3AF]"
                        >
                            Arthur Vinicius
                        </motion.h1>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-2xl md:text-3xl font-medium text-[#3BA9F4]"
                        >
                            Desenvolvedor Full Stack
                        </motion.h2>
                    </div>

                    {/* Descrição (Antigo About) */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed"
                    >
                        Transformo ideias complexas em produtos digitais de alto impacto.
                        Com <span className="text-white font-semibold"> experiência prática</span>,
                        desenvolvo soluções rápidas, escaláveis e confiáveis, do front-end ao back-end.
                    </motion.p>

                    {/* Botões de Ação */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 mt-4"
                    >
                        <Link href="#projects" className="group">
                            <button className="flex items-center gap-2 px-8 py-3.5 text-base font-bold text-white bg-[#3BA9F4] rounded-full hover:bg-[#2c8bc9] transition-all transform hover:scale-105 shadow-lg shadow-[#3BA9F4]/20">
                                Ver Projetos
                                <HiArrowNarrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                        <Link href="#contact">
                            <button className="px-8 py-3.5 text-base font-bold text-[#F2F9FC] bg-[#1F2937] border border-[#374151] rounded-full hover:bg-[#374151] transition-all transform hover:scale-105">
                                Entrar em Contato
                            </button>
                        </Link>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="flex items-center gap-6 mt-8 text-gray-400"
                    >
                        <a href="https://github.com/Arthurvini17" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors transform hover:scale-110">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/arthur-vinicius-b22202270/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A66C2] transition-colors transform hover:scale-110">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://wa.me/5581988548132" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors transform hover:scale-110">
                            <FaWhatsapp size={24} />
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 animate-bounce"
            >
                <span className="text-xs tracking-widest uppercase">Scroll</span>
            </motion.div>
        </section>
    );
}
