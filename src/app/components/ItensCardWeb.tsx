import { ReactNode } from "react";

type ItensCardWebProps = {
    title: string;
    icon: ReactNode;
    href?: string;
};

export default function ItensCardWeb({ title, icon, href }: ItensCardWebProps) {
    return (
        <a href={href}>
            <div className="flex items-center gap-4 px-4 py-2 rounded-md shadow w-60">
                <span className="inline-flex items-center justify-center text-2xl text-center text-blue-500 ">{icon}</span>
                <span className="inline-flex items-center font-medium ">{title}</span>
            </div >
        </a>

    );
}
