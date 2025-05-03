import React from 'react';
import styles from './ErrorPage.module.scss';
import { init as initProducts } from '../../../features/productsSlice';
import { init as initFavourites } from '../../../features/favouritesSlice';
import { init as initCart } from '../../../features/cartSlice';
import { init as initPhones } from '../../../features/phonesSlice';
import { init as initTablets } from '../../../features/tabletsSlice';
import { init as initAccessories } from '../../../features/accessoriesSlices';
import { useAppDispatch } from '../../../hooks/hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const ErrorPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const dispatchData = async () => {
    dispatch(initProducts());
    dispatch(initFavourites());
    dispatch(initCart());
    dispatch(initPhones());
    dispatch(initTablets());
    dispatch(initAccessories());
    navigate(`${pathname}`);
  };

  return (
    <div className={styles.content}>
      <div className={styles.ErrorImage}>
        <img
          className={styles.ErrorImage__img}
          src="/src/assets/images/error.png"
          alt=""
        />
      </div>
      <div className={styles.errorMessage}>
        <span className={styles.error}>{t('error.unknown')}</span>
      </div>
      <button className={styles.button} onClick={dispatchData}>
        {t('error.retry')}
      </button>
    </div>
  );
};
