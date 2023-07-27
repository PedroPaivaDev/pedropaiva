import './globals.css';
import React from 'react';
import type { Metadata } from 'next';
import { Roboto_Flex as Roboto } from 'next/font/google';

import HeaderViewProvider from '@/contexts/HeaderViewContext';
import ContentDBProvider from '@/contexts/ContentDBContext';

import Header from '@/components/Header';

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
        sm:shadow-blackShadowInset
      `}>
        <HeaderViewProvider>
          <Header />
          <main>
            <ContentDBProvider>
              {children}
            </ContentDBProvider>
          </main>
        </HeaderViewProvider>
      </body>
    </html>
  )
}
