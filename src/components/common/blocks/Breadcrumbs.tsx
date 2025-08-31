'use client';

import { HomeIcon } from '@/components/icons';
import Link from 'next/link';

type BreadcrumbsProps = {
  projectName: string;
  locale: string; // щоб правильно формувати шлях типу /uk чи /en
};

const Breadcrumbs = ({ projectName, locale }: BreadcrumbsProps) => {
  return (
    <nav className="flex items-center gap-2 text-gray-400 text-sm py-4">
      <Link
        href={`/${locale}`}
        className="flex items-center hover:text-gray-600 transition-colors"
      >
        <HomeIcon />
      </Link>
      <span className="text-gray-400">›</span>
      <span className="text-gray-600 font-medium">{projectName}</span>
    </nav>
  );
};

Breadcrumbs.displayName = 'Breadcrumbs';

export default Breadcrumbs;
