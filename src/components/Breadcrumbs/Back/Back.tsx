import { useNavigate } from 'react-router-dom';
import { Icon } from '../../../assets/icons/Icon/Icon';
import { ArrowIcon } from '../../../assets/icons/arrow-icon';
import React from 'react';
import styles from './Back.module.scss';
import { useTranslation } from 'react-i18next';

export const Back = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <button className={styles.back} onClick={() => navigate(-1)}>
      <Icon>
        <ArrowIcon />
      </Icon>
      <span className={styles.text}>{t('buttons.actions.back')}</span>
    </button>
  );
};
