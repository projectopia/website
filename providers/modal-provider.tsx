'use client';

import { useEffect, useState } from 'react';

import { SignInModal } from '@/components/modals/sign-in-modal';

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <SignInModal />
    </>
  );
};
