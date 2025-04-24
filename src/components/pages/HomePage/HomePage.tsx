import React from 'react';
import './HomePage.scss';
import ArrowLeftIcon from '../../public/icons/arrow-left-icon.svg?react';
import ArrowRightIcon from '../../public/icons/arrow-right-icon.svg?react';

export const HomePage: React.FC = () => {
  return (
    <>
      <h2 className='home-page__title'>Welcome to Nice Gadgets store!</h2>

      <div className='home-page__slider'>
        <img src='/img/baner-slider-mobile.png' alt='Phone advertisement'></img>
        <div className='slider'>
          <div className="slider__item"></div>
          <div className="slider__item"></div>
          <div className="slider__item"></div>
        </div>
      </div>

      <div>
        <h3 className='home-page__title'>Brand new models</h3>
        <div className='slider-btn'>
          <button className='slidert-btn__left'>
            <ArrowLeftIcon className='slidert-btn__left--svg' />
          </button>
          <button className='slidert-btn__right'>
            <ArrowRightIcon className='slidert-btn__right--svg' />
          </button>
        </div>
      </div>
      <div>Component with phones wich you can slide</div>

      <h3 className='home-page__title'>Shop by category</h3>
      <div className='categories'>
        <div>
          <img src='/img/category-phones-mobile.png' alt='Phones category'></img>
          <h4 className='categories__title'>Mobile phones</h4>
          <p className='categories__amount'>95 models</p>
        </div>

        <div>
          <img src='/img/category-tablets-mobile.png' alt='Phones category'></img>
          <h4 className='categories__title'>Tablets</h4>
          <p className='categories__amount'>24 models</p>
        </div>

        <div>
          <img src='/img/category-accessories-mobile.png' alt='Phones category'></img>
          <h4 className='categories__title'>Accessories</h4>
          <p className='categories__amount'>100 models</p>
        </div>
      </div>

      <div>
        <h3 className='home-page__title'>Hot prices</h3>
        <span>slider</span>
      </div>
      <div>Component with phones wich you can slide</div>

    </>
  );
};
