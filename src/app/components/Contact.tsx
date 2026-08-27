"use client"

import { useState } from "react";
import { DiGithub } from "react-icons/di";
import { IoLogoWhatsapp } from "react-icons/io5";
import { LiaLinkedin } from "react-icons/lia";
import { MdEmail, MdContentCopy, MdCheck } from "react-icons/md";
import { FaRobot } from "react-icons/fa";
import { motion, useReducedMotion } from "motion/react";
import ItensCardWeb from "./ItensCardWeb";

export default function Contact() {

    const phoneNumber = "5581988548132";
    const message = "Olá";
    const email = "arthurdedsec@gmail.com";

    const [copiado, setCopiado] = useState(false);
    const reduzirMovimento = useReducedMotion();

    const copiarEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopiado(true);
            setTimeout(() => setCopiado(false), 2000);
        } catch {
            // Sem permissão de área de transferência: o link mailto continua servindo.
        }
    };

    const ItensWeb = [
        {
            icon: <DiGithub />,
            title: "Github",
            href: "https://github.com/Arthurvini17"
        },
        {
            icon: <LiaLinkedin />,
            title: "LinkedIn",
            href: "https://www.linkedin.com/in/arthurviniciusdev/"
        },

    ]
    return (
        <section id="contact" aria-labelledby="contact-heading" className="px-4 py-12 md:p-20 bg-[#050505] text-[#F2F9FC]">
            <motion.h2
                id="contact-heading"
                initial={{ opacity: 0, y: reduzirMovimento ? 0 : -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className="mb-10 text-3xl font-bold text-center text-[#F2F9FC] md:mb-20 md:text-4xl"
            >
                Entre em Contato
            </motion.h2>
            <motion.div
                initial={{ opacity: 0, y: reduzirMovimento ? 0 : 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="flex md:flex md:items-center items-center justify-center md:justify-center"
            >
                <div className="flex flex-col items-center justify-center p-6 md:p-14 transition-all duration-300 border border-[#1f1f1f] rounded-2xl bg-[#0a0a0a] hover:border-[#3BA9F4] hover:shadow-[0_0_20px_rgba(59,169,244,0.1)]">
                    <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 md:gap-16">

                        <div className="flex flex-col items-start gap-4">
                            <div className="inline-flex items-center gap-1">
                                <a
                                    href={`mailto:${email}?subject=${encodeURIComponent("Projeto — contato pelo portfólio")}`}
                                    className="inline-flex items-center gap-2 p-3 transition-transform duration-300 transform rounded-md hover:scale-105 hover:bg-[#050505] hover:text-[#3BA9F4] text-gray-300"
                                >
                                    <MdEmail className="text-[#3BA9F4]" /> {email}
                                </a>
                                <button
                                    type="button"
                                    onClick={copiarEmail}
                                    aria-label={copiado ? "E-mail copiado" : "Copiar e-mail"}
                                    className="p-2 text-gray-400 transition-colors rounded-md hover:bg-[#050505] hover:text-[#3BA9F4]"
                                >
                                    {copiado ? <MdCheck className="text-[#3BA9F4]" /> : <MdContentCopy />}
                                </button>
                                <span aria-live="polite" className="sr-only">
                                    {copiado ? "E-mail copiado para a área de transferência" : ""}
                                </span>
                            </div>

                            <a
                                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 p-3 transition-transform duration-300 transform rounded-md hover:scale-105 hover:bg-[#050505] hover:text-[#3BA9F4] text-gray-300"
                            >
                                <IoLogoWhatsapp className="text-[#3BA9F4]" />
                                <span>Whatsapp</span>
                            </a>

                            {/* A Nina como canal de contato, não só como bolha no canto */}
                            <button
                                type="button"
                                onClick={() => window.dispatchEvent(new Event("abrir-nina"))}
                                className="inline-flex items-center gap-2 p-3 text-left transition-transform duration-300 transform rounded-md hover:scale-105 hover:bg-[#050505] hover:text-[#3BA9F4] text-gray-300"
                            >
                                <FaRobot className="text-[#3BA9F4]" />
                                <span>Pergunte à Nina, minha IA</span>
                            </button>
                        </div>

                        <div className="flex flex-col items-center gap-4 text-gray-300">
                            {ItensWeb.map((item, index) => (
                                <ItensCardWeb key={index}
                                    href={item.href}
                                    title={item.title}
                                    icon={item.icon} />
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );

}
