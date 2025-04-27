import React from 'react';
import './productList.scss';
import './Breadcrumbs.scss';
import './Title.scss';
import { Link } from 'react-router-dom';

export const ProductList: React.FC = () => {
  return (
    <div className="favourites">
      <div className="favourites__content">
        <nav className="breadcrumbs">
          <Link to="/" className="breadcrumbs__link">
            <img
              src="/icons/home-icon.svg"
              alt="home"
              className="breadcrumbs__icon"
            />
          </Link>
          <img
            src="/icons/arrow-right-icon.svg"
            alt=">"
            className="breadcrumbs__separator"
          />
          <span className="breadcrumbs__current">Favourites</span>
        </nav>

        <h1 className="title">Favourites</h1>

        <div className="favourites__subtitle">5 items</div>
        <div className="favourites__product-list">
          <div className="favourites__card-placeholder">
            {/* <ProductCard /> */}
          </div>
          <div className="favourites__card-placeholder">
            {/* <ProductCard /> */}
          </div>
          <div className="favourites__card-placeholder">
            {/* <ProductCard /> */}
          </div>
          <div className="favourites__card-placeholder">
            {/* <ProductCard /> */}
          </div>
          <div className="favourites__card-placeholder">
            {/* <ProductCard /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
