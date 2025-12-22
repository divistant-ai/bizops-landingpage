import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/global.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BizOps",
  description: "BizOps - Business Operations Platform",
};

export default function ErrorLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} bg-white font-sans text-slate-900 antialiased transition-colors duration-200 dark:bg-slate-950 dark:text-white`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
