/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import styles from './HomePage.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';
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
import { Loader } from '../../Loader/Loader';

export const HomePage: React.FC = () => {
  const { productList: phones } = useAppSelector(state => state.phones);
  const { productList: tablets } = useAppSelector(state => state.tablets);
  const { productList: accessories } = useAppSelector(
    state => state.accessories,
  );
  const { products, loading } = useAppSelector(state => state.products);
  const navigate = useNavigate();

  const hotPrices = loading ? [] : getHotPricedProducts(products, 10);
  const brandNew = loading ? [] : getNewestExpensiveProducts(products, 10);

  return (
    <div className={styles.page}>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.content}>
          <h2 className={styles['title--bigger']}>
            Welcome to Nice Gadgets store!
          </h2>

          <div className={styles.slider}>
            <button className={`${styles.sliderButton} swiper-prev`}>
              <Icon>
                <ArrowIcon />
              </Icon>
            </button>

            <div className={styles.sliderContent}>
              <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                navigation={{
                  nextEl: '.swiper-next',
                  prevEl: '.swiper-prev',
                }}
                pagination={{
                  el: `.${styles.customPagination}`,
                  clickable: true,
                  renderBullet: (_, className) => {
                    return `<span class="${className} ${styles.customBullet}"></span>`;
                  },
                }}
                rewind
                className={styles.swiper}
              >
                <SwiperSlide>
                  <ResponsiveImage
                    alt="Phone advertisement"
                    desktopSrc="/src/assets/banners/banner-slider-1-desktop.png"
                    tabletSrc="/src/assets/banners/banner-slider-1-desktop.png"
                    mobileSrc="/src/assets/banners/banner-slider-1-mobile.png"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ResponsiveImage
                    alt="Phone advertisement"
                    desktopSrc="/src/assets/banners/banner-slider-2-desktop.png"
                    tabletSrc="/src/assets/banners/banner-slider-2-desktop.png"
                    mobileSrc="/src/assets/banners/banner-slider-2-mobile.png"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ResponsiveImage
                    alt="Phone advertisement"
                    desktopSrc="/src/assets/banners/banner-slider-3-desktop.png"
                    tabletSrc="/src/assets/banners/banner-slider-3-desktop.png"
                    mobileSrc="/src/assets/banners/banner-slider-3-mobile.png"
                  />
                </SwiperSlide>
              </Swiper>
            </div>

            <button className={`${styles.sliderButton} swiper-next`}>
              <Icon direction="right">
                <ArrowIcon />
              </Icon>
            </button>
          </div>
          <div className={styles.customPagination}></div>

          <Slider title={'Brand new models'} productsList={brandNew} id={1} />

          <h3 className={styles.title}>Shop by category</h3>

          <div className={styles.categories}>
            <div
              className={styles.category}
              onClick={() => navigate('/phones')}
            >
              <ResponsiveImage
                alt="Phones category"
                desktopSrc="/src/assets/categories/category-phones-desktop.png"
                tabletSrc="/src/assets/categories/category-phones-desktop.png"
                mobileSrc="/src/assets/categories/category-phones-desktop.png"
              />
              <NavLink to="/phones" className={styles.categoryTitle}>
                Mobile phones
              </NavLink>
              <p className={styles.categoryAmount}>{phones.length} models</p>
            </div>

            <div
              className={styles.category}
              onClick={() => navigate('/tablets')}
            >
              <ResponsiveImage
                alt="Tablets category"
                desktopSrc="/src/assets/categories/category-tablets-desktop.png"
                tabletSrc="/src/assets/categories/category-tablets-desktop.png"
                mobileSrc="/src/assets/categories/category-tablets-desktop.png"
              />
              <NavLink to="/tablets" className={styles.categoryTitle}>
                Tablets
              </NavLink>
              <p className={styles.categoryAmount}>{tablets.length} models</p>
            </div>

            <div
              className={styles.category}
              onClick={() => navigate('/accessories')}
            >
              <ResponsiveImage
                alt="Accessories category"
                desktopSrc="/src/assets/categories/category-accessories-desktop.png"
                tabletSrc="/src/assets/categories/category-accessories-desktop.png"
                mobileSrc="/src/assets/categories/category-accessories-desktop.png"
              />
              <NavLink to="/accessories" className={styles.categoryTitle}>
                Accessories
              </NavLink>
              <p className={styles.categoryAmount}>
                {accessories.length} models
              </p>
            </div>
          </div>

          <Slider title={'Hot prices'} productsList={hotPrices} id={2} />
        </div>
      )}
    </div>
  );
};
