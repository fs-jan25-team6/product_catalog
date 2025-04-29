import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Product } from '../types/Product';
import { fetchData } from '../helpers/fetchData';

type ProductsState = {
  products: Product[];
  loading: boolean;
  error: string; // must be a new type ErrorType
};

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: '',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(init.pending, state => {
      state.loading = true;
    });

    builder.addCase(init.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    });

    builder.addCase(init.rejected, state => {
      state.loading = true;
      state.error = 'Error';
    });
  },
});

export default productsSlice.reducer;

export const init = createAsyncThunk('products/fetch', () => {
  return fetchData<Product[]>('/api/products.json');
});
