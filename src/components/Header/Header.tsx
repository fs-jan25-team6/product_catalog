import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import '../../assets/icons/Icon/Icon.scss';
import classNames from 'classnames';
import { SideMenu } from '../SIdeMenu';
import { NAV_LINKS } from '../../constants/navigation';
import { MenuIcon } from '../../assets/icons/menu-icon';
import { ShoppingBagIcon } from '../../assets/icons/shopping-bag-icon';
import { HeartIcon } from '../../assets/icons/heart-icon';
import { Icon } from '../../assets/icons/Icon/Icon';

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
          <Icon className="icon">
            <HeartIcon />
          </Icon>
        </NavLink>
        <NavLink
          to="/cart"
          className={classNames(
            styles.header__icon,
            styles['header__icon--cart'],
          )}
        >
          <Icon className="icon">
            <ShoppingBagIcon />
          </Icon>
        </NavLink>
        <button
          className={classNames(
            styles.header__icon,
            styles['header__icon--burger'],
          )}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Icon className="icon">
            <MenuIcon />
          </Icon>
        </button>
      </div>

      <SideMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </header>
  );
};
