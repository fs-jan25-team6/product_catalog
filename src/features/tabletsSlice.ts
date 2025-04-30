import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchData } from '../helpers/fetchData';
import { ProductDetails } from '../types/ProductDetails';

type TabletsState = {
  productList: ProductDetails[];
  loading: boolean;
  error: string; // must be a new type ErrorType
};

const initialState: TabletsState = {
  productList: [],
  loading: false,
  error: '',
};

export const tabletsSlice = createSlice({
  name: 'tablets',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(init.pending, state => {
      state.loading = true;
    });

    builder.addCase(init.fulfilled, (state, action) => {
      state.productList = action.payload;
      state.loading = false;
    });

    builder.addCase(init.rejected, state => {
      state.loading = true;
      state.error = 'Error';
    });
  },
});

export default tabletsSlice.reducer;

export const init = createAsyncThunk('tablets/fetch', () => {
  return fetchData<ProductDetails[]>('/api/tablets.json');
});
