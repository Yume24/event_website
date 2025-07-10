import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Navbar from "@/components/navbar/Navbar";


export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pl" data-theme="light">
      <body
        className={'antialiased'}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
