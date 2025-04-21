import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { store } from './app/store';
import { Router } from './components/Router';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
