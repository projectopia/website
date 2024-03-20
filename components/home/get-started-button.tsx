'use client';

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

import { Planet } from '@/components/icons';
import { useModal } from '@/hooks/modal-store';
import { BlobButton } from '@/components/blob-button';

export const GetStartedButton = () => {
  const session = useSession();
  const router = useRouter();

  const { onOpen } = useModal();

  const onClick = () => {
    if (session.status === 'unauthenticated') {
      onOpen('signIn');
    } else {
      router.push('/generator');
    }
  };

  return (
    <BlobButton
      onClick={onClick}
      className="px-4 py-3 text-base font-semibold flex gap-2 items-center drop-shadow-md group"
    >
      Get Started
      <div className="relative">
        <Planet className="group-hover:fill-white transition-[fill] duration-700" />
      </div>
    </BlobButton>
  );
};
