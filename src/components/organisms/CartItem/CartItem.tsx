import React from 'react';
import './CartItem.scss';
import { CloseIcon } from '../../../assets/icons/close-icon';
import { MinusIcon } from '../../../assets/icons/minus-icon';
import { PlusIcon } from '../../../assets/icons/plus-icon';
import { Icon } from '../../../assets/icons/Icon/Icon';

const tempCartItem = {
  id: 1,
  category: 'phones',
  itemId: 'apple-iphone-7-32gb-black',
  name: 'Apple iPhone 7 32GB Black',
  fullPrice: 400,
  price: 375,
  screen: "4.7' IPS",
  capacity: '32GB',
  color: 'black',
  ram: '2GB',
  year: 2016,
  image: 'img/phones/apple-iphone-7/black/00.webp',
};

export const CartItem: React.FC = () => {
  return (
    <>
      <div className="cart-item">
        <div className="cart-item__body">
          <button className="cart-item__close-btn">
            <Icon color="secondary">
              <CloseIcon />
            </Icon>
          </button>
          <img
            className="cart-item__image"
            src={tempCartItem.image}
            alt={tempCartItem.name}
          ></img>
          <span className="cart-item__name">{tempCartItem.name}</span>
        </div>

        <div className="cart-item__footer">
          <div className="counter">
            <button className="counter__decrease">
              <Icon color="secondary">
                <MinusIcon />
              </Icon>
            </button>
            <p className="counter__amount"> 1 </p>
            <button className="counter__increase">
              <Icon>
                <PlusIcon />
              </Icon>
            </button>
          </div>

          <p className="cart-item__price">{`$${tempCartItem.price}`}</p>
        </div>
      </div>
    </>
  );
};
