import { Poppins } from "next/font/google";
import { FaLaravel } from "react-icons/fa";
import { SiLivewire } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiDocker } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiLinux } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export default function Stacks() {
  return (
    <main className={`${poppins.className}  p-4 bg-slate-50    font-bold`}>
      <div className="flex items-center justify-center">
        <h1 className="">Minhas Stacks:</h1>
      </div>
      <div className="grid items-center grid-cols-2 gap-2 text-center ">
        <div className="flex items-center justify-center gap-2 py-1.5 bg-white  w-full h-full  shadow ">
          <h1 className="">Laravel</h1>
          <span className="text-xl">
            {" "}
            <FaLaravel />
          </span>
        </div>

        <div className="flex items-center justify-center gap-2 py-1.5 bg-white w-full h-full  shadow ">
          <h1 className="">NextJS</h1>
          <span className="text-xl">
            {" "}
            <RiNextjsFill />
          </span>
        </div>

        <div className="flex items-center py-1.5  justify-center-safe bg-white w-full h-full gap-2   shadow rounded-xs">
          <h1 className="">PHP </h1>
          <span className="text-xl ">
            <FaPhp />
          </span>
        </div>

        <div className="flex items-center py-1.5   justify-center gap-2 w-full h-full bg-white  shadow rounded-xs">
          <h1 className="">HTML </h1>
          <span className=" ">
            <SiHtml5 />
          </span>
        </div>

        <div className="flex items-center  py-1.5  justify-center gap-2 w-full h-full bg-white  shadow rounded-xs">
          <h1 className="">TailwindCSS </h1>
          <span className="text-xl ">
            <SiTailwindcss />
          </span>
        </div>

        <div className="flex items-center   py-1.5 justify-center gap-2 w-full h-full bg-white  shadow rounded-xs">
          <h1 className="">JavaScript </h1>
          <span className="text-xl ">
            <FaJs />
          </span>
        </div>

        <div className="flex items-center  py-1.5 justify-center gap-2 w-full h-full bg-white shadow rounded-xs">
          <h1 className="">Nodejs </h1>
          <span className="text-xl ">
            <IoLogoNodejs />
          </span>
        </div>

        <div className="flex items-center py-1.5 justify-center gap-2  w-full h-full  bg-white shadow rounded-xs ">
          <h1 className="">Livewire</h1>
          <span className="text-xl">
            <SiLivewire />
          </span>
        </div>

        <div className="flex items-center py-1.5 justify-center gap-2 w-full h-full bg-white  shadow rounded-xs">
          <h1 className="">Git</h1>
          <span className="text-xl">
            <FaGitAlt />
          </span>
        </div>

        <div className="flex items-center  py-1.5  justify-center gap-2 w-full h-full bg-white shadow rounded-xs">
            
          <h1 className="">MySQL </h1>
          <span className=" text-2xl ">
            <SiMysql />
          </span>

        </div>

        <div className="flex items-center   py-1.5   justify-center gap-2 w-full h-full bg-white shadow rounded-xs">
            <h1 className="">Docker </h1>
            <span className="text-xl ">
              <SiDocker />
            </span>
        </div>

        <div className="flex items-center py-1.5 justify-center gap-2 w-full h-full bg-white shadow rounded-xs">
          <h1 className="">Linux </h1>
          <span className="text-xl ">
            <SiLinux />
          </span>
        </div>
      </div>
    </main>
  );
}
