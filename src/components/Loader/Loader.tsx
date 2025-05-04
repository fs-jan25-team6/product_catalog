import React from 'react';
import styles from './Loader.module.scss';

export const Loader = () => (
  <div className={styles.content}>
    <img src="images/loading.png" alt="" className={styles.astronaut} />
  </div>
);
