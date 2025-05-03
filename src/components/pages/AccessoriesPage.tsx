import React from 'react';
import { CategoryPage } from '../template/CategoryPage/CategoryPage';
import { Category } from '../../enums/Category';

export const AccessoriesPage: React.FC = () => {
  return <CategoryPage category={Category.Accessories} />;
};
