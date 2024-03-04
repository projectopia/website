import { Footer, NavigationBar } from '@/components/navigation';
import next from 'next';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full">
      <NavigationBar />
      <main className="flex justify-center px-4">{children}</main>
      <Footer />
    </div>
  );
}
