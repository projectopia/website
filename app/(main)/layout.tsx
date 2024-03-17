'use client';

import { ScrollHandler } from '@/components/scroll-handler';
import { Footer, NavigationBar } from '@/components/navigation';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  useEffect(() => {
    // Remove fbclid query from search bar
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.delete('fbclid');

    // Redirect to removed fbclid url
    const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
    router.push(newUrl);
  }, [router]);

  return (
    <div className="min-h-full">
      <ScrollHandler />
      <NavigationBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
