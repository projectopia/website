import { cn } from '@/lib/utils';

interface IMails {
  size?: number;
  className?: string;
  weight?: number;
}

export default function Mails({ size = 24, className = 'black', weight = 2 }: IMails) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn('mails-icon stroke-black', className)}
      strokeWidth={weight}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="13" x="6" y="4" rx="2" />
      <path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7" />
      <path d="M2 8v11c0 1.1.9 2 2 2h14" />
    </svg>
  );
}
