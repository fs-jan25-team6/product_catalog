import React from 'react';
import { useParams } from 'react-router-dom';

export const ProductPage: React.FC = () => {
  const { productId } = useParams();
  return <h2>📦 Product {productId} page</h2>;
};
