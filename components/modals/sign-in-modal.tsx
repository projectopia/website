'use client';

import Image from 'next/image';

import { projectopiaLogo } from '@/public';
import { useModal } from '@/hooks/modal-store';
import { Button } from '@/components/ui/button';
import GithubColor from '@/components/icons/github-color';
import { Dialog, DialogCloseButton, DialogContent, DialogHeader } from '@/components/ui/dialog';

export const SignInModal = () => {
  const { isOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type === 'signIn';

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-10 rounded-2xl overflow-hidden gap-0 sm:rounded-2xl">
        <DialogCloseButton className="top-10 right-10" />
        <DialogHeader>
          <div className="flex items-center gap-2">
            <Image src={projectopiaLogo} alt="projectopiaLogo" width={44} height={44} priority />
            <h1 className="text-[26px] leading-[40px] font-bold">
              project<span className="text-purple">opia</span>
            </h1>
          </div>
        </DialogHeader>
        <div className="">
          <h3 className="mt-7 font-bold text-xl">Sign in</h3>
          <p className="leading-6 text-gray mt-2">
            to continue to <span className="font-semibold">projectopia</span>
          </p>
          <Button className="py-[6px] w-full h-auto flex justify-center gap-4 bg-white hover:bg-zinc-200/70 mt-7 rounded-md border border-solid border-gray/40">
            <GithubColor size={32} />
            <p className="text-gray leading-6 text-base font-normal">Sign In With Github</p>
          </Button>
          <p className="mt-3 text-center text-sm font-light leading-6 text-gray">
            By signing in, you agree to our{' '}
            <span className="font-semibold text-purple underline cursor-pointer">Terms of Service</span>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
