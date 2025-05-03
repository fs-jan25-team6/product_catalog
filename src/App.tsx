import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import { store } from './app/store';
import { Router } from './components/Router';
import './i18n/i18n';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
