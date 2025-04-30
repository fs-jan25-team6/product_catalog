import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer/Footer';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';

export const AppLayout: React.FC = () => {
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
