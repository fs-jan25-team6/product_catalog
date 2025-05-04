/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import styles from './HomePage.module.scss';
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
import { Loader } from '../../Loader/Loader';
import { useTranslation } from 'react-i18next';
import { Typography } from '../../atoms/Typography';
import { ErrorPage } from '../ErrorPage/ErrorPage';

export const HomePage: React.FC = () => {
  const { productList: phones } = useAppSelector(state => state.phones);
  const { productList: tablets } = useAppSelector(state => state.tablets);
  const { productList: accessories } = useAppSelector(
    state => state.accessories,
  );
  const { products, loading, error } = useAppSelector(state => state.products);
  const { t } = useTranslation();

  const hotPrices = loading ? [] : getHotPricedProducts(products, 10);
  const brandNew = loading ? [] : getNewestExpensiveProducts(products, 10);

  return (
    <div className={styles.page}>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorPage />
      ) : (
        <div className={styles.content}>
          <h2 className={styles['title--bigger']}>{t('home.title')}</h2>

          <div className={styles.home_content}>
            <div className={styles.home_content__item}>
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
                        desktopSrc="images/banner-slider-1-desktop.png"
                        tabletSrc="images/banner-slider-1-desktop.png"
                        mobileSrc="images/banner-slider-1-mobile.png"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <ResponsiveImage
                        alt="Phone advertisement"
                        desktopSrc="images/banner-slider-2-desktop.png"
                        tabletSrc="images/banner-slider-2-desktop.png"
                        mobileSrc="images/banner-slider-2-mobile.png"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <ResponsiveImage
                        alt="Phone advertisement"
                        desktopSrc="images/banner-slider-3-desktop.png"
                        tabletSrc="images/banner-slider-3-desktop.png"
                        mobileSrc="images/banner-slider-3-mobile.png"
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
            </div>
            <div className={styles.home_content__item}>
              <Slider
                title={t('slider.title.products.new')}
                productsList={brandNew}
                id={1}
              />
            </div>
            <div className={styles.home_content__item}>
              <Typography variant="h2" tag="h2" className={styles.title}>
                {t('home.categories')}
              </Typography>

              <div className={styles.categories}>
                <NavLink to="/phones" className={styles.category}>
                  <ResponsiveImage
                    alt="Phones category"
                    desktopSrc="images/category-phones-desktop.png"
                    tabletSrc="images/category-phones-desktop.png"
                    mobileSrc="images/category-phones-desktop.png"
                  />
                  <div className={styles.categoryTitle}>
                    {t('phones.title')}
                  </div>
                  <p className={styles.categoryAmount}>
                    {t('catalog.subtitle.items', { count: phones.length })}
                  </p>
                </NavLink>

                <NavLink to="/tablets" className={styles.category}>
                  <ResponsiveImage
                    alt="Tablets category"
                    desktopSrc="images/category-tablets-desktop.png"
                    tabletSrc="images/category-tablets-desktop.png"
                    mobileSrc="images/category-tablets-desktop.png"
                  />
                  <div className={styles.categoryTitle}>
                    {t('tablets.title')}
                  </div>
                  <p className={styles.categoryAmount}>
                    {t('catalog.subtitle.items', { count: tablets.length })}
                  </p>
                </NavLink>

                <NavLink className={styles.category} to="/accessories">
                  <ResponsiveImage
                    alt="Accessories category"
                    desktopSrc="images/category-accessories-desktop.png"
                    tabletSrc="images/category-accessories-desktop.png"
                    mobileSrc="images/category-accessories-desktop.png"
                  />
                  <div className={styles.categoryTitle}>
                    {t('accessories.title')}
                  </div>
                  <p className={styles.categoryAmount}>
                    {t('catalog.subtitle.items', { count: accessories.length })}
                  </p>
                </NavLink>
              </div>
            </div>
            <div className={styles.home_content__item}>
              <Slider
                title={t('slider.title.products.hot')}
                productsList={hotPrices}
                id={2}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
