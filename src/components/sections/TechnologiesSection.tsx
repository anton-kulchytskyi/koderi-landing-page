import Image from 'next/image';
import { Locale, getTranslations } from '@/lib/getTranslations';
import { technologies } from '@/content/technologies';

type Props = {
  locale: Locale;
};

const TechnologiesSection = ({ locale }: Props) => {
  const t = getTranslations(locale);

  return (
    <section className="py-8 lg:py-12 2xl:py-20">
      <div className="w-full px-4 lg:px-12 2xl:px-28">
        <h2 className="mb-6 lg:mb-8">{t.technologies.title}</h2>

        <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-9 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="aspect-square flex flex-col items-center justify-center border border-gray-300 rounded-lg shadow-sm bg-gray-50 hover:shadow-md transition group"
            >
              <div className="w-24 h-24 relative mb-2">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className="object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition"
                />
              </div>
              <span className="text-xs font-medium text-gray-700 text-center truncate w-full px-1">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

TechnologiesSection.displayName = 'TechnologiesSection';

export default TechnologiesSection;
