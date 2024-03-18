import { RemoveFbclid } from '@/components/remove-fbclid';
import { ScrollHandler } from '@/components/scroll-handler';
import { Footer, NavigationBar } from '@/components/navigation';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="min-h-full hidden lg:block">
        <ScrollHandler />
        <RemoveFbclid />
        <NavigationBar />
        <main>{children}</main>
        <Footer />
      </div>
      <div className="min-h-full lg:hidden w-full flex flex-col justify-center items-center">
        <p>
          Current{' '}
          <span className="font-bold">
            Project<span className="text-purple">opia</span>
          </span>{' '}
          version only support desktop
        </p>
        <p>Please change your device for the best experience!</p>
      </div>
    </>
  );
}
