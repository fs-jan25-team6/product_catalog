import React from 'react';

type Props = {
  color?: string;
  size?: string;
  className?: string;
};

export const CloseIcon: React.FC<Props> = ({
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
        d="M12.4716 4.4714C12.7319 4.21105 12.7319 3.78894 12.4716 3.52859C12.2112 3.26824 11.7891 3.26824 11.5288 3.52859L8.00016 7.05719L4.47157 3.52859C4.21122 3.26824 3.78911 3.26824 3.52876 3.52859C3.26841 3.78894 3.26841 4.21105 3.52876 4.4714L7.05735 7.99999L3.52876 11.5286C3.26841 11.7889 3.26841 12.211 3.52876 12.4714C3.78911 12.7317 4.21122 12.7317 4.47157 12.4714L8.00016 8.9428L11.5288 12.4714C11.7891 12.7317 12.2112 12.7317 12.4716 12.4714C12.7319 12.211 12.7319 11.7889 12.4716 11.5286L8.94297 7.99999L12.4716 4.4714Z"
        fill={getColor()}
      />
    </svg>
  );
};
