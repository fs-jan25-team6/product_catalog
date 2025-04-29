import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideMenu.scss';
import { NAV_LINKS } from '../../constants/navigation';

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

export const SideMenu: React.FC<Props> = ({ onClose, isOpen }: Props) => {
  const getMenuNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    classNames('menu__link', { 'menu__link--active': isActive });

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
          <img
            className="menu__close--img"
            src="./icons/menu-close-icon.svg"
            alt="Close"
          />
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
          <img
            className="menu__img--left"
            src="./icons/heart-icon.svg"
            alt="Favourites"
          />
        </NavLink>
        <NavLink to="/cart" className="menu__icon" onClick={onClose}>
          <img
            className="menu__img--right"
            src="./icons/shopping-bag-icon.svg"
            alt="Shopping bag"
          />
        </NavLink>
      </div>
    </aside>
  );
};
