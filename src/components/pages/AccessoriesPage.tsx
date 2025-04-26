import React from 'react';
import { CategoryPage } from '../templates/CategoryPage';
import { Category } from '../../enums/Category';

export const AccessoriesPage: React.FC = () => {
  return <CategoryPage title="Accessories" category={Category.Accessories} />;
};
