import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/', // Шлях, з якого перенаправляємо
        destination: '/en', // Куди перенаправляємо
        permanent: true, // Вказуємо, що це постійне перенаправлення (301)
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        pathname: '/**',
      },
    ],
  },
  trailingSlash: false,
  compress: true,
};

export default nextConfig;
