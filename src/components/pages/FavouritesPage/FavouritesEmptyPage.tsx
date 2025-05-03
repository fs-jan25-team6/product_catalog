import React from 'react';
import styles from './FavouritesEmptyPage.module.scss';
import { t } from 'i18next';

export const FavouritesEmptyPage = () => (
  <div className={styles.content}>
    <div className={styles.favouritesEmptyImage}>
      <img
        className={styles.favouritesEmptyImage__img}
        src="/src/assets/images/no-items.png"
        alt=""
      />
    </div>
    <div className={styles.errorMessage}>
      <span className={styles.error}>{t('favourites.empty')}</span>
    </div>
  </div>
);
