import HeroSection from '@/components/home/hero-section';
import ConnectSection from '@/components/home/connect-section';
import FeaturesSection from '@/components/home/features-section';
import SubscribeSection from '@/components/home/subscribe-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ConnectSection />
      <SubscribeSection />
    </>
  );
}
