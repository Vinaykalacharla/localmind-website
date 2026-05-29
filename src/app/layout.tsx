import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { BackgroundAnimations } from "../components/BackgroundAnimations";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", 
});

export const metadata: Metadata = {
  title: "LocalMind OS | Local-First Knowledge Workspace",
  description: "A private, local-first knowledge workspace built for private document ingestion, semantic search, and grounded chat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <BackgroundAnimations />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
