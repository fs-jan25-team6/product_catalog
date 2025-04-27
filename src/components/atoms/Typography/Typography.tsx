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

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  tag: Tag;
  variant: Variant;
  children: React.ReactNode;
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  tag,
  variant,
  children,
  className,
  ...props
}) => {
  const Tag = tag;

  return (
    <Tag
      className={classNames(
        styles.typography,
        styles[`typography--${variant}`],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};
