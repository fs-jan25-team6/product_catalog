import React from 'react';
import { Product } from '../../types/Product';
import styles from './ProductList.module.scss';
import { ProductItem } from './ProductItem';

type Props = {
  list: Product[];
};

export const ProductList: React.FC<Props> = ({ list }) => {
  return (
    <div className={styles.container}>
      {list.map(product => (
        <div className={styles.container__item}>
          <ProductItem product={product} />
        </div>
      ))}
    </div>
  );
};
