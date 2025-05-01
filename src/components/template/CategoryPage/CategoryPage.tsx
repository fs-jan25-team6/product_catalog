import React from 'react';
import { ProductList } from '../../ProductList/ProductList';
import styles from './CategoryPage.module.scss';
import { Heading } from '../../molecules/Heading/Heading';

import { useAppSelector } from '../../../hooks/hooks';
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
  const { products } = useAppSelector(state => state.products);
  const [searchParams] = useSearchParams();

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

  return (
    <div className={styles.page}>
      <div className={styles.page__breadcrumbs}>breadcrumbs placeholder</div>
      <div className={styles.page__title}>
        <Heading
          title={title}
          subtitle={`${filtered.length} item${filtered.length === 1 ? '' : 's'}`}
        />
      </div>

      <Controls />

      <ProductList list={paginated} />

      <div className={styles.page__pagination}>
        <ProductListPagination currentPage={page} totalPages={totalPages} />
      </div>
    </div>
  );
};
