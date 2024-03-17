import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

import { cn } from '@/lib/utils';
import { ModalProvider } from '@/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Projectopia',
  description: `Input your specifications, and we'll handle the rest, automatically generating structure and "Auto DevOps"`,
  icons: {
    icon: '/projectopia-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, 'bg-primary-bg')}>
        <ModalProvider />
        {children}
      </body>
    </html>
  );
}
