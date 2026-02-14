import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: "Ferri Krisdiantoro | AI & Automation Engineer",
  description: "Full-stack engineer specializing in AI Agents, Automation, and Power Platform solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"
          strategy="lazyOnload"
        />
      </head>
      <body
        className={`${inter.variable} ${jakarta.variable} antialiased bg-white text-gray-900`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
