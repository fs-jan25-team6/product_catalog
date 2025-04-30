import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { productsSlice } from '../features/productsSlice';
import { favouritesSlice } from '../features/favouritesSlice';
import { cartSlice } from '../features/cartSlice';
import { phonesSlice } from '../features/phonesSlice';
import { tabletsSlice } from '../features/tabletsSlice';
import { accessoriesSlice } from '../features/accessoriesSlices';

const rootReducer = combineSlices({
  products: productsSlice.reducer,
  favourites: favouritesSlice.reducer,
  cart: cartSlice.reducer,
  phones: phonesSlice.reducer,
  tablets: tabletsSlice.reducer,
  accessories: accessoriesSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
