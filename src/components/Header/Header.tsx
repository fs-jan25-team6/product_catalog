import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from './constants';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? `${styles.header__link} ${styles['header__link--active']}`
      : styles.header__link;
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.header__logo}>
        <img src="/" alt="Nice👌 Gadgets" />
      </NavLink>

      <nav className={styles.header__nav}>
        <ul className={styles.header__list}>
          {NAV_LINKS.map(({ label, path }) => (
            <li key={label} className={styles.header__item}>
              <NavLink to={path} className={getNavLinkClass}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.header__icons}>
        <NavLink
          to="/favourites"
          className={`${styles.header__icon} ${styles['header__icon--favourites']}`}
        >
          ❤️
        </NavLink>
        <NavLink
          to="/cart"
          className={`${styles.header__icon} ${styles['header__icon--cart']}`}
        >
          🛒
        </NavLink>
        <NavLink
          to="/burger_menu"
          className={`${styles.header__icon} ${styles['header__icon--burger']}`}
        >
          🍔
        </NavLink>
      </div>
    </header>
  );
};
