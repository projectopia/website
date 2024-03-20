import Image from 'next/image';

import { heroImage, productImage } from '@/public';
import { PlayButton } from '@/components/play-button';
import { GetStartedButton } from './get-started-button';

export default function HeroSection() {
  return (
    <section aria-label="hero-section" className="flex justify-center px-4 pt-20">
      <div className="w-300 max-w-full">
        <div className="w-160 mx-auto">
          <h1 className="text-[78px] leading-[80px] font-bold text-center">
            Boost your work with project<span className="text-purple">opia</span>
          </h1>
          <p className="text-lg leading-7 text-gray text-center mt-4">
            Projectopia revolutionizes developer productivity by delivering a powerful project scaffold that effectively
            minimizes workload, maximizes output, and propels developers to new heights of efficiency and success.
          </p>
        </div>
        <div className="flex flex-col items-center mt-10">
          <GetStartedButton />
        </div>
        <div className="relative mt-24 flex justify-center">
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-top-1/2 z-20 rounded-full peer size-[70px]">
            <PlayButton strokeWidth={12} size={70} className="bg-white" />
          </div>
          <Image
            src={heroImage}
            alt="Penguins"
            className="w-135 z-10 peer-hover:scale-105 transition-all duration-200"
            priority
          />
          <Image src={productImage} alt="Product" className="absolute left-10 -bottom-4" />
          <Image src={productImage} alt="Product" className="absolute left-24 bottom-1/2" />
          <Image src={productImage} alt="Product" className="absolute right-12 bottom-2" />
          <Image src={productImage} alt="Product" className="absolute right-20 bottom-1/2 -translate-y-4" />
        </div>
      </div>
    </section>
  );
}
