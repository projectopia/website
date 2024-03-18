import Link from 'next/link';
import Image from 'next/image';
import { projectopiaLogo } from '@/public';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src={projectopiaLogo} alt="projectopiaLogo" width={44} height={44} priority />
      <h1 className="text-[26px] leading-[40px] font-bold">
        project<span className="text-purple">opia</span>
      </h1>
    </Link>
  );
}
