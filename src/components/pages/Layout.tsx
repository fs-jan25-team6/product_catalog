import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer/Footer';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { init as initProducts } from '../../features/productsSlice';
import { init as initFavourites } from '../../features/favouritesSlice';
import { init as initCart } from '../../features/cartSlice';
import { init as initPhones } from '../../features/phonesSlice';
import { init as initTablets } from '../../features/tabletsSlice';
import { init as initAccessories } from '../../features/accessoriesSlices';
import { Theme } from '../../enums/Theme';

export const AppLayout: React.FC = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(state => state.theme);

  useEffect(() => {
    dispatch(initProducts());
    dispatch(initFavourites());
    dispatch(initCart());
    dispatch(initPhones());
    dispatch(initTablets());
    dispatch(initAccessories());
  }, [dispatch]);

  useEffect(() => {
    const html = document.documentElement;
    if (theme === Theme.Dark) {
      html.classList.remove('theme--light');
    } else {
      html.classList.add('theme--light');
    }
  }, [theme]);

  return (
    <div className="content">
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <section className="container">
          <Outlet />
        </section>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};
