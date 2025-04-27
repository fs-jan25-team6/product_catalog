import React from 'react';
import './CartPage.scss';
import { useNavigate } from 'react-router-dom';
import { CartItem } from '../../organisms/CartItem/CartItem';

export const CartPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <h2>🛒 CartPage page</h2> */}
      <div className="cart">
        {/* Back Link */}

        <button onClick={() => navigate('..')} className="cart__back-btn">
          <img
            className="cart__back-img"
            src="/icons/arrow-left-icon.svg"
            alt="Left button"
          />

          <p className="cart__back-text">Back</p>
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
