import React from 'react';
import classNames from 'classnames';
import styles from './Typography.module.scss';

type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'label';

type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'uppercase'
  | 'buttons'
  | 'body'
  | 'small'
  | 'label';

type Color = 'primary' | 'secondary';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  tag: Tag;
  variant: Variant;
  children: React.ReactNode;
  className?: string;
  color?: Color;
}

export const Typography: React.FC<TypographyProps> = ({
  tag,
  variant,
  children,
  className,
  color = 'primary',
  ...props
}) => {
  const Tag = tag;

  return (
    <Tag
      className={classNames(
        styles.typography,
        styles[`typography--${variant}`],
        styles[`typography--color--${color}`],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};
