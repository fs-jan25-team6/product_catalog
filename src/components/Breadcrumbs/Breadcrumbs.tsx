import React from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { Icon } from '../../assets/icons/Icon/Icon';
import { HomeIcon } from '../../assets/icons/home-icon';
import { ArrowIcon } from '../../assets/icons/arrow-icon';
import './Breadcrumbs.scss';

export const Breadcrumbs: React.FC = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split('/').filter(x => x);

  const isHomePage = pathname === '/';

  return (
    <div aria-label="Breadcrumb" className="breadcrumbs">
      <nav className="breadcrumbs__navigation">
        <ul className="breadcrumbs__list">
          {!isHomePage && (
            <li>
              <NavLink to="/" className="home">
                <Icon>
                  <HomeIcon />
                </Icon>
              </NavLink>
            </li>
          )}

          {pathnames.map((name, index) => {
            const isLast = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;

            return (
              <li key={to} className="breadcrumbs__item">
                <Icon className="breadcrumbs__arrow">
                  <ArrowIcon />
                </Icon>
                {isLast ? (
                  <span className="breadcrumbs__text breadcrumbs__text--current">
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </span>
                ) : (
                  <Link to={to} className="breadcrumbs__text">
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
