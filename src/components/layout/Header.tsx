'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { getTranslations, Locale } from '@/lib/getTranslations';
import Image from 'next/image';

import { BurgerMenu, Close } from '../icons';
import { Button, ContactsBlock, LanguageSwitcher, Navigation } from '../common';

interface HeaderProps {
  locale: Locale;
}

const Header = ({ locale }: HeaderProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === `/${locale}`;
  const t = getTranslations(locale);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isScrolled = scrollY > 50;

  let headerClass = '';

  switch (true) {
    case isScrolled:
      headerClass = 'backdrop-blur-md bg-gray-500/60 shadow-lg';
      break;
    case isHome:
      headerClass = 'bg-transparent py-4';
      break;
    default:
      headerClass = 'bg-black py-4';
      break;
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full px-4 lg:px-12 2xl:px-28 py-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center relative w-24 xl:w-64 h-12 xl:h-24"
          >
            <Image
              src="/logo.png"
              alt="Koderi Logo"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              // className="w-64 lg:w-24 xl:w-64"
            />
          </Link>

          {/* Navigation - desktop */}
          <div className="flex items-center space-x-8">
            <Navigation
              locale={locale}
              className="hidden lg:flex"
            />
            <div className="flex items-center justify-between">
              <LanguageSwitcher />
              <Button
                as="link"
                href={`/${locale}#contact`}
                onClick={() => setIsMenuOpen(false)}
                display="hidden lg:flex"
                className="ml-4"
              >
                {t.header.cta}
              </Button>
              {/* Mobile Menu Button */}
              <div className="w-12 h-12 rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] outline outline-offset-[-1px] outline-[var(--secondary)] flex justify-center items-center gap-2 lg:hidden ml-4">
                <button
                  className="lg:hidden text-white"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <Close /> : <BurgerMenu />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isMenuOpen ? 0 : '100%' }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 right-0 bottom-0 w-full bg-gray-900 z-40 p-6 flex flex-col space-y-6 lg:hidden"
      >
        {/* CTA */}
        <Button
          as="link"
          size="lg"
          href={`/${locale}#contact`}
          onClick={() => setIsMenuOpen(false)}
          className="mt-24"
        >
          {t.header.cta}
        </Button>

        {/* Навігація в мобільному меню */}
        <Navigation
          locale={locale}
          className="lg:hidden"
          isMobileMenu={true}
          onLinkClick={() => setIsMenuOpen(!isMenuOpen)}
        />

        {/* Контакти */}
        <ContactsBlock
          locale={locale}
          alignClassName="items-center"
        />
      </motion.div>
    </>
  );
};

Header.displayName = 'Header';

export default Header;
