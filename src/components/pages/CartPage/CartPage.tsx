import React, { useState } from 'react';
import styles from './CartPage.module.scss';
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
          <div className={styles.cart}>
            <h1 className={styles.title}>{t('cart.title')}</h1>

            {cartItems.length > 0 ? (
              <div className={styles.content}>
                <div className={styles.list}>
                  {cartItems.map(item => (
                    <CartItem product={item} key={item.id} />
                  ))}
                </div>

                <div className={styles.total}>
                  <div className={styles.totalPrice}>
                    <p className={styles.totalAmount}> ${totalPrice} </p>
                    <p className={styles.totalItems}>
                      {t('cart.total', { count: totalItems })}
                    </p>
                  </div>

                  <hr className={styles.divider} />

                  <button
                    className={styles.checkout}
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
