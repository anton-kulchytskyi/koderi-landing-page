import { Locale } from '@/lib/getTranslations';

import {
  AboutSection,
  HeroSection,
  ImgSection,
  PortfolioSection,
  ReviewsSection,
  ServicesSection,
  TechnologiesSection,
  WorkProcess,
} from '@/components/sections';
import { FormSection } from '@/components/layout';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <main className="relative">
      <HeroSection locale={locale} />
      <ServicesSection locale={locale} />
      <ImgSection />
      <WorkProcess locale={locale} />
      <PortfolioSection locale={locale} />
      <TechnologiesSection locale={locale} />
      <ReviewsSection locale={locale} />
      <AboutSection locale={locale} />
      <FormSection locale={locale} />
    </main>
  );
}
