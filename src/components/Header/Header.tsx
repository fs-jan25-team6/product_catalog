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
import { LanguageSwitcher } from '../LanguageSwitch';
import { useTranslation } from 'react-i18next';

export const Header: React.FC = () => {
  const { t } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { favourites } = useAppSelector(state => state.favourites);
  const { cartItems } = useAppSelector(state => state.cart);
  const totalItems = useAppSelector(selectTotalItems);

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
                {t(`navlink.${label}`)}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.header__icons}>
        <LanguageSwitcher
          className={classNames(
            styles.header__icon,
            styles['header__icon--button'],
          )}
        />
        <NavLink
          to="/favourites"
          className={classNames(
            styles.header__icon,
            styles['header__icon--button'],
          )}
        >
          <Icon>
            <HeartIcon />
            {favourites.length > 0 && (
              <div className={styles.header__icon__counter}>
                {favourites.length}
              </div>
            )}
          </Icon>
        </NavLink>
        <NavLink
          to="/cart"
          className={classNames(
            styles.header__icon,
            styles['header__icon--button'],
          )}
        >
          <Icon>
            <ShoppingBagIcon />
            {cartItems.length > 0 && (
              <div className={styles.header__icon__counter}>{totalItems}</div>
            )}
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
          <Icon>
            <MenuIcon />
          </Icon>
        </button>
      </div>

      <SideMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </header>
  );
};
