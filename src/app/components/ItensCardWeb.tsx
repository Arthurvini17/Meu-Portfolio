import Link from "next/link";
import { ReactNode } from "react";

type ItensCardWebProps = {
    title: string;
    icon: ReactNode;
    href?: string;
};

const classes = "block transition-transform hover:scale-105";

/** Rotas internas ("/", "#x", "/#x") navegam pelo router; o resto é âncora comum. */
function isInterno(href: string) {
    return href.startsWith("/") || href.startsWith("#");
}

export default function ItensCardWeb({ title, icon, href }: ItensCardWebProps) {
    const conteudo = (
        <div className="flex items-center gap-4 px-4 py-3 shadow-md w-full max-w-60 bg-[#050505] border border-[#1f1f1f] hover:border-[#3BA9F4] group transition-colors rounded-md">
            <span className="inline-flex items-center justify-center text-2xl text-center text-[#3BA9F4] group-hover:text-white transition-colors">{icon}</span>
            <span className="inline-flex items-center font-medium text-gray-300 group-hover:text-white transition-colors">{title}</span>
        </div>
    );

    if (href && isInterno(href)) {
        return (
            <Link href={href} className={classes}>
                {conteudo}
            </Link>
        );
    }

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
            {conteudo}
        </a>
    );
}
