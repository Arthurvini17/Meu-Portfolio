import Header from "./components/Header";
import "./globals.css";
import { Roboto, Inter } from "next/font/google";



const roboto = Roboto({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />

        <main>
          {children}
        </main>

      </body>
    </html>
  );
}
