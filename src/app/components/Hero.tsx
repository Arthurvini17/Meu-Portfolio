import Image from "next/image";
import Link from "next/link";
export default function Hero() {
    return (
        <main className="flex flex-col p-5 md:p-10 bg-gradient-to-r from-blue-500 to-indigo-600 ">
            <div className="flex flex-col items-center text-center md:flex md:flex-row md:justify-center md:gap-5">
                <Image src="/images/imagem-eu.jpg" alt="imagem" className="text-center rounded-lg " width={150} height={100} />

                <div className="text-xl text-white md:text-start md:flex-col md:flex">
                    <h2 className="md:text-2xl animate-pingping">Desenvolvedor Full Stack</h2>
                    <Link href={"#projects"}>
                        <button className="items-start px-2 py-2 mt-2 text-xs font-bold text-blue-500 bg-white rounded-md md:flex md:text-start md:p-2 hover:cursor-pointer md:text-md">
                            Ver Meus Projetos
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    )
}