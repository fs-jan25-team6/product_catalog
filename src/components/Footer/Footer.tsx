import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';
import { FOOTER_LINKS } from './constants';
import { ArrowIcon } from '../../assets/icons/arrow-icon';
import { Icon } from '../../assets/icons/Icon/Icon';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <NavLink to="/" className={styles.footer__logo}>
        <img
          src="./icons/logo-icon.svg"
          alt="logo"
          className={styles.footer__img}
        />
      </NavLink>

      <nav className={styles.footer__nav}>
        {FOOTER_LINKS.map(({ label, path }) => (
          <NavLink key={label} to={path} className={styles.footer__link}>
            {t(`navlink.${label}`)}
          </NavLink>
        ))}
      </nav>

      <button
        className={styles.footer__back}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className={styles.footer__text}>
          {t('buttons.actions.toTop')}
        </span>
        <div className={styles.footer__btn}>
          <Icon direction="up">
            <ArrowIcon />
          </Icon>
        </div>
      </button>
    </footer>
  );
};
