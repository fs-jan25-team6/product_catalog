import React from 'react';

type Props = {
  color?: string;
  size?: string;
  className?: string;
};

export const MinusIcon: React.FC<Props> = ({
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
        d="M2.6665 7.99999C2.6665 7.63181 2.96498 7.33333 3.33317 7.33333H12.6665C13.0347 7.33333 13.3332 7.63181 13.3332 7.99999C13.3332 8.36818 13.0347 8.66666 12.6665 8.66666H3.33317C2.96498 8.66666 2.6665 8.36818 2.6665 7.99999Z"
        fill={getColor()}
      />
    </svg>
  );
};
