import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";

const inter = Inter({subsets:["latin"]});

export const metadata: Metadata = {
  title: "Abhinav Bahadur Singh | Web Dev | Android Dev | AI&ML",
  description: "hey I am in 3rd sem of my btech with in an ghatiya se college of AKTU which is not known by any one named ABESIT and please avoid any type of spelling mistake",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <Header />   
        {children}
      </body>
    </html>
  );
}
