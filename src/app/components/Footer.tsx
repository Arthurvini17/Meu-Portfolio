"use client";

import { motion, useReducedMotion } from "motion/react";
import CurrentYear from "./CurrentYear";

export default function Footer() {
    const reduzirMovimento = useReducedMotion();

    return (
        <motion.footer
            initial={{ opacity: 0, y: reduzirMovimento ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4 }}
            className="w-full p-4 text-center text-[#F2F9FC] bg-[#050505] border-t border-[#1f1f1f]"
        >
            <p className="text-sm">© <CurrentYear /> Arthur Vinícius. Todos os direitos reservados.</p>
        </motion.footer>
    )
}
