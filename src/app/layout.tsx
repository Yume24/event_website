import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import Navbar from '@/components/navbar/Navbar';

export const metadata: Metadata = {
  title: 'II Meeting Modelarski Pojazdów Cywilnych Ogrodzieniec 2026',
  description:
    'Celem wystawy i konkursu jest popularyzacja modelarstwa redukcyjnego ze szczególnym ' +
    'uwzględnieniem pojazdów cywilnych jako wartościowej formy rozwijania zainteresowań technicznych, historycznych i kreatywnych.'
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" data-theme="light">
      <body className={'antialiased'}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
