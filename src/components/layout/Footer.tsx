import Image from 'next/image';
import Link from 'next/link';
import { Locale, getTranslations } from '@/lib/getTranslations';
import { ContactsBlock } from '../common';
// import { InstagramIcon, TelegramIcon, WhatsAppIcon } from '../icons';

type Props = {
  locale: Locale;
};

const Footer = ({ locale }: Props) => {
  const t = getTranslations(locale);

  const navLinks = [
    { href: `/${locale}#services`, label: t.header.nav.services },
    { href: `/${locale}#work-process`, label: t.header.nav.process },
    { href: `/${locale}#portfolio`, label: t.header.nav.portfolio },
    { href: `/${locale}#about`, label: t.header.nav.about },
    { href: `/${locale}#contact`, label: t.header.nav.contact },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
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
        <div className="flex flex-col items-center space-y-2 text-sm">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="hover:text-white transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Контакти */}
        <ContactsBlock
          locale={locale}
          alignClassName="items-center md:items-end"
        />
        {/* <div className="flex flex-col items-center md:items-end space-y-3 text-sm">
          <h6 className="font-bold text-white">{t.contact.title}</h6>
          <p>{t.contact.info.phone}</p>
          <p>{t.contact.info.email}</p>
          <div className="flex gap-3 mt-2">
            <Button
              as="link"
              href="https://wa.me/380979348090"
              target="_blank"
              variant="icon"
              size="sm"
            >
              <WhatsAppIcon
                width={24}
                height={24}
              />
            </Button>
            <Button
              as="link"
              href="http://t.me/anton_kulchytskyi"
              variant="icon"
              target="_blank"
              size="sm"
            >
              <TelegramIcon
                width={24}
                height={24}
              />
            </Button>
            <Button
              as="link"
              href="/uk#services"
              variant="icon"
              size="sm"
            >
              <InstagramIcon
                width={24}
                height={24}
              />
            </Button>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';

export default Footer;
