import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

import { cn } from '@/lib/utils';
import { ModalProvider, ToasterProvider } from '@/providers';
import { SessionProvider } from 'next-auth/react';
import { auth } from '@/auth';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Projectopia',
  description: `Input your specifications, and we'll handle the rest, automatically generating structure and "Auto DevOps"`,
  icons: {
    icon: '/projectopia-logo.png',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(inter.className, 'bg-primary-bg')}>
          <ModalProvider />
          <ToasterProvider />
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
