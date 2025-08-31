import Link from 'next/link';
import { Locale, getTranslations } from '@/lib/getTranslations';

interface NavigationProps {
  locale: Locale;
  className?: string;
  isMobileMenu?: boolean;
  onLinkClick?: () => void; // Додаємо новий пропс для кліку
}

const Navigation = ({
  locale,
  className = '',
  isMobileMenu = false,
  onLinkClick, // Приймаємо пропс
}: NavigationProps) => {
  const t = getTranslations(locale);

  const navItems = [
    { href: `/${locale}#services`, label: t.header.nav.services },
    { href: `/${locale}#work-process`, label: t.header.nav.process },
    { href: `/${locale}#portfolio`, label: t.header.nav.portfolio },
    { href: `/${locale}#about`, label: t.header.nav.about },
    { href: `/${locale}#contact`, label: t.header.nav.contact },
  ];

  const navContainerClasses = isMobileMenu
    ? `flex flex-col items-center justify-center space-y-6`
    : `flex items-center space-x-6`;

  const navLinkClasses = `text-[var(--white)] border-b-2 border-b-transparent hover:text-[var(--focused)] hover:border-b-2 hover:border-[var(--focused)] pb-1 transition-all duration-200`;

  return (
    <nav className={`${navContainerClasses} ${className}`}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={navLinkClasses}
          onClick={isMobileMenu ? onLinkClick : undefined} // Застосовуємо onClick лише в мобільному меню
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

Navigation.displayName = 'Navigation';

export default Navigation;
