'use client';
import { Locale, getTranslations } from '@/lib/getTranslations';
import EmblaCarousel from '../common/ui/EmblaCarousel';
import { testimonials } from '@/content/testimonials';
import Image from 'next/image';
// import { Button } from '../common';

interface ReviewsSectionProps {
  locale: Locale;
}

// const slides = [
//   { src: '/Project1.png', title: 'Norse Yacht', subtitle: 'Online store' },
//   {
//     src: '/Project2.png',
//     title: 'Supervise Money',
//     subtitle: 'Web Application',
//   },
//   { src: '/Project3.png', title: 'Uplevel', subtitle: 'Corporate Website' },
// ];

const ReviewsSection = ({ locale }: ReviewsSectionProps) => {
  return (
    <section
      id="portfolio"
      className="py-8 lg:py-12 2xl:py-20"
    >
      <EmblaCarousel
        title={getTranslations(locale).reviews.title}
        autoplay
        autoplayDelay={4000}
      >
        {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> */}
        {testimonials[locale].map((t, i) => (
          <div
            key={i}
            className="flex-[0_0_calc(100%-16px)] sm:flex-[0_0_calc(50%-16px)] lg:flex-[0_0_calc(33.333%-16px)] 2xl:flex-[0_0_calc(25%-16px)] border border-[var(--primary-start)] rounded-lg p-6 mx-2 last:mr-0"
            // className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition"
          >
            <Image
              src="/quote-right.svg"
              alt="Quote Icon"
              width={24}
              height={24}
              className="mb-4"
            />
            <p className="text-[var(--grey-100)] mb-4 h-12">“{t.text}”</p>
            <div className="flex items-center gap-3">
              <Image
                src={t.avatar}
                alt={t.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h5>{t.name}</h5>
                <p className="text-sm text-[var(--grey-50)]">{t.position}</p>
              </div>
            </div>
          </div>
        ))}
        {/* </div> */}
        {/* {slides.map((slide, i) => (
          <div
            key={i}
            className="min-w-full flex-[0_0_100%] px-2 lg:min-w-1/2 lg:flex-[0_0_50%] 2xl:min-w-1/3 2xl:flex-[0_0_33.33%]"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={slide.src}
                alt={slide.title}
                width={540}
                height={540}
                className="w-full h-[540px] object-cover"
              />
            </div>
          </div>
        ))} */}

        {/* CTA-слайд */}
        {/* <div className="min-w-full flex-[0_0_100%] px-2 lg:min-w-1/2 lg:flex-[0_0_50%] 2xl:min-w-1/3 2xl:flex-[0_0_33.33%]">
          <div className="rounded-2xl flex flex-col items-center justify-center h-[540px] bg-gradient-to-br from-purple-600 to-blue-500 text-white text-center p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-2">
              Maybe here will be your project?
            </h3>
            <p className="text-sm opacity-90 mb-4">
              Let’s build something amazing together 🚀
            </p>
            <Button>Contact Us</Button>
          </div>
        </div> */}
      </EmblaCarousel>
    </section>
  );
};

ReviewsSection.displayName = 'ReviewsSection';
export default ReviewsSection;
