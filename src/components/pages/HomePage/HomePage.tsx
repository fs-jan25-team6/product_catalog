import React from 'react';
import './HomePage.scss';
import { NavLink } from 'react-router-dom';
import { ResponsiveImage } from '../../atoms/ResponsiveImage/ResponsiveImage';
import { Icon } from '../../../assets/icons/Icon/Icon';
import { ArrowIcon } from '../../../assets/icons/arrow-icon';

export const HomePage: React.FC = () => {
  return (
    <>
      <h2 className="home-page__title--bigger">
        Welcome to Nice Gadgets store!
      </h2>

      <div className="home-page__slider">
        <button className="slider-btn__left slider-btn__left--big">
          <Icon>
            <ArrowIcon />
          </Icon>
        </button>

        <div className="home-page__slider-content">
          <ResponsiveImage
            alt="Phone advertisement"
            desktopSrc="/img/baner-slider-desktop.png"
            tabletSrc="/img/baner-slider-tablet.png"
            mobileSrc="/img/baner-slider-mobile.png"
          />
          <div className="slider">
            <div className="slider__item"></div>
            <div className="slider__item"></div>
            <div className="slider__item"></div>
          </div>
        </div>

        <button className="slider-btn__right slider-btn__right--big">
          <Icon direction="right">
            <ArrowIcon />
          </Icon>
        </button>
      </div>

      <div className="home-page__recomendation">
        <h3 className="home-page__title home-page__title--recomendation home-page__title--recomendation--hide-br">
          Brand new <br /> models
        </h3>
        <div className="slider-btn">
          <button className="slider-btn__left">
            <Icon className="slider-btn__left--svg">
              <ArrowIcon />
            </Icon>
          </button>
          <button className="slider-btn__right">
            <Icon className="slider-btn__right--svg" direction="right">
              <ArrowIcon />
            </Icon>
          </button>
        </div>
      </div>
      <div className="home-page__recomendation-content">
        Component with phones wich you can slide
      </div>

      <h3 className="home-page__title">Shop by category</h3>
      <div className="categories-container">
        <div className="categories">
          <div className="categories__item">
            <ResponsiveImage
              alt="Phones category"
              desktopSrc="/img/category-phones-desktop.png"
              tabletSrc="/img/category-phones-tablet.png"
              mobileSrc="/img/category-phones-mobile.png"
            />
            <NavLink to="/phones" className="categories__title">
              Mobile phones
            </NavLink>
            <p className="categories__amount">95 models</p>
          </div>

          <div className="categories__item">
            <ResponsiveImage
              alt="Tablets category"
              desktopSrc="/img/category-tablets-desktop.png"
              tabletSrc="/img/category-tablets-tablet.png"
              mobileSrc="/img/category-tablets-mobile.png"
            />
            <NavLink to="/tablets" className="categories__title">
              Tablets
            </NavLink>
            <p className="categories__amount">24 models</p>
          </div>

          <div className="categories__item">
            <ResponsiveImage
              alt="Accessories category"
              desktopSrc="/img/category-accessories-desktop.png"
              tabletSrc="/img/category-accessories-tablet.png"
              mobileSrc="/img/category-accessories-mobile.png"
            />
            <NavLink to="/accessories" className="categories__title">
              Accessories
            </NavLink>
            <p className="categories__amount">100 models</p>
          </div>
        </div>
      </div>

      <div className="home-page__recomendation">
        <h3 className="home-page__title home-page__title--recomendation">
          Hot prices
        </h3>
        <div className="slider-btn">
          <button className="slider-btn__left">
            <Icon>
              <ArrowIcon />
            </Icon>
          </button>
          <button className="slider-btn__right">
            <Icon direction="right">
              <ArrowIcon />
            </Icon>
          </button>
        </div>
      </div>
      <div className="home-page__recomendation-content">
        Component with phones wich you can slide
      </div>
    </>
  );
};
