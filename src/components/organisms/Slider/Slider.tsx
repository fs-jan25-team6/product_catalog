import React, { useState } from 'react';
import './Slider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ProductCard } from '../../ProductCard/ProductCard';
import { Product } from '../../../types/Product';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';
// @ts-ignore
import 'swiper/css/pagination';
import { Icon } from '../../../assets/icons/Icon/Icon';
import { ArrowIcon } from '../../../assets/icons/arrow-icon';

type Props = {
  title: string;
  productsList: Product[];
  id: number;
}

export const Slider: React.FC<Props> = ({
  title, productsList, id,
}
) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <>
      <div className="recomendation">
        <h3 className="recomendation__title">
          {title}
        </h3>
        <div className="slider-btn">
          <button className={`slider-btn__left slider-btn__left--${id}`} disabled={isBeginning}>
            <Icon>
              <ArrowIcon />
            </Icon>
          </button>
          <button className={`slider-btn__right slider-btn__right--${id}`} disabled={isEnd}>
            <Icon direction="right">
              <ArrowIcon />
            </Icon>
          </button>
        </div>
      </div>
      <div className="recomendation-content">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          spaceBetween={16}
          navigation={{
            nextEl: '.slider-btn__right--' + id,
            prevEl: '.slider-btn__left--' + id,
          }}
          breakpoints={{
            320: { slidesPerView: 1.5 },
            640: { slidesPerView: 2.5 },
            1200: { slidesPerView: 4 },
          }}
        >
          {productsList.map(product => (
            <SwiperSlide key={product.id} className='swiper-size'>
              <ProductCard product={product} isFavorite={false} isInCart={false} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};