import React, { useEffect, useRef } from 'react';
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

type Props = {
  title: string;
  category: string;
};

export const CategoryPage: React.FC<Props> = ({ title, category }) => {
  const { products, loading, error } = useAppSelector(state => state.products);
  const [searchParams] = useSearchParams();
  const listRef = useRef<HTMLDivElement>(null);

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
    listRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [page]);

  return (
    <div className={styles.page} ref={listRef}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.page__title}>
            <Heading
              title={title}
              subtitle={`${filtered.length} item${filtered.length === 1 ? '' : 's'}`}
            />
          </div>

          <Controls />

          <div>
            <ProductList list={paginated} />
          </div>

          <div className={styles.page__pagination}>
            <ProductListPagination currentPage={page} totalPages={totalPages} />
          </div>
        </>
      )}
      {error && <ErrorPage />}
    </div>
  );
};
