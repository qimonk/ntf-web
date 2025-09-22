import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "NSY Tax Freelancer - Solusi Perpajakan Profesional",
  description: "Layanan konsultasi, perhitungan, dan pelaporan pajak profesional untuk bisnis Anda. Hubungi kami untuk solusi perpajakan terbaik.",
  keywords: ["pajak", "konsultasi pajak", "perhitungan pajak", "pelaporan pajak", "tax planning", "NSY Tax Freelancer"],
  authors: [{ name: "NSY Tax Freelancer" }],
  openGraph: {
    title: "NSY Tax Freelancer - Solusi Perpajakan Profesional",
    description: "Layanan konsultasi, perhitungan, dan pelaporan pajak profesional untuk bisnis Anda",
    url: "https://nsy-tax-freelancer.pages.dev",
    siteName: "NSY Tax Freelancer",
=======
  title: "Z.ai Code Scaffold - AI-Powered Development",
  description: "Modern Next.js scaffold optimized for AI-powered development with Z.ai. Built with TypeScript, Tailwind CSS, and shadcn/ui.",
  keywords: ["Z.ai", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "AI development", "React"],
  authors: [{ name: "Z.ai Team" }],
  openGraph: {
    title: "Z.ai Code Scaffold",
    description: "AI-powered development with modern React stack",
    url: "https://chat.z.ai",
    siteName: "Z.ai",
>>>>>>> 16b47be18b2a98af725b09c567024d24c8bb0236
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
<<<<<<< HEAD
    title: "NSY Tax Freelancer - Solusi Perpajakan Profesional",
    description: "Layanan konsultasi, perhitungan, dan pelaporan pajak profesional untuk bisnis Anda",
  },
  icons: {
    icon: '/favicon.ico',
=======
    title: "Z.ai Code Scaffold",
    description: "AI-powered development with modern React stack",
>>>>>>> 16b47be18b2a98af725b09c567024d24c8bb0236
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
