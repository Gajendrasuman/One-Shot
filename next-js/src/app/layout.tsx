import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/navbar";

import { Roboto_Slab, Inter } from "next/font/google"

export const roboto = Roboto_Slab({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
})

export const inter = Inter({
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: "Kunal On Forex",
  description: "",
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-slate-800 text-white"
      }>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
