import React from 'react';
import styles from './NotFoundPage.module.scss';
import { Back } from '../../Breadcrumbs/Back/Back';

export const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.NotFoundPage}>
      <Back />
      <div className={styles.content}>
        <div className={styles.notFoundImage}>
          <img
            className={styles.notFoundImage__img}
            src="/src/assets/images/page-not-found.png"
            alt=""
          />
        </div>
        <div className={styles.errorMessage}>
          <span className={styles.error404}>Error 404</span>
          <span className={styles.message}>Page not found</span>
        </div>
      </div>
    </div>
  );
};
