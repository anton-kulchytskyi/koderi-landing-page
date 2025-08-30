'use client';

import { motion } from 'framer-motion';
import { getTranslations, Locale } from '@/lib/getTranslations';
import Image from 'next/image';
import Button from '../common/ui/CustomButton';

interface HeroSectionProps {
  locale: Locale;
}

const HeroSection = ({ locale }: HeroSectionProps) => {
  const t = getTranslations(locale);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: 'url("/hero-bg.png")' }}
      />

      <div className="relative z-20 w-full px-4 lg:px-12 2xl:px-28 pt-24">
        <div className="grid lg:grid-cols-[55%_45%] gap-24 place-items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-[var(--white)]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t.hero.title.part1}{' '}
              <span className="text-[var(--secondary)]">
                {t.hero.title.highlight}
              </span>{' '}
              {t.hero.title.part2}
            </motion.h1>

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
                  src="/hero-img.png"
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
