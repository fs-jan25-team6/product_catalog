import React from 'react';
import styles from './CartEmptyPage.module.scss';
import { t } from 'i18next';

export const CartEmptyPage = () => (
  <div className={styles.content}>
    <div className={styles.cartEmptyImage}>
      <img
        className={styles.cartEmptyImage__img}
        src="/src/assets/images/no-items.png"
        alt=""
      />
    </div>
    <div className={styles.errorMessage}>
      <span className={styles.error}>{t('cart.empty')}</span>
    </div>
  </div>
);
