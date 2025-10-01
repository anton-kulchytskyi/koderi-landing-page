'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { getTranslations, Locale } from '@/lib/getTranslations';
import { AnimatedBackground, Button } from '../common';

gsap.registerPlugin(useGSAP);

interface HeroSectionProps {
  locale: Locale;
}

const HeroSection = ({ locale }: HeroSectionProps) => {
  const t = getTranslations(locale);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useGSAP(
    () => {
      const split = SplitText.create('h1', { type: 'chars' });

      gsap.from(split.chars, {
        // <- selector text, scoped to this component!
        opacity: 0,
        y: 100,
        ease: 'back',
        duration: 1,
        stagger: 0.1,
      });
    },
    { scope: titleRef }
  );

  return (
    // delete bg-[var(--grey-100)] with image bg variant
    <section className="relative min-h-screen overflow-hidden bg-[var(--grey-100)]">
      {/* Image background */}
      {/* <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: 'url("/hero/hero-bg.webp")' }}
      /> */}
      <AnimatedBackground />

      <div className="relative z-20 w-full px-4 lg:px-12 2xl:px-28 pt-24">
        <div className="grid lg:grid-cols-[55%_45%] gap-24 place-items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1
              ref={titleRef}
              className="text-[var(--white)]"
            >
              {t.hero.title.part1}{' '}
              <span className="text-[var(--secondary)]">
                {t.hero.title.highlight}
              </span>{' '}
              {t.hero.title.part2}
            </h1>

            <motion.p
              className="text-xl leading-relaxed text-[var(--white)]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t.hero.subtitle}
            </motion.p>

            <Button
              as="link"
              href={`/${locale}#contact`}
              className="w-full lg:w-auto"
            >
              {t.hero.cta}
            </Button>
          </motion.div>

          {/* Right Content - Laptop */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div
                className="relative"
                animate={{
                  y: [0, -10, 0],
                  rotateX: [0, 2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Image
                  src="/hero/hero-img.webp"
                  alt="Hero Image"
                  width={500}
                  height={300}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

HeroSection.displayName = 'HeroSection';

export default HeroSection;
