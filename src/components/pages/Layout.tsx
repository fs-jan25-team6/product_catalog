import React from 'react';
import { Outlet } from 'react-router-dom';
import { TemporaryNavbar } from '../temp/Navbar';

export const AppLayout: React.FC = () => {
  return (
    <div className="content">
      <header className="header">
        <TemporaryNavbar />
      </header>
      <main className="main">
        <h2>main content</h2>
        <section>
          <Outlet />
        </section>
      </main>
      <footer className="footer">
        <div>Footer content</div>
      </footer>
    </div>
  );
};
