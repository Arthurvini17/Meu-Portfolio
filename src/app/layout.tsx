import type { Metadata } from "next";
import Header from "./components/Header";
import ChatWidget from "./components/ChatWidget";
import "./globals.css";
import { Inter } from "next/font/google";



// const roboto = Roboto({
//   weight: ["400", "500", "600"],
//   subsets: ["latin"],
// });

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

// Título padrão para toda rota — inclusive a 404, que no App Router
// não exporta metadata de forma confiável por conta própria.
// Sem isto o Next resolve URLs de metadata contra localhost:3000, e o preview
// de link quebra em produção. NEXT_PUBLIC_SITE_URL tem precedência; na Vercel,
// VERCEL_URL cobre o deploy automaticamente.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Arthur Vinícius — Desenvolvedor Full Stack",
    template: "%s — Arthur Vinícius",
  },
  description:
    "Portfólio de Arthur Vinícius: projetos, experiências e contato. Sistemas full stack, landing pages e integrações com IA.",
  // As visitas chegam majoritariamente por link direto (LinkedIn, WhatsApp),
  // então o preview do link é a primeira superfície que alguém vê.
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Arthur Vinícius",
    title: "Arthur Vinícius — Desenvolvedor Full Stack",
    description:
      "Sistemas full stack, landing pages e integrações com IA — do banco de dados à interface. Disponível para projetos e freelas.",
    // TODO(Arthur): adicionar public/images/og.jpg em 1200x630 e declarar aqui.
    // Nenhuma imagem existente serve: todas são retrato ou screenshot de projeto.
  },
  twitter: {
    card: "summary",
    title: "Arthur Vinícius — Desenvolvedor Full Stack",
    description:
      "Sistemas full stack, landing pages e integrações com IA. Disponível para projetos e freelas.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body>
        <Header />

        <main>
          {children}
        </main>
        <ChatWidget />
      </body>
    </html>
  );
}
