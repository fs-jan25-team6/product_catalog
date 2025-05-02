import React from 'react';
import styles from './IconButton.module.scss';
import classNames from 'classnames';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  isActive?: boolean;
};

export const IconButton: React.FC<Props> = ({
  children,
  className,
  isActive,
  ...props
}) => (
  <button
    className={classNames(
      styles.button,
      styles['button--icon'],
      {
        [styles['button--active']]: isActive,
      },
      className,
    )}
    {...props}
  >
    {children}
  </button>
);
