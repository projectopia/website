'use server';

import Link from 'next/link';

import { auth } from '@/auth';
import Logo from '@/components/logo';
import { UserCard } from './user-card';
import { SignInBtn } from './sign-in-btn';

export default async function NavigationBar() {
  const session = await auth();

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
          <li>{session ? <UserCard session={session} /> : <SignInBtn />}</li>
        </ul>
      </div>
    </nav>
  );
}
