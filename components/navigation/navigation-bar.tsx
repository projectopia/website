'use client';

import Link from 'next/link';

import { cn } from '@/lib/utils';
import Logo from '@/components/logo';
import { ChevronRight } from '@/components/icons';
import { useModal } from '@/hooks/modal-store';

export default function NavigationBar() {
  const { onOpen } = useModal();

  return (
    <nav className="navbar flex justify-center px-4 sticky top-0 transition-all z-40">
      <div className="w-300 max-w-full flex items-center justify-between h-20 transition-all">
        <Logo />
        <ul className="flex gap-[30px] font-medium text-gray items-center">
          <li className="hover:text-purple hover:font-semibold transition-[font-weight] duration-200">
            <Link href="/generator">Generator</Link>
          </li>
          <li className="hover:text-purple hover:font-semibold transition-[font-weight] duration-200">
            <Link href="https://projectopia.github.io/docs/" rel="noopener noreferrer" target="_blank">
              Docs
            </Link>
          </li>
          <li className="hover:text-purple hover:font-semibold transition-[font-weight] duration-200">
            <Link href="/contact">Contact</Link>
          </li>
          <li>
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
          </li>
        </ul>
      </div>
    </nav>
  );
}
