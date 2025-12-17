"use client";

import FloatingWhatsApp from "./components/FloatingWhatsApp";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./providers"; // your theme provider

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // optional, include weights you need
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <Providers>
          {children}
          <FloatingWhatsApp />
        </Providers>
      </body>
    </html>
  );
}
