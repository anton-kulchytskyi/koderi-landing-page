import { IconProps } from '@/types/icons';
const BurgerMenu = ({
  width,
  height,
  size = 24,
  fill = '#fff',
  className = '',
  ...props
}: IconProps) => {
  const iconWidth = width || size;
  const iconHeight = height || size;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconWidth}
      height={iconHeight}
      fill="none"
      className={className}
      {...props}
    >
      <g fill={fill}>
        <path d="M24 4H0v2h24V4Z" />
        <path d="M24 9H0v2h24V9Z" />
        <path d="M24 14H0v2h24v-2Z" />
        <path d="M24 19H0v2h24v-2Z" />
      </g>
    </svg>
  );
};

BurgerMenu.displayName = 'BurgerMenu';

export default BurgerMenu;
