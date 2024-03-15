import { cn } from '@/lib/utils';

interface IChevronRight {
  size?: number;
  className?: string;
}

export default function ChevronRight({ size = 6, className = '' }: IChevronRight) {
  return (
    <svg
      className="chevron-right-icon"
      width={size}
      height={(size / 6) * 11}
      viewBox="0 0 6 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.78032 4.94527C6.07323 5.25209 6.07323 5.75036 5.78032 6.05718L1.28119 10.7699C0.988283 11.0767 0.512595 11.0767 0.219684 10.7699C-0.0732279 10.4631 -0.0732279 9.9648 0.219684 9.65798L4.18922 5.5L0.222027 1.34202C-0.0708846 1.0352 -0.0708846 0.53693 0.222027 0.230113C0.514938 -0.0767042 0.990627 -0.0767042 1.28354 0.230113L5.78266 4.94282L5.78032 4.94527Z"
        className={cn('stroke-white', className)}
      />
    </svg>
  );
}
