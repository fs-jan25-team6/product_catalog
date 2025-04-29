import React from 'react';
import { Product } from '../../types/Product';
import styles from './ProductCard.module.scss';
import classNames from 'classnames';
import { HeartFilledIcon } from '../../assets/icons/heart-filled-icon';
import { HeartIcon } from '../../assets/icons/heart-icon';
import { Icon } from '../../assets/icons/Icon/Icon';

type Props = {
  product: Product;
  isFavorite: boolean;
  isInCart: boolean;
};

export const ProductCard: React.FC<Props> = ({
  product,
  isFavorite,
  isInCart,
}) => {
  const isOnDiscount = product.price < product.fullPrice;

  return (
    <div className={styles.card}>
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
              <div className={styles.card__specs__label}>Screen</div>
              <div className={styles.card__specs__value}>{product.screen}</div>
            </div>
            <div className={styles.card__specs__field}>
              <div className={styles.card__specs__label}>Capacity</div>
              <div className={styles.card__specs__value}>
                {product.capacity}
              </div>
            </div>
            <div className={styles.card__specs__field}>
              <div className={styles.card__specs__label}>RAM</div>
              <div className={styles.card__specs__value}>{product.ram}</div>
            </div>
          </div>
          <div className={styles.card__controls}>
            <button
              className={classNames(styles['card__button'], {
                [styles['card__button--cart']]: !isInCart,
              })}
            >
              {isInCart ? 'Added' : 'Add to cart'}
            </button>
            <button
              className={classNames(
                styles['card__button'],
                styles['card__button--fav'],
              )}
            >
              <Icon>{isFavorite ? <HeartFilledIcon /> : <HeartIcon />}</Icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
