import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideMenu.scss';
import { NAV_LINKS } from '../../constants/navigation';
import { Icon } from '../../assets/icons/Icon/Icon';
import { HeartIcon } from '../../assets/icons/heart-icon';
import { ShoppingBagIcon } from '../../assets/icons/shopping-bag-icon';
import { CloseIcon } from '../../assets/icons/close-icon';
import { useAppSelector } from '../../hooks/hooks';
import { selectTotalItems } from '../../features/cartSlice';

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

export const SideMenu: React.FC<Props> = ({ onClose, isOpen }: Props) => {
  const getMenuNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    classNames('menu__link', { 'menu__link--active': isActive });

  const { favourites } = useAppSelector(state => state.favourites);
  const { cartItems } = useAppSelector(state => state.cart);
  const totalItems = useAppSelector(selectTotalItems);

  return (
    <aside className={classNames('menu', { 'menu--open': isOpen })}>
      <div className="menu__top">
        <NavLink to="/" className="menu__logo" onClick={onClose}>
          <img
            className="menu__logo--img"
            src="./icons/logo-icon.svg"
            alt="logo"
          />
        </NavLink>
        <button
          className="menu__close"
          onClick={onClose}
          aria-label="Close menu"
        >
          <Icon>
            <CloseIcon />
          </Icon>
        </button>
      </div>

      <div className="menu__content">
        <nav className="menu__nav">
          <ul className="menu__list">
            {NAV_LINKS.map(({ label, path }) => (
              <li key={label} className="menu__item">
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
      </div>

      <div className="menu__bottom">
        <NavLink to="/favourites" className="menu__icon" onClick={onClose}>
          <Icon>
            <HeartIcon />
            {favourites.length > 0 && (
              <div className="menu__icon__counter">{favourites.length}</div>
            )}
          </Icon>
        </NavLink>
        <NavLink to="/cart" className="menu__icon" onClick={onClose}>
          <Icon>
            <ShoppingBagIcon />
            {cartItems.length > 0 && (
              <div className="menu__icon__counter">{totalItems}</div>
            )}
          </Icon>
        </NavLink>
      </div>
    </aside>
  );
};
