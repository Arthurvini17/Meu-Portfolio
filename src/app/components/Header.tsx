'use client'
import Link from "next/link"
import { Poppins } from "next/font/google"
import { motion } from "framer-motion"

const poppins = Poppins({
    weight: ["400", "500", "600"],
    subsets: ["latin"],
})
export default function Header() {
    return (
        <header className={`${poppins.className}  font-medium  p-4 border-b-[#1F2937] border-1`}>
            <nav className="flex w-full ">
                <ul className="flex items-center justify-center gap-1 text-text-primary">
                    <motion.li
                        className="flex items-center text-center text-text-highlight animate-pulse"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        $Arthur {'/>'}
                    </motion.li>
                    <li className="bg-[#121826] px-2 py-2  rounded-xl"><Link href="/">Home</Link></li>
                    <li className="bg-[#121826] px-2 py-2 rounded-xl"><Link href="/">Stacks</Link></li>
                    <li className="bg-[#121826] px-2 py-2 rounded-xl"><Link href="/projetos">Projetos</Link></li>
                    <li className="bg-[#121826] px-2 py-2 "><Link href="/contato">Contato</Link></li>
                </ul>
            </nav>
        </header >
    )
}
