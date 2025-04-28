import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from './constants';
import styles from './Header.module.scss';
import classNames from 'classnames';
import { MenuIcon } from '../../assets/icons/menu-icon';
import { ShoppingBag } from '../../assets/icons/shopping-bag-icon';
import { HeartIcon } from '../../assets/icons/heart-icon';

export const Header: React.FC = () => {
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    classNames(styles.header__link, {
      [styles['header__link--active']]: isActive,
    });

  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.header__logo}>
        <img
          src="./icons/logo-icon.svg"
          alt="logo"
          className={styles.header__img}
        />
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
          className={classNames(
            styles.header__icon,
            styles['header__icon--favourites'],
          )}
        >
          <HeartIcon />
        </NavLink>
        <NavLink
          to="/cart"
          className={classNames(
            styles.header__icon,
            styles['header__icon--cart'],
          )}
        >
          <ShoppingBag />
        </NavLink>
        <NavLink
          to="/burger_menu"
          className={classNames(
            styles.header__icon,
            styles['header__icon--burger'],
          )}
        >
          <MenuIcon />
        </NavLink>
      </div>
    </header>
  );
};
