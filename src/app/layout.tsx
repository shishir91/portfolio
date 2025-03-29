import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "@/components/ui/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shishir Shrestha | Full Stack Developer",
  description: "Shishir's Portfolio - MERN Stack & Full Stack Developer.",
  keywords:
    "Shishir Shrestha, Full Stack Developer, MERN Stack, Next.js, Portfolio",
  authors: [
    { name: "Shishir Shrestha", url: "https://shresthashishir91.com.np" },
  ],
  creator: "Shishir Shrestha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <ThemeProvider>{children}</ThemeProvider>
        <ScrollToTop />
      </body>
    </html>
  );
}
