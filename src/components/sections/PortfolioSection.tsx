'use client';
import { Locale, getTranslations } from '@/lib/getTranslations';
import Image from 'next/image';
import { Button, EmblaCarousel, IconSlideshow } from '../common';
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
            className="min-w-full flex-[0_0_100%] lg:min-w-1/2 lg:flex-[0_0_50%] 2xl:min-w-1/3 2xl:flex-[0_0_33.333%] px-4"
          >
            <div className="rounded-2xl overflow-hidden relative w-full h-[350px] lg:h-[540px]">
              {i === slides.length - 1 ? (
                <div>
                  <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(135deg,#7f00ff_0.84%,#24c0f4_100%)] opacity-20" />
                  <IconSlideshow locale={locale} />
                </div>
              ) : (
                <Image
                  src={slide.src}
                  alt={slide.title[locale]}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              )}
              {/* overlay-підпис */}
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
                  {i === slides.length - 1 ? (
                    <span>{slide.cta?.[locale]}</span>
                  ) : (
                    <UpArrowIcon />
                  )}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </EmblaCarousel>
    </section>
  );
};

PortfolioSection.displayName = 'PortfolioSection';
export default PortfolioSection;

// {/* CTA-слайд */}
//         <div className="min-w-full flex-[0_0_100%] px-2 lg:min-w-1/2 lg:flex-[0_0_50%] 2xl:min-w-1/3 2xl:flex-[0_0_33.33%]">
//           <div className="relative rounded-2xl flex flex-col items-center justify-center h-[540px] text-white text-center p-6 shadow-lg">
//             {/* фон з градієнтом */}
//             <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(135deg,#7f00ff_0.84%,#24c0f4_100%)] opacity-20"></div>

//             {/* контент */}
//             <div className="relative z-10">
//               <h3 className="text-2xl font-bold mb-2">
//                 Maybe here will be your project?
//               </h3>
//               <p className="text-sm opacity-90 mb-4">
//                 Let`s build something amazing together 🚀
//               </p>
//               <Button
//                 as="link"
//                 href={`/${locale}#contact`}
//               >
//                 Contact Us
//               </Button>
//             </div>
//           </div>
//         </div>
