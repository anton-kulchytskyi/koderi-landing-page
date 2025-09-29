import { Locale, getTranslations } from '@/lib/getTranslations';

import Image from 'next/image';

interface ServicesSectionProps {
  locale: Locale;
}

const ServicesSection = ({ locale }: ServicesSectionProps) => {
  const t = getTranslations(locale);

  const serviceIcons = [
    '/services/design-icon.svg',
    '/services/landing-icon.svg',
    '/services/web-icon.svg',
    '/services/ai-icon.svg',
  ];

  return (
    <section
      id="services"
      className="py-8 lg:py-12 2xl:py-20"
    >
      <div className="w-full px-4 lg:px-12 2xl:px-28">
        {/* Заголовок */}
        <h2 className="mb-6 lg:mb-8">{t.services.title}</h2>

        {/* Сітка сервісів */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.services.items.map((service, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-4 lg:p-6 bg-white"
            >
              {/* Верхній правий кут */}
              <Image
                src="/services/upper-corner.png"
                alt="upper-corner"
                width={96}
                height={96}
                className="absolute top-0 right-0 w-24 h-24 pointer-events-none select-none"
              />

              {/* Нижній лівий кут */}
              <Image
                src="/services/bottom-corner.png"
                alt="bottom-corner"
                width={96}
                height={96}
                className="absolute bottom-0 left-0 w-24 h-24 pointer-events-none select-none"
              />
              <div className="w-12 h-12 mb-4 lg:mb-6 flex items-center justify-center">
                <Image
                  src={serviceIcons[index]}
                  alt={service.title}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h4 className="pb-2 lg:pb-4">{service.title}</h4>
              <p className="text-[var(--grey-100)] text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

ServicesSection.displayName = 'ServicesSection';

export default ServicesSection;
