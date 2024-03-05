import Link from 'next/link';
import Logo from '@/components/logo';

export default function NavigationBar() {
  return (
    <nav className="navbar flex justify-center px-4 sticky top-0 transition-all bg-primary-bg">
      <div className="w-300 max-w-full flex items-center justify-between h-20 transition-all">
        <Logo />
        <ul className="flex gap-[30px] font-medium text-gray">
          <li>
            <Link href="/generator">Generator</Link>
          </li>
          <li>
            <Link href="/docs">Docs</Link>
          </li>
          <li>
            <button>Login</button>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
