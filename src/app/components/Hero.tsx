import Image from "next/image";
export default function Hero() {
    return (
        <main className="flex flex-col  p-5 bg-gradient-to-r from-blue-500 to-indigo-600 h-full w-full ">
            <div className="flex items-center flex-col text-center   ">
                <Image src="/images/IMAGEM2-CHAT.png" alt="imagem" className="ml-10" width={150} height={100} />
                <div className="text-white text-xl">
                    <h1 className="">Olá, eu sou Arthur!</h1>
                    <p className="text-md">Desenvolvedor Full Stack| MySQL</p>
                    <button className="bg-white rounded-md py-2 px-2 text-xs font-bold text-blue-500  mt-2">Ver Meus Projetos</button>
                </div>
            </div>
        </main>
    )
}