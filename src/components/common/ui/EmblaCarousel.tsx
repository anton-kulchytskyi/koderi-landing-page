'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import Button from './CustomButton';
import { NextArrowIcon, PrevArrowIcon } from '@/components/icons';
import Autoplay from 'embla-carousel-autoplay';

interface EmblaCarouselProps {
  title: string;
  titleColor?: string;
  autoplay?: boolean;
  autoplayDelay?: number;
  children: React.ReactNode;
}

const EmblaCarousel = ({
  title,
  titleColor,
  autoplay,
  autoplayDelay,
  children,
}: EmblaCarouselProps) => {
  const plugins = autoplay ? [Autoplay({ delay: autoplayDelay })] : [];
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      slidesToScroll: 1,
    },
    plugins
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative px-4 lg:px-12 2xl:px-28">
      {/* Хедер з кнопками */}
      <div className="flex justify-between items-center mb-8">
        <h2 className={titleColor}>{title}</h2>
        <div className="flex space-x-2">
          <Button onClick={scrollPrev}>
            <PrevArrowIcon
              width={13}
              height={12}
            />
          </Button>
          <Button onClick={scrollNext}>
            <NextArrowIcon
              width={13}
              height={12}
            />
          </Button>
        </div>
      </div>

      {/* Контейнер слайдера */}
      <div
        className="overflow-hidden"
        ref={emblaRef}
      >
        <div className="flex">{children}</div>
      </div>
    </div>
  );
};

EmblaCarousel.displayName = 'EmblaCarousel';
export default EmblaCarousel;
