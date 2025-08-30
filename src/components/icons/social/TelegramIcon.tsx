import { IconProps } from '@/types/icons';

const TelegramIcon = ({
  size = 24,
  width = size,
  height = size,
  stroke = '#fff',
  strokeWidth = 1.5,
  className = '',
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    className={className}
    {...props}
  >
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="m11.985 15.408 3.242 3.686c1.2 1.365 1.801 2.048 2.43 1.88.628-.165.844-1.063 1.275-2.86l2.39-9.968c.665-2.768.997-4.151.259-4.834-.738-.683-2.017-.175-4.575.84L5.14 8.865c-2.046.813-3.069 1.219-3.134 1.917a1 1 0 0 0 0 .214c.063.699 1.084 1.108 3.128 1.927.925.37 1.388.557 1.72.912.037.04.073.081.108.124.306.38.436.88.697 1.876l.489 1.867c.253.97.38 1.456.713 1.522.333.066.622-.336 1.201-1.141l1.923-2.675Zm0 0-.317-.33c-.362-.378-.543-.566-.543-.8 0-.234.18-.423.543-.8l3.573-3.724"
    />
  </svg>
);

TelegramIcon.displayName = 'TelegramIcon';

export default TelegramIcon;
