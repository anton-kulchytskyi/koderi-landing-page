import Link from 'next/link';
import { Locale, getTranslations } from '@/lib/getTranslations';
import { InstagramIcon, TelegramIcon, WhatsAppIcon } from '@/components/icons';
import Button from '../ui/CustomButton';

interface ContactsBlockProps {
  locale: Locale;
  alignClassName?: string; // Додатковий клас для вирівнювання (наприклад, 'items-start', 'items-center', 'items-end')
}

const ContactsBlock = ({ locale, alignClassName = '' }: ContactsBlockProps) => {
  const t = getTranslations(locale);

  return (
    <div className={`flex flex-col space-y-3 text-sm ${alignClassName}`}>
      <h4 className="font-bold text-[var(--white)]">{t.contact.title}</h4>
      <p className="text-[var(--white)]">
        <Link
          href={`tel:${t.contact.info.phone}`}
          className="hover:text-[var(--focused)] transition-colors"
        >
          {t.contact.info.phone}
        </Link>
      </p>

      <p className="text-[var(--white)]">
        <Link
          href={`mailto:${t.contact.info.email}`}
          className="hover:text-[var(--focused)] transition-colors"
        >
          {t.contact.info.email}
        </Link>
      </p>
      <div className="flex gap-3 mt-2">
        <Button
          as="link"
          href="https://wa.me/380979348090"
          target="_blank"
          variant="icon"
          size="sm"
        >
          <WhatsAppIcon size={24} />
        </Button>
        <Button
          as="link"
          href="http://t.me/anton_kulchytskyi"
          target="_blank"
          variant="icon"
          size="sm"
        >
          <TelegramIcon size={24} />
        </Button>
        <Button
          as="link"
          href="https://www.instagram.com/koderi.web/"
          target="_blank"
          variant="icon"
          size="sm"
        >
          <InstagramIcon size={24} />
        </Button>
      </div>
    </div>
  );
};

ContactsBlock.displayName = 'ContactsBlock';

export default ContactsBlock;
