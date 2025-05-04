import React from 'react';
import styles from './FavouritesEmptyPage.module.scss';
import { useTranslation } from 'react-i18next';

export const FavouritesEmptyPage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.content}>
      <div className={styles.favouritesEmptyImage}>
        <img
          className={styles.favouritesEmptyImage__img}
          src="images/no-items.png"
          alt=""
        />
      </div>
      <div className={styles.errorMessage}>
        <span className={styles.error}>{t('favourites.empty')}💔</span>
      </div>
    </div>
  );
};
