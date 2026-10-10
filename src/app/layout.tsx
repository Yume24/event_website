import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { GTProvider } from 'gt-next';

export const metadata: Metadata = {
  title: 'Meeting Modelarski Pojazdów Cywilnych Ogrodzieniec',
  description:
    'Celem wystawy i konkursu jest popularyzacja modelarstwa redukcyjnego ze szczególnym ' +
    'uwzględnieniem pojazdów cywilnych jako wartościowej formy rozwijania zainteresowań technicznych, historycznych i kreatywnych.'
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" data-theme="light">
      <body className={'min-h-screen flex flex-col antialiased'}>
        <GTProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </GTProvider>
      </body>
    </html>
  );
}
