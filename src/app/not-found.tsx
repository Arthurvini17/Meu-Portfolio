import Link from "next/link";
export default function NotFound() {
    return (
        <>
            <main>
                <h1>404</h1>
                <div>
                    <p>Oops, Pagina não encotrada</p>
                    <h1>Clique no botão abaixo para ser rederecionado</h1>
                    <Link href={'/'}></Link>
                </div>
            </main>
        </>
    );
}