import React from 'react';
import styles from './Dropdown.module.scss';

type Props = {
  label: string;
};

export const Dropdown: React.FC<Props> = ({ label }) => {
  return (
    <div className={styles.dropdown}>
      <span className={styles.dropdown__label}>{label}</span>
      <div className={styles.dropdown__field}></div>
    </div>
  );
};
