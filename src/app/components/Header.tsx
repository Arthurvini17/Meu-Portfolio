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
        <header className={`${poppins.className} animate-pulse border-b-blue-300 border-1`}>
            <nav className="flex items-center justify-center">
                <ul className="flex items-center justify-center gap-5 text-white">
                    <motion.li
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-blue-300 animate-pulse">$Arthur /></p>
                    </motion.li>
                    <li className="bg-[#101010] px-2 py-2 rounded-tr-2xl"><Link href="/">Home</Link></li>
                    <li className="bg-[#101010] px-2 py-2 rounded-tr-2xl"><Link href="/projetos">Projetos</Link></li>
                    <li className="bg-[#101010] px-2 py-2 rounded-tr-2xl"><Link href="/contato">Contato</Link></li>
                </ul>
            </nav>
        </header>
    )
}
