import React from 'react';
import { ProductList } from '../productList/productList';

export const FavoritesPage: React.FC = () => {
  return (
    <>
      <div>
        <h2>❤️ Favorites page</h2>
        <ProductList />
      </div>
    </>
  );
};
