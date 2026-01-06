"use client"
// import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";

import { DiGithub } from "react-icons/di";
import { IoLogoWhatsapp } from "react-icons/io5";
import { LiaLinkedin } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import ItensCardWeb from "./ItensCardWeb";

export default function Contact() {

    const phoneNumber = "5581988548132";
    const message = "Olá";

    const ItensWeb = [
        {
            icon: <DiGithub />,
            title: "Github",
            href: "https://github.com/Arthurvini17"
        },
        {
            icon: <LiaLinkedin />,
            title: "LinkedIn",
            href: "https://www.linkedin.com/in/arthur-vinicius-b22202270/"
        },

    ]
    return (
        <div id="contact" className="p-5 md:p-20 bg-[#0B0F1A] text-[#F2F9FC]">
            <h1 className="mb-10 text-3xl font-bold text-center text-[#F2F9FC] md:mb-20 md:text-4xl">Entre em Contato</h1>
            <div className="flex md:flex md:items-center md:justify-center">
                <div className="flex flex-col items-center justify-center p-8 transition-all duration-300 md:p-20 shadow-lg border md:h-80 border-[#1F2937] rounded-2xl bg-[#121826] hover:border-[#3BA9F4] hover:shadow-[0_0_20px_rgba(59,169,244,0.1)]">
                    <div className="flex flex-wrap items-start justify-center gap-10 md:gap-16">

                        <div className="flex flex-col items-start gap-4">
                            <h1 className="inline-flex items-center gap-2 p-3 transition-transform duration-300 transform rounded-md cursor-pointer hover:scale-105 hover:bg-[#0B0F1A] hover:text-[#3BA9F4] text-gray-300">
                                <MdEmail className="text-[#3BA9F4]" /> arthurdedsec@gmail.com
                            </h1>
                            <a
                                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 p-3 transition-transform duration-300 transform rounded-md hover:scale-105 hover:bg-[#0B0F1A] hover:text-[#3BA9F4] text-gray-300"
                            >
                                <IoLogoWhatsapp className="text-[#3BA9F4]" />
                                <span>Whatsapp</span>
                            </a>
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
            </div>
        </div>
    );

}