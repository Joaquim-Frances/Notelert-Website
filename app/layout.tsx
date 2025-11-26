import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Notelert - Your Notes, Where and When You Need Them",
  description: "Tired of writing important notes in Obsidian only to forget checking them when it matters most? Notelert is the missing bridge between your brain, your notes, and the real world.",
  keywords: ["Obsidian", "notes", "reminders", "location-based", "productivity", "second brain"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
