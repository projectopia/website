'use client';

import { cn } from '@/lib/utils';

export const FeatureCard = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative w-95 h-72 group">{children}</div>;
};

export const FeatureCardCover = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-end py-[50px] px-10 size-full rounded-md bg-feature-card-bg group-hover:opacity-0 transition duration-300 gap-4">
      {children}
    </div>
  );
};

export const FeatureCardIcon = ({ children }: { children: React.ReactNode }) => {
  return <div className="">{children}</div>;
};

export const FeatureCardTitle = ({ children }: { children: string }) => {
  return <h3 className="text-xl leading-7 font-bold text-white">{children}</h3>;
};

export const FeatureCardHover = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        'absolute inset-0 opacity-0 group-hover:opacity-100 hover:scale-105 hover:opacity-100 rounded-md bg-purple transition-all duration-300',
        'flex flex-col justify-end gap-3 px-10 pb-[50px]',
        'selection:bg-white selection:text-purple',
      )}
    >
      {children}
    </div>
  );
};

export const FeatureCardContent = ({ children }: { children: string }) => {
  return <p className="text-white leading-7">{children}</p>;
};
