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
            className="min-w-full flex-[0_0_100%] md:min-w-1/2 md:flex-[0_0_50%] 2xl:min-w-1/3 2xl:flex-[0_0_33.333%] px-4"
          >
            <div className="rounded-2xl overflow-hidden relative w-full h-[350px] lg:h-[540px]">
              <Image
                src={slide.src}
                alt={slide.title[locale]}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
              {/* overlay-підпис */}
              {i === slides.length - 1 ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <h4 className="text-white mb-4">{slide.title[locale]}</h4>
                  <p className="text-white mb-4">{slide.subtitle[locale]}</p>
                  {/* CTA-кнопка */}
                  <Button
                    as="link"
                    href={`/${locale}${slide.slug}`}
                    className="bg-[var(--secondary)] text-white px-6 py-3 rounded-xl shadow-lg hover:opacity-90 transition"
                  >
                    {slide.cta?.[locale]}
                  </Button>
                </div>
              ) : (
                <div
                  className="absolute bottom-0 left-0 right-0 p-4 rounded-b-2xl flex items-center"
                  style={{ backgroundColor: 'rgba(42, 42, 45, 0.5)' }}
                >
                  {/* Тексти зліва */}
                  <div className="flex flex-col">
                    <h3 className="text-white">{slide.title[locale]}</h3>
                    <h4 className="text-[var(--grey-30)]">
                      {slide.subtitle[locale]}
                    </h4>
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
              )}
            </div>
          </div>
        ))}
      </EmblaCarousel>
    </section>
  );
};

PortfolioSection.displayName = 'PortfolioSection';
export default PortfolioSection;
