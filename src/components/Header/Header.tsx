import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import classNames from 'classnames';
import { SideMenu } from '../SIdeMenu';
import { NAV_LINKS } from '../../constants/navigation';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

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
          <img src="./icons/heart-icon.svg" alt="Favourites" />
        </NavLink>
        <NavLink
          to="/cart"
          className={classNames(
            styles.header__icon,
            styles['header__icon--cart'],
          )}
        >
          <img src="./icons/shopping-bag-icon.svg" alt="Shopping bag" />
        </NavLink>
        <button
          className={classNames(
            styles.header__icon,
            styles['header__icon--burger'],
          )}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <img src="/icons/menu-icon.svg" alt="Menu" />
        </button>
      </div>

      <SideMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </header>
  );
};
