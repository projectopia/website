import { ScrollHandler } from '@/components/scroll-handler';
import { Footer, NavigationBar } from '@/components/navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-full">
      <ScrollHandler />
      <NavigationBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
