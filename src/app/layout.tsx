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
  title: "Mame Diarra Bousso | Ingénieure IA Générative & Agents IA, DevOps & LLMOps",
  description:
    "Portfolio de Mame Diarra Bousso Diakhate, Ingénieure Informatique et Applications, spécialisée en IA générative agentique, DevOps/LLMOps et développement Fullstack. Fondatrice de 3S Tech & IA.",
  keywords: [
    "IA Générative",
    "Agents IA",
    "LLMOps",
    "DevOps",
    "Fullstack Developer",
    "React",
    "Next.js",
    "Python",
    "FastAPI",
    "Node.js",
    "Docker",
    "Kubernetes",
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
