'use client';

import { ChevronRight } from '@/components/icons';

import { cn } from '@/lib/utils';
import { useModal } from '@/hooks/modal-store';

export const SignInBtn = () => {
  // The open modal function from useModal hook
  const { onOpen } = useModal();

  return (
    <button
      className={cn(
        'group relative bg-purple text-white px-4 py-[6px] rounded-[14px] leading-5 flex items-center gap-2 overflow-hidden',
        'before:absolute before:bg-[#473797] before:left-0 before:bottom-0 before:w-0 before:h-full before:rounded-[14px]',
        'before:transition-[width] before:duration-300 hover:before:w-full',
      )}
      onClick={() => onOpen('signIn')}
    >
      <p className="z-10 pr-4 font-semibold transition-[padding] group-hover:px-2 duration-300">Sign In</p>
      <div className="z-10 right-4 group-hover:-right-2 transition-[right] duration-300 absolute">
        <ChevronRight />
      </div>
    </button>
  );
};
