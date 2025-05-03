import React, { useState } from 'react';
import './CartPage.scss';
import { CartItem } from '../../organisms/CartItem/CartItem';
import { useAppSelector } from '../../../hooks/hooks';
import {
  clearCart,
  selectTotalItems,
  selectTotalPrice,
} from '../../../features/cartSlice';
import { CartEmptyPage } from './CartEmptyPage';
import { Loader } from '../../Loader/Loader';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import { Modal } from '../../Modal/Modal';
import { useDispatch } from 'react-redux';
import { Back } from '../../Breadcrumbs/Back/Back';
import { t } from 'i18next';

export const CartPage: React.FC = () => {
  const { cartItems, loading, errorMessage } = useAppSelector(
    state => state.cart,
  );
  const totalItems = useAppSelector(selectTotalItems);
  const totalPrice = useAppSelector(selectTotalPrice);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Back />
          <div className="cart">
            <h1 className="cart__title">{t('cart.title')}</h1>

            {cartItems.length > 0 ? (
              <div className="cart__content">
                <div className="cart__list">
                  {cartItems.map(item => (
                    <CartItem product={item} key={item.id} />
                  ))}
                </div>

                <div className="cart__total">
                  <div className="cart__total-price">
                    <p className="cart__total-amount"> ${totalPrice} </p>
                    <p className="cart__total-items">
                      {t('cart.total', { count: totalItems })}
                    </p>
                  </div>

                  <hr className="cart__divider" />

                  <button
                    className="cart__checkout-btn"
                    onClick={() => setIsModalOpen(true)}
                  >
                    {t('cart.checkout')}
                  </button>
                  {isModalOpen && (
                    <Modal
                      isOpen={isModalOpen}
                      onClose={() => setIsModalOpen(false)}
                      onConfirm={() => {
                        dispatch(clearCart());
                        setIsModalOpen(false);
                      }}
                    />
                  )}
                </div>
              </div>
            ) : (
              <CartEmptyPage />
            )}
          </div>
        </>
      )}

      {errorMessage && <ErrorPage />}
    </>
  );
};
