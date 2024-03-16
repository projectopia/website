import Link from 'next/link';

import { footerSocials } from '@/lib/constants';
import Logo from '@/components/logo';
import footerItems from '@/config/footer-links.json';
import { cn } from '@/lib/utils';

export default function Footer() {
  return (
    <footer className="flex justify-center px-4 pb-10 mt-20">
      <div className="w-300 max-w-full">
        <div aria-label="line" className="h-[1px] w-full bg-gray/30"></div>
        <section aria-label="footer-navigation" className="mt-10 flex justify-between items-start">
          <Logo />
          <div className="flex gap-20">
            {footerItems.map((item, idx) => (
              <div key={idx}>
                <h4 className="text-sm font-medium text-gray">{item.label}</h4>
                <div className="mt-5 space-y-2">
                  {item.links.map(({ newTab, title, href }, linkIdx) => (
                    <Link
                      rel="noopener noreferrer"
                      target={newTab ? '_blank' : '_self'}
                      className="block text-sm text-gray leading-6"
                      key={linkIdx}
                      href={href}
                    >
                      {title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section aria-label="footer-metadata" className="grid grid-cols-3 mt-25 w-full items-center">
          <div aria-label="footer-socials" className="flex gap-8 footer-socials">
            {footerSocials.map(({ href, Icon }, idx) => (
              <a key={idx} href={href} className="hover:scale-105 hover:px-2 transition-all group">
                <Icon size={24} className="stroke-gray group-hover:stroke-purple" />
              </a>
            ))}
          </div>
          <div
            aria-label="footer-projectopia-version"
            className={cn(
              'justify-self-center',
              'flex gap-2 items-center',
              'py-[6px] px-5 rounded-[20px]',
              'bg-white drop-shadow hover:drop-shadow-md transition-all cursor-pointer',
            )}
          >
            <div className="relative flex h-4 w-4 justify-center items-center">
              <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-green-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
            </div>
            <p className="text-sm leading-[30px] font-medium">v0.1 - Mercury</p>
          </div>
          <h5 aria-label="footer-copyright" className="justify-self-end text-sm leading-[30px] text-gray">
            © 2024 Projectopia. All rights reserved.
          </h5>
        </section>
      </div>
    </footer>
  );
}
