import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
