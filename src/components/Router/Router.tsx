import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { AppLayout } from '../pages/Layout';
import { HomePage } from '../pages/HomePage/HomePage';
import { PhonesPage } from '../pages/PhonesPage';
import { FavouritesPage } from '../pages/FavouritesPage/FavouritesPage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { TabletsPage } from '../pages/TabletsPage';
import { AccessoriesPage } from '../pages/AccessoriesPage';
import { CartPage } from '../pages/CartPage/CartPage';
import { ProductPage } from '../pages/ProductPage/ProductPage';

export const Router: React.FC = () => (
  <HashRouter>
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/phones" element={<PhonesPage />} />
        <Route path="/tablets" element={<TabletsPage />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </HashRouter>
);
