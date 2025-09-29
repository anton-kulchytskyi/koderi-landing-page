'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getTranslations, Locale } from '@/lib/getTranslations';

const icons = [
  '/services/design-icon.svg',
  '/services/landing-icon.svg',
  '/services/web-icon.svg',
  '/services/ai-icon.svg',
];

const DURATION = 4000; // загальний цикл = 4s
const FADE = 1.5; // fade in/out

interface IconSlideshowProps {
  locale: Locale;
}

const IconSlideshow = ({ locale }: IconSlideshowProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % icons.length);
    }, DURATION);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 flex justify-center pt-24">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{
            opacity: { duration: FADE },
            scale: { duration: FADE },
          }}
        >
          <Image
            src={icons[index]}
            alt={`direction-${index}`}
            width={200}
            height={200}
            className="opacity-40"
          />
          <h4 className="text-white text-center mt-2">
            {getTranslations(locale).services.items[index].title}
          </h4>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

IconSlideshow.displayName = 'IconSlideshow';
export default IconSlideshow;
