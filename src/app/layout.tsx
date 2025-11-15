import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { AppLayout } from '../layouts/app-layout';
import { cn } from '../lib/utils';
import './globals.css';

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'AUEP',
  description: 'AUEP',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <body
        className={cn('antialiased', geistSans.variable, geistMono.variable)}
      >
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
