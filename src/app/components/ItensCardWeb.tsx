import { ReactNode } from "react";

type ItensCardWebProps = {
    title: string;
    icon: ReactNode;
    href?: string;
};

export default function ItensCardWeb({ title, icon, href }: ItensCardWebProps) {
    return (

        <a href={href} className="block transition-transform hover:scale-105">
            <div className="flex items-center gap-4 px-4 py-3 rounded-md shadow-md w-60 bg-[#0B0F1A] border border-[#1F2937] hover:border-[#3BA9F4] group transition-colors">
                <span className="inline-flex items-center justify-center text-2xl text-center text-[#3BA9F4] group-hover:text-white transition-colors">{icon}</span>
                <span className="inline-flex items-center font-medium text-gray-300 group-hover:text-white transition-colors">{title}</span>
            </div>
        </a>

    );
}
