import React from 'react';
import { ProductList } from '../../ProductList/ProductList';
import styles from './CategoryPage.module.scss';
import { Heading } from '../../molecules/Heading/Heading';
import { Controls } from './components';
import { useAppSelector } from '../../../hooks/hooks';

type Props = {
  title: string;
  category: string;
};

export const CategoryPage: React.FC<Props> = ({ title, category }) => {
  const { products } = useAppSelector(state => state.products);

  const filtered = products.filter(product => product.category === category);

  return (
    <div className={styles.page}>
      <div className={styles.page__title}>
        <Heading
          title={title}
          subtitle={`${filtered.length} item${filtered.length === 1 ? '' : 's'}`}
        />
      </div>

      <Controls />

      <ProductList list={filtered} />

      <div className={styles.page__pagination}>pagination placeholder</div>
    </div>
  );
};
