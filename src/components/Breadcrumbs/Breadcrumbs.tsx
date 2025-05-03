import React from 'react';
import { NavLink, useLocation, Link, useParams } from 'react-router-dom';
import { Icon } from '../../assets/icons/Icon/Icon';
import { HomeIcon } from '../../assets/icons/home-icon';
import { ArrowIcon } from '../../assets/icons/arrow-icon';
import styles from './Breadcrumbs.module.scss';
import { useAppSelector } from '../../hooks/hooks';
import { generateDeviceModel } from '../../helpers/generateDeviceModel';
import classNames from 'classnames';
import { SearchIcon } from '../../assets/icons/search-icon';

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
    <div aria-label="Breadcrumb" className={styles.breadcrumbs}>
      {loading ? (
        <div></div>
      ) : (
        <nav className={styles.navigation}>
          <ul className={styles.list}>
            {!isHomePage && (
              <li className={styles.item}>
                <NavLink to="/" className={styles.home}>
                  <Icon>
                    <HomeIcon />
                  </Icon>
                </NavLink>
              </li>
            )}

            {product ? (
              <>
                <li className={styles.item}>
                  <Icon direction="right" color="secondary">
                    <ArrowIcon />
                  </Icon>

                  <Link to={`/${category}`} className={styles.text}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Link>
                </li>
                <li className={styles.item}>
                  <Icon className={styles.arrow}>
                    <ArrowIcon />
                  </Icon>

                  <span className={classNames(styles.text, styles.currentText)}>
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
                    <li key={to} className={styles.item}>
                      <Icon className={styles.arrow}>
                        <ArrowIcon />
                      </Icon>
                      {isLast ? (
                        <span
                          className={classNames(
                            styles.text,
                            styles.currentText,
                          )}
                        >
                          {name.charAt(0).toUpperCase() + name.slice(1)}
                        </span>
                      ) : (
                        <Link to={to} className={styles.text}>
                          {name.charAt(0).toUpperCase() + name.slice(1)}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </>
            )}
          </ul>
          <div className={styles.search}>
            <Icon color="secondary">
              <SearchIcon />
            </Icon>
            <input
              type="text"
              placeholder="Search..."
              className={styles.input}
            />
          </div>
        </nav>
      )}
    </div>
  );
};
