'use client';

import { Close } from '@/components/icons';
import { createPortal } from 'react-dom';
import Button from '../ui/CustomButton';
import Image from 'next/image';
import { getTranslations, Locale } from '@/lib/getTranslations';

type StatusModalProps = {
  isOpen: boolean;
  onClose: () => void;
  type: 'success' | 'error';
  locale: Locale;
};

const StatusModal = ({ isOpen, onClose, type, locale }: StatusModalProps) => {
  if (!isOpen) return null;

  const t = getTranslations(locale);

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="relative w-full max-w-[640px] h-[600px] bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-xl">
        {/* Close button */}
        <div className="absolute top-4 right-4">
          <div className="w-12 h-12 rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] outline outline-offset-[-1px] outline-[var(--secondary)] flex justify-center items-center">
            <button onClick={onClose}>
              <Close fill="#2a2a2d" />
            </button>
          </div>
        </div>
        {/* Icon */}
        <div className="relative w-14 h-14 flex items-center justify-center mb-4">
          <Image
            src={
              type === 'success'
                ? '/modal-success-icon.svg'
                : '/modal-error-icon.svg'
            }
            alt="status icon"
            width={44}
            height={44}
            className="rounded-full"
          />
        </div>

        {/* Title */}
        <h3>
          {type === 'success' ? t.form.success.title : t.form.error.title}
        </h3>

        {/* Message */}
        <p className="text-[var(--grey-100)] mb-8 max-w-md">
          {type === 'success' ? t.form.success.message : t.form.error.message}
        </p>

        {/* Button */}
        <Button
          onClick={onClose}
          className="px-8 py-3 w-full"
        >
          {type === 'success' ? t.form.success.cta : t.form.error.cta}
        </Button>
      </div>
    </div>,
    document.body
  );
};

StatusModal.displayName = 'StatusModal';

export default StatusModal;
