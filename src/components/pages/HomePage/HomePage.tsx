import React from 'react';
import './HomePage.scss';
import { NavLink } from 'react-router-dom';
import { ResponsiveImage } from '../../atoms/ResponsiveImage/ResponsiveImage';
import { Icon } from '../../../assets/icons/Icon/Icon';
import { ArrowIcon } from '../../../assets/icons/arrow-icon';
import { Product } from '../../../types/Product';
import { Slider } from '../../organisms/Slider/Slider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';
// @ts-ignore
import 'swiper/css/pagination';


const newModels: Product[] = [
  {
    "id": 1,
    "category": "phones",
    "itemId": "apple-iphone-7-32gb-black",
    "name": "Apple iPhone 7 32GB Black",
    "fullPrice": 400,
    "price": 375,
    "screen": "4.7' IPS",
    "capacity": "32GB",
    "color": "black",
    "ram": "2GB",
    "year": 2016,
    "image": "img/phones/apple-iphone-7/black/00.webp"
  },
  {
    "id": 2,
    "category": "phones",
    "itemId": "apple-iphone-7-plus-32gb-black",
    "name": "Apple iPhone 7 Plus 32GB Black",
    "fullPrice": 540,
    "price": 500,
    "screen": "5.5' IPS",
    "capacity": "32GB",
    "color": "black",
    "ram": "3GB",
    "year": 2016,
    "image": "img/phones/apple-iphone-7-plus/black/00.webp"
  },
  {
    "id": 3,
    "category": "phones",
    "itemId": "apple-iphone-8-64gb-gold",
    "name": "Apple iPhone 8 64GB Gold",
    "fullPrice": 600,
    "price": 550,
    "screen": "4.7' IPS",
    "capacity": "64GB",
    "color": "gold",
    "ram": "2GB",
    "year": 2017,
    "image": "img/phones/apple-iphone-8/gold/00.webp"
  },
  {
    "id": 4,
    "category": "phones",
    "itemId": "apple-iphone-11-64gb-black",
    "name": "Apple iPhone 11 64GB Black",
    "fullPrice": 932,
    "price": 880,
    "screen": "6.1' IPS",
    "capacity": "64GB",
    "color": "black",
    "ram": "4GB",
    "year": 2019,
    "image": "img/phones/apple-iphone-11/black/00.webp"
  },
  {
    "id": 5,
    "category": "phones",
    "itemId": "apple-iphone-11-128gb-yellow",
    "name": "Apple iPhone 11 128GB Yellow",
    "fullPrice": 1100,
    "price": 1050,
    "screen": "6.1' IPS",
    "capacity": "128GB",
    "color": "yellow",
    "ram": "4GB",
    "year": 2019,
    "image": "img/phones/apple-iphone-11/yellow/00.webp"
  },
  {
    "id": 6,
    "category": "phones",
    "itemId": "apple-iphone-11-256gb-green",
    "name": "Apple iPhone 11 256GB Green",
    "fullPrice": 1172,
    "price": 1115,
    "screen": "6.1' IPS",
    "capacity": "256GB",
    "color": "green",
    "ram": "4GB",
    "year": 2019,
    "image": "img/phones/apple-iphone-11/green/00.webp"
  },
  {
    "id": 7,
    "category": "phones",
    "itemId": "apple-iphone-11-pro-64gb-gold",
    "name": "Apple iPhone 11 Pro 64GB Gold",
    "fullPrice": 1312,
    "price": 1270,
    "screen": "5.8' OLED",
    "capacity": "64GB",
    "color": "gold",
    "ram": "4GB",
    "year": 2019,
    "image": "img/phones/apple-iphone-11-pro/gold/00.webp"
  },
];

export const HomePage: React.FC = () => {
  return (
    <>
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
            className='home-page__slider-swiper'
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

      <Slider title={'Brand new models'} productsList={newModels} id={1} />

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

      <Slider title={'Hot prices'} productsList={newModels} id={2} />
    </>
  );
};
