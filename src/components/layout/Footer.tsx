import Image from 'next/image';
import { Locale } from '@/lib/getTranslations';
import { ContactsBlock, Navigation } from '../common';

type Props = {
  locale: Locale;
};

const Footer = ({ locale }: Props) => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="w-full px-4 lg:px-12 2xl:px-28 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        {/* Лого + копірайт */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={50}
          />
          <p className="text-sm text-gray-400 mt-4">© 2025 Koderi</p>
        </div>

        {/* Навігація */}
        <Navigation
          locale={locale}
          isMobileMenu
        />

        {/* Контакти */}
        <ContactsBlock
          locale={locale}
          alignClassName="items-center md:items-end"
        />
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';

export default Footer;
