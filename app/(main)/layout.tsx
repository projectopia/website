import { Footer, NavigationBar } from '@/components/navigation';
import { ScrollHandler } from '@/components/scroll-handler';
import next from 'next';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full">
      <ScrollHandler />
      <NavigationBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
