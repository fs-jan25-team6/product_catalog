import React from 'react';
import { useAppSelector } from '../../../hooks/hooks';
import { ProductList } from '../../ProductList/ProductList';
import { FavouritesEmptyPage } from './FavouritesEmptyPage';
import styles from './FavouritesPage.module.scss';
import { Loader } from '../../Loader/Loader';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import { Breadcrumbs } from '../../Breadcrumbs';
import { t } from 'i18next';

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
            <h2 className={styles.title}>{t('favourites.title')}</h2>

            {favourites.length > 0 ? (
              <>
                <span className={styles.counter}>
                  {t('catalog.subtitle.items', {
                    count: favourites.length,
                  })}
                </span>
                <ProductList list={favourites} />
              </>
            ) : (
              <FavouritesEmptyPage />
            )}
          </div>
        </>
      )}
      {errorMessage && <ErrorPage />}
    </>
  );
};
