import { useNavigate } from 'react-router-dom';
import { Icon } from '../../../assets/icons/Icon/Icon';
import { ArrowIcon } from '../../../assets/icons/arrow-icon';
import React from 'react';
import styles from './Back.module.scss';

export const Back = () => {
  const navigate = useNavigate();

  return (
    <button className={styles.back} onClick={() => navigate('..')}>
      <Icon>
        <ArrowIcon />
      </Icon>
      <span className={styles.text}>Back</span>
    </button>
  );
};
