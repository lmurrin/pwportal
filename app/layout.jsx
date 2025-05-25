"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import LayoutClient from "./layoutClient";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// export const metadata = {
//   title: "Party Wall Portal",
//   description: "Party Wall Surveyor Tool",
// };

export default function RootLayout({ children }) {
  return (
    <SessionProvider>
      <html lang="en" className={inter.variable}>
        <body className="bg-base-100 text-base-content font-sans">
          <main>
            <LayoutClient>{children}</LayoutClient>
          </main>
        </body>
      </html>
    </SessionProvider>
  );
}
