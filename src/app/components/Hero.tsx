import Image from "next/image";
export default function Hero() {
    return (
        <main className="flex items-center justify-center mt-20 ">
            <div className="flex flex-col items-center text-white">
                <div className="text-xl text-center">
                    <h1>Olá, Sejam Bem-Vindos!</h1>
                    <h1> <span className="font-bold text-[#3BA9F4] "> {'$this->name="Arthur Vinicius";'} </span></h1>
                    <p>Dev Full Stack</p>
                </div>
                <div className="">
                    <Image src="/images/IMAGEM-CHAT.png" alt="imagem" width={400} height={100} />
                </div>
            </div>
        </main>
    )
}