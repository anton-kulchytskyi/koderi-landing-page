import Link from 'next/link';
import Image from 'next/image';
import { Locale } from '@/lib/getTranslations';
import { ContactsBlock, Navigation } from '../common';

type Props = {
  locale: Locale;
};

const Footer = ({ locale }: Props) => {
  return (
    <footer className="bg-[var(--grey-100)] py-10">
      <div className="w-full px-4 lg:px-12 2xl:px-28 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Лого + копірайт */}
        <div className="flex flex-col items-center md:items-start flex-1 max-w-[500px]">
          <Link
            href={`/${locale}`}
            className="flex items-center relative w-72 xl:w-xl h-28 xl:h-48"
          >
            <Image
              src="/logo.svg"
              alt="Koderi Logo"
              fill
              sizes="(max-width: 768px) 96px, (max-width: 1200px) 128px, 512px"
            />
          </Link>
          <p className="text-sm text-[var(--white)] mt-4">© 2025 Koderi</p>
        </div>

        {/* Навігація */}
        <div className="flex-1 flex justify-center">
          <Navigation
            locale={locale}
            isMobileMenu
          />
        </div>

        {/* Контакти */}
        <div className="flex-1 flex justify-center md:justify-end max-w-[500px]">
          <ContactsBlock
            locale={locale}
            alignClassName="items-center md:items-end"
          />
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';

export default Footer;
