import Link from 'next/link';
import Logo from '@/components/logo';

export default function NavigationBar() {
  return (
    <nav className="flex justify-center pt-10 px-4">
      <div className="w-300 max-w-full flex items-center justify-between h-20">
        <Logo />
        <div className="flex gap-[30px] font-medium text-gray">
          <Link href="/generator">Generator</Link>
          <Link href="/docs">Docs</Link>
          <button>Login</button>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
