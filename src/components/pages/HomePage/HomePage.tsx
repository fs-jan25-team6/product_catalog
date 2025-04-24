import React from 'react';
import './HomePage.scss';
import ArrowLeftIcon from '../../../../public/icons/arrow-left-icon.svg?react';
import ArrowRightIcon from '../../../../public/icons/arrow-right-icon.svg?react';
import { NavLink } from 'react-router-dom';

export const HomePage: React.FC = () => {
  return (
    <>
      <h2 className='home-page__title--32px'>Welcome to Nice Gadgets store!</h2>

      <div className='home-page__slider'>
        <img className='home-page__baner' src='/img/baner-slider-mobile.png' alt='Phone advertisement'></img>
        <div className='slider'>
          <div className="slider__item"></div>
          <div className="slider__item"></div>
          <div className="slider__item"></div>
        </div>
      </div>

      <div className='home-page__recomendation'>
        <h3 className='home-page__title'>Brand new <br /> models</h3>
        <div className='slider-btn'>
          <button className='slider-btn__left'>
            <ArrowLeftIcon className='slider-btn__left--svg' />
          </button>
          <button className='slider-btn__right'>
            <ArrowRightIcon className='slider-btn__right--svg' />
          </button>
        </div>
      </div>
      <div className='home-page__recomendation-content'>
        Component with phones wich you can slide
      </div>

      <h3 className='home-page__title'>Shop by category</h3>
      <div className='categories'>
        <div className='categories__item'>
          <img className='categories__baner' src='/img/category-phones-mobile.png' alt='Phones category'></img>
          <NavLink to="/phones" className='categories__title'>Mobile phones</NavLink>
          <p className='categories__amount'>95 models</p>
        </div>

        <div className='categories__item'>
          <img className='categories__baner' src='/img/category-tablets-mobile.png' alt='Phones category'></img>
          <NavLink to="/tablets" className='categories__title'>Tablets</NavLink>
          <p className='categories__amount'>24 models</p>
        </div>

        <div className='categories__item'>
          <img className='categories__baner' src='/img/category-accessories-mobile.png' alt='Phones category'></img>
          <NavLink to="/accessories" className='categories__title'>Accessories</NavLink>
          <p className='categories__amount'>100 models</p>
        </div>
      </div>

      <div className='home-page__recomendation'>
        <h3 className='home-page__title'>Hot prices</h3>
        <div className='slider-btn'>
          <button className='slider-btn__left'>
            <ArrowLeftIcon className='slider-btn__left--svg' />
          </button>
          <button className='slider-btn__right'>
            <ArrowRightIcon className='slider-btn__right--svg' />
          </button>
        </div>
      </div>
      <div className='home-page__recomendation-content'>
        Component with phones wich you can slide
      </div>

    </>
  );
};
