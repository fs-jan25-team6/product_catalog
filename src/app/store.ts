import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { productsSlice } from '../features/productsSlice';
import { favouritesSlice } from '../features/favouritesSlice';
import { cartSlice } from '../features/cartSlice';

const rootReducer = combineSlices({
  products: productsSlice.reducer,
  favourites: favouritesSlice.reducer,
  cart: cartSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
