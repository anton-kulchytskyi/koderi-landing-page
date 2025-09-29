'use client';
import Image from 'next/image';
import { Locale, getTranslations } from '@/lib/getTranslations';
import { technologies } from '@/content/technologies';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type Props = {
  locale: Locale;
};

const TechnologiesSection = ({ locale }: Props) => {
  const t = getTranslations(locale);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-8 lg:py-12 2xl:py-20">
      <div className="w-full px-4 lg:px-12 2xl:px-28">
        <h2 className="mb-6 lg:mb-8">{t.technologies.title}</h2>

        <div
          className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-9 gap-4"
          ref={ref}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="aspect-square flex flex-col items-center justify-center border border-gray-300 rounded-lg shadow-sm bg-gray-50 transition"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
                ease: 'easeOut',
              }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 relative mb-2">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xs font-medium text-gray-700 text-center truncate w-full px-1">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

TechnologiesSection.displayName = 'TechnologiesSection';

export default TechnologiesSection;
