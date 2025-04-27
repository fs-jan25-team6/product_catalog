import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer/Footer';

export const AppLayout: React.FC = () => {
  return (
    <div className="content">
      <Header />
      <main className="main">
        <section className="container">
          <Outlet />
        </section>
      </main>
      <Footer />
    </div>
  );
};
