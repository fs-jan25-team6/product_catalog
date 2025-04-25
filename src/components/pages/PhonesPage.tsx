import React from 'react';
import { useAppSelector } from '../../app/store';
import { ProductList } from '../ProductList/ProductList';
import { Product } from '../../types/Product';

export const PhonesPage: React.FC = () => {
  const products = useAppSelector(state => state.products) as Product[];
  const phones = products.filter(product => product.category === 'accessories');

  return (
    <>
      <h2>📱 Phones page</h2>
      <ProductList list={phones} />
    </>
  );
};
