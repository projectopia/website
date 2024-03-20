'use client';

import Link from 'next/link';
import { toast } from 'sonner';
import { MouseEvent } from 'react';

import { useModal } from '@/hooks/modal-store';

export const GeneratorLink = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  // Extract open modal function from useModal hook
  const { onOpen } = useModal();

  const onGeneratorLinkClick = (event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
    // Open sign in modal if the user is not authenticated
    if (!isAuthenticated) {
      event.preventDefault();
      onOpen('signIn');
      toast.error('Login required for page access!');
    }
  };

  return (
    <Link onClick={onGeneratorLinkClick} href="/generator">
      Generator
    </Link>
  );
};
