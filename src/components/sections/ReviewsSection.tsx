'use client';
import { Locale, getTranslations } from '@/lib/getTranslations';
import EmblaCarousel from '../common/ui/EmblaCarousel';
import { testimonials } from '@/content/testimonials';
import Image from 'next/image';

interface ReviewsSectionProps {
  locale: Locale;
}

const ReviewsSection = ({ locale }: ReviewsSectionProps) => {
  return (
    <section className="py-8 lg:py-12 2xl:py-20">
      <EmblaCarousel
        title={getTranslations(locale).reviews.title}
        autoplay
        autoplayDelay={4000}
      >
        {testimonials[locale].map((t, i) => (
          <div
            key={i}
            className="flex-[0_0_calc(100%-16px)] sm:flex-[0_0_calc(50%-16px)] lg:flex-[0_0_calc(33.333%-16px)] 2xl:flex-[0_0_calc(25%-16px)] border border-[var(--primary-start)] rounded-lg p-6 mx-2 last:mr-0"
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
      </EmblaCarousel>
    </section>
  );
};

ReviewsSection.displayName = 'ReviewsSection';
export default ReviewsSection;
