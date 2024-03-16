import {
  FeatureCard,
  FeatureCardContent,
  FeatureCardCover,
  FeatureCardHover,
  FeatureCardIcon,
  FeatureCardTitle,
} from '@/components/feature-card';
import { featureItems } from '@/lib/constants';

export default function FeaturesSection() {
  return (
    <section aria-label="features-section" className="mt-30 flex justify-center px-4 bg-secondary-bg">
      <div className="py-30 w-300 max-w-full flex flex-col items-center gap-16">
        <h1 className="font-bold text-4xl text-white">Elevate your productivity to new heights</h1>
        <div className="grid grid-cols-3 gap-8 w-full">
          {featureItems.map(({ title, content, Icon }, idx) => (
            <FeatureCard key={idx}>
              <FeatureCardCover>
                <FeatureCardIcon>
                  <Icon size={42} className="stroke-white " />
                </FeatureCardIcon>
                <FeatureCardTitle>{title}</FeatureCardTitle>
              </FeatureCardCover>
              <FeatureCardHover>
                <FeatureCardTitle>{title}</FeatureCardTitle>
                <FeatureCardContent>{content}</FeatureCardContent>
              </FeatureCardHover>
            </FeatureCard>
          ))}
        </div>
      </div>
    </section>
  );
}
