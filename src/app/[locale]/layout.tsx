import { ReactNode } from 'react';
import { Space_Grotesk, Inter } from 'next/font/google';
import { Locale } from '@/lib/getTranslations';
import { Footer, Header } from '@/components/layout';

export async function generateStaticParams() {
  return [{ locale: 'uk' }, { locale: 'en' }];
}

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-inter',
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body
        className={`${inter.className} ${spaceGrotesk.variable} ${inter.variable}`}
      >
        <Header locale={locale} />
        {children}
        <Footer locale={locale} />
      </body>
    </html>
  );
}
