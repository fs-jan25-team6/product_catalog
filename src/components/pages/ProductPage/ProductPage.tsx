import React, { useEffect, useState } from 'react';
import './styles/ProductPage.scss';
import classNames from 'classnames';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { generateDeviceModel } from '../../../helpers/generateDeviceModel';
import idToNumberHash from '../../../helpers/getHashed';
import { Product } from '../../../types/Product';

import { HomeIcon } from '../../../assets/icons/home-icon';
import { ArrowIcon } from '../../../assets/icons/arrow-icon';
import { HeartFilledIcon } from '../../../assets/icons/heart-filled-icon';
import { HeartIcon } from '../../../assets/icons/heart-icon';
import { Icon } from '../../../assets/icons/Icon/Icon';

import { toggleFavourite } from '../../../features/favouritesSlice';
import { add } from '../../../features/cartSlice';
import { Image } from '../../../assets/Image';
import { ProductDetails } from '../../../types/ProductDetails';

export const ProductPage: React.FC = () => {
  const { productId } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { products } = useAppSelector(state => state.products);
  const { favourites } = useAppSelector(state => state.favourites);
  const { cartItems } = useAppSelector(state => state.cart);

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

  return (
    <div className="product-page">
      {!selectedProduct ? (
        <div className="loading-state"></div>
      ) : (
        <div className="product-page__content">
          <section className="navigation">
            <div className="navigation__breadcrumbs">
              <Link to="/">
                <Icon>
                  <HomeIcon />
                </Icon>
              </Link>

              <Icon color="secondary" direction="right">
                <ArrowIcon />
              </Icon>
              <Link to="/phones" className="navigation__breadcrumbs__category">
                {selectedProduct.category}
              </Link>
              <Icon color="secondary" direction="right">
                <ArrowIcon />
              </Icon>
              <span className="navigation__breadcrumbs__product">
                {productDetails?.name} ({productModel})
              </span>
            </div>

            <Link to="/phones" className="navigation__back">
              <Icon>
                <ArrowIcon />
              </Icon>
              <span>Back</span>
            </Link>
          </section>

          <h2 className="product__name">
            {productDetails?.name} ({productModel})
          </h2>

          <section className="product__main-info">
            <div className="product__main-info__images">
              <div className="product__main-info__images__main-image">
                <Image
                  className="product__main-info__images__main-image__img"
                  key={selectedImage}
                  src={selectedImage}
                  alt="iphone-img"
                />
              </div>

              <div className="product__main-info__images__slider">
                {productDetails?.images.map(image => (
                  <div key={image} onClick={() => setSelectedImage(image)}>
                    <Image
                      className="product__main-info__images__slider__img"
                      src={image}
                      alt="iphone-img"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="product__main-info__features">
              <div className="product__main-info__features__head">
                <div className="product__main-info__features__colors">
                  <span className="product__main-info__features__colors__label">
                    Available colors
                  </span>
                  <div className="product__main-info__features__colors__list">
                    {productDetails?.colorsAvailable.map(color => (
                      <div
                        key={color}
                        className={`product__main-info__features__colors__list__outline ${
                          color === productDetails?.color ? '--active' : ''
                        }`}
                        onClick={() =>
                          switchVariant(color, productDetails.capacity)
                        }
                      >
                        <div
                          className={`product__main-info__features__colors__list__item --${color}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <span className="product__main-info__features__id">
                  ID: {idToNumberHash(productDetails?.id)}
                </span>
              </div>

              <div className="product__main-info__features__breakline"></div>

              <div className="product__main-info__features__capacity">
                <span className="product__main-info__features__capacity__label">
                  Select capacity
                </span>
                <div className="product__main-info__features__capacity__list">
                  {productDetails?.capacityAvailable.map(capacity => (
                    <div
                      key={capacity}
                      className={`product__main-info__features__capacity__list__memory ${
                        capacity === productDetails?.capacity ? '--active' : ''
                      }`}
                      onClick={() =>
                        switchVariant(productDetails.color, capacity)
                      }
                    >
                      {capacity}
                    </div>
                  ))}
                </div>
              </div>

              <div className="product__main-info__features__breakline"></div>

              <div className="product__main-info__features__prices">
                <span className="product__main-info__features__prices__discount">
                  ${productDetails?.priceDiscount}
                </span>
                <span className="product__main-info__features__prices__regular">
                  ${productDetails?.priceRegular}
                </span>
              </div>

              <div className="product__main-info__features__buttons">
                <button
                  className={classNames(
                    'product__main-info__features__buttons__cart',
                    { '--added': isInCart },
                  )}
                  onClick={addToCart}
                  disabled={isInCart}
                >
                  {isInCart ? 'Added' : 'Add to cart'}
                </button>
                <button
                  className={classNames(
                    'product__main-info__features__buttons__favourites',
                    { '--added': isInFavourites },
                  )}
                  onClick={handleToggle}
                >
                  <Icon>
                    {isInFavourites ? <HeartFilledIcon /> : <HeartIcon />}
                  </Icon>
                </button>
              </div>

              <div className="product__main-info__features__descriptions">
                <div className="product__main-info__features__description">
                  <span className="product__main-info__features__description__label">
                    Screen
                  </span>
                  <span className="product__main-info__features__description__value">
                    {productDetails?.screen}
                  </span>
                </div>
                <div className="product__main-info__features__description">
                  <span className="product__main-info__features__description__label">
                    Resolution
                  </span>
                  <span className="product__main-info__features__description__value">
                    {productDetails?.resolution}
                  </span>
                </div>
                <div className="product__main-info__features__description">
                  <span className="product__main-info__features__description__label">
                    Processor
                  </span>
                  <span className="product__main-info__features__description__value">
                    {productDetails?.processor}
                  </span>
                </div>
                <div className="product__main-info__features__description">
                  <span className="product__main-info__features__description__label">
                    RAM
                  </span>
                  <span className="product__main-info__features__description__value">
                    {productDetails?.ram}
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="product__detailes">
            <div className="product__detailes__about">
              <h3 className="product__detailes__about__title">About</h3>

              <div className="product__detailes__breakline"></div>

              <div className="product__detailes__about__content">
                {productDetails?.description.map(article => (
                  <article
                    key={article.title}
                    className="product__detailes__about__article"
                  >
                    <h4 className="product__detailes__about__article__title">
                      {article.title}
                    </h4>
                    {article.text.map(paragragh => (
                      <p
                        key={paragragh}
                        className="product__detailes__about__article__description"
                      >
                        {paragragh}
                      </p>
                    ))}
                  </article>
                ))}
              </div>
            </div>

            <div className="product__detailes__tech-specs">
              <h3 className="product__detailes__tech-specs__title">
                Tech specs
              </h3>

              <div className="product__detailes__breakline"></div>

              <div className="product__detailes__tech-specs__features">
                <div className="product__detailes__tech-specs__feature">
                  <span className="product__detailes__tech-specs__feature__label">
                    Screen
                  </span>
                  <span className="product__detailes__tech-specs__feature__value">
                    {productDetails?.screen}
                  </span>
                </div>
                <div className="product__detailes__tech-specs__feature">
                  <span className="product__detailes__tech-specs__feature__label">
                    Resolution
                  </span>
                  <span className="product__detailes__tech-specs__feature__value">
                    {productDetails?.resolution}
                  </span>
                </div>
                <div className="product__detailes__tech-specs__feature">
                  <span className="product__detailes__tech-specs__feature__label">
                    Processor
                  </span>
                  <span className="product__detailes__tech-specs__feature__value">
                    {productDetails?.processor}
                  </span>
                </div>
                <div className="product__detailes__tech-specs__feature">
                  <span className="product__detailes__tech-specs__feature__label">
                    RAM
                  </span>
                  <span className="product__detailes__tech-specs__feature__value">
                    {productDetails?.ram}
                  </span>
                </div>
                <div className="product__detailes__tech-specs__feature">
                  <span className="product__detailes__tech-specs__feature__label">
                    Built in memory
                  </span>
                  <span className="product__detailes__tech-specs__feature__value">
                    {productDetails?.capacity}
                  </span>
                </div>
                <div className="product__detailes__tech-specs__feature">
                  <span className="product__detailes__tech-specs__feature__label">
                    Camera
                  </span>
                  <span className="product__detailes__tech-specs__feature__value">
                    {productDetails?.camera} (Triple)
                  </span>
                </div>
                <div className="product__detailes__tech-specs__feature">
                  <span className="product__detailes__tech-specs__feature__label">
                    Zoom
                  </span>
                  <span className="product__detailes__tech-specs__feature__value">
                    {productDetails?.zoom}
                  </span>
                </div>
                <div className="product__detailes__tech-specs__feature">
                  <span className="product__detailes__tech-specs__feature__label">
                    Cell
                  </span>
                  <span className="product__detailes__tech-specs__feature__value">
                    {productDetails?.cell.join(', ')}
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="product__offers">
            <div className="product__offers__head">
              <h2 className="product__offers__head__title">
                You may also like
              </h2>
              <div className="product__offers__head__buttons">
                <button className="product__offers__head__button">
                  <Icon color="secondary">
                    <ArrowIcon />
                  </Icon>
                </button>
                <button className="product__offers__head__button --active">
                  <Icon direction="right">
                    <ArrowIcon />
                  </Icon>
                </button>
              </div>
            </div>

            <div className="product__offers__catalog">
              <div className="product__offers__catalog__card"></div>
              <div className="product__offers__catalog__card"></div>
              <div className="product__offers__catalog__card"></div>
              <div className="product__offers__catalog__card"></div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};
