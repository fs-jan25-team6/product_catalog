import React from 'react';
import { CategoryPage } from '../template/CategoryPage/CategoryPage';
import { Category } from '../../enums/Category';

export const AccessoriesPage: React.FC = () => {
  return <CategoryPage title="Accessories" category={Category.Accessories} />;
};
