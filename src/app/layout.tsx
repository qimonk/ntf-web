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
  title: "NSY Tax Freelancer - Solusi Perpajakan Profesional",
  description: "Layanan konsultasi, perhitungan, dan pelaporan pajak profesional untuk bisnis Anda. Hubungi kami untuk solusi perpajakan terbaik.",
  keywords: ["pajak", "konsultasi pajak", "perhitungan pajak", "pelaporan pajak", "tax planning", "NSY Tax Freelancer"],
  authors: [{ name: "NSY Tax Freelancer" }],
  openGraph: {
    title: "NSY Tax Freelancer - Solusi Perpajakan Profesional",
    description: "Layanan konsultasi, perhitungan, dan pelaporan pajak profesional untuk bisnis Anda",
    url: "https://nsy-tax-freelancer.pages.dev",
    siteName: "NSY Tax Freelancer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NSY Tax Freelancer - Solusi Perpajakan Profesional",
    description: "Layanan konsultasi, perhitungan, dan pelaporan pajak profesional untuk bisnis Anda",
  },
  icons: {
    icon: '/favicon.ico',
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
