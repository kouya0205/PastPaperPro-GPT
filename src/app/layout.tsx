import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Header } from './components/layout/header/header';
import { Footer } from './components/layout/footer/footer';
import SupabaseListener from './api/auth/SupebaseListener';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PastPaperPro',
  description:
    'PastPaperPro is a platform for students to access past papers and other resources.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider>
          <SupabaseListener />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
