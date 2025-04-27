import React from 'react';
import { useAppSelector } from '../../app/store';
import { ProductList } from '../ProductList/ProductList';
import { Product } from '../../types/Product';
import { Typography } from '../atoms/Typography';

type Props = {
  title: string;
  category: string;
};

export const CategoryPage: React.FC<Props> = ({ title, category }) => {
  const products = useAppSelector(state => state.products) as Product[];
  const filtered = products.filter(product => product.category === category);

  return (
    <>
      <Typography tag="h1" variant="h1">
        {title}
      </Typography>
      <Typography tag="span" variant="body">
        {filtered.length} item{filtered.length === 1 ? '' : 's'}
      </Typography>

      <ProductList list={filtered} />
    </>
  );
};
