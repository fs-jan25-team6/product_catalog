import React from 'react';
import './prodCard.scss';
import './fonts.css';

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  oldPrice: number;
  screen: string;
  capacity: number;
  ram: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  oldPrice,
  screen,
  capacity,
  ram,
}) => {
  return (
    <div className="product-card">
      <img className="product-card__img" src={image} alt="" />

      <h2 className="product-card__title">{title}</h2>
      <p className="product-card__price">
        {`$${price}`}{' '}
        <span className="product-card__price-old">{`$${oldPrice}`}</span>
      </p>

      <div className="product-card__divider"></div>

      <div className="product-card__screen">
        <p className="product-card__screen-text">Screen</p>
        <p className="product-card__screen-value">{screen}</p>
      </div>
      <div className="product-card__capacity">
        <p className="product-card__capacity-text">Capacity</p>
        <p className="product-card__capacity-value">{capacity} GB</p>
      </div>
      <div className="product-card__ram">
        <p className="product-card__ram-text">Ram</p>
        <p className="product-card__ram-value">{ram} GB</p>
      </div>

      <div className="product-card__button">
        <a href="#" className="product-card__button-add">
          Add to cart
        </a>
        <button className="product-card__button-like">
          <img src="/icons/like-icon.svg" alt="like" />
        </button>
      </div>
    </div>
  );
};
