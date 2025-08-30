'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const LanguageSwitcher = () => {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const currentLocale = segments[1] || 'uk';

  const locales = ['uk', 'en'];

  const getLanguageLabel = (locale: string) =>
    locale === 'uk' ? 'Укр' : 'Eng';

  return (
    <div className="inline-flex items-center gap-2">
      {locales.map((locale) => {
        const isActive = currentLocale === locale;
        const href = '/' + [locale, ...segments.slice(2)].join('/');

        const buttonClasses = cn(
          'w-12 h-12 px-4 py-2 rounded-lg flex justify-center items-center gap-2 transition-all duration-200',
          isActive
            ? 'shadow-[0px_4px_4px_rgba(0,0,0,0.25)] outline outline-offset-[-1px] outline-[var(--secondary)] text-[var(--white)] font-medium'
            : 'outline outline-offset-[-1px] outline-[var(--grey-50)] text-[var(--grey-50)] hover:outline-[var(--secondary)] hover:text-[var(--secondary)]'
        );

        const ButtonContent = (
          <div className={buttonClasses}>{getLanguageLabel(locale)}</div>
        );

        return isActive ? (
          <div key={locale}>{ButtonContent}</div>
        ) : (
          <Link
            key={locale}
            href={href}
          >
            {ButtonContent}
          </Link>
        );
      })}
    </div>
  );
};

LanguageSwitcher.displayName = 'LanguageSwitcher';

export default LanguageSwitcher;
