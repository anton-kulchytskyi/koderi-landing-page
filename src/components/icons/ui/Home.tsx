import { IconProps } from '@/types/icons';

const HomeIcon = ({
  width,
  height,
  size = 24,
  // fill = '#fff',
  // className = '',
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
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill="url(#b)"
          d="M13.338.833a2 2 0 0 0-2.676 0L0 10.43v10.4a3.2 3.2 0 0 0 3.2 3.2h17.6a3.2 3.2 0 0 0 3.2-3.2v-10.4L13.338.833ZM15 22.026H9V17a3 3 0 0 1 6 0v5.026Zm7-1.2a1.2 1.2 0 0 1-1.2 1.2H17V17a5 5 0 0 0-10 0v5.026H3.2a1.2 1.2 0 0 1-1.2-1.2V11.32l10-9 10 9v9.507Z"
        />
      </g>
      <defs>
        <linearGradient
          id="b"
          x1={0.15}
          x2={23.709}
          y1={0.468}
          y2={24.316}
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset={0.002}
            stopColor="#7F00FF"
          />
          <stop
            offset={1}
            stopColor="#24C0F4"
          />
        </linearGradient>
        <clipPath id="a">
          <path
            fill="#fff"
            d="M0 0h24v24H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

HomeIcon.displayName = 'HomeIcon';

export default HomeIcon;
