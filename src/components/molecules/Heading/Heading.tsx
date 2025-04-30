import React from 'react';
import styles from './Heading.module.scss';
import { Typography } from '../../atoms/Typography';

type Props = {
  title: string;
  subtitle?: string;
};

export const Heading: React.FC<Props> = ({ title, subtitle }) => (
  <div className={styles.heading}>
    <Typography variant="h1" tag="h1">
      {title}
    </Typography>
    {subtitle && (
      <Typography
        variant="body"
        tag="span"
        color="secondary"
        className={styles.heading__subtitle}
      >
        {subtitle}
      </Typography>
    )}
  </div>
);
