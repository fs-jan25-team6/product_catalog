import React from 'react';
import { CategoryPage } from '../templates/CategoryPage';
import { Category } from '../../enums/Category';

export const TabletsPage: React.FC = () => {
  return <CategoryPage title="Tablets" category={Category.Tablets} />;
};
