import React from 'react';
import styles from './NotFoundPage.module.scss';
import { Icon } from '../../../assets/icons/Icon/Icon';
import { ArrowIcon } from '../../../assets/icons/arrow-icon';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.NotFoundPage}>
      <button className={styles.navBack} onClick={() => navigate('..')}>
        <Icon>
          <ArrowIcon />
        </Icon>
        <span className={styles.back}>Back</span>
      </button>
      <div className={styles.content}>
        <div className={styles.notFoundImage}>
          <img
            className={styles.notFoundImage__img}
            src="/src/assets/images/page-not-found.png"
            alt=""
          />
        </div>
        <div className={styles.errorMessage}>
          <span className={styles.error404}>Error 404</span>
          <span className={styles.message}>Page not found</span>
        </div>
      </div>
    </div>
  );
};
