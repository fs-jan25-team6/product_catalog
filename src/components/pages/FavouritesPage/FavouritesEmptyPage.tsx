import React from 'react';
import styles from './FavouritesEmptyPage.module.scss';

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
      <span className={styles.error}>You don't have favourites yet 💔</span>
    </div>
  </div>
);
