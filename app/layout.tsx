import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "HighFlow - Gerador de Propostas para Freelancers",
  description: "Automatize sua geração de propostas em 2 minutos. Integração Stripe, WhatsApp e CRM. 100% transparente, suporte humano real.",
  keywords: "gerador de propostas, freelancer, automação, propostas profissionais, vender mais",
  openGraph: {
    title: "HighFlow - Automatize seu fluxo de propostas",
    description: "Gerador automático de propostas com templates inteligentes. Construído com transparência e suporte real.",
    type: "website",
    url: "https://highflow-mvp.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "HighFlow",
    description: "Automatize propostas em 2 minutos. +500 freelancers confiam.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">{children}</body>
    </html>
  );
}
