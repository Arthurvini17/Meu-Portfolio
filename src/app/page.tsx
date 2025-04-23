import Link from "next/link";

export const metadata = {
  title: "Pagina Inicial | Arthur",
  description: "Página inicial ",
};

export default function Home() {
  return (
    <main className=" justify-center items-center  font-inter flex min-h-">
      <div className="text-white ">
        <h1>Olá Devs!</h1>
        <h1>Me chamo Arthur Vinicius</h1>
      </div>
    </main>
  );
}
