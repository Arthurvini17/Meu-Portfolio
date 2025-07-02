import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {

    return (
        <div id="contact" className="p-2 mb-10">
            <h1 className="m-2 text-xl font-bold text-center">Entre em Contato</h1>
            <div className="flex items-center gap-2">
                <div >
                    <a
                        href="https://wa.me/5581988548132?text=Olá,%20vim%20pelo%20seu%20portfólio!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 font-medium text-white transition bg-green-500 rounded-lg hover:bg-green-600"
                    >
                        <IoLogoWhatsapp />
                        Whatsapp
                    </a>
                </div>

                <div className="flex items-center ">
                    <a className="inline-flex items-center gap-2 px-4 py-2 font-medium text-white rounded-lg bg-slate-700" href="https://github.com/Arthurvini17">
                        <FaGithub />
                        GitHub
                    </a>
                </div>


                <div className="flex items-center ">
                    <a className="inline-flex items-center gap-2 px-4 py-2 font-medium text-white rounded-lg bg-slate-700" href="https://www.linkedin.com/in/arthur-vinicius-b22202270/">
                        <FaLinkedin />
                        Linkedin
                    </a>
                </div>
            </div>
        </div>
    )
}