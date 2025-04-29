import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/Product';
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from '../helpers/handleLocalStorage';
import { localStorageKey } from '../enums/localStorageKey';

type FavouritesState = {
  favourites: Product[];
  loading: boolean;
  errorMessage: string; // must be a new type ErrorType
};

const initialState: FavouritesState = {
  favourites: [],
  loading: false,
  errorMessage: '',
};

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    toggleFavourite: (state, action: PayloadAction<Product>) => {
      const inFavourites = state.favourites.some(
        fav => fav.itemId === action.payload.itemId,
      );

      if (inFavourites) {
        state.favourites = state.favourites.filter(
          fav => fav.itemId !== action.payload.itemId,
        );
      } else {
        state.favourites.push(action.payload);
      }

      saveToLocalStorage(localStorageKey.favourites, state.favourites);
    },
  },
  extraReducers: builder => {
    builder.addCase(init.pending, state => {
      state.loading = true;
    });

    builder.addCase(init.fulfilled, (state, action) => {
      state.favourites = action.payload;
      state.loading = false;
    });

    builder.addCase(init.rejected, state => {
      state.loading = true;
      state.errorMessage = 'Error';
    });
  },
});

export default favouritesSlice.reducer;
export const { toggleFavourite } = favouritesSlice.actions;

export const init = createAsyncThunk<Product[]>('favorites/init', async () => {
  return loadFromLocalStorage<Product[]>(localStorageKey.favourites);
});
