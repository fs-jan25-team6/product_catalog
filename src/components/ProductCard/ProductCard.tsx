import React from 'react';
import './prodCard.scss';
import './fonts.css';
import Image from './IPHONE_TEST.png';

export const ProductCard: React.FC = () => {
  return (
    <div className="product-card">
      <img className="product-card__img" src={Image} alt="" />

      <h2 className="product-card__title">
        "Apple iPhone Xs 64GB Silver (iMT9G2FS/A)"
      </h2>
      <p className="product-card__price">
        $799
        <span className="product-card__price-old">$899</span>
      </p>

      <div className="product-card__divider"></div>

      <div className="product-card__specifications">
        <div className="product-card__specification">
          <p className="product-card__specification-text">Screen</p>
          <p className="product-card__specification-value">5.8” OLED</p>
        </div>
        <div className="product-card__specification">
          <p className="product-card__specification-text">Capacity</p>
          <p className="product-card__specification-value">64 GB</p>
        </div>
        <div className="product-card__specification">
          <p className="product-card__specification-text">Ram</p>
          <p className="product-card__specification-value">4 GB</p>
        </div>
      </div>

      <div className="product-card__button">
        <a href="#" className="product-card__button-add">
          Add to cart
        </a>
        <button className="product-card__button-like">
          <img src="/icons/heart-icon.svg" alt="like" />
        </button>
      </div>
    </div>
  );
};
