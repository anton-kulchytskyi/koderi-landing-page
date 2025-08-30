import { Locale, getTranslations } from '@/lib/getTranslations';
import Image from 'next/image';

// import Image from 'next/image';

interface AboutSectionProps {
  locale: Locale;
}

const AboutSection = ({ locale }: AboutSectionProps) => {
  const t = getTranslations(locale);

  // const serviceIcons = [
  //   '/design-icon.svg',
  //   '/landing-icon.svg',
  //   '/web-icon.svg',
  //   '/ai-icon.svg',
  // ];

  return (
    <section
      id="about"
      className="py-8 lg:py-12 2xl:py-20 bg-[var(--grey-100)]"
    >
      <div className="w-full px-4 lg:px-12 2xl:px-28">
        {/* Заголовок */}

        <h2 className="mb-6 lg:mb-8 text-[var(--white)]">{t.about.title}</h2>

        <div className="flex justify-between items-center">
          <p className="text-[var(--white)] lg:w-1/2">{t.about.description}</p>
          <Image
            src="/about-img.png"
            alt="decor"
            width={260}
            height={115}
            className="hidden lg:block"
          />
        </div>

        <h3 className="text-[var(--white)] my-4">{t.about.subtitle}</h3>

        {/* Сітка сервісів */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.about.team.map((member, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-6 bg-white"
            >
              {/* Верхній правий кут */}
              {/* <Image
                src="/upper-corner.png"
                alt="upper-corner"
                width={96}
                height={96}
                className="absolute top-0 right-0 w-24 h-24 pointer-events-none select-none"
              /> */}

              {/* Нижній лівий кут */}
              {/* <Image
                src="/bottom-corner.png"
                alt="bottom-corner"
                width={96}
                height={96}
                className="absolute bottom-0 left-0 w-24 h-24 pointer-events-none select-none"
              /> */}
              <div className="w-12 h-12 mb-6 flex items-center justify-center">
                {/* <Image
                  src={serviceIcons[index]}
                  alt={service.title}
                  width={48}
                  height={48}
                  className="object-contain"
                /> */}
              </div>
              <h4 className="pb-4 lg:pb-6">{member.name}</h4>
              <p className="text-[var(--grey-100)] text-sm leading-relaxed">
                {member.role}
              </p>
              <p className="text-[var(--grey-100)] text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

AboutSection.displayName = 'AboutSection';

export default AboutSection;
