import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import classNames from 'classnames';
import { SideMenu } from '../SIdeMenu';
import { NAV_LINKS } from '../../constants/navigation';
import { MenuIcon } from '../../assets/icons/menu-icon';
import { ShoppingBagIcon } from '../../assets/icons/shopping-bag-icon';
import { HeartIcon } from '../../assets/icons/heart-icon';
import { Icon } from '../../assets/icons/Icon/Icon';
import { useAppSelector } from '../../hooks/hooks';
import { selectTotalItems } from '../../features/cartSlice';
import { MoonIcon } from '../../assets/icons/moon-icon';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { favourites } = useAppSelector(state => state.favourites);
  const { cartItems } = useAppSelector(state => state.cart);
  const totalItems = useAppSelector(selectTotalItems);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    classNames(styles.link, {
      [styles['link--active']]: isActive,
    });

  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        <img
          src="./icons/logo-icon.svg"
          alt="logo"
          className={styles.logoImage}
        />
      </NavLink>

      <nav className={styles.nav}>
        <ul className={styles.list}>
          {NAV_LINKS.map(({ label, path }) => (
            <li key={label} className={styles.item}>
              <NavLink to={path} className={getNavLinkClass}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.icons}>
        <div className={styles.langSwitcher}>
          <button
            className={classNames(
              styles.langOption,
              styles['langOption--active'],
            )}
          >
            en
          </button>
          <span> / </span>
          <button className={styles.langOption}>ua</button>
        </div>
        <button className={classNames(styles.icon, styles.iconTheme)}>
          <Icon>
            <MoonIcon />
          </Icon>
        </button>

        <NavLink
          to="/favourites"
          className={classNames(styles.icon, styles.iconFavourites)}
        >
          <Icon>
            <HeartIcon />
            {favourites.length > 0 && (
              <div className={styles.counter}>{favourites.length}</div>
            )}
          </Icon>
        </NavLink>
        <NavLink
          to="/cart"
          className={classNames(styles.icon, styles.iconCart)}
        >
          <Icon>
            <ShoppingBagIcon />
            {cartItems.length > 0 && (
              <div className={styles.counter}>{totalItems}</div>
            )}
          </Icon>
        </NavLink>
        <button
          className={classNames(styles.icon, styles.iconBurger)}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Icon>
            <MenuIcon />
          </Icon>
        </button>
      </div>

      <SideMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </header>
  );
};
