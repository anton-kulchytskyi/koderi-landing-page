import { Locale } from '@/lib/getTranslations';
import { projects } from '@/content/projects';
import { Breadcrumbs } from '@/components/common';
import Image from 'next/image';
import NotFound from '../not-found';
import { FormSection } from '@/components/sections';

type Props = {
  params: Promise<{ locale: Locale; slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { locale, slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  // if (!project) return <div>Not found</div>;
  if (!project) return NotFound();

  const t = project.translations[locale as 'en' | 'uk'];

  return (
    <main className="mt-48 w-full px-4 lg:px-12 2xl:px-28">
      <Breadcrumbs
        projectName={t.title}
        locale={locale}
      />
      <div className="flex flex-col items-center text-center py-8 lg:py-12 2xl:py-20">
        <h1>{t.title}</h1>
        <h4 className="text-[var(--grey-30)]">{t.subtitle}</h4>
        <div className="relative w-full h-auto aspect-[16/9] max-w-4xl mt-8 rounded-lg overflow-hidden">
          <Image
            src={t.img}
            alt={t.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      </div>

      <section className="py-8 lg:py-12 2xl:py-20 space-y-4">
        <h2>{t.about.title}</h2>
        {t.about.content.map((p, i) => (
          <p
            key={i}
            className="mb-4"
          >
            {p}
          </p>
        ))}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Image
              src={t.about.img1}
              alt="First"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div>
            <Image
              src={t.about.img2}
              alt="Second"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-12 2xl:py-20 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2>{t.challenge.title}</h2>
            {t.challenge.content.map((p, i) => (
              <p
                key={i}
                className="mb-4"
              >
                {p}
              </p>
            ))}
          </div>
          <div>
            <Image
              src={t.challenge.img}
              alt="Second"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-12 2xl:py-20 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Image
              src={t.solution.img}
              alt="Second"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div>
            <h2>{t.solution.title}</h2>
            {t.solution.content.map((p, i) => (
              <p
                key={i}
                className="mb-4"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className="py-8 lg:py-12 2xl:py-20 space-y-4">
        <h2>{t.optimized.title}</h2>
        <div className="relative text-center w-full h-auto aspect-[16/9] max-w-5xl mt-8 mx-auto rounded-lg overflow-hidden">
          <Image
            src={t.optimized.img}
            alt={t.optimized.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      </section>

      <FormSection locale={locale} />
    </main>
  );
}
