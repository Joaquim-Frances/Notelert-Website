import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Notelert - Your Notes, Where and When You Need Them",
  description: "Tired of writing important notes in Obsidian only to forget checking them when it matters most? Notelert is the missing bridge between your brain, your notes, and the real world.",
  keywords: ["Obsidian", "notes", "reminders", "location-based", "productivity", "second brain"],
  metadataBase: new URL('https://notelert.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Notelert - Your Notes, Where and When You Need Them",
    description: "Tired of writing important notes in Obsidian only to forget checking them when it matters most? Notelert is the missing bridge between your brain, your notes, and the real world.",
    url: 'https://notelert.com',
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
        <link rel="privacy-policy" href="https://notelert.com/privacy/" />
        <link rel="canonical" href="https://notelert.com" />
        {/* 
          GOOGLE SEARCH CONSOLE VERIFICATION
          Descomenta la línea siguiente y reemplaza 'TU_CODIGO_VERIFICACION' 
          con el código que te proporciona Google Search Console
        */}
        {/* <meta name="google-site-verification" content="TU_CODIGO_VERIFICACION" /> */}
        {/* Enlace a la política de privacidad en el head para crawlers */}
        <noscript>
          <a href="https://notelert.com/privacy/">Privacy Policy</a>
        </noscript>
      </head>
      <body className={montserrat.className}>
        {/* Enlace a la política de privacidad renderizado directamente en el HTML estático del body para crawlers de Google */}
        <a href="https://notelert.com/privacy/" id="privacy-policy-link" style={{ 
          position: 'absolute',
          top: '0',
          left: '0',
          width: 'auto',
          height: 'auto',
          padding: '0.5rem 1rem',
          backgroundColor: 'var(--bg-secondary)',
          color: 'var(--text-normal)',
          textDecoration: 'underline',
          zIndex: 9999,
          fontSize: '0.875rem',
          border: '1px solid var(--border-subtle)',
          borderRadius: '0 0 4px 0'
        }}>Privacy Policy</a>
        {children}
      </body>
    </html>
  );
}
