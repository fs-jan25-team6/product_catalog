import React from 'react';
import { NavLink, useLocation, Link, useParams } from 'react-router-dom';
import { Icon } from '../../assets/icons/Icon/Icon';
import { HomeIcon } from '../../assets/icons/home-icon';
import { ArrowIcon } from '../../assets/icons/arrow-icon';
import './Breadcrumbs.scss';
import { useAppSelector } from '../../hooks/hooks';
import { generateDeviceModel } from '../../helpers/generateDeviceModel';
import { t } from 'i18next';

export const Breadcrumbs: React.FC = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split('/').filter(x => x);

  const isHomePage = pathname === '/';

  const { productId } = useParams();

  const { products, loading } = useAppSelector(state => state.products);
  const product = products?.find(product => product?.itemId === productId);
  const category = product?.category || '';

  const productModel = generateDeviceModel(productId || '');

  if (['/cart', '/', '/home'].includes(pathname)) {
    return null;
  }

  return (
    <div aria-label="Breadcrumb" className="breadcrumbs">
      {loading ? (
        <div></div>
      ) : (
        <nav className="breadcrumbs__navigation">
          <ul className="breadcrumbs__list">
            {!isHomePage && (
              <li className="breadcrumbs__item">
                <NavLink to="/" className="home">
                  <Icon>
                    <HomeIcon />
                  </Icon>
                </NavLink>
              </li>
            )}

            {product ? (
              <>
                <li className="breadcrumbs__item">
                  <Icon direction="right" color="secondary">
                    <ArrowIcon />
                  </Icon>

                  <Link to={`/${category}`} className="breadcrumbs__text">
                    {t(`${category}.title`)}
                  </Link>
                </li>
                <li className="breadcrumbs__item">
                  <Icon className="breadcrumbs__arrow">
                    <ArrowIcon />
                  </Icon>

                  <span className="breadcrumbs__text breadcrumbs__text--current">
                    {product?.name} ({productModel})
                  </span>
                </li>
              </>
            ) : (
              <>
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
                          {t(`${name}.title`)}
                        </span>
                      ) : (
                        <Link to={to} className="breadcrumbs__text">
                          {t(`${name}.title`)}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </>
            )}
          </ul>
        </nav>
      )}
    </div>
  );
};
