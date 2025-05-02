import React from 'react';
import styles from '../styles/Main-info.module.scss';

type Props = {
  label: string;
  value: string;
};
export const MainInfoSpecification: React.FC<Props> = ({ label, value }) => (
  <div className={styles.description}>
    <span className={styles.description__label}>{label}</span>
    <span className={styles.description__value}>{value}</span>
  </div>
);
