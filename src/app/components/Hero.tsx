import Image from "next/image";
import Link from "next/link";
export default function Hero() {
    return (
        <main className="flex flex-col w-full h-full p-5 bg-gradient-to-r from-blue-500 to-indigo-600 ">
            <div className="flex flex-col items-center text-center ">
                <Image src="/images/imagem-eu.jpg" alt="imagem" className="ml-10 text-center rounded-lg " width={150} height={100} />
                <div className="text-xl text-white">
                    <h1 className="">Olá, eu sou Arthur!</h1>
                    <p className="text-md">Desenvolvedor Full Stack | MySQL</p>
                    <Link href={"#projects"}>
                        <button className="px-2 py-2 mt-2 text-xs font-bold text-blue-500 bg-white rounded-md">Ver Meus Projetos</button>
                    </Link>
                </div>
            </div>
        </main>
    )
}