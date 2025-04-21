import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../app/store';

export const PhonesPage: React.FC = () => {
  const products = useAppSelector(state => state.products);

  return (
    <>
      <h2>📱 Phones page</h2>
      <div className="stack stack--vertical">
        {products.map(el => (
          <NavLink to={`/product/${el.id}`} key={el.id}>
            Product #{el.id} ({el.name})
          </NavLink>
        ))}
      </div>
    </>
  );
};
