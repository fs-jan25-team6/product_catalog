import React from 'react';
import { CategoryPage } from '../template/CategoryPage/CategoryPage';
import { Category } from '../../enums/Category';

export const TabletsPage: React.FC = () => {
  return <CategoryPage category={Category.Tablets} />;
};
