import { Poppins } from "next/font/google";
import { FaLaravel } from "react-icons/fa";
import { SiLivewire } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiLinux } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { DiDocker, DiMysql } from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});


const stackItemClass = "flex items-center justify-center gap-2 py-4 px-6 bg-[#121826] border border-[#1F2937] hover:border-[#3BA9F4] hover:shadow-[0_0_15px_rgba(59,169,244,0.3)] transition-all duration-300 rounded-lg group";

export default function Stacks() {
  return (
    <main id="stacks" className={`${poppins.className} py-16 bg-[#0B0F1A] text-[#F2F9FC] font-bold`}>
      <div className="flex items-center justify-center mb-10">
        <h1 className="text-3xl md:text-4xl">Minhas Stacks:</h1>
      </div>
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

          <div className={stackItemClass}>
            <h1 className="group-hover:text-[#3BA9F4] transition-colors">HTML</h1>
            <span className="text-2xl text-[#e34c26]"><SiHtml5 /></span>
          </div>


          <div className={stackItemClass}>
            <h1 className="group-hover:text-[#3BA9F4] transition-colors">TailwindCss</h1>
            <span className="text-2xl text-[#38bdf8]"><SiTailwindcss /></span>
          </div>



          <div className={stackItemClass}>
            <h1 className="group-hover:text-[#3BA9F4] transition-colors">PHP</h1>
            <span className="text-2xl text-[#777bb4]"><FaPhp /></span>
          </div>


          <div className={stackItemClass}>
            <h1 className="group-hover:text-[#3BA9F4] transition-colors">Javascript</h1>
            <span className="text-2xl text-[#f7df1e]"><FaJs /></span>
          </div>

          <div className={stackItemClass}>
            <h1 className="group-hover:text-[#3BA9F4] transition-colors">NodeJS</h1>
            <span className="text-2xl text-[#68a063]"><IoLogoNodejs /></span>
          </div>



          <div className={stackItemClass}>
            <h1 className="group-hover:text-[#3BA9F4] transition-colors">Laravel</h1>
            <span className="text-2xl text-[#ff2d20]"><FaLaravel /></span>
          </div>

          <div className={stackItemClass}>
            <h1 className="group-hover:text-[#3BA9F4] transition-colors">Livewire</h1>
            <span className="text-2xl text-[#fb70a9]"><SiLivewire /></span>
          </div>


          <div className={stackItemClass}>
            <h1 className="group-hover:text-[#3BA9F4] transition-colors">NextJS</h1>
            <span className="text-2xl text-white"><RiNextjsFill /></span>
          </div>


          <div className={stackItemClass}>
            <h1 className="group-hover:text-[#3BA9F4] transition-colors">MySQL</h1>
            <span className="text-2xl text-[#00758f]"><DiMysql /></span>
          </div>


          <div className={stackItemClass}>
            <h1 className="group-hover:text-[#3BA9F4] transition-colors">Git</h1>
            <span className="text-2xl text-[#f1502f]"><FaGitAlt /></span>
          </div>


          <div className={stackItemClass}>
            <h1 className="group-hover:text-[#3BA9F4] transition-colors">Linux</h1>
            <span className="text-2xl text-white"><SiLinux /></span>
          </div>


          <div className={stackItemClass}>
            <h1 className="group-hover:text-[#3BA9F4] transition-colors">Docker</h1>
            <span className="text-2xl text-[#2496ed]"><DiDocker /></span>
          </div>


          <div className={stackItemClass}>
            <h1 className="group-hover:text-[#3BA9F4] transition-colors">ReactNative</h1>
            <span className="text-2xl text-[#61dafb]"><TbBrandReactNative /></span>
          </div>

        </div>
      </div>
    </main>
  );
}
