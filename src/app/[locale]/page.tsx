import HeroSection from '@/components/sections/HeroSection';

// import TechnologiesSection from '@/components/sections/TechnologiesSection';

import { Locale } from '@/lib/getTranslations';

import {
  AboutSection,
  FormSection,
  ImgSection,
  PortfolioSection,
  ReviewsSection,
  ServicesSection,
  TechnologiesSection,
  WorkProcess,
} from '@/components/sections';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params; // 👈 важливо!
  // const t = getTranslations(locale);

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
