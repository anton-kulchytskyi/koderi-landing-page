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
              className="relative rounded-2xl min-w-full flex-[0_0_100%] lg:min-w-1/2 lg:flex-[0_0_50%] 2xl:min-w-1/4 2xl:flex-[0_0_25%] h-[800px] space-y-4"
            >
              <div className="w-full h-[600px] flex items-center justify-center rounded-t-lg">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover rounded-t-lg pb-[200px]"
                />
                <div
                  className="absolute bottom-[200px] left-0 right-0 p-4 flex items-center"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.60)' }}
                >
                  <h3>{member.name}</h3>
                </div>
              </div>
              <h4 className="text-[var(--white)]">{member.role}</h4>
              <p className="text-[var(--white)] text-base leading-relaxed">
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
