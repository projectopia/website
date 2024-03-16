import { connectItems } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { connectPenguinsImage, ubunchuuImage } from '@/public';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ConnectSection() {
  return (
    <section aria-label="connect-section" className="mt-30 flex justify-center px-4">
      <div className="w-300 max-w-full flex gap-8 xl:gap-15 items-center">
        <div className="flex-1">
          <p className="text-xs xl:text-sm leading-4 text-purple font-semibold uppercase">Connect and grow</p>
          <h1 className="text-3xl xl:text-4xl font-bold mt-2">Join the Projectopia Community</h1>
          <p className="text-sm xl:text-base leading-6 xl:leading-[26px] text-gray mt-3">
            Regardless of your level of experience, our dynamic community provides chances to engage with individuals
            who share similar interests, acquire valuable knowledge, receive expert guidance, and expedite your
            development projects.
          </p>
          <div className="flex gap-10 mt-10 justify-between">
            <div className="flex-1 bg-white rounded-2xl overflow-hidden drop-shadow">
              {connectItems.map(({ Icon, href, title }, idx) => (
                <Link
                  key={idx}
                  href={href}
                  className={cn(
                    'px-3 py-4 xl:py-5 xl:px-6 flex justify-between items-center',
                    idx === 1 && 'border-t border-b border-solid border-gray/20',
                  )}
                >
                  <div className="flex gap-2 items-center">
                    <Icon size={32} />
                    <h3 className="font-medium mt-[1px] leading-6">{title}</h3>
                  </div>
                  <ChevronRight size={20} className="text-gray" />
                </Link>
              ))}
            </div>
            <Link
              href="https://ubunchuu-truong-us.github.io/"
              rel="noopener noreferrer"
              target="_blank"
              className={cn(
                'group flex-1 flex flex-col justify-center bg-white px-2.5 rounded-2xl overflow-hidden drop-shadow',
                'hover:-translate-y-1 hover:drop-shadow-md transition-all',
              )}
            >
              <div className="flex justify-center">
                <Image src={ubunchuuImage} alt="Ubunchuu Image" className="w-20" />
              </div>
              <h3 className="mt-1 font-medium leading-6 text-center">Ubunchuu Truong Us</h3>
              <p className="mt-1 text-sm text-center leading-5 text-gray">
                Join our Linux Community to learn helpful tips and tricks.
              </p>
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <Image src={connectPenguinsImage} alt="Penguins" className="w-full" />
        </div>
      </div>
    </section>
  );
}
