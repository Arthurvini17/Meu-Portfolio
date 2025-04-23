import { Poppins } from "next/font/google";
import { FaLaravel } from "react-icons/fa";
import { SiLivewire } from "react-icons/si";


const poppins = Poppins({
    weight: ["400", "500", "600"],
    subsets: ["latin"],
});


export default function Stacks() {
    return (
        <main className={`${poppins.className}  p-4  text-text-primary  font-bold`}>
            <div className="flex items-center justify-center">
                <h1 className="text-text-primary">Minhas Stacks:</h1>
            </div>
            <div className="grid items-center grid-cols-2 gap-2 text-center ">
                <div className="flex items-center justify-center gap-2 bg-bg-secondary ">
                    <h1 className="text-text-highlight">Laravel</h1>
                    <span>  <FaLaravel /></span>
                </div>

                <div className="flex items-center justify-center gap-2 bg-bg-secondary ">
                    <h1 className="text-text-highlight">Livewire</h1>
                    <span> <SiLivewire /> </span>
                </div>
            </div>
        </main>
    );
}
