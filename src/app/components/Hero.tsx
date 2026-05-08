"use client";

import Link from "next/link";
import { Poppins, Outfit } from "next/font/google";
import { motion } from "motion/react";
import { BsCodeSlash } from "react-icons/bs";

const poppins = Poppins({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
});

const outfit = Outfit({
    weight: ["700", "800", "900"],
    subsets: ["latin"],
});

export default function Hero() {
    return (
        <section className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] text-white ${poppins.className}`}>

            {/* Minimalist Glowing Background */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-tr from-[#8b5cf6] to-[#3BA9F4] opacity-[0.07] blur-[100px] md:blur-[150px] rounded-full pointer-events-none"></div>

            <div className="container relative z-10 px-6 mx-auto pt-24 md:pt-0">
                <div className="flex flex-col items-center justify-center max-w-5xl mx-auto text-center z-20">

                    {/* Indicator */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center justify-center gap-2 mb-10"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-sm font-medium text-gray-300 tracking-wide uppercase">Disponível para Oportunidades</span>
                    </motion.div>

                    {/* Title Section */}
                    <div className="space-y-2 mb-8">

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className={`text-5xl md:text-7xl lg:text-[7rem] font-black uppercase tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#3BA9F4] ${outfit.className}`}
                        >
                            ARTHUR VINÍCIUS
                        </motion.h1>
                    </div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="max-w-2xl text-base md:text-xl text-gray-400 leading-relaxed mb-10"
                    >
                        Sou desenvolvedor apaixonado por tirar boas ideias do papel. Escrevo código limpo e crio sistemas completos, integrando Inteligência Artificial e entregando experiências fluidas, do banco de dados à interface.
                    </motion.p>

                    {/* Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mb-16"
                    >
                        <Link href="#projects" className="group">
                            <button className="flex items-center justify-center gap-3 px-10 py-4 text-sm md:text-base font-bold text-white bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] rounded-full hover:opacity-90 transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(139,92,246,0.2)] border border-white/10">
                                <BsCodeSlash size={18} />
                                Ver Meus Projetos
                            </button>
                        </Link>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="flex flex-wrap justify-center items-center gap-8 md:gap-24 pt-10 border-t border-white/5 w-full max-w-3xl"
                    >
                        <div className="flex flex-col items-center">
                            <span className="text-3xl md:text-4xl font-bold text-white mb-2">15+</span>
                            <span className="text-xs md:text-sm text-gray-500 uppercase tracking-widest font-medium">Projetos Feitos</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl md:text-4xl font-bold text-white mb-2">4+</span>
                            <span className="text-xs md:text-sm text-gray-500 uppercase tracking-widest font-medium">Linguagens Core</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl md:text-4xl font-bold text-white mb-2">100%</span>
                            <span className="text-xs md:text-sm text-gray-500 uppercase tracking-widest font-medium">Qualidade</span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
