import React from 'react';
import { useAppSelector } from '../../app/store';
import { ProductList } from '../ProductList/ProductList';
import { Product } from '../../types/Product';

type Props = {
  title: string;
  category: string;
};

export const CategoryPage: React.FC<Props> = ({ title, category }) => {
  const products = useAppSelector(state => state.products) as Product[];
  const filtered = products.filter(product => product.category === category);

  return (
    <>
      <h1>{title}</h1>
      <span>
        {filtered.length} item{filtered.length === 1 ? '' : 's'}
      </span>

      <ProductList list={filtered} />
    </>
  );
};
