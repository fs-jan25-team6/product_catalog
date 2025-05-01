import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer/Footer';
import { useAppDispatch } from '../../hooks/hooks';
import { init as initProducts } from '../../features/productsSlice';
import { init as initFavourites } from '../../features/favouritesSlice';
import { init as initCart } from '../../features/cartSlice';
import { init as initPhones } from '../../features/phonesSlice';
import { init as initTablets } from '../../features/tabletsSlice';
import { init as initAccessories } from '../../features/accessoriesSlices';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';

export const AppLayout: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initProducts());
    dispatch(initFavourites());
    dispatch(initCart());
    dispatch(initPhones());
    dispatch(initTablets());
    dispatch(initAccessories());
  }, [dispatch]);

  return (
    <div className="content">
      <Header />
      <Breadcrumbs />
      <main className="main">
        <section className="container">
          <Outlet />
        </section>
      </main>
      <Footer />
    </div>
  );
};
