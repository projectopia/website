'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const RemoveFbclid = () => {
  const router = useRouter();

  useEffect(() => {
    // Remove fbclid query from search bar
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.delete('fbclid');

    // Redirect to removed fbclid url
    const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
    router.push(newUrl);
  }, [router]);

  return <></>;
};
