import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';
import { FOOTER_LINKS } from './constants';

export const Footer: React.FC = () => {
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
            {label}
          </NavLink>
        ))}
      </nav>

      <button className={styles.footer__back}>
        <span className={styles.footer__text}>Back to top</span>

        <img
          src="./icons/arrow-up-icon.svg"
          alt="Slider button"
          className={styles.footer__icon}
        />
      </button>
    </footer>
  );
};
