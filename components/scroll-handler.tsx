'use client';

import { useEffect } from 'react';

import { debounce } from '@/lib/utils';

export const ScrollHandler = () => {
  useEffect(() => {
    // Reads out the scroll position and stores it in the data attribute
    // so we can use it in our stylesheets
    const storeScroll = () => {
      document.documentElement.dataset.navbarScroll = window.scrollY > 32 ? '1' : '0';
    };

    // Listen for new scroll events, here we debounce our `storeScroll` function
    document.addEventListener('scroll', debounce(storeScroll), { passive: true });

    // Update scroll position for the first time
    storeScroll();

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('scroll', debounce(storeScroll));
    };
  }, []);

  return <></>;
};
