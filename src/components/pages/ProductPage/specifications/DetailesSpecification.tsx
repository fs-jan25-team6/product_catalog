import React from 'react';
import styles from '../styles/Detailes.module.scss';

type Props = {
  label: string;
  value: string;
};
export const DetailesSpecification: React.FC<Props> = ({ label, value }) => (
  <div className={styles['tech-specs__feature']}>
    <span className={styles['tech-specs__feature__label']}>{label}</span>
    <span className={styles['tech-specs__feature__value']}>{value}</span>
  </div>
);
