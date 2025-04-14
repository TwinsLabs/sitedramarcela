import { ContentProvider } from '@/lib/contentContext';
import React from 'react';
import AuthProvider from './providers';
import Layout from '@/components/layout/Layout';
import './globals.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'Dra. Marcella Vieira | Médica do Trabalho',
  description:
    'Dra. Marcella Vieira - Médica do Trabalho e Perita Médica CRM 80479 | RQE 61114',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable}`}>
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
