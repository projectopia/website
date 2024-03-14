import Link from 'next/link';
import Image from 'next/image';

import { planetIcon, planetWhite } from '@/public/icons';
import { heroImage, productImage } from '@/public/images';

import { BlobButton } from '@/components/blob-button';
import { PlayButton } from '@/components/play-button';

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
        <Link href={'/generator'} className="flex flex-col items-center mt-10">
          <BlobButton className="px-4 py-3 text-base font-semibold flex gap-2 items-center drop-shadow-md group">
            Get Started
            <div className="relative">
              <Image src={planetIcon} alt="Planet" className="group-hover:opacity-0 transition duration-700" />
              <Image
                src={planetWhite}
                alt="Planet"
                className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition duration-700"
              />
            </div>
          </BlobButton>
        </Link>
        <div className="relative mt-24 flex justify-center">
          <Image src={heroImage} alt="Penguins" className="w-135 z-10" priority />
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-top-1/2 z-10">
            <PlayButton strokeWidth={12} size={70} className="bg-white" />
          </div>
          <Image src={productImage} alt="Product" className="absolute left-10 -bottom-4" />
          <Image src={productImage} alt="Product" className="absolute left-24 bottom-1/2" />
          <Image src={productImage} alt="Product" className="absolute right-12 bottom-2" />
          <Image src={productImage} alt="Product" className="absolute right-20 bottom-1/2 -translate-y-4" />
        </div>
      </div>
    </section>
  );
}
