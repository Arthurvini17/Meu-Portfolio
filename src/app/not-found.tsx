import Link from "next/link";
import { Poppins } from "next/font/google";
import { BsCodeSlash } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ItensCardWeb from "./components/ItensCardWeb";

const poppins = Poppins({
    weight: ["400", "500", "600"],
    subsets: ["latin"],
});

const destinos = [
    {
        icon: <BsCodeSlash />,
        title: "Projetos",
        href: "/#projects",
    },
    {
        icon: <FaBriefcase />,
        title: "Experiências",
        href: "/#experiences",
    },
    {
        icon: <MdEmail />,
        title: "Contato",
        href: "/#contact",
    },
];

export default function NotFound() {
    return (
        // O <main> vem do layout; aqui seria um segundo, aninhado.
        <div
            className={`${poppins.className} flex min-h-screen flex-col items-center justify-center px-4 py-32 bg-[#050505] text-[#F2F9FC]`}
        >
            <div className="flex flex-col items-center w-full max-w-md text-center">
                <h1 className="text-3xl font-bold md:text-4xl">
                    Página não encontrada
                </h1>

                <p className="mt-4 leading-relaxed text-gray-300">
                    O link que te trouxe até aqui não existe mais — ou nunca existiu.
                    Escolha por onde continuar.
                </p>

                {/* Coluna única de recuperação: ação primária no topo,
                    destinos diretos abaixo, todos na mesma largura. */}
                <div className="flex flex-col w-full gap-3 mt-8 max-w-60">
                    <Link
                        href="/"
                        className="px-4 py-3 font-semibold text-center text-[#050505] bg-[#3BA9F4] rounded transition-colors hover:bg-[#3BA9F4]/90"
                    >
                        Voltar ao início
                    </Link>

                    {destinos.map((destino) => (
                        <ItensCardWeb
                            key={destino.title}
                            href={destino.href}
                            title={destino.title}
                            icon={destino.icon}
                        />
                    ))}
                </div>

                <p className="mt-12 font-mono text-xs text-gray-400">
                    HTTP 404 · rota não encontrada
                </p>
            </div>
        </div>
    );
}
