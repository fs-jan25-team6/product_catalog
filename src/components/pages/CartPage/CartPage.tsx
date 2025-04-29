import React from 'react';
import './CartPage.scss';
import { useNavigate } from 'react-router-dom';
import { CartItem } from '../../organisms/CartItem/CartItem';
import { ArrowIcon } from '../../../assets/icons/arrow-icon';
import { Icon } from '../../../assets/icons/Icon/Icon';
import { useAppSelector } from '../../../hooks/hooks';
import {
  selectTotalItems,
  selectTotalPrice,
} from '../../../features/cartSlice';

export const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const { cartItems } = useAppSelector(state => state.cart);
  const totalItems = useAppSelector(selectTotalItems);
  const totalPrice = useAppSelector(selectTotalPrice);

  return (
    <>
      <div className="cart">
        <button onClick={() => navigate('..')} className="cart__back-btn">
          <Icon>
            <ArrowIcon />
          </Icon>

          <span className="cart__back-text">Back</span>
        </button>

        {/* add logic <Navigate to='..' /> */}

        <h1 className="cart__title">Cart</h1>

        <div className="cart__content">
          <div className="cart__list">
            {/* {cartItems.map(item => <CartItem key={item.id} {...item} />)} */}
            {cartItems.map(item => (
              <CartItem product={item} key={item.id} />
            ))}
          </div>

          <div className="cart__total">
            <div className="cart__total-price">
              <p className="cart__total-amount"> ${totalPrice} </p>

              {/* {sum of cartItems.price} */}

              <p className="cart__total-items">Total for {totalItems} items</p>

              {/* {Total for {cartItems.length} item(-s)} */}
            </div>

            <hr className="cart__divider" />

            <button className="cart__checkout-btn">Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};
