import * as React from 'react';

import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';

const inputVariants = cva(
  'flex w-full text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-background border border-input rounded-md placeholder:text-muted-foreground',
        ghost: 'rounded-lg placeholder:text-gray bg-generator-form-input border-none',
      },
      sizes: {
        default: 'h-10 px-3 py-2',
        lg: 'px-[18px] py-[14px] h-auto',
      },
    },
    defaultVariants: {
      variant: 'default',
      sizes: 'default',
    },
  },
);

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, variant, sizes, ...props }, ref) => {
  return <input type={type} className={cn(inputVariants({ variant, sizes, className }))} ref={ref} {...props} />;
});
Input.displayName = 'Input';

export { Input };
