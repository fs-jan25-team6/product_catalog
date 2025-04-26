import React from 'react';
import { CategoryPage } from '../templates/CategoryPage';
import { Category } from '../../enums/Category';

export const PhonesPage: React.FC = () => {
  return <CategoryPage title="Mobile phones" category={Category.Phones} />;
};
