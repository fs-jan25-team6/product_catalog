import React from 'react';
import { useAppSelector } from '../../../hooks/hooks';
import { ProductList } from '../../ProductList/ProductList';
import { FavouritesEmptyPage } from './FavouritesEmptyPage';
import styles from './FavouritesPage.module.scss';
import { Loader } from '../../Loader/Loader';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import { Breadcrumbs } from '../../Breadcrumbs';

export const FavouritesPage: React.FC = () => {
  const { favourites, loading, errorMessage } = useAppSelector(
    state => state.favourites,
  );
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Breadcrumbs />
          <div className={styles.content}>
            <h2 className={styles.title}>Favourites</h2>

            {favourites.length > 0 && (
              <>
                <span className={styles.counter}>
                  {favourites.length}{' '}
                  {favourites.length === 1 ? 'item' : 'items'}
                </span>
                <ProductList list={favourites} />
              </>
            )}
            {favourites.length === 0 && <FavouritesEmptyPage />}
          </div>
        </>
      )}
      {errorMessage && <ErrorPage />}
    </>
  );
};
