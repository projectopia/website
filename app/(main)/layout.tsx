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
    <>
      <div className="min-h-full hidden lg:block">
        <ScrollHandler />
        <NavigationBar />
        <main>{children}</main>
        <Footer />
      </div>
      <div className="min-h-full lg:hidden w-full flex flex-col justify-center items-center">
        <p>
          Current{' '}
          <span className="font-bold">
            Project<span className="text-purple">opia</span>
          </span>{' '}
          version only support desktop
        </p>
        <p>Please change your device for the best experience!</p>
      </div>
    </>
  );
}
