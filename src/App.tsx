import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import { store } from './app/store';
import { Router } from './components/Router';
import { ProductCard } from './components/ProductCard/ProductCard';
import Image from './components/ProductCard/IPHONE_TEST.png';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router />
      <ProductCard
        image={Image}
        title="Apple iPhone Xs 64GB Silver (iMT9G2FS/A)"
        price={799}
        oldPrice={899}
        screen="5.8” OLED"
        capacity={64}
        ram={4}
      />
    </Provider>
  );
};

export default App;
