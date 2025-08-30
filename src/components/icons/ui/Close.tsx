import { IconProps } from '@/types/icons';

const Close = ({
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
      <g
        fill={fill}
        clipPath="url(#close-icon-clip)"
      >
        <path d="M24 1.414 22.586 0 12 10.586 1.414 0 0 1.414 10.586 12 0 22.586 1.414 24 12 13.414 22.586 24 24 22.586 13.414 12 24 1.414Z" />
      </g>
      <defs>
        <clipPath id="close-icon-clip">
          <path
            fill={fill}
            d="M0 0h24v24H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

Close.displayName = 'Close';

export default Close;
