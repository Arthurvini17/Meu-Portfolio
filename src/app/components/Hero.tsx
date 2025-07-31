import Image from "next/image";
import Link from "next/link";
export default function Hero() {
    return (
        <main className="flex flex-col w-full h-full p-5 bg-gradient-to-r from-blue-500 to-indigo-600 ">
            <div className="flex flex-col items-center text-center md:flex md:flex-row md:justify-center md:gap-5">
                <Image src="/images/imagem-eu.jpg" alt="imagem" className="ml-10 text-center rounded-lg " width={150} height={100} />
                <div className="text-xl text-white">
                    <h1 className="md:text-2xl">Olá, eu sou Arthur!</h1>
                    <p className="md:text-xl text-md">Desenvolvedor Full Stack | MySQL</p>
                    <Link href={"#projects"}>
                        <button className="px-2 py-2 mt-2 text-xs font-bold text-blue-500 bg-white rounded-md hover:cursor-pointer md:text-md">Ver Meus Projetos</button>
                    </Link>
                </div>
            </div>
        </main>
    )
}