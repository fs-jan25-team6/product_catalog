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
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Language } from '../../enums/Language';
import { setLanguage } from '../../features/i18nSlice';
import { HeaderLogo } from '../../assets/icons/header-logo-icon';
import { Theme } from '../../enums/Theme';
import { SunIcon } from '../../assets/icons/sun-icon';
import { setTheme } from '../../features/themeSlice';

const langMap = [Language.EN, Language.UA];

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { favourites } = useAppSelector(state => state.favourites);
  const { cartItems } = useAppSelector(state => state.cart);
  const { theme } = useAppSelector(state => state.theme);
  const totalItems = useAppSelector(selectTotalItems);
  const dispatch = useDispatch();

  const handleLanguageChange = (lang: Language) => {
    dispatch(setLanguage(lang));
  };

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    classNames(styles.link, {
      [styles['link--active']]: isActive,
    });

  const getIconsClass = ({ isActive }: { isActive: boolean }) =>
    classNames(styles.icon, styles.iconLink, {
      [styles['icon--active']]: isActive,
    });

  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        <HeaderLogo className={styles.logoImage} />
      </NavLink>

      <nav className={styles.nav}>
        <ul className={styles.list}>
          {NAV_LINKS.map(({ label, path }) => (
            <li key={label} className={styles.item}>
              <NavLink to={path} className={getNavLinkClass}>
                {t(`navlink.${label}`)}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.icons}>
        <div className={styles.langSwitcher}>
          {langMap.map((lang, index, arr) => (
            <React.Fragment key={lang}>
              <button
                onClick={() => handleLanguageChange(lang)}
                className={classNames(styles.langOption, {
                  [styles['langOption--active']]: i18n.language === lang,
                })}
              >
                {lang}
              </button>
              {index < arr.length - 1 && <span> / </span>}
            </React.Fragment>
          ))}
        </div>
        <button
          className={classNames(styles.icon, styles.iconTheme)}
          onClick={() => {
            dispatch(setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark));
          }}
        >
          <Icon>{theme === Theme.Dark ? <MoonIcon /> : <SunIcon />}</Icon>
        </button>

        <NavLink to="/favourites" className={getIconsClass}>
          <Icon>
            <HeartIcon />
            {favourites.length > 0 && (
              <div className={styles.counter}>{favourites.length}</div>
            )}
          </Icon>
        </NavLink>
        <NavLink to="/cart" className={getIconsClass}>
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
