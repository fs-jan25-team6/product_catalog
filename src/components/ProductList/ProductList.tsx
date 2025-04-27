import React from 'react';
import { Product } from '../../types/Product';
import styles from './ProductList.module.scss';
import { ProductCard } from '../ProductCard/ProductCard';
import { getRandomBool } from '../../helpers/getRandom';

type Props = {
  list: Product[];
};

export const ProductList: React.FC<Props> = ({ list }) => {
  return (
    <div className={styles.container}>
      {list.map(product => (
        <div className={styles.container__item} key={product.id}>
          <ProductCard
            product={product}
            isFavorite={getRandomBool()}
            isInCart={getRandomBool()}
          />
        </div>
      ))}
    </div>
  );
};
