'use client';
import { Locale, getTranslations } from '@/lib/getTranslations';
import Image from 'next/image';
import { Button, EmblaCarousel } from '../common';
import { UpArrowIcon } from '../icons';
import { portfolioSlidesData as slides } from '@/content/portfolioSlidesData';

interface PortfolioSectionProps {
  locale: Locale;
}

const PortfolioSection = ({ locale }: PortfolioSectionProps) => {
  return (
    <section
      id="portfolio"
      className="py-8 lg:py-12 2xl:py-20 bg-[var(--grey-100)]"
    >
      <EmblaCarousel
        title={getTranslations(locale).portfolio.title}
        titleColor="text-[var(--white)]"
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="min-w-full flex-[0_0_calc(100%-16px)] px-2 lg:min-w-1/2 lg:flex-[0_0_calc(50%-16px)] 2xl:min-w-1/3 2xl:flex-[0_0_calc(33.333%-16px)] mx-2"
          >
            <div className="rounded-2xl overflow-hidden relative w-full h-[350px] lg:h-[540px]">
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
              {/* overlay-підпис */}
              <div
                className="absolute bottom-0 left-0 right-0 p-4 rounded-b-2xl flex items-center"
                style={{ backgroundColor: 'rgba(42, 42, 45, 0.5)' }}
              >
                {/* Тексти зліва */}
                <div className="flex flex-col">
                  <h3 className="text-white">{slide.title}</h3>
                  <h4 className="text-[var(--grey-30)]">{slide.subtitle}</h4>
                </div>

                {/* Кнопка справа */}
                <Button
                  as="link"
                  href={`/${locale}${slide.slug}`}
                  className="ml-auto"
                >
                  <UpArrowIcon />
                </Button>
              </div>
            </div>
          </div>
        ))}

        {/* CTA-слайд */}
        <div className="min-w-full flex-[0_0_100%] px-2 lg:min-w-1/2 lg:flex-[0_0_50%] 2xl:min-w-1/3 2xl:flex-[0_0_33.33%]">
          <div className="rounded-2xl flex flex-col items-center justify-center h-[540px] bg-gradient-to-br from-purple-600 to-blue-500 text-white text-center p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-2">
              Maybe here will be your project?
            </h3>
            <p className="text-sm opacity-90 mb-4">
              Let’s build something amazing together 🚀
            </p>
            <Button>Contact Us</Button>
          </div>
        </div>
      </EmblaCarousel>
    </section>
  );
};

PortfolioSection.displayName = 'PortfolioSection';
export default PortfolioSection;
