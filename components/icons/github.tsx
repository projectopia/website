import { cn } from '@/lib/utils';

interface IGithub {
  size?: number;
  className?: string;
  weight?: number;
}

export default function Github({ size = 24, className = 'black', weight = 2 }: IGithub) {
  return (
    <svg
      className="github-icon"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="1">
        <path
          d="M15 22V18C15.1391 16.7473 14.7799 15.4901 14 14.5C17 14.5 20 12.5 20 9C20.08 7.75 19.73 6.52 19 5.5C19.28 4.35 19.28 3.15 19 2C19 2 18 2 16 3.5C13.36 3 10.64 3 7.99998 3.5C5.99998 2 4.99998 2 4.99998 2C4.69998 3.15 4.69998 4.35 4.99998 5.5C4.27185 6.51588 3.91845 7.75279 3.99998 9C3.99998 12.5 6.99998 14.5 9.99998 14.5C9.60998 14.99 9.31998 15.55 9.14998 16.15C8.97998 16.75 8.92998 17.38 8.99998 18V22"
          className={cn('stroke-black', className)}
          strokeWidth={weight}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 18C4.49 20 4 16 2 16"
          className={cn('stroke-black', className)}
          strokeWidth={weight}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
