import classNames from 'classnames';
import React from 'react';
import styles from './Icon.module.scss';

type Direction = 'left' | 'right' | 'down' | 'up';

type Color = 'primary' | 'secondary';

// primary color === $white-accent-color
// secondary color === $icons-color

type IconProps = {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  color?: Color;
};

export const Icon: React.FC<IconProps> = ({
  className,
  direction = 'left',
  color = 'primary',
  children,
}) => (
  <div
    className={classNames(
      styles.icon,
      styles[`icon--arrow-${direction}`],
      styles[`icon--color--${color}`],
      className,
    )}
  >
    {children}
  </div>
);
