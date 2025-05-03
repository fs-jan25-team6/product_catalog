/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import './HomePage.scss';
import { NavLink } from 'react-router-dom';
import { ResponsiveImage } from '../../atoms/ResponsiveImage/ResponsiveImage';
import { Icon } from '../../../assets/icons/Icon/Icon';
import { ArrowIcon } from '../../../assets/icons/arrow-icon';
import { Slider } from '../../organisms/Slider/Slider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';
// @ts-ignore
import 'swiper/css/pagination';
import { useAppSelector } from '../../../hooks/hooks';
import { getHotPricedProducts } from '../../../helpers/getHotPricedProducts';
import { getNewestExpensiveProducts } from '../../../helpers/getNewestExpensiveProducts';

export const HomePage: React.FC = () => {
  const { productList: phones } = useAppSelector(state => state.phones);
  const { productList: tablets } = useAppSelector(state => state.tablets);
  const { productList: accessories } = useAppSelector(
    state => state.accessories,
  );
  const { products, loading } = useAppSelector(state => state.products);

  const hotPrices = loading ? [] : getHotPricedProducts(products, 10);
  const brandNew = loading ? [] : getNewestExpensiveProducts(products, 10);

  return (
    <div className="home-page">
      <h2 className="home-page__title--bigger">
        Welcome to Nice Gadgets store!
      </h2>

      <div className="home-page__slider">
        <button className="home-page__slider-button swiper-prev">
          <Icon>
            <ArrowIcon />
          </Icon>
        </button>

        <div className="home-page__slider-content">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-next',
              prevEl: '.swiper-prev',
            }}
            pagination={{
              el: '.custom-pagination',
              clickable: true,
              renderBullet: (_, className) => {
                return `<span class="${className} custom-bullet"></span>`;
              },
            }}
            rewind
            className="home-page__slider-swiper"
          >
            <SwiperSlide>
              <ResponsiveImage
                alt="Phone advertisement"
                desktopSrc="/img/baner-slider-desktop.png"
                tabletSrc="/img/baner-slider-tablet.png"
                mobileSrc="/img/baner-slider-mobile.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ResponsiveImage
                alt="Phone advertisement"
                desktopSrc="/img/baner-slider-desktop.png"
                tabletSrc="/img/baner-slider-tablet.png"
                mobileSrc="/img/baner-slider-mobile.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ResponsiveImage
                alt="Phone advertisement"
                desktopSrc="/img/baner-slider-desktop.png"
                tabletSrc="/img/baner-slider-tablet.png"
                mobileSrc="/img/baner-slider-mobile.png"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <button className="home-page__slider-button swiper-next">
          <Icon direction="right">
            <ArrowIcon />
          </Icon>
        </button>
      </div>
      <div className="custom-pagination"></div>

      <Slider title={'Brand new models'} productsList={brandNew} id={1} />

      <h3 className="home-page__title">Shop by category</h3>

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
          <p className="categories__amount">{phones.length} models</p>
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
          <p className="categories__amount">{tablets.length} models</p>
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
          <p className="categories__amount">{accessories.length} models</p>
        </div>
      </div>

      <Slider title={'Hot prices'} productsList={hotPrices} id={2} />
    </div>
  );
};
