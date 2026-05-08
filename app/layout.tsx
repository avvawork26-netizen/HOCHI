import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Madison Adams — Freelance TV News Reporter | South Florida",
  description:
    "Madison Adams is a South Florida-based freelance TV news reporter with 60M+ views and 10M+ likes. Available for event reporting, brand inquiries, and livestream hosting.",
  openGraph: {
    title: "Madison Adams — Freelance TV News Reporter",
    description: "Breaking stories, building brands. South Florida.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${inter.variable}`}>
      <body className="bg-brand-black text-brand-white font-body antialiased">
        {children}
      </body>
    </html>
  );
}
