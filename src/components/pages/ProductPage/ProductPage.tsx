import React, { useEffect, useState } from 'react';
import styles from './styles/ProductPage.module.scss';
import classNames from 'classnames';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { generateDeviceModel } from '../../../helpers/generateDeviceModel';
import idToNumberHash from '../../../helpers/getHashed';
import { Product } from '../../../types/Product';

import { HeartFilledIcon } from '../../../assets/icons/heart-filled-icon';
import { HeartIcon } from '../../../assets/icons/heart-icon';
import { Icon } from '../../../assets/icons/Icon/Icon';

import { toggleFavourite } from '../../../features/favouritesSlice';
import { add } from '../../../features/cartSlice';
import { Image } from '../../../assets/Image';
import { ProductDetails } from '../../../types/ProductDetails';
import { MainInfoSpecification } from './specifications/MainInfoSpecification';
import { DetailesSpecification } from './specifications/DetailesSpecification';

import { Slider } from '../../organisms/Slider/Slider';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import { Loader } from '../../Loader/Loader';

import { Back } from '../../Breadcrumbs/Back/Back';
import { Breadcrumbs } from '../../Breadcrumbs';
import { getVariantOptions } from '../../../helpers/getAvailabilityProducts';
import { useTranslation } from 'react-i18next';
import { Typography } from '../../atoms/Typography';

export const ProductPage: React.FC = () => {
  const { productId } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { products, error } = useAppSelector(state => state.products);
  const { favourites } = useAppSelector(state => state.favourites);
  const { cartItems } = useAppSelector(state => state.cart);
  const { t } = useTranslation();

  const selectedProduct = products.find(
    product => product.itemId === productId,
  ) as Product;

  const categoryState = useAppSelector(
    state => state[selectedProduct?.category],
  );

  const productDetails = categoryState?.productList?.find(
    product => product.id === productId,
  ) as ProductDetails;

  const productVariants = categoryState?.productList?.filter(
    product => product.namespaceId === productDetails?.namespaceId,
  );

  const switchVariant = (newColor: string, newCapacity: string) => {
    const newItemId =
      `${productDetails.namespaceId}-${newCapacity}-${newColor}`.toLowerCase();

    if (productVariants.find(product => product.id === newItemId)) {
      navigate(`/product/${newItemId}`);
    }
  };
  const productModel = generateDeviceModel(productId!);

  const [selectedImage, setSelectedImage] = useState(productDetails?.images[0]);

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(toggleFavourite(selectedProduct));
  };
  const addToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(add(selectedProduct));
  };

  const isInFavourites = favourites.some(
    fav => fav.itemId === selectedProduct?.itemId,
  );
  const isInCart = cartItems.some(
    cartItem => cartItem.itemId === selectedProduct?.itemId,
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  useEffect(() => {
    setSelectedImage(productDetails?.images[0]);
  }, [productDetails?.images]);

  const { colorOptions, capacityOptions } = getVariantOptions(
    productDetails || {},
    products || [],
  );

  return (
    <div className={styles.page}>
      {!selectedProduct ? (
        <Loader />
      ) : (
        <>
          <Breadcrumbs />
          <Back />
          <Typography tag="h2" variant="h2" className={styles.name}>
            {productDetails?.name} ({productModel})
          </Typography>

          <section className={styles.main_info}>
            <div className={styles.images}>
              <div className={styles.images__main}>
                <Image
                  className={styles.images__main__img}
                  key={selectedImage}
                  src={selectedImage}
                  alt="iphone-img"
                />
              </div>

              <div className={styles.images__slider}>
                {productDetails?.images.map(image => (
                  <div key={image} onClick={() => setSelectedImage(image)}>
                    <Image
                      className={styles.images__slider__img}
                      src={image}
                      alt="iphone-img"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.features}>
              <div className={styles.features__head}>
                <div className={styles.colors}>
                  <span className={styles.colors__label}>
                    {t('buttons.actions.product.colors')}
                  </span>
                  <div className={styles.colors__list}>
                    {colorOptions.map(({ color, available }) => (
                      <div
                        key={color}
                        className={classNames(styles.colors__outline, {
                          [styles.active]: color === productDetails?.color,
                          [styles['variant--unavailable']]: !available,
                        })}
                        onClick={() =>
                          switchVariant(color, productDetails.capacity)
                        }
                      >
                        <div
                          className={classNames(
                            styles.colors__item,
                            styles[color],
                          )}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <span className={styles.productId}>
                  ID: {idToNumberHash(productDetails?.id)}
                </span>
              </div>

              <div className={styles.features__breakline}></div>

              <div className={styles.capacity}>
                <span className={styles.capacity__label}>
                  {t('buttons.actions.product.capacity')}
                </span>
                <div className={styles.capacity__list}>
                  {capacityOptions.map(({ capacity, available }) => (
                    <div
                      key={capacity}
                      className={classNames(styles.capacity__memory, {
                        [styles.active]: capacity === productDetails?.capacity,
                        [styles['variant--unavailable']]: !available,
                      })}
                      onClick={() =>
                        switchVariant(productDetails.color, capacity)
                      }
                    >
                      {capacity}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.features__breakline}></div>

              <div className={styles.prices}>
                <span className={styles.prices__discount}>
                  ${productDetails?.priceDiscount}
                </span>
                <span className={styles.prices__regular}>
                  ${productDetails?.priceRegular}
                </span>
              </div>

              <div className={styles.buttons}>
                <button
                  className={classNames(styles.cart, {
                    [styles.added]: isInCart,
                  })}
                  onClick={addToCart}
                  disabled={isInCart}
                >
                  {t(`buttons.actions.${isInCart ? 'inCart' : 'toCart'}`)}
                </button>
                <button
                  className={classNames(styles.favourites, {
                    [styles.added]: isInFavourites,
                  })}
                  onClick={handleToggle}
                >
                  <Icon>
                    {isInFavourites ? <HeartFilledIcon /> : <HeartIcon />}
                  </Icon>
                </button>
              </div>

              <div className={styles.descriptions}>
                <MainInfoSpecification
                  label={t('product.specifications.screen')}
                  value={productDetails?.screen}
                />
                <MainInfoSpecification
                  label={t('product.specifications.resolution')}
                  value={productDetails?.resolution}
                />
                <MainInfoSpecification
                  label={t('product.specifications.processor')}
                  value={productDetails?.processor}
                />
                <MainInfoSpecification
                  label={t('product.specifications.ram')}
                  value={productDetails?.ram}
                />
              </div>
            </div>
          </section>

          <section className={styles.detailes}>
            <div className={styles.about}>
              <h3 className={styles.about__title}>
                {t('product.about.title')}
              </h3>

              <div className={styles.detailes__breakline}></div>

              <div className={styles.about__content}>
                {productDetails?.description.map(article => (
                  <article
                    key={article.title}
                    className={styles.about__article}
                  >
                    <h4 className={styles.about__article__title}>
                      {article.title}
                    </h4>
                    {article.text.map(paragragh => (
                      <p
                        key={paragragh}
                        className={styles.about__article__description}
                      >
                        {paragragh}
                      </p>
                    ))}
                  </article>
                ))}
              </div>
            </div>

            <div className={styles['tech-specs']}>
              <h3 className={styles['tech-specs__title']}>
                {t('product.specifications.label')}
              </h3>

              <div className={styles.detailes__breakline}></div>

              <div className={styles['tech-specs__features']}>
                <DetailesSpecification
                  label={t('product.specifications.screen')}
                  value={productDetails?.screen}
                />
                <DetailesSpecification
                  label={t('product.specifications.resolution')}
                  value={productDetails?.resolution}
                />
                <DetailesSpecification
                  label={t('product.specifications.processor')}
                  value={productDetails?.processor}
                />
                <DetailesSpecification
                  label={t('product.specifications.ram')}
                  value={productDetails?.ram}
                />
                <DetailesSpecification
                  label={t(
                    selectedProduct.category === 'accessories'
                      ? 'product.specifications.display'
                      : 'product.specifications.builtInMemory',
                  )}
                  value={productDetails?.capacity}
                />
                {productDetails?.camera && (
                  <DetailesSpecification
                    label={t('product.specifications.camera')}
                    value={productDetails?.camera}
                  />
                )}
                {productDetails?.zoom && (
                  <DetailesSpecification
                    label={t('product.specifications.zoom')}
                    value={productDetails?.zoom}
                  />
                )}
                <DetailesSpecification
                  label={t('product.specifications.cell')}
                  value={productDetails?.cell.join(', ')}
                />
              </div>
            </div>
          </section>

          <Slider
            title={t('slider.title.products.random')}
            productsList={products}
            id={3}
          />
        </>
      )}

      {error && <ErrorPage />}
    </div>
  );
};
