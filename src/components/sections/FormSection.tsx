'use client';
import { Locale, getTranslations } from '@/lib/getTranslations';
import { useState } from 'react';
import { Button } from '../common';

type FormSectionProps = {
  locale: Locale;
};

const FormSection = ({ locale }: FormSectionProps) => {
  const t = getTranslations(locale);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          website: '', // honeypot поле (див. нижче)
        }),
      });

      if (res.ok) {
        setStatus('✅ Повідомлення надіслано у Telegram');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await res.json().catch(() => ({}));
        console.log(data, 'error response');
        setStatus(`❌ Помилка: ${data?.error ?? 'не вдалося відправити'}`);
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.log(e.toString());
      } else {
        console.log(String(e));
      }
      setStatus('❌ Мережева помилка');
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section
      id="contact"
      className="py-8 lg:py-12 2xl:py-20"
    >
      <div className="w-full px-4 lg:px-12 2xl:px-28">
        {/* <div className="bg-white rounded-lg shadow-lg overflow-hidden"> */}
        <div className="flex flex-col lg:flex-row gap-48">
          {/* Left side - additional info */}

          <div className="lg:w-1/2 bg-gray-50 space-y-8">
            <h2>{t.form.title}</h2>
            <h6>{t.form.desc1}</h6>
            <h6>{t.form.desc2}</h6>
            <h6>{t.form.desc3}</h6>
          </div>

          {/* Right side - form */}
          <div className="lg:w-1/2">
            <h4>{t.form.subtitle}</h4>
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.form.namePlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-start)] focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.form.emailPlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-start)] focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.form.messagePlaceholder}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-start)] focus:border-transparent outline-none transition-all resize-vertical"
                  required
                />
              </div>

              <div className="text-right">
                <Button
                  type="submit"
                  className="w-full lg:w-auto"
                >
                  {isSending ? 'Відправляю…' : t.form.submit}
                  {/* {t.form.submit} */}
                </Button>
              </div>
              {status && <p className="text-sm">{status}</p>}
            </form>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

FormSection.displayName = 'FormSection';

export default FormSection;
