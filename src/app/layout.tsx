import { ContentProvider } from '@/lib/contentContext';
import React from 'react';
import AuthProvider from './providers';
import Layout from '@/components/layout/Layout';
import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata = {
  title: 'Dra. Marcella Vieira | Médica do Trabalho',
  description:
    'Dra. Marcella Vieira - Médica do Trabalho especializada em perícias médicas e consultoria em saúde ocupacional.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-background text-text">
        <AuthProvider>
          <ContentProvider>
            <Layout>{children}</Layout>
          </ContentProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
