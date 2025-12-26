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
  metadataBase: new URL('https://www.notelert.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Notelert - Your Notes, Where and When You Need Them",
    description: "Tired of writing important notes in Obsidian only to forget checking them when it matters most? Notelert is the missing bridge between your brain, your notes, and the real world.",
    url: 'https://www.notelert.com',
    siteName: 'Notelert',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="privacy-policy" href="https://www.notelert.com/privacy/" />
        <link rel="canonical" href="https://www.notelert.com" />
        {/* 
          GOOGLE SEARCH CONSOLE VERIFICATION
          Descomenta la línea siguiente y reemplaza 'TU_CODIGO_VERIFICACION' 
          con el código que te proporciona Google Search Console
        */}
        {/* <meta name="google-site-verification" content="TU_CODIGO_VERIFICACION" /> */}
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
