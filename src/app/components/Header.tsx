"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { motion, AnimatePresence } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const navLinks = [
  { name: "Experiências", href: "#experiences" },
  { name: "Ferramentas", href: "#stacks" },
  { name: "Projetos", href: "#projects" },
  { name: "Contato", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${poppins.className} fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-[#0B0F1A]/80 backdrop-blur-md border-b border-[#1F2937] py-4"
          : "bg-transparent py-6"
        }`}
    >
      <div className="container px-6 mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="relative z-50 group">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#3BA9F4] group-hover:to-white transition-all duration-300">
            Arthur
            <span className="text-[#3BA9F4]">Vinicius</span>
            <span className="text-[#3BA9F4] group-hover:text-white transition-colors">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-[#3BA9F4] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3BA9F4] transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Social & CTA (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-3 pr-4 border-r border-gray-700">
            <a href="https://github.com/Arthurvini17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/arthur-vinicius-b22202270/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0A66C2] transition-colors">
              <FaLinkedin size={20} />
            </a>
          </div>
          <Link href="#contact">
            <button className="px-4 py-2 text-xs font-bold text-[#0B0F1A] bg-white rounded-md hover:bg-[#3BA9F4] transition-colors">
              Vamos conversar?
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-50 text-gray-300 hover:text-white"
        >
          {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#0B0F1A] md:hidden"
            >
              <nav className="flex flex-col items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-bold text-gray-300 hover:text-[#3BA9F4] transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="w-16 h-0.5 bg-gray-800 my-4" />

                <div className="flex items-center gap-6">
                  <a href="https://github.com/Arthurvini17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <FaGithub size={28} />
                  </a>
                  <a href="https://www.linkedin.com/in/arthur-vinicius-b22202270/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0A66C2] transition-colors">
                    <FaLinkedin size={28} />
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
