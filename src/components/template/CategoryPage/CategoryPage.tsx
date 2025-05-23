import React, { useEffect } from 'react';
import { ProductList } from '../../ProductList/ProductList';
import styles from './CategoryPage.module.scss';
import { Heading } from '../../molecules/Heading/Heading';

import { useAppSelector } from '../../../hooks/hooks';
import { Loader } from '../../Loader/Loader';
import { ErrorPage } from '../../pages/ErrorPage/ErrorPage';
import { Controls } from './components/Controls';
import { ProductListPagination } from './components/Pagination';
import { useFilteredProducts } from '../../../hooks/useFilteredProducts';
import { usePaginatedProducts } from '../../../hooks/usePaginatedProducts';
import { ItemPerPage } from '../../../enums/ItemsPerPage';
import { useSearchParams } from 'react-router-dom';
import { SearchParam } from '../../../enums/SearchFields';
import { DefaultValues } from '../../../enums/DefaultValues';
import { Breadcrumbs } from '../../Breadcrumbs';
import { useTranslation } from 'react-i18next';
import { Typography } from '../../atoms/Typography';

type Props = {
  category: string;
};

export const CategoryPage: React.FC<Props> = ({ category }) => {
  const { products, loading, error } = useAppSelector(state => state.products);
  const [searchParams] = useSearchParams();
  const { t } = useTranslation();

  const query = searchParams.get(SearchParam.Query) || DefaultValues.Query;
  const sortBy = searchParams.get(SearchParam.Sort) || DefaultValues.Sort;
  const perPage =
    searchParams.get(SearchParam.PerPage) || DefaultValues.PerPage;
  const page = +(searchParams.get(SearchParam.Page) || DefaultValues.Page);

  const filtered = useFilteredProducts(products, category, query, sortBy);

  const { paginated, totalPages } = usePaginatedProducts(
    filtered,
    perPage === ItemPerPage.All ? ItemPerPage.All : parseInt(perPage, 10),
    page,
  );

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: 0 });
  }, [page]);

  return (
    <div className={styles.page}>
      {loading && <Loader />}
      {!loading && error && <ErrorPage />}
      {!loading && !error && (
        <>
          <Breadcrumbs showSearch />
          <div className={styles.content}>
            <div className={styles.page__title}>
              <Heading
                title={t(`${category}.title`)}
                subtitle={t('catalog.subtitle.items', {
                  count: filtered?.length,
                })}
              />
            </div>

            {paginated.length === 0 ? (
              <>
                <Typography variant="h2" tag="h2">
                  {t('catalog.noMatching')}
                </Typography>
              </>
            ) : (
              <>
                <Controls />

                <div>
                  <ProductList list={paginated} />
                </div>

                <div className={styles.page__pagination}>
                  <ProductListPagination
                    currentPage={page}
                    totalPages={totalPages}
                  />
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};
