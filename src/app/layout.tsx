import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kitapmi — AI-Powered Book Writing IDE",
  description:
    "The intelligent writing environment for authors. Write, edit, and publish your book with an AI agent that understands narrative structure. Available for macOS, Windows, and Linux.",
  keywords: [
    "book writing software",
    "AI writing assistant",
    "book editor",
    "writing IDE",
    "novel writing app",
    "epub creator",
    "author tools",
  ],
  openGraph: {
    title: "Kitapmi — AI-Powered Book Writing IDE",
    description:
      "Like Cursor, but for authors. Write, edit, and publish your book with an intelligent AI agent.",
    type: "website",
    url: "https://kitapmi.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kitapmi — AI-Powered Book Writing IDE",
    description:
      "Like Cursor, but for authors. Write, edit, and publish your book with an intelligent AI agent.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased grain`}
      >
        {children}
      </body>
    </html>
  );
}
