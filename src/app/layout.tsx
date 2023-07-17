import './globals.css';
import React from 'react';
import type { Metadata } from 'next';
import { Roboto_Flex as Roboto } from 'next/font/google';

import Header from '@/components/Header';
import Shelf from '@/components/Shelf';

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' });

export const metadata: Metadata = {
  title: 'Pedro Paiva',
  description: 'Portfólio de projetos do Desenvolver Front-End Pedro Paiva',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className}
        bg-[url(../assets/Renato-Navarro.jpeg)] bg-cover bg-center bg-moodboard-dark
        text-moodboard-light
        sm:shadow-bgShadow
      `}>
        <Header />
        <main>
          <div className='page'>
            {children}
          </div>
          <Shelf />
        </main>
      </body>
    </html>
  )
}
