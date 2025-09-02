'use client';
import { Button } from '@/components/common';
import Image from 'next/image';
import { getTranslations, Locale } from '@/lib/getTranslations';
import { usePathname } from 'next/navigation';

const NotFoundPage = () => {
  const pathname = usePathname();
  const locale = (pathname?.split('/')[1] || 'en') as Locale;
  const t = getTranslations(locale);
  return (
    <div className="mt-48 mb-20 w-full px-4 lg:px-12 2xl:px-28 flex flex-col items-center text-center space-y-4">
      <Image
        src="/android-chrome-512x512.png"
        alt="Koderi Logo"
        width={300}
        height={300}
        className="mb-8"
      />
      <h1>404</h1>
      <h4>{t.notFound.title}</h4>
      <Button
        as="link"
        href={`/${locale}`}
      >
        {t.notFound.cta}
      </Button>
    </div>
  );
};

NotFoundPage.displayName = 'NotFoundPage';

export default NotFoundPage;
