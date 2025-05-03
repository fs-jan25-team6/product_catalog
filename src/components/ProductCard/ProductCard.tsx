import React from 'react';
import { Product } from '../../types/Product';
import styles from './ProductCard.module.scss';
import classNames from 'classnames';
import { HeartFilledIcon } from '../../assets/icons/heart-filled-icon';
import { HeartIcon } from '../../assets/icons/heart-icon';
import { Icon } from '../../assets/icons/Icon/Icon';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { toggleFavourite } from '../../features/favouritesSlice';
import { add } from '../../features/cartSlice';
import { useNavigate } from 'react-router-dom';
import { t } from 'i18next';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const isOnDiscount = product.price < product.fullPrice;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { favourites } = useAppSelector(state => state.favourites);
  const { cartItems } = useAppSelector(state => state.cart);

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(toggleFavourite(product));
  };
  const addToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(add(product));
  };

  const isInFavourites = favourites.some(fav => fav.itemId === product.itemId);
  const isInCart = cartItems.some(
    cartItem => cartItem.itemId === product.itemId,
  );

  const handleClick = () => {
    navigate(`/product/${product.itemId}`);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.card__content}>
        <img
          src={product.image}
          alt={`${product.name} photo`}
          className={styles.card__photo}
        />
        <div className={styles.card__description}>
          <div className={styles.card__title}>{product.name}</div>
          <div className={styles.card__price}>
            <div className={styles.card__price__value}>
              ${isOnDiscount ? product.price : product.fullPrice}
            </div>
            {isOnDiscount && (
              <div
                className={classNames(
                  styles.card__price__value,
                  styles['card__price__value--strikethrough'],
                )}
              >
                ${product.fullPrice}
              </div>
            )}
          </div>
          <div className={styles.card__divider}></div>
          <div className={styles.card__specs}>
            <div className={styles.card__specs__field}>
              <div className={styles.card__specs__label}>
                {t('product.specifications.screen')}
              </div>
              <div className={styles.card__specs__value}>{product.screen}</div>
            </div>
            <div className={styles.card__specs__field}>
              <div className={styles.card__specs__label}>
                {t('product.specifications.capacity')}
              </div>
              <div className={styles.card__specs__value}>
                {product.capacity}
              </div>
            </div>
            <div className={styles.card__specs__field}>
              <div className={styles.card__specs__label}>
                {t('product.specifications.ram')}
              </div>
              <div className={styles.card__specs__value}>{product.ram}</div>
            </div>
          </div>
          <div className={styles.card__controls}>
            <button
              className={classNames(styles['card__button'], {
                [styles['card__button--cart']]: !isInCart,
              })}
              disabled={isInCart}
              onClick={addToCart}
            >
              {t(`buttons.actions.${isInCart ? 'inCart' : 'toCart'}`)}
            </button>
            <button
              className={classNames(
                styles['card__button'],
                styles['card__button--fav'],
              )}
              onClick={handleToggle}
            >
              <Icon>
                {isInFavourites ? <HeartFilledIcon /> : <HeartIcon />}
              </Icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
