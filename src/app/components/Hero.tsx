import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <main className="relative flex flex-col p-5 md:p-10 ">

            <div className="">
                <Image
                    src="/images/image-bg.jpg"
                    alt="Imagem bg-fundo"
                    className="object-cover"
                    fill
                    sizes="(min-width: 1024px) 100vw, 50vw"
                    priority
                />
            </div>

            {/* Conteúdo pri*/}
            <div className="relative z-10 flex flex-col items-center text-center md:flex md:flex-row md:justify-center md:gap-5">
                <div className="flex flex-col items-center text-xl text-white md:text-start">
                    <h1 className="md:text-4xl">Arthur Vinicius</h1>
                    <h2 className="">Desenvolvedor Full Stack</h2>
                    <Link href={"#projects"}>
                        <button className="px-4 py-2 mt-4 text-xs font-bold text-blue-500 bg-white rounded-md hover:cursor-pointer md:text-md">
                            Ver Meus Projetos
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
