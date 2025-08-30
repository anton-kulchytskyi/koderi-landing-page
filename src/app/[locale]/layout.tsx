import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import { Locale, getTranslations } from '@/lib/getTranslations';
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale);

  return {
    title: `${t.meta.title}`,
    description: `${t.meta.description}`,
    keywords: `${t.meta.keywords}`,
    openGraph: {
      title: `${t.meta.og.title}`,
      description: `${t.meta.og.description}`,
      url: 'https://koderi.netlify.app/',
      siteName: 'Koderi',
      images: [
        {
          url: 'https://koderi.netlify.app/og.png',
          width: 1200,
          height: 630,
          alt: `${t.meta.og.alt}`,
        },
      ],
      locale: locale === 'uk' ? 'uk_UA' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t.meta.twitter.title}`,
      description: `${t.meta.twitter.description}`,
      images: ['https://koderi.netlify.app/og.png'],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
    },
    icons: {
      icon: [
        { url: '/favicon.ico', type: 'image/x-icon' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    },
    manifest: '/site.webmanifest',
  };
}

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
