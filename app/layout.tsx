import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trust Ihemebiri | Software Engineer & Web Developer - Trusted Ideas",
  description: "Trusted Ideas by Trust Ihemebiri offers expert web development, smart tech solutions, and a portfolio of impactful digital projects tailored for modern businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
       
          {children}
      </body>
    </html>
  );
}
