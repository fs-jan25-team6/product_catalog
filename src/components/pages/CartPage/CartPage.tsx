import React from 'react';
import './CartPage.scss';
import '../../../assets/icons/Icon/Icon.scss';
import { useNavigate } from 'react-router-dom';
import { CartItem } from '../../organisms/CartItem/CartItem';
import { ArrowIcon } from '../../../assets/icons/arrow-icon';
import { Icon } from '../../../assets/icons/Icon/Icon';

export const CartPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="cart">
        <button onClick={() => navigate('..')} className="cart__back-btn">
          <Icon className="icon">
            <ArrowIcon />
          </Icon>

          <span className="cart__back-text">Back</span>
        </button>

        {/* add logic <Navigate to='..' /> */}

        <h1 className="cart__title">Cart</h1>

        <div className="cart__content">
          <div className="cart__list">
            {/* {cartItems.map(item => <CartItem key={item.id} {...item} />)} */}
            <CartItem />
            <CartItem />
            <CartItem />
          </div>

          <div className="cart__total">
            <div className="cart__total-price">
              <p className="cart__total-amount"> $2657 </p>

              {/* {sum of cartItems.price} */}

              <p className="cart__total-items">Total for 3 items</p>

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
