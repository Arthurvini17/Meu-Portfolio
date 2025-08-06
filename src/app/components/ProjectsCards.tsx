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

export default function ProjectsCards() {
    return (
        <section
            id="projects"
            className={`${poppins.className} bg-slate-50 py-8 px-4 md:px-20 lg:px-40 mt-10 max-w-[1200px] mx-auto`} >
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
                {/* Slide 1 - HostPool */}
                <SwiperSlide>
                    <div className="flex flex-col h-full overflow-hidden bg-white rounded-lg shadow-lg">
                        <div className="relative h-[200px] w-full">
                            <Image
                                src="/images/hostpool.png"
                                alt="Imagem HostPool"
                                className="object-cover"
                                fill
                                sizes="(min-width: 1024px) 100vw, 50vw"
                                priority
                            />
                        </div>
                        <div className="flex flex-col flex-grow gap-4 p-6">
                            <h2 className="text-xl font-semibold text-gray-900">HostPool</h2>
                            <p className="flex-grow text-sm leading-relaxed text-gray-700">
                                Plataforma de hospedagem que permite criar ambientes de desenvolvimento usando Laravel e Docker. O projeto possui painel administrativo completo para gerenciamento de instâncias.
                            </p>
                            <p className="font-mono text-xs text-gray-500">
                                Laravel | Docker | MySQL | Livewire | Alpine JS
                            </p>
                            <div className="flex gap-6 text-sm font-medium">
                                <span className="italic text-gray-400 cursor-not-allowed">
                                    Projeto não hospedado
                                </span>
                                <a
                                    href="https://github.com/Arthurvini17/HostPool"
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

                {/* Slide 2 - Tech-Product-LP */}
                <SwiperSlide>
                    <div className="flex flex-col h-full overflow-hidden bg-white rounded-lg shadow-lg">
                        <div className="relative h-[200px] w-full">
                            <Image
                                src="/images/techpc2.png"
                                alt="Imagem Tech-Product-LP"
                                className="object-cover"
                                fill
                                sizes="(min-width: 1024px) 100vw, 50vw"
                                priority
                            />
                        </div>
                        <div className="flex flex-col flex-grow gap-4 p-6">
                            <h2 className="text-xl font-semibold text-gray-900">
                                Tech-Product-LP
                            </h2>
                            <p className="flex-grow text-sm leading-relaxed text-gray-700">
                                Landing page inspirada usando I.A da Gemini para fins de estudos. Apenas o design foi gerado com front!
                            </p>
                            <p className="font-mono text-xs text-gray-500">NextJs | TypeScript | TailwindCSS</p>
                            <div className="flex gap-6 text-sm font-medium">
                                <a
                                    href="https://tech-product-lp.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 underline transition-colors hover:text-blue-800"
                                >
                                    Visualizar
                                </a>
                                <a
                                    href="https://github.com/Arthurvini17/Tech-Product-LP"
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



                <SwiperSlide>
                    <div className="flex flex-col h-full overflow-hidden bg-white rounded-lg shadow-lg">
                        <div className="relative h-[200px] w-full">
                            <Image
                                src="/images/stockmanager.png"
                                alt="Imagem Tech-Product-LP"
                                className="object-cover"
                                fill
                                sizes="(min-width: 1024px) 100vw, 50vw"
                                priority />
                        </div>
                        <div className="flex flex-col flex-grow gap-4 p-6">
                            <h2 className="text-xl font-semibold text-gray-900">
                                StockManager
                            </h2>
                            <p className="flex-grow text-sm leading-relaxed text-gray-700">
                                Sistema de gerenciamento de estoque FullStack com dashboard intuitiva
                            </p>
                            <p className="font-mono text-xs text-gray-500"> JavaScript | TaiwlwindCSS | ReactJS | Nodejs | Prisma | Express | MySQL | Chartjs</p>
                            <div className="flex gap-6 text-sm font-medium">
                                <a
                                    href="https://stockmanager-frontend-swart.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 underline transition-colors hover:text-blue-800">
                                    Visualizar
                                </a>
                                <a
                                    href="https://github.com/Arthurvini17/Stockmanager-frontend"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-blue-600 transition-colors hover:text-blue-800">
                                    GitHub <FaGithub size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>




            </Swiper>
        </section>
    );
}
