import React from 'react';
import { NavLink } from 'react-router-dom';

export const TemporaryNavbar: React.FC = () => {
  return (
    <nav>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div>
        <NavLink to="/phones">Phones</NavLink>
        <NavLink to="/tablets">Tablets</NavLink>
        <NavLink to="/accessories">Accessories</NavLink>
      </div>
      <div>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </div>
      <div>
        <NavLink to="/not-found">404</NavLink>
      </div>
    </nav>
  );
};
