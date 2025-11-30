import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Azeret_Mono, Inter } from 'next/font/google';
import { AppLayout } from '@/layouts/app-layout';
import { cn } from '@/lib/tailwind';
import './globals.css';

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const azeretMono = Azeret_Mono({
  variable: '--font-azeret-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'AUEP',
  description: 'AUEP',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="fr"
      className={cn('antialiased', inter.variable, azeretMono.variable)}
    >
      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
