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
        <div id="contact" className="p-5 md:p-20">
            <h1 className="mb-10 text-2xl font-bold text-center md:mb-20 md:text-4xl">Entre em Contato</h1>
            <div className="flex md:flex md:items-center md:justify-center">
                <div className="flex flex-col items-center justify-center  md:p-20 shadow-xl border p-5 md:h-80 border-[#a1a1a1]/60 rounded-2xl">
                    <div className="flex flex-wrap items-start justify-center gap-10 md:gap-16">

                        <div className="flex flex-col items-start gap-4 ">
                            <h1 className="inline-flex items-center gap-2 p-2 transition-transform duration-300 transform rounded-md cursor-pointer hover:scale-105 hover:bg-gray-100"><MdEmail /> arthurdedsec@gmail.com</h1>
                            <a
                                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 p-2 transition-transform duration-300 transform rounded-md hover:scale-105 hover:bg-gray-100"
                            >
                                <IoLogoWhatsapp />
                                <span>Whatsapp</span>
                            </a>
                        </div>

                        <div className="flex flex-col items-center gap-4 ">
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