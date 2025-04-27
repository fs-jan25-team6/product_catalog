import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
import './styles/ProductPage.scss';
import { Link } from 'react-router-dom';

import HomeIcon from '../../../../public/icons/home-icon.svg?react';
import ArrowRightIcon from '../../../../public/icons/arrow-right-icon.svg?react';
import ArrowRightWhiteIcon from '../../../../public/icons/arrow-right-white-icon.svg?react';
import ArrowLeftIcon from '../../../../public/icons/arrow-left-icon.svg?react';
import ArrowLeftWhiteIcon from '../../../../public/icons/arrow-left-white-icon.svg?react';
import HeartIcon from '../../../../public/icons/heart-icon.svg?react';
import FilledHeartIcon from '../../../../public/icons/heart-filled-icon.svg?react';

import idToNumberHash from '../../../helpers/getHashed';

const tempProduct = {
  id: 'apple-iphone-11-pro-max-64gb-gold',
  namespaceId: 'apple-iphone-11-pro-max',
  name: 'Apple iPhone 11 Pro Max 64GB Gold',
  capacityAvailable: ['64GB', '256GB', '512GB'],
  capacity: '64GB',
  priceRegular: 1480,
  priceDiscount: 1400,
  colorsAvailable: ['spacegray', 'midnightgreen', 'gold', 'silver'],
  color: 'gold',
  images: [
    'img/phones/apple-iphone-11-pro-max/gold/00.webp',
    'img/phones/apple-iphone-11-pro-max/gold/01.webp',
    'img/phones/apple-iphone-11-pro-max/gold/02.webp',
  ],
  description: [
    {
      title: 'And then there was Pro',
      text: [
        'A transformative triple-camera system that adds tons of capability without complexity.',
        'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
      ],
    },
    {
      title: 'Camera',
      text: [
        "Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You've never shot with anything like it.",
      ],
    },
    {
      title:
        'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
      text: [
        'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
      ],
    },
  ],
  screen: "6.5' OLED",
  resolution: '2688х1242',
  processor: 'Apple A13 Bionic',
  ram: '4GB',
  camera: '12 Mp + 12 Mp + 12MP',
  zoom: 'Digital, 10x / Optical, 2x',
  cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
};

export const ProductPage: React.FC = () => {
  // const { productId } = useParams();

  const [isFavourite, setIsFavourite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const toggleFavourite = () => setIsFavourite(!isFavourite);

  const toggleCart = () => setIsInCart(!isInCart);

  return (
    <div className="product-page">
      <div className="product-page__content">
        <section className="navigation">
          <div className="navigation__breadcrumbs">
            <Link to="/" className="navigation__breadcrumbs__home">
              <HomeIcon />
            </Link>
            <span>
              <ArrowRightIcon className="navigation__breadcrumbs__arrow-right" />
            </span>
            <Link to="/phones" className="navigation__breadcrumbs__category">
              Phones
            </Link>
            <span>
              <img
                src="./icons/arrow-right-icon.svg"
                alt="arrow-right"
                className="navigation__breadcrumbs__arrow-right"
              />
            </span>
            <span className="navigation__breadcrumbs__product">
              {tempProduct.name} (iMT9G2FS/A)
            </span>
          </div>

          <div className="navigation__back">
            <span>
              <ArrowLeftWhiteIcon className="navigation__back__arrow-left" />
            </span>
            <Link to="/phones" className="navigation__back__link">
              Back
            </Link>
          </div>
        </section>

        <h2 className="product__name">{tempProduct.name} (iMT9G2FS/A)</h2>

        <section className="product__main-info">
          <div className="product__main-info__images">
            <div className="product__main-info__images__main-image">
              <img
                className="product__main-info__images__main-image__img"
                src={tempProduct.images[0]}
                alt="iphone-img"
              />
            </div>

            <div className="product__main-info__images__slider">
              {tempProduct.images.map(image => (
                <img
                  className="product__main-info__images__slider__img"
                  src={image}
                  alt="iphone-img"
                />
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
                  {tempProduct.colorsAvailable.map(col => (
                    <div
                      key={col}
                      className={`product__main-info__features__colors__list__outline ${
                        col === tempProduct.color ? '--active' : ''
                      }`}
                    >
                      <div
                        className={`product__main-info__features__colors__list__item --${col}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <span className="product__main-info__features__id">
                ID: {idToNumberHash(tempProduct.id)}
              </span>
            </div>

            <div className="product__main-info__features__breakline"></div>

            <div className="product__main-info__features__capacity">
              <span className="product__main-info__features__capacity__label">
                Select capacity
              </span>
              <div className="product__main-info__features__capacity__list">
                {tempProduct.capacityAvailable.map(cap => (
                  <a
                    href="#"
                    className={
                      cap === tempProduct.capacity
                        ? 'product__main-info__features__capacity__list__memory--active'
                        : 'product__main-info__features__capacity__list__memory'
                    }
                  >
                    {cap}
                  </a>
                ))}
              </div>
            </div>

            <div className="product__main-info__features__breakline"></div>

            <div className="product__main-info__features__prices">
              <span className="product__main-info__features__prices__discount">
                ${tempProduct.priceDiscount}
              </span>
              <span className="product__main-info__features__prices__regular">
                ${tempProduct.priceRegular}
              </span>
            </div>

            <div className="product__main-info__features__buttons">
              <button
                className={
                  isInCart
                    ? 'product__main-info__features__buttons__cart--added'
                    : 'product__main-info__features__buttons__cart'
                }
                onClick={toggleCart}
              >
                {isInCart ? 'Added' : 'Add to cart'}
              </button>
              <button
                className={
                  isFavourite
                    ? 'product__main-info__features__buttons__favourites--added'
                    : 'product__main-info__features__buttons__favourites'
                }
                onClick={toggleFavourite}
              >
                {isFavourite ? <FilledHeartIcon /> : <HeartIcon />}
              </button>
            </div>

            <div className="product__main-info__features__descriptions">
              <div className="product__main-info__features__description">
                <span className="product__main-info__features__description__label">
                  Screen
                </span>
                <span className="product__main-info__features__description__value">
                  {tempProduct.screen}
                </span>
              </div>
              <div className="product__main-info__features__description">
                <span className="product__main-info__features__description__label">
                  Resolution
                </span>
                <span className="product__main-info__features__description__value">
                  {tempProduct.resolution}
                </span>
              </div>
              <div className="product__main-info__features__description">
                <span className="product__main-info__features__description__label">
                  Processor
                </span>
                <span className="product__main-info__features__description__value">
                  {tempProduct.processor}
                </span>
              </div>
              <div className="product__main-info__features__description">
                <span className="product__main-info__features__description__label">
                  RAM
                </span>
                <span className="product__main-info__features__description__value">
                  {tempProduct.ram}
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
              {tempProduct.description.map(article => (
                <article className="product__detailes__about__article">
                  <h4 className="product__detailes__about__article__title">
                    {article.title}
                  </h4>
                  {article.text.map(paragragh => (
                    <p className="product__detailes__about__article__description">
                      {paragragh}
                    </p>
                  ))}
                </article>
              ))}
            </div>
          </div>

          <div className="product__detailes__tech-specs">
            <h3 className="product__detailes__tech-specs__title">Tech specs</h3>

            <div className="product__detailes__breakline"></div>

            <div className="product__detailes__tech-specs__features">
              <div className="product__detailes__tech-specs__feature">
                <span className="product__detailes__tech-specs__feature__label">
                  Screen
                </span>
                <span className="product__detailes__tech-specs__feature__value">
                  {tempProduct.screen}
                </span>
              </div>
              <div className="product__detailes__tech-specs__feature">
                <span className="product__detailes__tech-specs__feature__label">
                  Resolution
                </span>
                <span className="product__detailes__tech-specs__feature__value">
                  {tempProduct.resolution}
                </span>
              </div>
              <div className="product__detailes__tech-specs__feature">
                <span className="product__detailes__tech-specs__feature__label">
                  Processor
                </span>
                <span className="product__detailes__tech-specs__feature__value">
                  {tempProduct.processor}
                </span>
              </div>
              <div className="product__detailes__tech-specs__feature">
                <span className="product__detailes__tech-specs__feature__label">
                  RAM
                </span>
                <span className="product__detailes__tech-specs__feature__value">
                  {tempProduct.ram}
                </span>
              </div>
              <div className="product__detailes__tech-specs__feature">
                <span className="product__detailes__tech-specs__feature__label">
                  Built in memory
                </span>
                <span className="product__detailes__tech-specs__feature__value">
                  {tempProduct.capacity}
                </span>
              </div>
              <div className="product__detailes__tech-specs__feature">
                <span className="product__detailes__tech-specs__feature__label">
                  Camera
                </span>
                <span className="product__detailes__tech-specs__feature__value">
                  {tempProduct.camera} (Triple)
                </span>
              </div>
              <div className="product__detailes__tech-specs__feature">
                <span className="product__detailes__tech-specs__feature__label">
                  Zoom
                </span>
                <span className="product__detailes__tech-specs__feature__value">
                  {tempProduct.zoom}
                </span>
              </div>
              <div className="product__detailes__tech-specs__feature">
                <span className="product__detailes__tech-specs__feature__label">
                  Cell
                </span>
                <span className="product__detailes__tech-specs__feature__value">
                  {tempProduct.cell.join(', ')}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="product__offers">
          <div className="product__offers__head">
            <h2 className="product__offers__head__title">You may also like</h2>
            <div className="product__offers__head__buttons">
              <button className="product__offers__head__button">
                <ArrowLeftIcon className="product__offers__head__button__arrow" />
              </button>
              <button className="product__offers__head__button --active">
                <ArrowRightWhiteIcon className="product__offers__head__button__arrow --active" />
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
    </div>
  );
};
