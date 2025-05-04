import React from 'react';
import styles from './CartEmptyPage.module.scss';
import { useTranslation } from 'react-i18next';

export const CartEmptyPage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.content}>
      <div className={styles.cartEmptyImage}>
        <img
          className={styles.cartEmptyImage__img}
          src="images/no-items.png"
          alt=""
        />
      </div>
      <div className={styles.errorMessage}>
        <span className={styles.error}>{t('cart.empty')}</span>
      </div>
    </div>
  );
};
