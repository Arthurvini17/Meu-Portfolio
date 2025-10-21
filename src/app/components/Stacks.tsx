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


const stackItemClass = "flex items-center justify-center gap-2 py-3 px-4 bg-white shadow rounded-lg";



export default function Stacks() {
  return (
    <main id="stacks" className={`${poppins.className}  p-4 bg-slate-50    font-bold`}>
      <div className="flex items-center justify-center">
        <h1 className="">Minhas Stacks:</h1>
      </div>
      <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-3 md:grid-cols-4">

        <div className={stackItemClass}>
          <h1 className="">HTML</h1>
          <span className="text-xl"><SiHtml5 /></span>
        </div>


        <div className={stackItemClass}>
          <h1 className="">TailwindCss</h1>
          <span className="text-xl"><SiTailwindcss /></span>
        </div>



        <div className={stackItemClass}>
          <h1 className="">PHP</h1>
          <span className="text-xl"><FaPhp /></span>
        </div>


        <div className={stackItemClass}>
          <h1 className="">Javascript</h1>
          <span className="text-xl"><FaJs /></span>
        </div>

        <div className={stackItemClass}>
          <h1 className="">NodeJS</h1>
          <span className="text-xl"><IoLogoNodejs /></span>
        </div>



        <div className={stackItemClass}>
          <h1 className="">Laravel</h1>
          <span className="text-xl"><FaLaravel /></span>
        </div>

        <div className={stackItemClass}>
          <h1 className="">Livewire</h1>
          <span className="text-xl"><SiLivewire /></span>
        </div>


        <div className={stackItemClass}>
          <h1 className="">NextJS</h1>
          <span className="text-xl"><RiNextjsFill /></span>
        </div>


        <div className={stackItemClass}>
          <h1 className="">MySQL</h1>
          <span className="text-xl"><DiMysql /></span>
        </div>


        <div className={stackItemClass}>
          <h1 className="">Git</h1>
          <span className="text-xl"><FaGitAlt /></span>
        </div>


        <div className={stackItemClass}>
          <h1 className="">Linux</h1>
          <span className="text-xl"><SiLinux /></span>
        </div>


        <div className={stackItemClass}>
          <h1 className="">Docker</h1>
          <span className="text-xl"><DiDocker /></span>
        </div>


        <div className={stackItemClass}>
          <h1 className="">ReactNative</h1>
          <span className="text-xl"><TbBrandReactNative /></span>
        </div>

      </div>
    </main>
  );
}
