import React from 'react';
import { useAppSelector } from '../../../hooks/hooks';
import { ProductList } from '../../ProductList/ProductList';
import { FavouritesEmptyPage } from './FavouritesEmptyPage';
import styles from './FavouritesPage.module.scss';

export const FavouritesPage: React.FC = () => {
  const { favourites } = useAppSelector(state => state.favourites);
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>Favourites</h2>

      {favourites.length > 0 ? (
        <>
          <span className={styles.counter}>
            {favourites.length} {favourites.length === 1 ? 'item' : 'items'}
          </span>
          <ProductList list={favourites} />
        </>
      ) : (
        <FavouritesEmptyPage />
      )}
    </div>
  );
};
