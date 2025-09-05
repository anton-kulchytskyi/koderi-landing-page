/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { Locale, getTranslations } from '@/lib/getTranslations';
import { useState } from 'react';
import { Button, StatusModal } from '../common';

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
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'success' | 'error'>('success');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, website: '' }),
      });

      if (res.ok) {
        setModalType('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await res.json().catch(() => ({}));
        setModalType('error');
      }
    } catch (e) {
      setModalType('error');
    } finally {
      setModalOpen(true);
      setIsSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      className="py-8 lg:py-12 2xl:py-20"
    >
      <div className="w-full px-4 lg:px-12 2xl:px-28">
        <div className="flex flex-col lg:flex-row gap-48">
          {/* Left side */}
          <div className="lg:w-1/2 space-y-8">
            <h2>{t.form.title}</h2>
            <h6>{t.form.desc1}</h6>
            <h6>{t.form.desc2}</h6>
            <h6>{t.form.desc3}</h6>
          </div>

          {/* Right side */}
          <div className="lg:w-1/2">
            <h4>{t.form.subtitle}</h4>
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2"
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
                  className="w-full px-4 py-3 border border-[var(--grey-30)] rounded-lg focus:ring-2 focus:ring-[var(--primary-start)] focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2"
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
                  className="w-full px-4 py-3 border border-[var(--grey-30)] rounded-lg focus:ring-2 focus:ring-[var(--primary-start)] focus:border-transparent outline-none transition-all"
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
                  className="w-full px-4 py-3 border border-[var(--grey-30)] rounded-lg focus:ring-2 focus:ring-[var(--primary-start)] focus:border-transparent outline-none transition-all resize-vertical"
                  required
                />
              </div>

              <div className="text-right">
                <Button
                  type="submit"
                  className="w-full lg:w-auto"
                >
                  {isSending ? t.form.sending : t.form.submit}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Status Modal */}
      <StatusModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={modalType}
        locale={locale}
      />
    </section>
  );
};

FormSection.displayName = 'FormSection';

export default FormSection;
