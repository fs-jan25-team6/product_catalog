import React from 'react';
import { ProductList } from '../ProductList/ProductList';
import { useAppSelector } from '../../hooks/hooks';

export const FavoritesPage: React.FC = () => {
  const { favourites } = useAppSelector(state => state.favourites);
  return (
    <>
      <h2>❤️ Favorites page</h2>

      <ProductList list={favourites} />
    </>
  );
};
