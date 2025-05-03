import React from 'react';
import styles from './NotFoundPage.module.scss';
import { Back } from '../../Breadcrumbs/Back/Back';
import { useTranslation } from 'react-i18next';

export const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();

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
          <span className={styles.error404}>{t('404.title')}</span>
          <span className={styles.message}>{t('404.subtitle')}</span>
        </div>
      </div>
    </div>
  );
};
