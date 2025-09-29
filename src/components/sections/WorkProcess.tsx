import { Locale, getTranslations } from '@/lib/getTranslations';

type Props = {
  locale: Locale;
};

const WorkProcess = ({ locale }: Props) => {
  const t = getTranslations(locale);

  return (
    <section
      id="work-process"
      className="py-8 lg:py-12 2xl:py-20"
    >
      <div className="w-full px-4 lg:px-12 2xl:px-28">
        {/* Заголовок */}
        <h2 className="mb-6 lg:mb-8">{t.workProcess.title}</h2>
        {/* Кроки */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {t.workProcess.steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col md:border-r border-[var(--primary-start)] pr-4"
            >
              <h2 className="text-[var(--primary-start)] pb-2 lg:pb-6">
                {step.number}
              </h2>
              <h4 className="pb-2 lg:pb-4">{step.title}</h4>
              <ul className="leading-normal space-y-2">
                {step.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

WorkProcess.displayName = 'WorkProcess';

export default WorkProcess;
