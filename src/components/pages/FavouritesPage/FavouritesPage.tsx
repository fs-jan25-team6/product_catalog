import React from 'react';
import { useAppSelector } from '../../../hooks/hooks';
import { ProductList } from '../../ProductList/ProductList';
import { FavouritesEmptyPage } from './FavouritesEmptyPage';
import styles from './FavouritesPage.module.scss';
import { Loader } from '../../Loader/Loader';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import { Breadcrumbs } from '../../Breadcrumbs';
import { useTranslation } from 'react-i18next';
import { useFilteredProducts } from '../../../hooks/useFilteredProducts';
import { useSearchParams } from 'react-router-dom';
import { SearchParam } from '../../../enums/SearchFields';
import { DefaultValues } from '../../../enums/DefaultValues';

export const FavouritesPage: React.FC = () => {
  const {
    favourites: products,
    loading,
    errorMessage,
  } = useAppSelector(state => state.favourites);
  const [searchParams] = useSearchParams();

  const query = searchParams.get(SearchParam.Query) || DefaultValues.Query;
  const favourites = useFilteredProducts(products, '', query, '');

  const { t } = useTranslation();

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Breadcrumbs showSearch />
          <div className={styles.page}>
            <h2 className={styles.title}>{t('favourites.title')}</h2>

            {favourites.length > 0 && (
              <div className={styles.content}>
                <span className={styles.counter}>
                  {t('catalog.subtitle.items', {
                    count: favourites.length,
                  })}
                </span>
                <ProductList list={favourites} />
              </div>
            )}
            {favourites.length === 0 && <FavouritesEmptyPage />}
          </div>
        </>
      )}
      {errorMessage && <ErrorPage />}
    </>
  );
};
