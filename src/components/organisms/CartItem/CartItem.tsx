import React from 'react';
import './CartItem.scss';

const tempCartItem = {
  "id": 1,
  "category": "phones",
  "itemId": "apple-iphone-7-32gb-black",
  "name": "Apple iPhone 7 32GB Black",
  "fullPrice": 400,
  "price": 375,
  "screen": "4.7' IPS",
  "capacity": "32GB",
  "color": "black",
  "ram": "2GB",
  "year": 2016,
  "image": "img/phones/apple-iphone-7/black/00.webp"
};

export const CartItem: React.FC = () => {
  return (
    <>
      <div className='cart-item'>
        <div className='cart-item__body'>
          <button className='cart-item__close-btn'>
            <img
              className='cart-item__close-btn--svg'
              src='../../../public/icons/close-icon.svg'
              alt='close button'>
            </img>
          </button>
          <img className='cart-item__image' src={tempCartItem.image} alt={tempCartItem.name}></img>
          <h3 className='cart-item__name'>{tempCartItem.name}</h3>
        </div>

        <div className='cart-item__footer'>
          <div className='counter'>
            <button className='counter__decrease'>
              <img
                className='counter__decrease--svg'
                src='../../../public/icons/minus-icon.svg'
                alt='decrease button'>
              </img>
            </button>
            <p className='counter__amount'> 1 </p>
            <button className='counter__increase'>
              <img
                className='counter__decrease--svg'
                src='../../../public/icons/plus-icon.svg'
                alt='increase button'>
              </img>
            </button>
          </div>

          <p className='cart-item__price'>{`$${tempCartItem.price}`}</p>
        </div>
      </div>
    </>
  );
};
