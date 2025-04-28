import React from 'react';

type Props = {
  color?: string;
  size?: string;
  className?: string;
};

export const ArrowIcon: React.FC<Props> = ({
  color = '#f1f2f9',
  size = '16',
  ...props
}) => {
  const getColor = () => {
    switch (color) {
      case '$icons-color':
        return '#4a4d58';
      case '$purple-accent-color':
        return '#905bff';
      case '$secondary-color':
        return '#75767f';
      default:
        return color;
    }
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      style={{
        minWidth: size,
        display: 'block',
      }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.4715 3.52861C10.2111 3.26826 9.78903 3.26826 9.52868 3.52861L5.52868 7.52861C5.26833 7.78896 5.26833 8.21107 5.52868 8.47141L9.52868 12.4714C9.78903 12.7318 10.2111 12.7318 10.4715 12.4714C10.7318 12.2111 10.7318 11.789 10.4715 11.5286L6.94289 8.00001L10.4715 4.47141C10.7318 4.21107 10.7318 3.78896 10.4715 3.52861Z"
        fill={getColor()}
      />
    </svg>
  );
};
