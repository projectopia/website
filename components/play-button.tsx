'use client';

import { cn } from '@/lib/utils';

export interface PlayButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: number;
  strokeWidth?: number;
}

export const PlayButton: React.FC<PlayButtonProps> = ({ children, className, type, size, strokeWidth, ...props }) => {
  return (
    <button {...props} type={type} className={cn('play-button rounded-full', className)}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width={`${size || 100}px`}
        height={`${size || 100}px`}
        viewBox="0 0 213.7 213.7"
        enableBackground="new 0 0 213.7 213.7"
        xmlSpace="preserve"
      >
        <polygon
          className="triangle"
          id="XMLID_18_"
          fill="none"
          strokeWidth={strokeWidth || 7}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          points="
	73.5,62.5 148.5,105.8 73.5,149.1 "
        />

        <circle
          className="circle"
          id="XMLID_17_"
          fill="none"
          strokeWidth={strokeWidth || 7}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          cx="106.8"
          cy="106.8"
          r="103.3"
        />
      </svg>
    </button>
  );
};
