import React from 'react';
// import { useParams } from 'react-router-dom';
import './styles/ProductPage.scss';
import { Link } from 'react-router-dom';

import img1 from './tempImg/img-1.png';
import img2 from './tempImg/img-2.png';
import img3 from './tempImg/img-3.png';
import img4 from './tempImg/img-4.png';
import img5 from './tempImg/img-5.png';

export const ProductPage: React.FC = () => {
  // const { productId } = useParams();
  return (
    <div className="product-page">
      <div className="product-page__content">
        <section className="navigation">
          <div className="navigation__breadcrumbs">
            <Link to="/" className="navigation__breadcrumbs__home">
              <img src="./icons/home-icon.svg" alt="home" />
            </Link>
            <span>
              <img
                src="./icons/arrow-right-icon.svg"
                alt="arrow-right"
                className="navigation__breadcrumbs__arrow-right"
              />
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
              Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
            </span>
          </div>

          <div className="navigation__back">
            <span>
              <img
                src="./icons/arrow-left-white-icon.svg"
                alt="arrow-right"
                className="navigation__back__arrow-left"
              />
            </span>
            <Link to="/phones" className="navigation__back__link">
              Back
            </Link>
          </div>
        </section>

        <h2 className="product__name">
          Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
        </h2>

        <section className="product__main-info">
          <div className="product__main-info__images">
            <div className="product__main-info__images__main-image">
              <img
                className="product__main-info__images__main-image--img"
                src={img1}
                alt="iphone-img"
              />
            </div>

            <div className="product__main-info__images__slider">
              <img
                className="product__main-info__images__slider--img"
                src={img1}
                alt="iphone-img"
              />
              <img
                className="product__main-info__images__slider--img"
                src={img2}
                alt="iphone-img"
              />
              <img
                className="product__main-info__images__slider--img"
                src={img3}
                alt="iphone-img"
              />
              <img
                className="product__main-info__images__slider--img"
                src={img4}
                alt="iphone-img"
              />
              <img
                className="product__main-info__images__slider--img"
                src={img5}
                alt="iphone-img"
              />
            </div>
          </div>

          <div className="product__main-info__features">
            <div className="product__main-info__features__head">
              <div className="product__main-info__features__colors">
                <span className="product__main-info__features__colors__label">
                  Available colors
                </span>
                <div className="product__main-info__features__colors__list">
                  <div className="product__main-info__features__colors__list__outline">
                    <div className="product__main-info__features__colors__list--red"></div>
                  </div>
                  <div className="product__main-info__features__colors__list__outline">
                    <div className="product__main-info__features__colors__list--green"></div>
                  </div>
                  <div className="product__main-info__features__colors__list__outline">
                    <div className="product__main-info__features__colors__list--white"></div>
                  </div>
                  <div className="product__main-info__features__colors__list__outline">
                    <div className="product__main-info__features__colors__list--purple"></div>
                  </div>
                </div>
              </div>
              <span className="product__main-info__features__id">
                ID: 802390
              </span>
            </div>

            <div className="product__main-info__features__breakline"></div>

            <div className="product__main-info__features__capacity">
              <span className="product__main-info__features__capacity__label">
                Select capacity
              </span>
              <div className="product__main-info__features__capacity__list">
                <a
                  href="#"
                  className="product__main-info__features__capacity__list__memory--active"
                >
                  64 GB
                </a>
                <a
                  href="#"
                  className="product__main-info__features__capacity__list__memory"
                >
                  256 GB
                </a>
                <a
                  href="#"
                  className="product__main-info__features__capacity__list__memory"
                >
                  512 GB
                </a>
              </div>
            </div>

            <div className="product__main-info__features__breakline"></div>

            <div className="product__main-info__features__prices">
              <span className="product__main-info__features__prices__discount">
                $799
              </span>
              <span className="product__main-info__features__prices__regular">
                $1199
              </span>
            </div>

            <div className="product__main-info__features__buttons">
              <button className="product__main-info__features__buttons__cart">
                Add to cart
              </button>
              <button className="product__main-info__features__buttons__favourites">
                <img
                  className="product__main-info__features__buttons__favourites__icon"
                  src="./icons/heart-icon.svg"
                  alt="fav"
                />
              </button>
            </div>

            <div className="product__main-info__features__descriptions">
              <div className="product__main-info__features__description">
                <span className="product__main-info__features__description__label">
                  Screen
                </span>
                <span className="product__main-info__features__description__value">
                  6.5” OLED
                </span>
              </div>
              <div className="product__main-info__features__description">
                <span className="product__main-info__features__description__label">
                  Resolution
                </span>
                <span className="product__main-info__features__description__value">
                  2688x1242
                </span>
              </div>
              <div className="product__main-info__features__description">
                <span className="product__main-info__features__description__label">
                  Processor
                </span>
                <span className="product__main-info__features__description__value">
                  Apple A12 Bionic
                </span>
              </div>
              <div className="product__main-info__features__description">
                <span className="product__main-info__features__description__label">
                  RAM
                </span>
                <span className="product__main-info__features__description__value">
                  3 GB
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
              <article className="product__detailes__about__article">
                <h4 className="product__detailes__about__article__title">
                  And then there was Pro
                </h4>
                <p className="product__detailes__about__article__description">
                  <p className="product__detailes__about__article__description__p1">
                    A transformative triple‑camera system that adds tons of
                    capability without complexity.
                  </p>
                  <p className="product__detailes__about__article__description__p2">
                    An unprecedented leap in battery life. And a mind‑blowing
                    chip that doubles down on machine learning and pushes the
                    boundaries of what a smartphone can do. Welcome to the first
                    iPhone powerful enough to be called Pro.
                  </p>
                </p>
              </article>

              <article className="product__detailes__about__article">
                <h4 className="product__detailes__about__article__title">
                  Camera
                </h4>
                <p className="product__detailes__about__article__description">
                  Meet the first triple‑camera system to combine cutting‑edge
                  technology with the legendary simplicity of iPhone. Capture up
                  to four times more scene. Get beautiful images in drastically
                  lower light. Shoot the highest‑quality video in a smartphone —
                  then edit with the same tools you love for photos. You’ve
                  never shot with anything like it.
                </p>
              </article>

              <article className="product__detailes__about__article">
                <h4 className="product__detailes__about__article__title">
                  Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak
                  it. Love it.
                </h4>
                <p className="product__detailes__about__article__description">
                  iPhone 11 Pro lets you capture videos that are beautifully
                  true to life, with greater detail and smoother motion. Epic
                  processing power means it can shoot 4K video with extended
                  dynamic range and cinematic video stabilization — all at 60
                  fps. You get more creative control, too, with four times more
                  scene and powerful new editing tools to play with.
                </p>
              </article>
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
                  6.5” OLED
                </span>
              </div>
              <div className="product__detailes__tech-specs__feature">
                <span className="product__detailes__tech-specs__feature__label">
                  Resolution
                </span>
                <span className="product__detailes__tech-specs__feature__value">
                  2688x1242
                </span>
              </div>
              <div className="product__detailes__tech-specs__feature">
                <span className="product__detailes__tech-specs__feature__label">
                  Processor
                </span>
                <span className="product__detailes__tech-specs__feature__value">
                  Apple A12 Bionic
                </span>
              </div>
              <div className="product__detailes__tech-specs__feature">
                <span className="product__detailes__tech-specs__feature__label">
                  RAM
                </span>
                <span className="product__detailes__tech-specs__feature__value">
                  3 GB
                </span>
              </div>
              <div className="product__detailes__tech-specs__feature">
                <span className="product__detailes__tech-specs__feature__label">
                  Built in memory
                </span>
                <span className="product__detailes__tech-specs__feature__value">
                  64 GB
                </span>
              </div>
              <div className="product__detailes__tech-specs__feature">
                <span className="product__detailes__tech-specs__feature__label">
                  Camera
                </span>
                <span className="product__detailes__tech-specs__feature__value">
                  12 Mp + 12 Mp + 12 Mp (Triple)
                </span>
              </div>
              <div className="product__detailes__tech-specs__feature">
                <span className="product__detailes__tech-specs__feature__label">
                  Zoom
                </span>
                <span className="product__detailes__tech-specs__feature__value">
                  Optical, 2x
                </span>
              </div>
              <div className="product__detailes__tech-specs__feature">
                <span className="product__detailes__tech-specs__feature__label">
                  Cell
                </span>
                <span className="product__detailes__tech-specs__feature__value">
                  GSM, LTE, UMTS
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
                <img
                  className="product__offers__head__button__arrow"
                  src="./icons/arrow-left-icon.svg"
                  alt="<"
                />
              </button>
              <button className="product__offers__head__button">
                <img
                  className="product__offers__head__button__arrow"
                  src="./icons/arrow-right-icon.svg"
                  alt=">"
                />
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
