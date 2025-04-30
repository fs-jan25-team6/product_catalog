import React from 'react';
import './CartItem.scss';
import { CloseIcon } from '../../../assets/icons/close-icon';
import { MinusIcon } from '../../../assets/icons/minus-icon';
import { PlusIcon } from '../../../assets/icons/plus-icon';
import { Icon } from '../../../assets/icons/Icon/Icon';
import { Product } from '../../../types/Product';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { decrease, increase, remove } from '../../../features/cartSlice';

// const tempCartItem = {
//   id: 1,
//   category: 'phones',
//   itemId: 'apple-iphone-7-32gb-black',
//   name: 'Apple iPhone 7 32GB Black',
//   fullPrice: 400,
//   price: 375,
//   screen: "4.7' IPS",
//   capacity: '32GB',
//   color: 'black',
//   ram: '2GB',
//   year: 2016,
//   image: 'img/phones/apple-iphone-7/black/00.webp',
// };

type Props = {
  product: Product;
};

export const CartItem: React.FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector(state => state.cart);

  const cartItem = cartItems.find(item => item.itemId === product.itemId);
  const quantity = cartItem?.quantity || 1;

  const removeFromCart = () => dispatch(remove(product));
  const increaseQuantity = () => dispatch(increase(product));
  const decreaseQuantity = () => dispatch(decrease(product));

  return (
    <>
      <div className="cart-item">
        <div className="cart-item__body">
          <button className="cart-item__close-btn" onClick={removeFromCart}>
            <Icon color="secondary">
              <CloseIcon />
            </Icon>
          </button>
          <img
            className="cart-item__image"
            src={product.image}
            alt={product.name}
          ></img>
          <span className="cart-item__name">{product.name}</span>
        </div>

        <div className="cart-item__footer">
          <div className="counter">
            <button
              className={quantity > 1 ? 'counter--active' : 'counter--disabled'}
              disabled={quantity === 1}
              onClick={decreaseQuantity}
            >
              <Icon color={quantity === 1 ? 'secondary' : 'primary'}>
                <MinusIcon />
              </Icon>
            </button>
            <p className="counter__amount">{quantity}</p>
            <button className="counter--active" onClick={increaseQuantity}>
              <Icon>
                <PlusIcon />
              </Icon>
            </button>
          </div>

          <p className="cart-item__price">${product.price * quantity}</p>
        </div>
      </div>
    </>
  );
};
