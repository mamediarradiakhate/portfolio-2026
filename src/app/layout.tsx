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
  title: "Mame Diarra Bousso | Ingénieure Fullstack, IA Agentique & Automatisation",
  description:
    "Portfolio de Mame Diarra Bousso Diakhate — Ingénieure Informatique et Applications, spécialisée en développement Fullstack, IA Agentique et Automatisation. Fondatrice de 3S Tech & IA.",
  keywords: [
    "Fullstack Developer",
    "AI Agent",
    "React",
    "Next.js",
    "Python",
    "Node.js",
    "Odoo",
    "Docker",
    "Machine Learning",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f8fafc] text-[#0f172a]">
        {children}
      </body>
    </html>
  );
}
