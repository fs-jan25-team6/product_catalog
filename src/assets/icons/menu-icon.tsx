import React from 'react';

type Props = {
  color?: string;
  size?: string;
  className?: string;
};

export const MenuIcon: React.FC<Props> = ({
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
        d="M1 4.5C1 4.08579 1.39175 3.75 1.875 3.75H14.125C14.6082 3.75 15 4.08579 15 4.5C15 4.91421 14.6082 5.25 14.125 5.25H1.875C1.39175 5.25 1 4.91421 1 4.5Z"
        fill={getColor()}
      />
      <path
        d="M1 8C1 7.58579 1.39175 7.25 1.875 7.25H14.125C14.6082 7.25 15 7.58579 15 8C15 8.41421 14.6082 8.75 14.125 8.75H1.875C1.39175 8.75 1 8.41421 1 8Z"
        fill={getColor()}
      />
      <path
        d="M1.875 10.75C1.39175 10.75 1 11.0858 1 11.5C1 11.9142 1.39175 12.25 1.875 12.25H14.125C14.6082 12.25 15 11.9142 15 11.5C15 11.0858 14.6082 10.75 14.125 10.75H1.875Z"
        fill={getColor()}
      />
    </svg>
  );
};
