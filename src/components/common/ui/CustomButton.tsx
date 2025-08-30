'use client';
import { ReactNode, forwardRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonVariant = 'text' | 'icon';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  display?: string;
  className?: string;
}

interface ButtonAsButton extends BaseButtonProps {
  as?: 'button';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

interface ButtonAsLink extends BaseButtonProps {
  as: 'link';
  href: string;
  onClick?: () => void;
  prefetch?: boolean;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      variant = 'text',
      size = 'md',
      display = 'inline-flex',
      className,
    } = props;

    const sizeStyles = {
      sm: {
        text: 'h-10 px-3 py-1.5 text-sm',
        icon: 'w-10 h-10 p-2',
      },
      md: {
        text: 'h-12 px-4 py-2 text-base',
        icon: 'w-12 h-12 p-3',
      },
      lg: {
        text: 'h-14 px-6 py-3 text-lg',
        icon: 'w-14 h-14 p-3.5',
      },
    };

    const baseStyles = `
      bg-[linear-gradient(135deg,#7F00FF_0.84%,#24C0F4_100%)] 
      rounded-lg 
      shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] 
      justify-center items-center gap-2 
      hover:bg-[linear-gradient(101deg,#7F00FF_39.24%,#24C0F4_63.71%)] 
      hover:shadow-[0px_6px_8px_0px_rgba(0,0,0,0.40)] 
      active:bg-[linear-gradient(101deg,#7F00FF_39.24%,#24C0F4_63.71%)] 
      transition-all duration-300 ease-in-out
      cursor-pointer
      text-white font-medium
      disabled:opacity-50 disabled:cursor-not-allowed
    `;

    const combinedStyles = cn(
      baseStyles,
      sizeStyles[size][variant],
      display,
      className
    );

    // Next.js Link
    if (props.as === 'link') {
      const rel =
        props.rel ??
        (props.target === '_blank' ? 'noopener noreferrer' : undefined);

      return (
        <Link
          href={props.href}
          onClick={props.onClick}
          prefetch={props.prefetch}
          replace={props.replace}
          scroll={props.scroll}
          shallow={props.shallow}
          target={props.target}
          rel={rel}
          className={combinedStyles}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {children}
        </Link>
      );
    }

    // Звичайна кнопка
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        onClick={props.onClick}
        type={props.type || 'button'}
        disabled={props.disabled}
        className={combinedStyles}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
