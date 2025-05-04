import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SideMenu.module.scss';
import { NAV_LINKS } from '../../constants/navigation';
import { Icon } from '../../assets/icons/Icon/Icon';
import { HeartIcon } from '../../assets/icons/heart-icon';
import { ShoppingBagIcon } from '../../assets/icons/shopping-bag-icon';
import { CloseIcon } from '../../assets/icons/close-icon';
import { useAppSelector } from '../../hooks/hooks';
import { selectTotalItems } from '../../features/cartSlice';
import { Language } from '../../enums/Language';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setLanguage } from '../../features/i18nSlice';

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

const langMap = [Language.EN, Language.UA];

export const SideMenu: React.FC<Props> = ({ onClose, isOpen }: Props) => {
  const getMenuNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    classNames(styles.link, { [styles.activeLink]: isActive });

  const dispatch = useDispatch();

  const { favourites } = useAppSelector(state => state.favourites);
  const { cartItems } = useAppSelector(state => state.cart);
  const totalItems = useAppSelector(selectTotalItems);

  const { i18n } = useTranslation();

  const handleLanguageChange = (lang: Language) => {
    dispatch(setLanguage(lang));
  };

  return (
    <aside className={classNames(styles.menu, { [styles.menuOpen]: isOpen })}>
      <div className={styles.top}>
        <NavLink to="/" className={styles.logo} onClick={onClose}>
          <img
            className={styles.logoImage}
            src="./icons/logo-icon.svg"
            alt="logo"
          />
        </NavLink>
        <button
          className={styles.close}
          onClick={onClose}
          aria-label="Close menu"
        >
          <Icon>
            <CloseIcon />
          </Icon>
        </button>
      </div>

      <div className={styles.content}>
        <nav>
          <ul className={styles.list}>
            {NAV_LINKS.map(({ label, path }) => (
              <li key={label}>
                <NavLink
                  to={path}
                  className={getMenuNavLinkClass}
                  onClick={onClose}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
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
      </div>

      <div className={styles.bottom}>
        <NavLink to="/favourites" className={styles.icon} onClick={onClose}>
          <Icon>
            <HeartIcon />
            {favourites.length > 0 && (
              <div className={styles.counter}>{favourites.length}</div>
            )}
          </Icon>
        </NavLink>
        <NavLink to="/cart" className={styles.icon} onClick={onClose}>
          <Icon>
            <ShoppingBagIcon />
            {cartItems.length > 0 && (
              <div className={styles.counter}>{totalItems}</div>
            )}
          </Icon>
        </NavLink>
      </div>
    </aside>
  );
};
