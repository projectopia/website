'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Session } from 'next-auth';

import { logout } from '@/actions/logout';
import { Button } from '@/components/ui/button';
import { AVATAR_FALLBACK_IMG } from '@/lib/constants';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { feedbackImage, gitImage, githubColorlessImage, signoutImage } from '@/public';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const UserCard = ({ session }: { session: Session }) => {
  // This will not happen, but do this to prevent from logging the error
  if (!session.user) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="w-8 h-8 hover:cursor-pointer">
          <AvatarImage width={36} height={36} src={session.user.image || AVATAR_FALLBACK_IMG} fetchPriority="high" />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={8} align="end" side="bottom" className="w-81 rounded-lg p-4">
        <DropdownMenuLabel className="flex gap-4 items-center p-0">
          <Avatar className="w-12 h-12">
            <AvatarImage width={48} height={48} src={session.user.image || AVATAR_FALLBACK_IMG} />
          </Avatar>
          <div className="flex flex-col justify-center text-base">
            <h4 className="font-semibold leading-6">{session.user.username}</h4>
            {session.user.name && <p className="font-light leading-6 text-gray">{session.user.name}</p>}
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray/20 h-[2px] mt-4 mb-3 w-full mx-0" />
        <DropdownMenuGroup className="space-y-1">
          <DropdownMenuItem className="p-0">
            <Link
              href={''}
              className="flex py-2 px-3 rounded-sm gap-3 hover:bg-zinc-200/40 cursor-pointer text-base text-gray leading-6 w-full transition"
            >
              <Image src={gitImage} alt="Git Image" className="w-6 h-auto" />
              Manage your created apps
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-0">
            <Link
              href={`https://github.com/${session.user.username}`}
              rel="noopener noreferrer"
              target="_blank"
              className="flex py-2 px-3 rounded-sm gap-3 hover:bg-zinc-200/40 cursor-pointer text-base text-gray leading-6 w-full transition"
            >
              <Image src={githubColorlessImage} alt="Github Image" className="w-6 h-auto" />
              Check out your Repositories
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-0">
            <Link
              href={`/contact`}
              className="flex py-2 px-3 rounded-sm gap-3 hover:bg-zinc-200/40 cursor-pointer text-base text-gray leading-6 w-full transition"
            >
              <Image src={feedbackImage} alt="Feedback Image" className="w-6 h-auto" />
              Feedback
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-gray/20 h-[2px] my-2 w-full mx-0" />
        <DropdownMenuItem className="p-0">
          <Button
            onClick={() => logout()}
            className="flex py-2 px-3 rounded-sm gap-3 hover:bg-zinc-200/40 cursor-pointer text-base text-gray leading-6 w-full justify-start bg-white font-normal"
          >
            <Image src={signoutImage} alt="Sign Out Image" className="w-6 h-auto" />
            Sign Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
